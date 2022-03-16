<template>
  <button
    class="button-primary p-3 lg:text-2xl text-md shadow-lg hover:shadow-xl rounded-lg flex items-center mr-4 ml-4 mt-4 justify-center"
    @click="clickShare"
  >
    <Copy class="mr-2" />Copy link
  </button>
</template>

<script setup>
import Copy from "../assets/Copy.svg";
import usePokemonStore from "../store/pokemonStore";
import copyTextToClipboard from "../util/copyToClipboard";

const emit = defineEmits(["alert"]);

const pokemonStore = usePokemonStore();

const clickShare = () => {
  copyTextToClipboard(pokemonStore.link, () => emit("alert"));
  pokemonStore.setLink(null);
};
</script>

<style lang="scss" scoped></style>
