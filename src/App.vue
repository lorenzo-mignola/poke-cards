<script setup>
import { onMounted } from "vue";
import useWallpaperStore from "./store/wallpaperStore";
import getRandomWallpaper from "./util/getRandomWallpaper";

const wallpaperStore = useWallpaperStore();
const baseUrl = "https://pokewalls.files.wordpress.com";

onMounted(async () => {
  const wallpaper = await getRandomWallpaper();
  wallpaperStore.setWallpaper(wallpaper.replace(baseUrl, ""));
});
</script>

<template>
  <router-view></router-view>
</template>

<style>
#app {
  height: 100vh;
  width: 100vw;
}
</style>
