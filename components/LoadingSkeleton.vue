<template>
  <div class="animate-pulse">
    <!-- Hero Section Skeleton -->
    <div v-if="type === 'hero'" class="space-y-6">
      <div class="text-center space-y-4">
        <div class="h-16 bg-gray-200 rounded-lg mx-auto max-w-2xl"></div>
        <div class="h-8 bg-gray-200 rounded-lg mx-auto max-w-lg"></div>
        <div class="h-6 bg-gray-200 rounded-lg mx-auto max-w-3xl"></div>
      </div>
      <div class="flex justify-center space-x-4">
        <div class="h-12 w-32 bg-gray-200 rounded-xl"></div>
        <div class="h-12 w-32 bg-gray-200 rounded-xl"></div>
      </div>
      <div class="w-80 h-80 bg-gray-200 rounded-full mx-auto"></div>
    </div>

    <!-- Stats Section Skeleton -->
    <div v-else-if="type === 'stats'" class="grid grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="i in 3" :key="i" class="text-center space-y-2">
        <div class="h-12 w-16 bg-gray-200 rounded-lg mx-auto"></div>
        <div class="h-4 w-24 bg-gray-200 rounded mx-auto"></div>
      </div>
    </div>

    <!-- Projects Grid Skeleton -->
    <div v-else-if="type === 'projects'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="i in count" :key="i" class="bg-white rounded-2xl shadow-lg p-6 space-y-4">
        <div class="h-48 bg-gray-200 rounded-xl"></div>
        <div class="h-6 bg-gray-200 rounded w-3/4"></div>
        <div class="h-4 bg-gray-200 rounded w-full"></div>
        <div class="h-4 bg-gray-200 rounded w-2/3"></div>
        <div class="flex space-x-2">
          <div class="h-6 w-16 bg-gray-200 rounded-full"></div>
          <div class="h-6 w-20 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    </div>

    <!-- Skills Grid Skeleton -->
    <div v-else-if="type === 'skills'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="i in count" :key="i" class="bg-white rounded-2xl shadow-lg p-6 space-y-4">
        <div class="flex items-center space-x-4">
          <div class="h-12 w-12 bg-gray-200 rounded-xl"></div>
          <div class="flex-1">
            <div class="h-5 bg-gray-200 rounded w-3/4"></div>
            <div class="h-4 bg-gray-200 rounded w-1/2 mt-2"></div>
          </div>
        </div>
        <div class="h-2 bg-gray-200 rounded-full"></div>
      </div>
    </div>

    <!-- About Page Skeleton -->
    <div v-else-if="type === 'about'" class="space-y-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="space-y-6">
          <div class="h-12 bg-gray-200 rounded-lg w-3/4"></div>
          <div class="h-8 bg-gray-200 rounded-lg w-1/2"></div>
          <div class="space-y-2">
            <div class="h-4 bg-gray-200 rounded w-full"></div>
            <div class="h-4 bg-gray-200 rounded w-5/6"></div>
            <div class="h-4 bg-gray-200 rounded w-4/5"></div>
          </div>
          <div class="grid grid-cols-2 gap-6">
            <div class="bg-white p-6 rounded-xl shadow-lg space-y-2">
              <div class="h-8 bg-gray-200 rounded w-1/2"></div>
              <div class="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-lg space-y-2">
              <div class="h-8 bg-gray-200 rounded w-1/2"></div>
              <div class="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        </div>
        <div class="h-96 bg-gray-200 rounded-2xl"></div>
      </div>
    </div>

    <!-- Contact Page Skeleton -->
    <div v-else-if="type === 'contact'" class="max-w-2xl mx-auto space-y-8">
      <div class="space-y-4">
        <div class="h-8 bg-gray-200 rounded-lg w-3/4"></div>
        <div class="h-6 bg-gray-200 rounded-lg w-full"></div>
      </div>
      <div class="space-y-6">
        <div v-for="i in 3" :key="i" class="flex items-center space-x-4">
          <div class="h-12 w-12 bg-gray-200 rounded-lg"></div>
          <div class="flex-1 space-y-2">
            <div class="h-4 bg-gray-200 rounded w-1/4"></div>
            <div class="h-5 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>
      </div>
      <div class="space-y-4">
        <div class="h-6 bg-gray-200 rounded w-1/2"></div>
        <div class="flex space-x-4">
          <div v-for="i in 4" :key="i" class="h-12 w-12 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    </div>

    <!-- Project Detail Skeleton -->
    <div v-else-if="type === 'project-detail'" class="space-y-12">
      <div class="text-center space-y-6">
        <div class="h-12 bg-gray-200 rounded-lg mx-auto max-w-lg"></div>
        <div class="h-8 bg-gray-200 rounded-lg mx-auto max-w-xs"></div>
        <div class="flex justify-center space-x-4">
          <div class="h-12 w-36 bg-gray-200 rounded-xl"></div>
          <div class="h-12 w-36 bg-gray-200 rounded-xl"></div>
        </div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div class="lg:col-span-2 space-y-8">
          <div class="h-96 bg-gray-200 rounded-2xl"></div>
          <div class="space-y-4">
            <div class="h-6 bg-gray-200 rounded w-1/4"></div>
            <div class="bg-white rounded-2xl shadow-lg p-8 space-y-4">
              <div class="h-4 bg-gray-200 rounded w-full"></div>
              <div class="h-4 bg-gray-200 rounded w-5/6"></div>
              <div class="h-4 bg-gray-200 rounded w-4/5"></div>
            </div>
          </div>
        </div>
        <div class="space-y-8">
          <div class="bg-white rounded-2xl shadow-lg p-6 space-y-4">
            <div class="h-6 bg-gray-200 rounded w-1/2"></div>
            <div class="space-y-3">
              <div class="h-4 bg-gray-200 rounded w-3/4"></div>
              <div class="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
          </div>
          <div class="bg-white rounded-2xl shadow-lg p-6 space-y-4">
            <div class="h-6 bg-gray-200 rounded w-1/2"></div>
            <div class="space-y-3">
              <div class="h-4 bg-gray-200 rounded w-full"></div>
              <div class="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Default/Generic Skeleton -->
    <div v-else class="space-y-6">
      <div class="h-8 bg-gray-200 rounded-lg w-3/4"></div>
      <div class="h-6 bg-gray-200 rounded-lg w-full"></div>
      <div class="h-6 bg-gray-200 rounded-lg w-5/6"></div>
      <div class="h-6 bg-gray-200 rounded-lg w-4/5"></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'default',
    validator: (value) => [
      'hero', 'stats', 'projects', 'skills', 'about', 'contact', 'project-detail', 'default'
    ].includes(value)
  },
  count: {
    type: Number,
    default: 6
  }
})
</script>

<style scoped>
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style> 