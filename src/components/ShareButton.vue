<template>
  <button
    class="p-3 shadow-lg hover:shadow-xl rounded-lg flex items-center mr-4 ml-4 border-gray-800 text-gray-800 border-2"
    @click="shareLink"
  >
    <Share class="mr-2" />Share
  </button>
</template>

<script setup>
import Share from "../assets/Share.svg";
import useNameStore from "../store/nameStore";
import usePokemonStore from "../store/pokemonStore";
import useWallpaperStore from "../store/wallpaperStore";

const nameStore = useNameStore();
const wallpaperStore = useWallpaperStore();
const pokemonStore = usePokemonStore();

const shareLink = () => {
  const body = {
    url: wallpaperStore.url,
    pokemon: pokemonStore.pokemonId,
  };
  const base64Body = btoa(JSON.stringify(body));
  const baseUrl = "https://lorenzo-mignola-poke-card.netlify.app/#/";
  pokemonStore.setLink(`${baseUrl}/${nameStore.name}&pokemon=${base64Body}`);
};
</script>

<style lang="scss" scoped>
.add-button {
  :disabled {
    background: grey;
  }
}
</style>
