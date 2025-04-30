<template>
    <div class="planet">
      <img :src="planet.image" :alt="planet.name" />
      <p>{{ planet.name }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Planet',
    props: {
      planet: Object
    }
  }
  </script>
  
  <style scoped>
  .planet {
    text-align: center;
    margin: 1rem;
  }
  .planet img {
    width: 100px;
  }
  </style>
  