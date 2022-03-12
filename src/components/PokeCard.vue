<template>
  <div class="group rounded-full glass poke-card flex items-center">
    <div class="sprite rounded-full">
      <img v-if="pokemon" :src="pokemon.sprite" />
    </div>
    <div class="w-full flex justify-between pr-7 items-center lg:ml-6 ml-3">
      <div class="flex items-center">
        <span class="font-semibold lg:text-xl text-md mr-1">#</span>
        <input
          v-model="pokemonId"
          type="number"
          class="rounded-lg lg:text-xl text-md lg:p-3 p-1 lg:mr-4 mr-1 bg-white bg-opacity-60 text-center font-semibold border border-gray-300"
          @keyup="loadPokemon"
        />
        <span v-if="pokemon" class="lg:text-3xl text-lg uppercase">{{
          pokemon.name
        }}</span>
      </div>
      <div class="hidden group-hover:flex transition-all duration-150">
        <button class="hover:shadow-xl text-gray-600 hover:text-gray-900">
          <Delete class="delete-icon" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useDebounceFn } from "@vueuse/core";
import { ref } from "vue";
import Delete from "../assets/Delete.svg";
import usePokemonStore from "../store/pokemonStore";

const props = defineProps({
  id: {
    type: Number || null,
    default: null,
  },
  index: {
    type: Number,
    required: true,
  },
});

const pokemonStore = usePokemonStore();

const pokemon = pokemonStore.pokemon[props.id];

const pokemonId = ref(props.id);

const loadPokemon = useDebounceFn(() => {
  pokemonStore.getPokemonData(pokemonId.value, props.index);
}, 300);
</script>

<style lang="scss" scoped>
.sprite {
  min-height: 80px;
  min-width: 80px;
  background-color: #fff;
}

.poke-card {
  font-family: "Poppins", sans-serif;
  input {
    max-width: 100px;
    @media (max-width: 1024px) {
      max-width: 50px;
    }
  }
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

.delete-icon {
  height: 25px;
  width: 25px;
}
</style>
