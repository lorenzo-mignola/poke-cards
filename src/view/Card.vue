<template>
  <div class="card-container">
    <CardContainer />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import CardContainer from "../components/CardContainer.vue";
import useWallpaperStore from "../store/wallpaperStore";

const wallpaperStore = useWallpaperStore();
const baseUrl = "https://pokewalls.files.wordpress.com";

onMounted(async () => {
  document.body.style.backgroundImage = `url('${baseUrl}${wallpaperStore.url}')`;
});
</script>

<style lang="scss" scoped>
.card-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}
</style>
