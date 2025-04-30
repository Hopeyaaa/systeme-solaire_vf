<template>
  <div class="favorites">
    <h1>Mes Favoris</h1>
    <ul>
      <li v-for="body in favorites" :key="body.id">
        <router-link :to="'/body/' + body.id">{{ body.englishName }}</router-link>
        <button @click="toggleFavorite(body)">Retirer</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'FavoritesView',
  computed: {
    ...mapState(['favorites'])
  },
  methods: {
    ...mapMutations(['toggleFavorite'])
  }
}
</script>

<style scoped>
.favorites {
  background: #121232;
  color: white;
  padding: 2rem;
}
button {
  margin-left: 1rem;
  background: #e91e63;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}
</style>