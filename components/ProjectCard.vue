<template>
  <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
    <!-- Project Image -->
    <div class="relative h-64 overflow-hidden">
      <img 
        :src="project.images[0]?.image_url || 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop'" 
        :alt="project.images[0]?.alt_text || project.name"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      >
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <!-- Project Links Overlay -->
      <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div class="flex space-x-4">
          <a 
            v-if="project.link"
            :href="project.link" 
            target="_blank"
            class="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center"
          >
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
            Live
          </a>
          <a 
            v-if="project.github"
            :href="project.github"
            target="_blank"
            class="bg-gray-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center"
          >
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>
      </div>

      <!-- Featured Badge -->
      <div v-if="featured || project.featured" class="absolute top-4 left-4">
        <span class="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
          Featured
        </span>
      </div>
    </div>

    <!-- Project Content -->
    <div class="p-6">
      <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {{ project.name }}
      </h3>

      <div v-html="project.description" class="text-gray-600 mb-4 line-clamp-3"></div>

      <!-- techs -->
      <div class="flex flex-wrap gap-2 mb-4">
        <span 
          v-for="tech in project.techs.slice(0, 3)" 
          :key="tech.id"
          class="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
        >
          {{ tech.name }}
        </span>
        <span 
          v-if="project.techs.length > 3"
          class="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium"
        >
          +{{ project.techs.length - 3 }} more
        </span>
      </div>

      <!-- View Details Button -->
      <NuxtLink 
        :to="`/projects/${project.id}`"
        class="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
      >
        View Details
        <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true
  },
  featured: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style> 