<script setup>
// Meta tags
useHead({
  title: 'Skills',
  meta: [
    { name: 'description', content: 'Explore my technical skills and expertise in various techs' }
  ]
})

// API calls with proper error handling
const { data: skills, pending: skillsPending, error: skillsError, refresh: refreshSkills } = await useSkills()

// Computed properties with null checks
const allSkills = computed(() => skills.value || [])

// Check if data is still loading
const isLoading = computed(() => skillsPending.value)

// Check if error occurred
const hasError = computed(() => skillsError.value)



// Reactive data
const selectedcategory_name = ref('all')

// Computed properties
const categories = computed(() => {
  if (allSkills.value.length === 0) return []
  return [...new Set(allSkills.value.map(skill => skill.category_name?.toLowerCase()).filter(Boolean))]
})

const filteredSkills = computed(() => {
  if (selectedcategory_name.value === 'all') {
    return allSkills.value
  }
  return allSkills.value.filter(skill => skill.category_name?.toLowerCase() === selectedcategory_name.value)
})

// Methods
const getcategory_nameSkills = (category_name) => {
  return allSkills.value.filter(skill => skill.category_name?.toLowerCase() === category_name)
}

const getcategory_nameColor = (category_name) => {
  const colors = {
    frontend: '#3B82F6',
    backend: '#8B5CF6',
    database: '#10B981',
    devops: '#F59E0B',
    tools: '#EF4444'
  }
  return colors[category_name] || '#6B7280'
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

      <!-- Skills Section Skeleton -->
      <section class="py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <!-- Filter buttons skeleton -->
          <div class="flex flex-wrap justify-center gap-4 mb-12">
            <div v-for="i in 5" :key="i" class="h-12 w-24 bg-gray-200 rounded-full"></div>
          </div>

          <!-- Skills grid skeleton -->
          <LoadingSkeleton type="skills" :count="9" />
        </div>
      </section>
    </div>
    
    <!-- Error State -->
    <ErrorMessage 
      v-else-if="hasError"
      :full-screen="true"
      title="Failed to load skills"
      message="Please refresh the page to try again"
    />
    
    <!-- Main Content -->
    <div v-else>
      <!-- Hero Section -->
      <section class="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Skills & techs</h1>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              techs and tools I use to bring ideas to life
            </p>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section class="py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <!-- No skills message -->
          <div v-if="allSkills.length === 0" class="text-center py-12">
            <p class="text-gray-600 text-lg">No skills data available at the moment.</p>
          </div>
          
          <!-- Skills content -->
          <div v-else>
            <!-- category_name Filter -->
            <div class="flex flex-wrap justify-center gap-4 mb-12">
              <button @click="selectedcategory_name = 'all'" :class="[
                'px-6 py-3 rounded-full font-semibold transition-all duration-300',
                selectedcategory_name === 'all'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 shadow-md'
              ]">
                All Skills
              </button>
              <button 
                v-for="category_name in categories" 
                :key="category_name" 
                @click="selectedcategory_name = category_name" 
                :class="[
                  'px-6 py-3 rounded-full font-semibold transition-all duration-300 capitalize',
                  selectedcategory_name === category_name
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 shadow-md'
                ]"
              >
                {{ category_name }}
              </button>
            </div>

            <!-- Skills Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <SkillCard 
                v-for="skill in filteredSkills" 
                :key="skill.id" 
                :skill="skill" 
              />
            </div>

            <!-- Skills Overview -->
            <div class="mt-20 bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Skill Categories Overview</h2>

              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div v-for="category_name in categories" :key="category_name" class="text-center">
                  <div
                    class="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-white font-bold text-xl"
                    :style="{ backgroundColor: getcategory_nameColor(category_name) }"
                  >
                    {{ getcategory_nameSkills(category_name).length }}
                  </div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2 capitalize">{{ category_name }}</h3>
                  <p class="text-gray-600 text-sm">
                    {{ getcategory_nameSkills(category_name).length }} {{ getcategory_nameSkills(category_name).length === 1 ? 'skill' : 'skills' }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Call to Action -->
          <div class="text-center mt-16">
            <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              Ready to work together?
            </h2>
            <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how my skills can help bring your project to life.
            </p>
            <NuxtLink to="/contact"
              class="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get In Touch
              <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
