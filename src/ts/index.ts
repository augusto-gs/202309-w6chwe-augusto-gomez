import {
  getPokemonPages,
  sayPokemonNames,
} from "./data/getPokemonPages/getPokemonPages.js";

const firstPageUrl = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=";
const pageStartingPokemonUrl = "100";

const pokemonInfo = await getPokemonPages(firstPageUrl, pageStartingPokemonUrl);

sayPokemonNames(pokemonInfo);
