<script setup>
// Meta tags
useHead({
  title: 'Home',
  meta: [
    { name: 'description', content: 'Welcome to my portfolio - showcasing my work as a full-stack developer' }
  ]
})

const { data: aboutMe } = await useAboutMe()
const { data: projects } = await useProjects({ featured: true })
const { data: skills } = await useSkills()

// For now using dummy data, replace with API calls later
// const aboutMe = useDummyAboutMe()
// const allProjects = useDummyProjects()
// const allSkills = useDummySkills()
const allSkills = toRaw(skills.value)
const allProjects = toRaw(projects.value)

// Computed properties
// const projects = computed(() => allProjects)
const featuredProjects = computed(() => allProjects.filter(project => project.featured))
const topSkills = computed(() => allSkills.slice(0, 10)) // Top 10 skills

// Calculate years of experience from July 2022 to now
const yearsOfExperience = computed(() => {
  const startDate = new Date('2022-07-01') // July 1, 2022
  const currentDate = new Date()
  
  const timeDifference = currentDate - startDate
  const yearsDifference = timeDifference / (1000 * 60 * 60 * 24 * 365.25) // Convert to years
  
  return Math.floor(yearsDifference)
})

// When ready to use API, uncomment this:

</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.delay-500 {
  animation-delay: 0.5s;
}

.delay-1000 {
  animation-delay: 1s;
}
</style> 

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 lg:py-32">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Hero Content -->
          <div class="text-center lg:text-left">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm 
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {{ aboutMe.name }}
              </span>
            </h1>
            <p class="text-xl sm:text-2xl text-gray-600 mb-6">
              {{ aboutMe.role }}
            </p>
            <p class="text-lg text-gray-700 mb-8 max-w-2xl">
              {{ aboutMe.description }}
            </p>
            
            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <NuxtLink 
                to="/projects" 
                class="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View My Work
              </NuxtLink>
              <NuxtLink 
                to="/contact" 
                class="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get In Touch
              </NuxtLink>
            </div>
          </div>

          <!-- Hero Image -->
          <div class="flex justify-center lg:justify-end">
            <div class="relative">
              <div class="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img 
                  :src="aboutMe.image_url" 
                  :alt="aboutMe.name"
                  class="w-full h-full object-cover"
                >
              </div>
              <!-- Decorative elements -->
              <div class="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
              <div class="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Background decorations -->
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div class="absolute top-20 left-10 w-32 h-32 bg-blue-300 rounded-full opacity-10 animate-float"></div>
        <div class="absolute top-40 right-20 w-24 h-24 bg-purple-300 rounded-full opacity-10 animate-float delay-500"></div>
        <div class="absolute bottom-20 left-20 w-28 h-28 bg-indigo-300 rounded-full opacity-10 animate-float delay-1000"></div>
      </div>
    </section>

    <!-- Quick Stats -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">{{ projects.length }}+</div>
            <div class="text-gray-600 font-medium">Projects Completed</div>
          </div>
          <div class="text-center">
            <div class="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">{{ skills.length }}+</div>
            <div class="text-gray-600 font-medium">techs</div>
          </div>
          <div class="text-center">
            <div class="text-3xl lg:text-4xl font-bold text-indigo-600 mb-2">{{ yearsOfExperience }}+</div>
            <div class="text-gray-600 font-medium">Years Experience</div>
          </div>

        </div>
      </div>
    </section>

    <!-- Featured Projects -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <ProjectCard 
            v-for="project in featuredProjects" 
            :key="project.id"
            :project="project"
            featured
          />
        </div>

        <div class="text-center">
          <NuxtLink 
            to="/projects" 
            class="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View All Projects
            <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Skills Overview -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            techs I work with to bring ideas to life
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div 
            v-for="skill in topSkills" 
            :key="skill.id"
            class="text-center group"
          >
            <div class="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center text-2xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">
              {{ skill.name.charAt(0) }}
            </div>
            <h3 class="font-semibold text-gray-900 mb-1">{{ skill.name }}</h3>
            <p class="text-sm text-gray-600">{{ skill.percentage }}%</p>
          </div>
        </div>

        <div class="text-center mt-12">
          <NuxtLink 
            to="/skills" 
            class="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            View All Skills
            <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

