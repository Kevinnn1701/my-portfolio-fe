<script setup>
// Meta tags
useHead({
  title: 'About Me',
  meta: [
    { name: 'description', content: 'Learn more about my background, experience, and approach to development' }
  ]
})

// For now using dummy data, replace with API calls later
// const aboutMe = useDummyAboutMe()

// When ready to use API, uncomment this:
const { data: aboutMe } = await useAboutMe()

const { data: projects } = await useProjects()

const yearsOfExperience = computed(() => {
  const startDate = new Date('2022-07-01') // July 1, 2022
  const currentDate = new Date()
  
  const timeDifference = currentDate - startDate
  const yearsDifference = timeDifference / (1000 * 60 * 60 * 24 * 365.25) // Convert to years
  
  return Math.floor(yearsDifference)
})
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About Me</h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <!-- Profile Image -->
          <div class="order-2 lg:order-1">
            <div class="relative">
              <div class="w-full max-w-md mx-auto">
                <img :src="aboutMe.image_url" :alt="aboutMe.name" class="w-full h-auto rounded-2xl shadow-2xl">
              </div>
              <!-- Decorative elements -->
              <div class="absolute -top-6 -right-6 w-32 h-32 bg-blue-200 rounded-full opacity-20 -z-10"></div>
              <div class="absolute -bottom-6 -left-6 w-24 h-24 bg-purple-200 rounded-full opacity-20 -z-10"></div>
            </div>
          </div>

          <!-- About Content -->
          <div class="order-1 lg:order-2">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {{ aboutMe.name }}
            </h2>
            <h3 class="text-xl lg:text-2xl text-blue-600 font-semibold mb-6">
              {{ aboutMe.role }}
            </h3>
            <p class="text-lg text-gray-700 leading-relaxed mb-8">
              {{ aboutMe.detailed_description }}
            </p>

            <!-- Quick Stats -->
            <div class="grid grid-cols-2 gap-6 mb-8">
              <div class="bg-white p-6 rounded-xl shadow-lg">
                <div class="text-2xl font-bold text-blue-600 mb-2">{{ yearsOfExperience }}+</div>
                <div class="text-gray-600">Years Experience</div>
              </div>
              <div class="bg-white p-6 rounded-xl shadow-lg">
                <div class="text-2xl font-bold text-purple-600 mb-2">{{ projects.length }}+</div>
                <div class="text-gray-600">Projects Completed</div>
              </div>
            </div>

            <!-- CTA Button -->
            <NuxtLink to="/contact"
              class="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Let's Work Together
              <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3">
                </path>
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- Personal Story Section -->
        <div class="bg-white rounded-2xl shadow-xl p-8 lg:p-12 mb-20">
          <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">My Journey</h2>
          <div class="prose prose-lg mx-auto text-gray-700">
            <p class="text-lg leading-relaxed">
              {{ aboutMe.personal_story }}
            </p>
          </div>
        </div>

        <!-- Values & Approach -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z">
                </path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Performance First</h3>
            <p class="text-gray-600">
              I believe in building fast, efficient applications that provide excellent user experiences.
            </p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253">
                </path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Continuous Learning</h3>
            <p class="text-gray-600">
              Technology evolves rapidly, and I'm committed to staying current with the latest tools and best practices.
            </p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
                </path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Collaboration</h3>
            <p class="text-gray-600">
              Great software is built by great teams. I value communication, feedback, and working together towards
              common goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
