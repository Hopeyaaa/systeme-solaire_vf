<template>
  <div class="page">
    <AstroDetails v-if="body" :body="body" />
    <p v-else>Chargement...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import AstroDetails from '@/components/AstroDetails.vue'

const route = useRoute()
const body = ref(null)

onMounted(async () => {
  try {
    const res = await fetch(`https://api.le-systeme-solaire.net/rest/bodies/${route.params.id}`)
    body.value = await res.json()
  } catch (error) {
    console.error('Erreur lors du chargement de l’astre', error)
  }
})
</script>

<style scoped>
.page {
  padding: 1rem;
}
</style>
