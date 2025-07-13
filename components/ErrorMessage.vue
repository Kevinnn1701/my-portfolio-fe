<template>
  <div class="flex flex-col items-center justify-center" :class="containerClass">
    <div class="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md w-full text-center">
      <div class="flex justify-center mb-4">
        <svg class="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      </div>
      
      <h3 class="text-lg font-semibold text-red-800 mb-2">{{ title }}</h3>
      <p class="text-red-700 mb-4">{{ message }}</p>
      
      <div class="flex justify-center">
        <button 
          @click="refreshPage"
          class="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
        >
          Refresh Page
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Something went wrong'
  },
  message: {
    type: String,
    default: 'Unable to load the data. Please refresh the page.'
  },
  fullScreen: {
    type: Boolean,
    default: false
  }
})

const containerClass = computed(() => {
  return props.fullScreen ? 'min-h-screen' : 'py-12'
})

const refreshPage = () => {
  window.location.reload()
}
</script> 