<template>
  <div v-if="body">
    <h1>{{ body.englishName }}</h1>
    <p>Type: {{ body.bodyType }}</p>
    <p v-if="body.isPlanet">C'est une planète</p>
    <p v-else>Ce n'est pas une planète</p>
  </div>
</template>

<script>
import { fetchBodyById } from '../services/api';

export default {
  name: 'BodyDetailView',
  data() {
    return {
      body: null
    };
  },
  async mounted() {
    const id = this.$route.params.id;
    const response = await fetchBodyById(id);
    this.body = response.data;
  }
}
</script>