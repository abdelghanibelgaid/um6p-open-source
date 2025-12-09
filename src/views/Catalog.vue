<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-um6p-orange to-um6p-light-orange text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Open Source at UM6P</h1>
        <p class="text-xl text-orange-100 max-w-3xl">
          Discover open-source software built at Mohammed VI Polytechnic University (UM6P). 
          Use the search and filters to explore libraries, models, datasets, tools, and platforms across units and domains.
        </p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Search and Controls -->
      <div class="mb-8 space-y-4">
        <!-- Search Bar -->
        <div class="relative">
          <input
            v-model.trim="searchQuery"
            type="text"
            placeholder="Search by project name, owner, unit, or keyword…"
            class="w-full px-4 py-3 pl-12 pr-12 text-lg h-14 border border-gray-300 rounded-lg focus:ring-2 focus:ring-um6p-orange focus:border-transparent outline-none transition-all duration-200 shadow-sm bg-white"
          />
          <svg class="absolute left-4 top-4 w-6 h-6 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <button
            v-if="searchQuery"
            @click="clearSearch"
            class="absolute right-4 top-4 text-gray-400 hover:text-um6p-orange transition-colors z-10"
            type="button"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Filter Toggle -->
        <div class="flex items-center justify-between">
          <button
            @click="showFilters = !showFilters"
            class="btn-secondary flex items-center space-x-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            <span>{{ showFilters ? 'Hide Filters' : 'Show Filters' }}</span>
            <span v-if="activeFilterCount > 0" class="ml-2 px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold">
              {{ activeFilterCount }}
            </span>
          </button>

          <div class="flex items-center space-x-4">
            <button
              v-if="activeFilterCount > 0"
              @click="clearFilters"
              class="text-sm text-primary-600 hover:text-primary-700 font-medium"
            >
              Clear all filters
            </button>
            <select v-model="sortBy" class="input-field w-auto">
              <option value="newest">Newest first</option>
              <option value="alphabetical">Alphabetical</option>
              <option value="created">Recently created</option>
            </select>
          </div>
        </div>

        <!-- Filters Panel -->
        <transition name="expand">
          <div v-if="showFilters" class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <!-- Domain Filter -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Domain</label>
                <select v-model="filters.domain" class="input-field">
                  <option value="">All Domains</option>
                  <option v-for="domain in projectStore.uniqueDomains" :key="domain" :value="domain">
                    {{ domain }}
                  </option>
                </select>
              </div>

              <!-- Type Filter -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Type</label>
                <select v-model="filters.type" class="input-field">
                  <option value="">All Types</option>
                  <option v-for="type in projectStore.uniqueTypes" :key="type" :value="type">
                    {{ type }}
                  </option>
                </select>
              </div>

              <!-- Platform Filter -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Platform</label>
                <select v-model="filters.platform" class="input-field">
                  <option value="">All Platforms</option>
                  <option v-for="platform in projectStore.uniquePlatforms" :key="platform" :value="platform">
                    {{ platform }}
                  </option>
                </select>
              </div>

              <!-- Unit Filter -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Unit</label>
                <select v-model="filters.unit" class="input-field">
                  <option value="">All Units</option>
                  <option v-for="unit in projectStore.uniqueUnits" :key="unit" :value="unit">
                    {{ unit }}
                  </option>
                </select>
              </div>

              <!-- Status Filter -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select v-model="filters.status" class="input-field">
                  <option value="">All Statuses</option>
                  <option v-for="status in projectStore.uniqueStatuses" :key="status" :value="status">
                    {{ status }}
                  </option>
                </select>
              </div>

              <!-- Language Filter -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Language</label>
                <select v-model="filters.language" class="input-field">
                  <option value="">All Languages</option>
                  <option v-for="lang in projectStore.uniqueLanguages" :key="lang" :value="lang">
                    {{ lang }}
                  </option>
                </select>
              </div>

              <!-- License Filter -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">License</label>
                <select v-model="filters.license" class="input-field">
                  <option value="">All Licenses</option>
                  <option v-for="license in projectStore.uniqueLicenses" :key="license" :value="license">
                    {{ license }}
                  </option>
                </select>
              </div>

              <!-- Tags Filter -->
              <div class="md:col-span-2">
                <label class="block text-sm font-medium text-gray-700 mb-2">Tags</label>
                <div class="flex flex-wrap gap-2 max-h-32 overflow-y-auto p-2 border border-gray-200 rounded-lg">
                  <button
                    v-for="tag in projectStore.allTags"
                    :key="tag"
                    @click="toggleTag(tag)"
                    class="px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200"
                    :class="filters.tags.includes(tag) 
                      ? 'bg-primary-100 text-primary-700 border-2 border-primary-500' 
                      : 'bg-gray-100 text-gray-700 border-2 border-transparent hover:bg-gray-200'"
                  >
                    {{ tag }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <!-- Results Count -->
      <div class="mb-6 text-sm text-gray-600">
        Showing <span class="font-semibold text-gray-900">{{ filteredProjects.length }}</span> 
        of <span class="font-semibold text-gray-900">{{ projectStore.projects.length }}</span> projects
      </div>

      <!-- Projects Grid -->
      <div v-if="filteredProjects.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          v-for="project in filteredProjects"
          :key="project.name"
          :project="project"
        />
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-16">
        <svg class="mx-auto w-24 h-24 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">No projects match your filters yet</h3>
        <p class="text-gray-600 mb-6">Try removing some filters or submit your project to the catalog.</p>
        <router-link to="/submit" class="btn-primary inline-flex items-center space-x-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <span>Submit Project</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useProjectStore } from '@/stores/projectStore'
import ProjectCard from '@/components/ProjectCard.vue'

const projectStore = useProjectStore()

const searchQuery = ref('')
const showFilters = ref(false)
const sortBy = ref('newest')

// Clear search
const clearSearch = () => {
  searchQuery.value = ''
}

// Debug: Check if data is loaded
onMounted(() => {
  console.log('Total projects loaded:', projectStore.projects.length)
})

const filters = ref({
  domain: '',
  type: '',
  platform: '',
  unit: '',
  status: '',
  language: '',
  license: '',
  tags: []
})

const toggleTag = (tag) => {
  const index = filters.value.tags.indexOf(tag)
  if (index > -1) {
    filters.value.tags.splice(index, 1)
  } else {
    filters.value.tags.push(tag)
  }
}

const activeFilterCount = computed(() => {
  let count = 0
  if (filters.value.domain) count++
  if (filters.value.type) count++
  if (filters.value.platform) count++
  if (filters.value.unit) count++
  if (filters.value.status) count++
  if (filters.value.language) count++
  if (filters.value.license) count++
  count += filters.value.tags.length
  return count
})

const clearFilters = () => {
  filters.value = {
    domain: '',
    type: '',
    platform: '',
    unit: '',
    status: '',
    language: '',
    license: '',
    tags: []
  }
  searchQuery.value = ''
}

const filteredProjects = computed(() => {
  let results = [...projectStore.projects]

  // Apply search
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    results = results.filter(p => 
      (p.name && p.name.toLowerCase().includes(query)) ||
      (p.description && p.description.toLowerCase().includes(query)) ||
      (p.owner && p.owner.toLowerCase().includes(query)) ||
      (p.domain && p.domain.toLowerCase().includes(query)) ||
      (p.type && p.type.toLowerCase().includes(query)) ||
      (p.platform && p.platform.toLowerCase().includes(query)) ||
      (p.language && p.language.toLowerCase().includes(query)) ||
      (Array.isArray(p.unit) && p.unit.some(u => u && u.toLowerCase().includes(query))) ||
      (typeof p.unit === 'string' && p.unit.toLowerCase().includes(query)) ||
      (Array.isArray(p.tags) && p.tags.some(t => t && t.toLowerCase().includes(query)))
    )
  }

  // Apply filters
  if (filters.value.domain) {
    results = results.filter(p => p.domain === filters.value.domain)
  }
  if (filters.value.type) {
    results = results.filter(p => p.type === filters.value.type)
  }
  if (filters.value.platform) {
    results = results.filter(p => p.platform === filters.value.platform)
  }
  if (filters.value.unit) {
    results = results.filter(p => 
      Array.isArray(p.unit) ? p.unit.includes(filters.value.unit) : p.unit === filters.value.unit
    )
  }
  if (filters.value.status) {
    results = results.filter(p => p.status === filters.value.status)
  }
  if (filters.value.language) {
    results = results.filter(p => p.language === filters.value.language)
  }
  if (filters.value.license) {
    results = results.filter(p => p.license === filters.value.license)
  }
  if (filters.value.tags.length > 0) {
    results = results.filter(p => 
      Array.isArray(p.tags) && filters.value.tags.some(tag => p.tags.includes(tag))
    )
  }

  // Apply sorting
  if (sortBy.value === 'alphabetical') {
    results.sort((a, b) => a.name.localeCompare(b.name))
  } else if (sortBy.value === 'created') {
    results.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
  } else {
    // newest first (by added order, reversed)
    results.reverse()
  }

  return results
})
</script>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
  max-height: 600px;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
