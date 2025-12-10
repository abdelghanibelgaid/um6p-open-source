<template>
  <footer class="bg-um6p-charcoal text-gray-300 mt-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Brand Section -->
        <div class="space-y-4">
          <div class="flex items-center space-x-3">
            <img 
              src="@/assets/images/logo.png" 
              alt="UM6P Logo" 
              class="h-8 w-auto"
            />
            <div>
              <div class="text-lg font-bold text-white">OpenSource@UM6P</div>
            </div>
          </div>
          <p class="text-sm text-gray-400">
            A community-driven catalog of open-source software created at Mohammed VI Polytechnic University.
          </p>
          <div class="text-sm text-gray-400">
            Made with <span class="text-red-500">❤️</span> by the Open Source UM6P Community
          </div>
        </div>

        <!-- Links Section -->
        <div class="space-y-4">
          <h3 class="text-white font-semibold text-sm uppercase tracking-wider">Quick Links</h3>
          <ul class="space-y-2">
            <li>
              <a href="https://www.um6p.ma" target="_blank" rel="noopener noreferrer" 
                 class="text-sm hover:text-um6p-light-orange transition-colors duration-200 flex items-center space-x-2">
                <span>Official UM6P Website</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://github.com/UM6POpenSoftwareCommunity/open-source" target="_blank" rel="noopener noreferrer" 
                 class="text-sm hover:text-um6p-light-orange transition-colors duration-200 flex items-center space-x-2">
                <span>GitHub Repository</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://discord.gg/gxWZRF5x8R" target="_blank" rel="noopener noreferrer" 
                 class="text-sm hover:text-um6p-light-orange transition-colors duration-200 flex items-center space-x-2">
                <span>Join Discord Community</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <!-- Navigation Section -->
        <div class="space-y-4">
          <h3 class="text-white font-semibold text-sm uppercase tracking-wider">Navigate</h3>
          <ul class="space-y-2">
            <li>
              <router-link to="/catalog" class="text-sm hover:text-um6p-light-orange transition-colors duration-200">
                Browse Catalog
              </router-link>
            </li>
            <li>
              <router-link to="/ranking" class="text-sm hover:text-um6p-light-orange transition-colors duration-200">
                Project Rankings
              </router-link>
            </li>
            <li>
              <router-link to="/submit" class="text-sm hover:text-um6p-light-orange transition-colors duration-200">
                Submit Project
              </router-link>
            </li>
            <li>
              <router-link to="/contribute" class="text-sm hover:text-um6p-light-orange transition-colors duration-200">
                Contribute
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-8 pt-8 border-t border-gray-800">
        <div class="text-sm text-gray-400 text-center">
          <p class="mb-2">
            This is an independent, unofficial community initiative and is not affiliated with, endorsed by, 
            or officially connected to Mohammed VI Polytechnic University (UM6P) or any of its official units, 
            programs, or subsidiaries.
          </p>
          <p>
            © {{ currentYear }} OpenSource@UM6P Community. Licensed under MIT.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>
