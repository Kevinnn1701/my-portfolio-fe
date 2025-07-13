<script setup>
// Meta tags
useHead({
  title: 'Projects',
  meta: [
    { name: 'description', content: 'Browse my portfolio of web development projects and technical work' }
  ]
})

// API calls with proper error handling
const { data: projects, pending: projectsPending, error: projectsError, refresh: refreshProjects } = await useProjects()

// Computed properties with null checks
const allProjects = computed(() => projects.value || [])

// Check if data is still loading
const isLoading = computed(() => projectsPending.value)

// Check if error occurred
const hasError = computed(() => projectsError.value)



// Reactive filters
const searchQuery = ref('')
const selectedTechnology = ref('')
const showOnlyFeatured = ref(false)

// Computed properties
const uniquetechs = computed(() => {
  if (allProjects.value.length === 0) return []
  const techs = new Set()
  allProjects.value.forEach(project => {
    if (project.techs && Array.isArray(project.techs)) {
      project.techs.forEach(tech => {
        if (tech && tech.name) {
          techs.add(tech.name)
        }
      })
    }
  })
  return Array.from(techs).sort()
})

const filteredProjects = computed(() => {
  let filtered = allProjects.value

  // Filter by search query
  if (searchQuery.value) {
    filtered = filtered.filter(project =>
      (project.name && project.name.toLowerCase().includes(searchQuery.value.toLowerCase())) ||
      (project.description && project.description.toLowerCase().includes(searchQuery.value.toLowerCase()))
    )
  }

  // Filter by technology
  if (selectedTechnology.value) {
    filtered = filtered.filter(project =>
      project.techs && Array.isArray(project.techs) && 
      project.techs.some(tech => tech && tech.name === selectedTechnology.value)
    )
  }

  // Filter by featured
  if (showOnlyFeatured.value) {
    filtered = filtered.filter(project => project.featured)
  }

  return filtered
})

// Methods
const clearFilters = () => {
  searchQuery.value = ''
  selectedTechnology.value = ''
  showOnlyFeatured.value = false
}
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Loading State -->
    <div v-if="isLoading" class="min-h-screen bg-gray-50">
      <!-- Hero Section Skeleton -->
      <section class="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <div class="h-12 bg-gray-200 rounded-lg mx-auto max-w-md mb-6"></div>
            <div class="h-6 bg-gray-200 rounded-lg mx-auto max-w-xl"></div>
          </div>
        </div>
      </section>

      <!-- Filters Section Skeleton -->
      <section class="py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div class="flex flex-col lg:flex-row gap-6">
              <div class="flex-1">
                <div class="h-12 bg-gray-200 rounded-xl"></div>
              </div>
              <div class="lg:w-64">
                <div class="h-12 bg-gray-200 rounded-xl"></div>
              </div>
              <div class="flex items-center">
                <div class="h-8 w-20 bg-gray-200 rounded-full"></div>
              </div>
            </div>
          </div>
          
          <!-- Projects Grid Skeleton -->
          <LoadingSkeleton type="projects" :count="6" />
        </div>
      </section>
    </div>
    
    <!-- Error State -->
    <ErrorMessage 
      v-else-if="hasError"
      :full-screen="true"
      title="Failed to load projects"
      message="Please refresh the page to try again"
    />
    
    <!-- Main Content -->
    <div v-else>
      <!-- Hero Section -->
      <section class="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">My Projects</h1>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my work, creativity, and technical expertise
            </p>
          </div>
        </div>
      </section>

      <!-- No projects message -->
      <div v-if="allProjects.length === 0" class="text-center py-20">
        <p class="text-gray-600 text-lg">No projects available at the moment.</p>
      </div>

      <!-- Projects content -->
      <div v-else>
        <!-- Filters and Search -->
        <section class="py-12">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <div class="flex flex-col lg:flex-row gap-6">
                <!-- Search -->
                <div class="flex-1">
                  <div class="relative">
                    <input
                      v-model="searchQuery"
                      type="text"
                      placeholder="Search projects..."
                      class="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                    <svg class="absolute left-4 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </div>
                </div>

                <!-- Technology Filter -->
                <div class="lg:w-64">
                  <select
                    v-model="selectedTechnology"
                    class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">All techs</option>
                    <option v-for="tech in uniquetechs" :key="tech" :value="tech">
                      {{ tech }}
                    </option>
                  </select>
                </div>

                <!-- Featured Filter -->
                <div class="flex items-center">
                  <label class="flex items-center cursor-pointer">
                    <input
                      v-model="showOnlyFeatured"
                      type="checkbox"
                      class="sr-only"
                    >
                    <div class="relative">
                      <div :class="[
                        'block bg-gray-300 w-14 h-8 rounded-full transition-colors',
                        showOnlyFeatured ? 'bg-blue-600' : 'bg-gray-300'
                      ]"></div>
                      <div :class="[
                        'absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform',
                        showOnlyFeatured ? 'transform translate-x-6' : ''
                      ]"></div>
                    </div>
                    <span class="ml-3 text-gray-700 font-medium">Featured Only</span>
                  </label>
                </div>
              </div>
            </div>

            <!-- Results Count -->
            <div class="mb-8">
              <p class="text-gray-600">
                Showing {{ filteredProjects.length }} of {{ allProjects.length }} projects
              </p>
            </div>

            <!-- Projects Grid -->
            <div v-if="filteredProjects.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard 
                v-for="project in filteredProjects" 
                :key="project.id"
                :project="project"
              />
            </div>

            <!-- No Results -->
            <div v-else class="text-center py-16">
              <div class="w-32 h-32 mx-auto mb-8 bg-gray-100 rounded-full flex items-center justify-center">
                <svg class="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
              <p class="text-gray-600 mb-6">Try adjusting your search criteria or filters</p>
              <button 
                @click="clearFilters"
                class="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </section>
      </div>

      <!-- Call to Action -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
          </p>
          <NuxtLink 
            to="/contact" 
            class="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Start a Project
            <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </NuxtLink>
        </div>
      </section>
    </div>
  </div>
</template>

