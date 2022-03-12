import axios from "axios";
import { defineStore } from "pinia";

const usePokemonStore = defineStore("pokemon", {
  state: () => ({
    pokemonId: [],
    pokemon: {},
  }),
  actions: {
    addPokemon() {
      this.pokemonId.push(null);
    },
    async getPokemonData(pokemonId, index) {
      if (!pokemonId) {
        const prevId = this.pokemonId[index];
        this.pokemonId[index] = null;
        this.pokemon[prevId] = undefined;
        return;
      }

      const { data: pokemon } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
      );

      if (!pokemon) {
        return;
      }

      const {
        id,
        name,
        sprites: { front_default: sprite },
      } = pokemon;
      this.pokemon[pokemonId] = { id, name, sprite };
      this.pokemonId[index] = id;
      console.log("clg -> getPokemonData -> this.pokemon", this.pokemon);
    },
  },
});

export default usePokemonStore;
