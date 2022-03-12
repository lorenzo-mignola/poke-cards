<template>
  <button
    class="add-button p-3 lg:text-2xl text-md shadow-lg hover:shadow-xl rounded-lg flex items-center mr-4 ml-4"
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

<style lang="scss" scoped>
.add-button {
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(247, 87, 0, 1) 0%,
    rgba(249, 0, 0, 1) 90.1%
  );
  color: white;
  &:disabled {
    box-shadow: none;
    &:hover {
      box-shadow: none;
    }
    background: #9ca3af;
  }
}
</style>
