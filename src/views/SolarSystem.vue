<template>
  <div class="solar-system">
    <h1>Système Solaire</h1>
    <div class="planets">
      <div v-for="planet in planets" :key="planet.id"
           class="planet"
           :style="{ left: (planet.semimajorAxis / 1e6) + 'px' }">
        🪐 {{ planet.englishName }}
      </div>
    </div>
  </div>
</template>

<script>
import { fetchBodies } from '../services/api';

export default {
  name: 'SolarSystem',
  data() {
    return { planets: [] };
  },
  async mounted() {
    const res = await fetchBodies();
    this.planets = res.data.bodies.filter(b => b.isPlanet);
  }
}
</script>

<style scoped>
.solar-system {
  background: #01012b;
  color: white;
  padding: 2rem;
  overflow-x: auto;
}
.planets {
  position: relative;
  height: 100px;
}
.planet {
  position: absolute;
  top: 40px;
  white-space: nowrap;
}
</style>