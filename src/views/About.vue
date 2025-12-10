<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <div class="relative bg-gradient-to-br from-um6p-charcoal via-gray-800 to-um6p-charcoal text-white py-24 overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-20 right-1/4 w-40 h-40 border-2 border-um6p-orange rotate-12"></div>
        <div class="absolute bottom-20 left-1/4 w-32 h-32 border-2 border-um6p-light-orange -rotate-6"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <div class="inline-flex items-center justify-center mb-6">
            <svg class="w-16 h-16 text-um6p-orange" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"/>
            </svg>
          </div>
          
          <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            About OpenSource@UM6P
          </h1>
          <p class="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            A community-driven initiative to catalog and celebrate open-source innovations 
            from Mohammed VI Polytechnic University, fostering <span class="text-um6p-orange font-semibold">collaboration</span> and 
            <span class="text-um6p-orange font-semibold">knowledge sharing</span> across Africa and beyond.
          </p>
        </div>
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

        <!-- Mission & Goals -->
        <section class="card p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p class="text-gray-600 leading-relaxed mb-6">
            OpenSource@UM6P is a community-driven initiative to catalog, promote, and celebrate open-source software 
            created by researchers, students, and staff at Mohammed VI Polytechnic University. We aim to:
          </p>
          <ul class="space-y-3">
            <li class="flex items-start space-x-3">
              <svg class="w-6 h-6 text-um6p-orange flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span class="text-gray-600">Make UM6P research software discoverable and accessible worldwide</span>
            </li>
            <li class="flex items-start space-x-3">
              <svg class="w-6 h-6 text-um6p-orange flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span class="text-gray-600">Foster collaboration and code reuse across research teams</span>
            </li>
            <li class="flex items-start space-x-3">
              <svg class="w-6 h-6 text-um6p-orange flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span class="text-gray-600">Support reproducible research and transparent science</span>
            </li>
            <li class="flex items-start space-x-3">
              <svg class="w-6 h-6 text-um6p-orange flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <span class="text-gray-600">Celebrate our community's contributions to open science</span>
            </li>
          </ul>
        </section>

        <!-- Who maintains it? -->
        <section class="card p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Who maintains it?</h2>
          <p class="text-gray-600 leading-relaxed mb-4">
            This catalog is maintained by the <strong>Open Source UM6P Community</strong>, with contributions from:
          </p>
          <!-- Four Academic Poles - The Comprehensive University -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Science & Technology -->
            <div class="group relative overflow-hidden rounded-xl border-2 border-um6p-science-light hover:border-um6p-science-dark transition-all duration-300">
              <div class="absolute inset-0 bg-gradient-to-br from-um6p-science-light/5 to-um6p-science-dark/5"></div>
              <div class="absolute top-2 right-2 w-12 h-12 border-2 border-um6p-science-light/30 rounded transform rotate-12"></div>
              <div class="relative p-6">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0 w-14 h-14 bg-um6p-science-light/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg class="w-8 h-8 text-um6p-science-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-um6p-charcoal text-lg mb-1">Science & Technology</h3>
                    <p class="text-sm text-gray-600">College of Computing, Vanguard Center</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Medical & Paramedical -->
            <div class="group relative overflow-hidden rounded-xl border-2 border-um6p-health-dark hover:border-um6p-health-dark/80 transition-all duration-300">
              <div class="absolute inset-0 bg-gradient-to-br from-um6p-health-dark/5 to-um6p-science-green/5"></div>
              <div class="absolute top-2 right-2 w-12 h-12 border-2 border-um6p-health-dark/30 rounded transform rotate-12"></div>
              <div class="relative p-6">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0 w-14 h-14 bg-um6p-health-dark/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg class="w-8 h-8 text-um6p-health-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-um6p-charcoal text-lg mb-1">Health</h3>
                    <p class="text-sm text-gray-600">African Genome Center, Medical Research</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Business & Management -->
            <div class="group relative overflow-hidden rounded-xl border-2 border-um6p-business-light hover:border-um6p-business-dark transition-all duration-300">
              <div class="absolute inset-0 bg-gradient-to-br from-um6p-business-light/5 to-um6p-business-dark/5"></div>
              <div class="absolute top-2 right-2 w-12 h-12 border-2 border-um6p-business-light/30 rounded transform rotate-12"></div>
              <div class="relative p-6">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0 w-14 h-14 bg-um6p-business-light/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg class="w-8 h-8 text-um6p-business-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-um6p-charcoal text-lg mb-1">Business & Management</h3>
                    <p class="text-sm text-gray-600">CAES, School of Industrial Management</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Humanities, Economics & Social Sciences -->
            <div class="group relative overflow-hidden rounded-xl border-2 border-um6p-humanities-dark hover:border-um6p-business-purple transition-all duration-300">
              <div class="absolute inset-0 bg-gradient-to-br from-um6p-humanities-dark/5 to-um6p-business-purple/5"></div>
              <div class="absolute top-2 right-2 w-12 h-12 border-2 border-um6p-humanities-dark/30 rounded transform rotate-12"></div>
              <div class="relative p-6">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0 w-14 h-14 bg-um6p-humanities-dark/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg class="w-8 h-8 text-um6p-humanities-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-um6p-charcoal text-lg mb-1">Humanities & Social Sciences</h3>
                    <p class="text-sm text-gray-600">Economics, Philosophy, Social Research</p>
                  </div>
                </div>
              </div>
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

        <!-- Stats - The Four Pillars -->
        <section class="relative overflow-hidden rounded-2xl shadow-xl">
          <!-- Geometric Background -->
          <div class="absolute inset-0">
            <div class="absolute inset-0 bg-gradient-to-br from-um6p-orange via-um6p-light-orange to-orange-400"></div>
            <div class="absolute inset-0 opacity-10">
              <div class="grid grid-cols-4 grid-rows-4 h-full w-full">
                <div v-for="i in 16" :key="i" class="border border-white"></div>
              </div>
            </div>
          </div>
          
          <div class="relative p-10">
            <div class="text-center mb-8">
              <div class="inline-flex items-center justify-center mb-4">
                <div class="w-3 h-3 bg-white rounded-sm mr-2"></div>
                <h2 class="text-3xl font-bold text-white">Building on Four Pillars</h2>
              </div>
              <p class="text-white/90 text-lg">Impact through Knowledge, Research, Innovation & Entrepreneurship</p>
            </div>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
              <!-- Knowledge Pillar -->
              <div class="relative group">
                <div class="absolute inset-0 bg-white/10 rounded-xl backdrop-blur-sm transform group-hover:scale-105 transition-transform duration-300"></div>
                <div class="relative p-6 text-center">
                  <div class="w-16 h-16 mx-auto mb-4 border-4 border-white rounded-lg flex items-center justify-center">
                    <div class="text-4xl font-bold text-white">{{ projectStore.projects.length }}</div>
                  </div>
                  <div class="text-white font-bold text-lg mb-1">Projects</div>
                  <div class="text-white/80 text-sm">Knowledge</div>
                </div>
              </div>
              
              <!-- Research Pillar -->
              <div class="relative group">
                <div class="absolute inset-0 bg-white/10 rounded-xl backdrop-blur-sm transform group-hover:scale-105 transition-transform duration-300"></div>
                <div class="relative p-6 text-center">
                  <div class="w-16 h-16 mx-auto mb-4 border-4 border-white rounded-lg flex items-center justify-center">
                    <div class="text-4xl font-bold text-white">{{ projectStore.uniqueDomains.length }}</div>
                  </div>
                  <div class="text-white font-bold text-lg mb-1">Domains</div>
                  <div class="text-white/80 text-sm">Research</div>
                </div>
              </div>
              
              <!-- Innovation Pillar -->
              <div class="relative group">
                <div class="absolute inset-0 bg-white/10 rounded-xl backdrop-blur-sm transform group-hover:scale-105 transition-transform duration-300"></div>
                <div class="relative p-6 text-center">
                  <div class="w-16 h-16 mx-auto mb-4 border-4 border-white rounded-lg flex items-center justify-center">
                    <div class="text-4xl font-bold text-white">{{ projectStore.uniquePlatforms.length }}</div>
                  </div>
                  <div class="text-white font-bold text-lg mb-1">Platforms</div>
                  <div class="text-white/80 text-sm">Innovation</div>
                </div>
              </div>
              
              <!-- Entrepreneurship Pillar -->
              <div class="relative group">
                <div class="absolute inset-0 bg-white/10 rounded-xl backdrop-blur-sm transform group-hover:scale-105 transition-transform duration-300"></div>
                <div class="relative p-6 text-center">
                  <div class="w-16 h-16 mx-auto mb-4 border-4 border-white rounded-lg flex items-center justify-center">
                    <div class="text-4xl font-bold text-white">{{ activeProjects }}</div>
                  </div>
                  <div class="text-white font-bold text-lg mb-1">Active</div>
                  <div class="text-white/80 text-sm">Entrepreneurship</div>
                </div>
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
