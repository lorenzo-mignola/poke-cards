<template>
  <div class="card-container">
    <CardContainer />
  </div>
  <LinkDialog @show-alert="toggleAlert" />
  <span v-if="showAlert">
    <AlertSuccess />
  </span>
</template>

<script setup>
import { onMounted, ref } from "vue";
import AlertSuccess from "../components/AlertSuccess.vue";
import CardContainer from "../components/CardContainer.vue";
import LinkDialog from "../components/LinkDialog.vue";
import useWallpaperStore from "../store/wallpaperStore";

const wallpaperStore = useWallpaperStore();
const baseUrl = "https://pokewalls.files.wordpress.com/";

const showAlert = ref(false);

const toggleAlert = () => {
  showAlert.value = true;
  setTimeout(() => {
    showAlert.value = false;
  }, 4000);
};

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
