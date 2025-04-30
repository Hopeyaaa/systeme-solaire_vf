<template>
  <div class="app">
    <img src="@/assets/planet.png" alt="Planète" class="planet" />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
.app {
  background-image: url('@/assets/background.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.planet {
  width: 200px;
  animation: rotate 20s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
