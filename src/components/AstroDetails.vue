<template>
    <div v-if="body">
      <h2>{{ body.englishName }}</h2>
      <p>Type : {{ body.isPlanet ? 'Planète' : 'Autre' }}</p>
      <p>Gravité : {{ body.gravity }} m/s²</p>
      <p>Masse : {{ body.mass?.massValue }} ×10^{{ body.mass?.massExponent }} kg</p>
      <p v-if="body.moons && body.moons.length">Lunes : {{ body.moons.length }}</p>
      <ul v-if="body.moons">
        <li v-for="moon in body.moons" :key="moon.moon">{{ moon.moon }}</li>
      </ul>
    </div>
  </template>
  
  <script setup>
  defineProps({
    body: {
      type: Object,
      required: true
    }
  })
  </script>
  