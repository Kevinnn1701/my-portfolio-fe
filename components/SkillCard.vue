<template>
  <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 group">
    <!-- Skill Header -->
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
        {{ skill.name }}
      </h3>
      <span class="text-sm font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded-full capitalize">
        {{ skill.category_name }}
      </span>
    </div>

    <!-- Progress Bar -->
    <div class="mb-4">
      <div class="flex justify-between items-center mb-2">
        <span class="text-sm font-medium text-gray-700">Proficiency</span>
        <span class="text-sm font-bold text-blue-600">{{ skill.percentage }}%</span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div 
          class="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
          :style="{ width: animatedProgress + '%' }"
        ></div>
      </div>
    </div>

    <!-- Skill Description -->
    <p class="text-gray-600 text-sm leading-relaxed">
      {{ skill.description }}
    </p>

    <!-- Skill Level Badge -->
    <div class="mt-4">
      <span 
        :class="[
          'inline-block px-3 py-1 rounded-full text-xs font-semibold',
          getSkillLevelClass(skill.percentage)
        ]"
      >
        {{ getSkillLevel(skill.percentage) }}
      </span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  skill: {
    type: Object,
    required: true
  }
})

// Animated progress bar
const animatedProgress = ref(0)

// Start animation when component mounts
onMounted(() => {
  // Use a timeout to create a nice animation effect
  setTimeout(() => {
    animatedProgress.value = props.skill.percentage
  }, 200)
})

// Methods
const getSkillLevel = (percentage) => {
  if (percentage >= 90) return 'Expert'
  if (percentage >= 80) return 'Advanced'
  if (percentage >= 70) return 'Proficient'
  if (percentage >= 60) return 'Intermediate'
  return 'Beginner'
}

const getSkillLevelClass = (percentage) => {
  if (percentage >= 90) return 'bg-green-100 text-green-800'
  if (percentage >= 80) return 'bg-blue-100 text-blue-800'
  if (percentage >= 70) return 'bg-purple-100 text-purple-800'
  if (percentage >= 60) return 'bg-yellow-100 text-yellow-800'
  return 'bg-gray-100 text-gray-800'
}
</script> 