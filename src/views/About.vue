<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-um6p-orange to-um6p-light-orange text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">About Open Source at UM6P</h1>
        <p class="text-xl text-orange-100 max-w-3xl">
          Learn more about this community initiative and how we're making UM6P's open-source work more discoverable.
        </p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="space-y-12">
        <!-- What is this initiative? -->
        <section class="card p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">What is this initiative?</h2>
          <p class="text-gray-600 leading-relaxed mb-4">
            Open Source at UM6P is a community-driven catalog of open-source software created at 
            Mohammed VI Polytechnic University. It brings together libraries, datasets, models, tools, 
            and platforms developed by students, researchers, engineers, and partners across the university.
          </p>
          <p class="text-gray-600 leading-relaxed">
            This catalog serves as a central hub for discovering, exploring, and contributing to 
            UM6P's growing ecosystem of open-source projects.
          </p>
        </section>

        <!-- Why this catalog? -->
        <section class="card p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Why this catalog?</h2>
          <p class="text-gray-600 leading-relaxed mb-6">
            Open source is at the heart of modern research and innovation. This catalog aims to:
          </p>
          <ul class="space-y-3">
            <li class="flex items-start space-x-3">
              <svg class="w-6 h-6 text-um6p-orange flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="text-gray-600">Make UM6P software more discoverable inside and outside the university</span>
            </li>
            <li class="flex items-start space-x-3">
              <svg class="w-6 h-6 text-um6p-orange flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="text-gray-600">Encourage reuse and collaboration across departments and institutions</span>
            </li>
            <li class="flex items-start space-x-3">
              <svg class="w-6 h-6 text-um6p-orange flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="text-gray-600">Provide a machine-readable index powering dashboards and future platforms</span>
            </li>
            <li class="flex items-start space-x-3">
              <svg class="w-6 h-6 text-um6p-orange flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="text-gray-600">Celebrate UM6P's open-source community and their contributions</span>
            </li>
          </ul>
        </section>

        <!-- Who maintains it? -->
        <section class="card p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Who maintains it?</h2>
          <p class="text-gray-600 leading-relaxed mb-4">
            This catalog is maintained by the <strong>Open Source UM6P Community</strong>, with contributions from:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Science & Technology Pole -->
            <div class="flex items-center space-x-3 p-3 bg-um6p-science-light/10 border border-um6p-science-light rounded-lg">
              <svg class="w-8 h-8 text-um6p-science-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span class="text-um6p-charcoal font-medium">College of Computing</span>
            </div>
            <!-- Agriculture/Business Pole -->
            <div class="flex items-center space-x-3 p-3 bg-um6p-business-light/10 border border-um6p-business-light rounded-lg">
              <svg class="w-8 h-8 text-um6p-business-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
              </svg>
              <span class="text-um6p-charcoal font-medium">CAES</span>
            </div>
            <!-- Health Pole -->
            <div class="flex items-center space-x-3 p-3 bg-um6p-health-dark/10 border border-um6p-health-dark rounded-lg">
              <svg class="w-8 h-8 text-um6p-health-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
              <span class="text-um6p-charcoal font-medium">African Genome Center</span>
            </div>
            <!-- Science & Technology Pole -->
            <div class="flex items-center space-x-3 p-3 bg-um6p-science-green/10 border border-um6p-science-green rounded-lg">
              <svg class="w-8 h-8 text-um6p-science-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span class="text-um6p-charcoal font-medium">Vanguard Center</span>
            </div>
          </div>
          <p class="text-gray-600 leading-relaxed mt-4">
            And many other research centers, labs, and individual contributors across UM6P.
          </p>
        </section>

        <!-- How to get involved -->
        <section class="card p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">How to get involved</h2>
          <p class="text-gray-600 leading-relaxed mb-6">
            We welcome contributions from everyone! Here's how you can participate:
          </p>
          <div class="space-y-4">
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-10 h-10 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-1">Submit your project</h3>
                <p class="text-gray-600 text-sm">
                  Share your open-source work with the community by adding it to the catalog.
                </p>
                <router-link to="/submit" class="text-primary-600 hover:text-primary-700 text-sm font-medium mt-2 inline-block">
                  Submit your project →
                </router-link>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-10 h-10 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-1">Improve metadata and domains</h3>
                <p class="text-gray-600 text-sm">
                  Help us keep the catalog accurate and up-to-date by suggesting improvements.
                </p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-10 h-10 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-1">Join our Discord community</h3>
                <p class="text-gray-600 text-sm">
                  Connect with other contributors, ask questions, and help shape the catalog.
                </p>
                <a href="https://discord.gg/gxWZRF5x8R" target="_blank" rel="noopener noreferrer" 
                   class="text-primary-600 hover:text-primary-700 text-sm font-medium mt-2 inline-block">
                  Join Discord →
                </a>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-10 h-10 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-1">Contribute on GitHub</h3>
                <p class="text-gray-600 text-sm">
                  Fork the repository, make improvements, and submit pull requests.
                </p>
                <router-link to="/contribute" class="text-primary-600 hover:text-primary-700 text-sm font-medium mt-2 inline-block">
                  Learn more →
                </router-link>
              </div>
            </div>
          </div>
        </section>

        <!-- Stats -->
        <section class="relative overflow-hidden rounded-lg shadow-sm">
          <!-- Gradient Background following UM6P guidelines -->
          <div class="absolute inset-0 bg-gradient-to-br from-um6p-light-orange via-orange-100 to-white opacity-40"></div>
          <div class="relative card p-8 bg-white/80 backdrop-blur-sm border-um6p-light-orange">
            <h2 class="text-2xl font-bold text-um6p-charcoal mb-6 text-center">Catalog Statistics</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div class="text-center">
                <!-- Following brand guideline: Numbers on UM6P Primary Orange -->
                <div class="text-5xl font-bold text-um6p-orange mb-2">{{ projectStore.projects.length }}</div>
                <div class="text-sm text-um6p-charcoal font-medium">Total Projects</div>
              </div>
              <div class="text-center">
                <div class="text-5xl font-bold text-um6p-science-dark mb-2">{{ projectStore.uniqueDomains.length }}</div>
                <div class="text-sm text-um6p-charcoal font-medium">Domains</div>
              </div>
              <div class="text-center">
                <div class="text-5xl font-bold text-um6p-health-dark mb-2">{{ projectStore.uniqueUnits.length }}</div>
                <div class="text-sm text-um6p-charcoal font-medium">Units</div>
              </div>
              <div class="text-center">
                <div class="text-5xl font-bold text-um6p-business-dark mb-2">{{ activeProjects }}</div>
                <div class="text-sm text-um6p-charcoal font-medium">Active Projects</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useProjectStore } from '@/stores/projectStore'

const projectStore = useProjectStore()

const activeProjects = computed(() => {
  return projectStore.projects.filter(p => p.status === 'active').length
})
</script>
