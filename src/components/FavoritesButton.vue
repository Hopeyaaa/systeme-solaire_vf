<template>
    <button @click="toggleFavorite">
      {{ isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris' }}
    </button>
  </template>
  
  <script setup>
  import { useFavoritesStore } from '@/stores/favoritesStore'
  import { computed } from 'vue'
  
  const props = defineProps({
    body: Object
  })
  
  const store = useFavoritesStore()
  
  const isFavorite = computed(() =>
    store.favorites.some(fav => fav.id === props.body.id)
  )
  
  function toggleFavorite() {
    if (isFavorite.value) {
      store.removeFavorite(props.body.id)
    } else {
      store.addFavorite(props.body)
    }
  }
  </script>
  