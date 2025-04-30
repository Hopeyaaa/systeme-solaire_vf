<template>
  <div class="page">
    <h1>Liste des astres</h1>
    <AstroList :bodies="bodies" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AstroList from '@/components/AstroList.vue'

const bodies = ref([])

onMounted(async () => {
  try {
    const res = await fetch('https://api.le-systeme-solaire.net/rest/bodies/')
    const data = await res.json()
    bodies.value = data.bodies
  } catch (error) {
    console.error('Erreur lors du chargement des astres', error)
  }
})
</script>

<style scoped>
.page {
  padding: 1rem;
}
</style>
