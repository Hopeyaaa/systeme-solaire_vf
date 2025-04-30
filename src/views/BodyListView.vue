<template>
  <div>
    <h1>Liste des astres</h1>
    <ul>
      <li v-for="body in bodies" :key="body.id">
        <router-link :to="'/body/' + body.id">{{ body.englishName }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { fetchBodies } from '../services/api';

export default {
  name: 'BodyListView',
  data() {
    return {
      bodies: []
    };
  },
  async mounted() {
    const response = await fetchBodies();
    this.bodies = response.data.bodies.slice(0, 10); // Charge juste les 10 premiers pour alléger
  }
}
</script>