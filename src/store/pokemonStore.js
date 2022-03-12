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

      try {
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
      } catch (error) {
        // eslint-disable-next-line no-console
        console.info(`Pokemon with id ${pokemonId} not found`);
      }
    },
    removePokemon(index) {
      const prevId = this.pokemonId[index];
      this.pokemonId.splice(index, 1);
      delete this.pokemon[prevId];
    },
  },
});

export default usePokemonStore;
