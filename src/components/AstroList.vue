<template>
    <div>
      <div class="astro-list">
        <AstroCard v-for="body in bodies" :key="body.id" :body="body" />
      </div>
    </div>
  </template>
  
  <script setup>
  import AstroCard from './AstroCard.vue'
  
  defineProps({
    bodies: {
      type: Array,
      required: true
    }
  })
  </script>
  
  <style scoped>
  .astro-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  </style>
  