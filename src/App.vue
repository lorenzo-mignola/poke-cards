<script setup>
import { onMounted } from "vue";
import CardContainer from "./components/CardContainer.vue";
import getRandomWallpaper from "./util/getRandomWallpaper";

onMounted(async () => {
  const wallpaper = await getRandomWallpaper();
  document.body.style.backgroundImage = `url('${wallpaper}')`;
});
</script>

<template>
  <div class="card-container">
    <CardContainer />
  </div>
</template>

<style lang="scss" scoped>
.card-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}
</style>

<style>
#app {
  height: 100vh;
  width: 100vw;
}
</style>
