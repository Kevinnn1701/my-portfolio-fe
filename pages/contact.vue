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

      <!-- Contact Section Skeleton -->
      <section class="py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="items-center">
            <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
              <LoadingSkeleton type="contact" />
            </div>
          </div>
        </div>
      </section>
    </div>
    
    <!-- Error State -->
    <ErrorMessage 
      v-else-if="hasError"
      :full-screen="true"
      title="Failed to load contact information"
      message="Please refresh the page to try again"
    />
    
    <!-- Main Content -->
    <div v-else>
      <!-- Hero Section -->
      <section class="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h1>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Let's discuss your project and how we can work together to bring your ideas to life
            </p>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="items-center">
            <!-- Contact Information -->
            <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 class="text-3xl font-bold text-gray-900 mb-8">Let's Start a Conversation</h2>
              <p class="text-lg text-gray-600 mb-8">
                {{ contactData.availability || 'I am available for new projects and collaborations' }}. Whether you have a project in mind, want to collaborate, 
                or just want to say hello, I'd love to hear from you.
              </p>

              <!-- Contact Details -->
              <div class="space-y-6 mb-12">
                <div class="flex items-center">
                  <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm font-medium text-gray-500">Email</p>
                    <a 
                      :href="`mailto:${contactData.email || 'contact@example.com'}`" 
                      class="text-lg text-gray-900 hover:text-blue-600 transition-colors"
                    >
                      {{ contactData.email || 'contact@example.com' }}
                    </a>
                  </div>
                </div>

                <div class="flex items-center">
                  <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm font-medium text-gray-500">Phone</p>
                    <a 
                      :href="`tel:${contactData.phone || ''}`" 
                      class="text-lg text-gray-900 hover:text-blue-600 transition-colors"
                    >
                      {{ contactData.phone || 'Phone number not available' }}
                    </a>
                  </div>
                </div>

                <div class="flex items-center">
                  <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm font-medium text-gray-500">Location</p>
                    <p class="text-lg text-gray-900">{{ contactData.address || 'Remote / Available worldwide' }}</p>
                  </div>
                </div>
              </div>

              <!-- Social Links -->
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-6">Connect With Me</h3>
                <div v-if="contactData.social_links && contactData.social_links.length > 0" class="flex space-x-4">
                  <a 
                    v-for="social in contactData.social_links" 
                    :key="social.id"
                    :href="social.link" 
                    target="_blank"
                    class="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:text-white transition-all duration-300 group"
                  >
                    <img 
                      :src="getSocialIconUrl(social.icon)" 
                      :alt="social.name || 'Social link'"
                      class="w-6 h-6 hover:scale-150 transition-all duration-300 group-hover:text-white" 
                    />
                  </a>
                </div>
                <div v-else class="text-gray-600">
                  <p>Social links not available at the moment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
// Meta tags
useHead({
  title: 'Contact',
  meta: [
    { name: 'description', content: 'Get in touch to discuss your project or collaboration opportunities' }
  ]
})

// API calls with proper error handling
const { data: contactInfo, pending: contactPending, error: contactError, refresh: refreshContact } = await useContact()

// Computed properties with null checks
const contactData = computed(() => contactInfo.value || {})

// Check if data is still loading
const isLoading = computed(() => contactPending.value)

// Check if error occurred
const hasError = computed(() => contactError.value)



const getSocialIconUrl = (iconName) => {
  return `https://cdn.simpleicons.org/${iconName}`
}
</script> 