<template>
  <div>
    <NuxtRouteAnnouncer />
    <Header />
    <main class="min-h-screen">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup>
// Global meta tags
useHead({
  titleTemplate: '%s | Portfolio',
  meta: [
    { name: 'description', content: 'Professional portfolio showcasing my work and skills' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
})
</script>
