<template>
  <div class="glass-card card">
    <h1
      class="glass lg:text-6xl md:3xl bold capitalize shadow-none p-6 flex items-center w-full justify-center"
    >
      <PokeBall class="pokeball mr-3" />
      {{ nameStore.name }} card
      <PokeBall class="pokeball ml-3" />
    </h1>
    <div class="pokemons p-5">
      <div v-for="(pokemon, index) in pokemonId" :key="pokemon">
        <PokeCard :id="pokemon" :index="index" />
      </div>
    </div>
    <div class="flex justify-center mt-4 mb-6">
      <ShareButton />
      <AddButton />
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import PokeBall from "../assets/Poké_Ball_icon.svg";
import useNameStore from "../store/nameStore";
import usePokemonStore from "../store/pokemonStore";
import AddButton from "./AddButton.vue";
import PokeCard from "./PokeCard.vue";
import ShareButton from "./ShareButton.vue";

const pokemonStore = usePokemonStore();
const nameStore = useNameStore();
const router = useRouter();

const { pokemonId } = storeToRefs(pokemonStore);

if (!nameStore.name) {
  router.push("/");
}
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
  @media (max-width: 1024px) {
    width: 1.5rem;
    height: 1.5rem;
  }
}

.pokemons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  grid-gap: 1rem;
}
</style>
