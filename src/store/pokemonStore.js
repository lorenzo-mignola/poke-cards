import { defineStore } from "pinia";

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
const usePokemonStore = defineStore("pokemon", {
  state: () => ({
    pokemon: [],
  }),
});

export default usePokemonStore;
