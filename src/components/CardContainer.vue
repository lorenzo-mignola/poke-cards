<template>
  <div class="glass-card card">
    <h1
      class="glass text-6xl bold capitalize shadow-none p-6 flex items-center w-full justify-center"
    >
      <PokeBall class="pokeball mr-3" />
      Lorenzo card
      <PokeBall class="pokeball ml-3" />
    </h1>
    <div class="pokemons p-5">
      <PokeCard />
      <PokeCard />
    </div>
  </div>
</template>

<script setup>
import PokeBall from "../assets/Poké_Ball_icon.svg";
import PokeCard from "./PokeCard.vue";
</script>

<style lang="scss" scoped>
.card {
  width: 80vw;
}

h1 {
  font-family: "Poppins", sans-serif;
}

.pokeball {
  width: 2.5rem;
  height: 2.5rem;
}

.pokemons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-gap: 1rem;
}
</style>
