import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import softwareData from '@/data/software.json'

export const useProjectStore = defineStore('project', () => {
  const projects = ref(softwareData)
  const upvotes = ref({})
  const userVotes = ref(new Set())

  // Load upvotes from localStorage
  const loadUpvotes = () => {
    const stored = localStorage.getItem('upvotes')
    if (stored) {
      upvotes.value = JSON.parse(stored)
    }
    const storedVotes = localStorage.getItem('userVotes')
    if (storedVotes) {
      userVotes.value = new Set(JSON.parse(storedVotes))
    }
  }

  // Save upvotes to localStorage
  const saveUpvotes = () => {
    localStorage.setItem('upvotes', JSON.stringify(upvotes.value))
    localStorage.setItem('userVotes', JSON.stringify([...userVotes.value]))
  }

  // Upvote a project
  const upvoteProject = (projectName) => {
    if (!userVotes.value.has(projectName)) {
      upvotes.value[projectName] = (upvotes.value[projectName] || 0) + 1
      userVotes.value.add(projectName)
      saveUpvotes()
      return true
    }
    return false
  }

  // Get upvote count for a project
  const getUpvotes = (projectName) => {
    return upvotes.value[projectName] || 0
  }

  // Check if user has voted for a project
  const hasVoted = (projectName) => {
    return userVotes.value.has(projectName)
  }

  // Get ranked projects by upvotes
  const rankedByUpvotes = computed(() => {
    return projects.value
      .map(p => ({
        ...p,
        upvoteCount: getUpvotes(p.name)
      }))
      .sort((a, b) => b.upvoteCount - a.upvoteCount)
  })

  // Get all unique values for filters
  const uniqueDomains = computed(() => [...new Set(projects.value.map(p => p.domain))].sort())
  const uniqueTypes = computed(() => [...new Set(projects.value.map(p => p.type))].sort())
  const uniquePlatforms = computed(() => [...new Set(projects.value.map(p => p.platform))].sort())
  const uniqueUnits = computed(() => {
    const units = new Set()
    projects.value.forEach(p => {
      if (Array.isArray(p.unit)) {
        p.unit.forEach(u => units.add(u))
      } else if (p.unit) {
        units.add(p.unit)
      }
    })
    return [...units].sort()
  })
  const uniqueStatuses = computed(() => [...new Set(projects.value.map(p => p.status))].sort())
  const uniqueLanguages = computed(() => [...new Set(projects.value.map(p => p.language).filter(Boolean))].sort())
  const uniqueLicenses = computed(() => [...new Set(projects.value.map(p => p.license).filter(Boolean))].sort())
  const allTags = computed(() => {
    const tags = new Set()
    projects.value.forEach(p => {
      if (Array.isArray(p.tags)) {
        p.tags.forEach(t => tags.add(t))
      }
    })
    return [...tags].sort()
  })

  // Initialize
  loadUpvotes()

  return {
    projects,
    upvoteProject,
    getUpvotes,
    hasVoted,
    rankedByUpvotes,
    uniqueDomains,
    uniqueTypes,
    uniquePlatforms,
    uniqueUnits,
    uniqueStatuses,
    uniqueLanguages,
    uniqueLicenses,
    allTags
  }
})
