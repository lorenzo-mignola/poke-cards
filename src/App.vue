<script setup>
import { onMounted } from "vue";
import CardContainer from "./components/CardContainer.vue";
import useWallpaperStore from "./store/wallpaperStore";
import getRandomWallpaper from "./util/getRandomWallpaper";

const wallpaperStore = useWallpaperStore();
const baseUrl = "https://pokewalls.files.wordpress.com";

onMounted(async () => {
  const wallpaper = await getRandomWallpaper();
  wallpaperStore.setWallpaper(wallpaper.replace(baseUrl, ""));
  document.body.style.backgroundImage = `url('${baseUrl}${wallpaperStore.url}')`;
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
