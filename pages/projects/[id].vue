<script setup>
// Get route params
const route = useRoute()
const projectId = parseInt(route.params.id)

const { data: data } = await useProject(projectId)
const { data: allProjects } = await useProjects()

const project = toRaw(data.value)


// Meta tags
useHead({
  title: project ? project.name : 'Project Not Found',
  meta: [
    {
      name: 'description',
      content: project ? project.description : 'Project not found'
    }
  ]
})

// Image gallery state
const selectedImageIndex = ref(0)
const selectedImage = computed(() => {
  if (project && project.images && project.images.length > 0) {
    return project.images[selectedImageIndex.value]
  }
  return null
})

// Related projects (exclude current project)
const relatedProjects = computed(() => {
  if (!project) return []
  return toRaw(allProjects.value)
    .filter(p => p.id !== project.id)
    .slice(0, 3)
})

// Utility functions
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  })
}

</script>

<template>
  <div v-if="project" class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8">
          <!-- Back to Projects -->
          <NuxtLink to="/projects"
            class="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-6 transition-colors">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to Projects
          </NuxtLink>

          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {{ project.name }}
          </h1>

          <!-- Featured Badge -->
          <div v-if="project.featured" class="inline-block mb-6">
            <span class="bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-semibold">
              ⭐ Featured Project
            </span>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a v-if="project.link" :href="project.link" target="_blank"
              class="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
              View Live Demo
            </a>
            <a v-if="project.github" :href="project.github" target="_blank"
              class="inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Main Content -->
          <div class="lg:col-span-2 space-y-12">
            <!-- Image Gallery -->
            <div v-if="project.images && project.images.length > 0">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">Project Gallery</h2>
              <div class="space-y-6">
                <!-- Main Image -->
                <div class="rounded-2xl overflow-hidden shadow-xl">
                  <img :src="selectedImage.image_url" :alt="selectedImage.alt_text" class="w-full h-96 object-cover">
                </div>

                <!-- Thumbnail Gallery -->
                <div v-if="project.images.length > 1" class="grid grid-cols-3 md:grid-cols-4 gap-4">
                  <button v-for="(image, index) in project.images" :key="image.id" @click="selectedImageIndex = index"
                    :class="[
                      'rounded-lg overflow-hidden transition-all duration-300',
                      selectedImageIndex === index
                        ? 'ring-4 ring-blue-500 scale-105'
                        : 'hover:scale-105 opacity-70 hover:opacity-100'
                    ]">
                    <img :src="image.image_url" :alt="image.alt_text" class="w-full h-24 object-cover">
                  </button>
                </div>
              </div>
            </div>

            <!-- Project Features -->
            <div>
              <h2 class="text-2xl font-bold text-gray-900 mb-6">Project Features</h2>
              <div class="bg-white rounded-2xl shadow-lg p-8">
                <div class="rich-text" v-html="project.description">
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="space-y-8">
            <!-- Project Info -->
            <div class="bg-white rounded-2xl shadow-lg p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-6">Project Info</h3>
              <div class="space-y-4">
                <div>
                  <span class="text-sm font-medium text-gray-500">Created</span>
                  <p class="text-gray-900">{{ formatDate(project.created_at) }}</p>
                </div>
                <div v-if="project.link">
                  <span class="text-sm font-medium text-gray-500">Live Demo</span>
                  <p>
                    <a :href="project.link" target="_blank" class="text-blue-600 hover:text-blue-700 transition-colors">
                      View Live Site →
                    </a>
                  </p>
                </div>
                <div v-if="project.github">
                  <span class="text-sm font-medium text-gray-500">Source Code</span>
                  <p>
                    <a :href="project.github" target="_blank"
                      class="text-blue-600 hover:text-blue-700 transition-colors">
                      View on GitHub →
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <!-- techs Used -->
            <div class="bg-white rounded-2xl shadow-lg p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-6">techs Used</h3>
              <div class="space-y-4">
                <div v-for="tech in project.techs" :key="tech.id" class="border-l-4 border-blue-500 pl-4">
                  <h4 class="font-semibold text-gray-900">{{ tech.name }}</h4>
                  <p class="text-sm text-gray-600 mt-1">{{ tech.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Projects -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">More Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard v-for="relatedProject in relatedProjects" :key="relatedProject.id" :project="relatedProject" />
        </div>
        <div class="text-center mt-12">
          <NuxtLink to="/projects"
            class="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            View All Projects
            <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>

  <!-- Project Not Found -->
  <div v-else class="min-h-screen bg-gray-50 flex items-center justify-center">
    <div class="text-center">
      <div class="w-32 h-32 mx-auto mb-8 bg-gray-100 rounded-full flex items-center justify-center">
        <svg class="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10">
          </path>
        </svg>
      </div>
      <h1 class="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
      <p class="text-gray-600 mb-6">The project you're looking for doesn't exist.</p>
      <NuxtLink to="/projects"
        class="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
        Back to Projects
      </NuxtLink>
    </div>
  </div>
</template>
