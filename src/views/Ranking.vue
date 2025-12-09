<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-um6p-orange to-um6p-light-orange text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Project Rankings</h1>
        <p class="text-xl text-orange-100 max-w-3xl">
          Discover the most loved and impactful open-source projects at UM6P, ranked by community support and activity.
        </p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Community Top Picks -->
      <section class="mb-16">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-2">Community Top Picks</h2>
            <p class="text-gray-600">
              These rankings are based on community upvotes. Use the 👍 button to support tools you find useful.
            </p>
          </div>
        </div>

        <!-- Community Rankings -->
        <div class="space-y-4">
          <div
            v-for="(project, index) in communityRanked"
            :key="project.name"
            class="card p-6 flex items-center space-x-6 fade-in"
            :style="{ animationDelay: `${index * 0.05}s` }"
          >
            <!-- Rank -->
            <div class="flex-shrink-0 w-16 text-center">
              <div
                class="text-3xl font-bold"
                :class="rankColor(index)"
              >
                {{ index + 1 }}
              </div>
            </div>

            <!-- Platform Icon -->
            <div class="flex-shrink-0">
              <PlatformIcon :platform="project.platform" />
            </div>

            <!-- Project Info -->
            <div class="flex-grow min-w-0">
              <div class="flex items-center space-x-3 mb-2">
                <a
                  :href="project.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-xl font-bold text-gray-900 hover:text-primary-600 transition-colors duration-200 flex items-center space-x-2 group"
                >
                  <span>{{ project.name }}</span>
                  <svg class="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              <p class="text-gray-600 text-sm mb-3 line-clamp-2">
                {{ project.description }}
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="badge bg-purple-100 text-purple-700">{{ project.domain }}</span>
                <span class="badge bg-blue-100 text-blue-700">{{ formatUnit(project.unit) }}</span>
              </div>
            </div>

            <!-- Upvote Section -->
            <div class="flex-shrink-0 flex flex-col items-center space-y-2">
              <button
                @click="handleUpvote(project.name)"
                :disabled="projectStore.hasVoted(project.name)"
                class="group relative"
                :class="projectStore.hasVoted(project.name) 
                  ? 'cursor-not-allowed' 
                  : 'hover:scale-110 transition-transform duration-200'"
              >
                <div
                  class="w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all duration-200"
                  :class="projectStore.hasVoted(project.name)
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-600 group-hover:bg-primary-100 group-hover:text-primary-600'"
                >
                  👍
                </div>
              </button>
              <div class="text-center">
                <div class="text-2xl font-bold text-gray-900">
                  {{ project.upvoteCount }}
                </div>
                <div class="text-xs text-gray-500">votes</div>
              </div>
            </div>
          </div>

          <!-- Empty State -->
          <div v-if="communityRanked.length === 0" class="text-center py-12">
            <p class="text-gray-600 mb-4">No projects have been voted on yet. Be the first to support a project!</p>
            <router-link to="/catalog" class="btn-primary">Browse Projects</router-link>
          </div>
        </div>

        <div class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div class="flex items-start space-x-3">
            <svg class="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p class="text-sm text-blue-800">
              <strong>How it works:</strong> Click the 👍 button to support this project. 
              One vote per logged-in user/IP address. Your votes are stored locally in your browser.
            </p>
          </div>
        </div>
      </section>

      <!-- GitHub Stars Ranking -->
      <section>
        <div class="flex items-center justify-between mb-6">
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-2">GitHub Stars</h2>
            <p class="text-gray-600">
              Projects ranked by their GitHub star count (updated periodically).
            </p>
          </div>
        </div>

        <!-- Loading State -->
        <div v-if="loadingGithubData" class="text-center py-12">
          <div class="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-primary-600"></div>
          <p class="mt-4 text-gray-600">Loading GitHub data...</p>
        </div>

        <!-- GitHub Rankings -->
        <div v-else-if="githubRanked.length > 0" class="space-y-4">
          <div
            v-for="(project, index) in githubRanked"
            :key="project.name"
            class="card p-6 flex items-center space-x-6 fade-in"
            :style="{ animationDelay: `${index * 0.05}s` }"
          >
            <!-- Rank -->
            <div class="flex-shrink-0 w-16 text-center">
              <div class="text-2xl font-bold text-gray-600">
                {{ index + 1 }}
              </div>
            </div>

            <!-- Platform Icon -->
            <div class="flex-shrink-0">
              <PlatformIcon :platform="project.platform" />
            </div>

            <!-- Project Info -->
            <div class="flex-grow min-w-0">
              <div class="flex items-center space-x-3 mb-2">
                <a
                  :href="project.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-xl font-bold text-gray-900 hover:text-primary-600 transition-colors duration-200 flex items-center space-x-2 group"
                >
                  <span>{{ project.name }}</span>
                  <svg class="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              <p class="text-gray-600 text-sm mb-3 line-clamp-2">
                {{ project.description }}
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="badge bg-purple-100 text-purple-700">{{ project.domain }}</span>
                <span class="badge bg-blue-100 text-blue-700">{{ formatUnit(project.unit) }}</span>
              </div>
            </div>

            <!-- Stars -->
            <div class="flex-shrink-0 flex flex-col items-center">
              <div class="text-yellow-500 text-2xl mb-1">⭐</div>
              <div class="text-2xl font-bold text-gray-900">
                {{ formatNumber(project.stars) }}
              </div>
              <div class="text-xs text-gray-500">stars</div>
            </div>
          </div>
        </div>

        <!-- No GitHub Projects -->
        <div v-else class="text-center py-12">
          <p class="text-gray-600">No GitHub projects with star data available yet.</p>
        </div>

        <div class="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div class="flex items-start space-x-3">
            <svg class="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p class="text-sm text-yellow-800">
              <strong>Disclaimer:</strong> Rankings help with discovery, not scientific or societal impact. 
              Some important tools have few stars because they serve specialized audiences.
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useProjectStore } from '@/stores/projectStore'
import PlatformIcon from '@/components/PlatformIcon.vue'

const projectStore = useProjectStore()
const loadingGithubData = ref(false)
const githubStars = ref({})

const communityRanked = computed(() => {
  return projectStore.rankedByUpvotes.filter(p => p.upvoteCount > 0).slice(0, 20)
})

const githubRanked = computed(() => {
  return projectStore.projects
    .filter(p => p.platform === 'github' && githubStars.value[p.name])
    .map(p => ({
      ...p,
      stars: githubStars.value[p.name] || 0
    }))
    .sort((a, b) => b.stars - a.stars)
    .slice(0, 20)
})

const rankColor = (index) => {
  if (index === 0) return 'text-yellow-500'
  if (index === 1) return 'text-gray-400'
  if (index === 2) return 'text-orange-600'
  return 'text-gray-600'
}

const formatUnit = (unit) => {
  if (Array.isArray(unit)) {
    return unit.join(', ')
  }
  return unit || 'Unknown'
}

const formatNumber = (num) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k'
  }
  return num.toString()
}

const handleUpvote = (projectName) => {
  const success = projectStore.upvoteProject(projectName)
  if (!success) {
    alert('You have already voted for this project!')
  }
}

// Mock GitHub stars data (in production, this would fetch from GitHub API)
const loadGithubStars = async () => {
  loadingGithubData.value = true
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Mock data - in production, you'd fetch from GitHub API
  const mockStars = {}
  projectStore.projects
    .filter(p => p.platform === 'github')
    .forEach(p => {
      mockStars[p.name] = Math.floor(Math.random() * 5000)
    })
  
  githubStars.value = mockStars
  loadingGithubData.value = false
}

onMounted(() => {
  loadGithubStars()
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
