<template>
    <div class="astro-card">
      <img :src="image" alt="image de l'astre" class="astro-img" />
      <h3>{{ body.englishName }}</h3>
      <p v-if="body.isPlanet">🌍 Planète</p>
      <p v-else>🪐 Autre astre</p>
      <router-link :to="`/astre/${body.id}`">Voir détails</router-link>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  
  defineProps({
    body: {
      type: Object,
      required: true
    }
  })
  
  const image = computed(() => {
    return body.image || 'https://img.icons8.com/emoji/96/planet-emoji.png'
  })
  </script>
  
  <style scoped>
  .astro-card {
    border: 1px solid #ccc;
    border-radius: 12px;
    padding: 1rem;
    text-align: center;
    max-width: 200px;
  }
  .astro-img {
    width: 80px;
    height: 80px;
    object-fit: contain;
    margin-bottom: 0.5rem;
  }
  </style>
  