<template>
  <button
    class="button-primary p-3 lg:text-2xl text-md shadow-lg hover:shadow-xl rounded-lg flex items-center mr-4 ml-4"
    :disabled="!pokemonStore.canAddPokemon"
    @click="pokemonStore.addPokemon"
  >
    <Add class="mr-2" />Add Pokémon
  </button>
</template>

<script setup>
import Add from "../assets/Add.svg";
import usePokemonStore from "../store/pokemonStore";

const pokemonStore = usePokemonStore();
</script>

<style lang="scss" scoped></style>
