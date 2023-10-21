import {
  getPokemonPages,
  sayPokemonNames,
} from "./data/getPokemonPages/getPokemonPages.js";
import App from "./Components/App/App.js";
import PokemonItem from "./Components/PokemonItem/PokemonItem.js";

const firstPageUrl = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=";
const pageStartingPokemonUrl = "100";

const pokemonInfo = await getPokemonPages(firstPageUrl, pageStartingPokemonUrl);

sayPokemonNames(pokemonInfo);

const body = document.querySelector("body")!;

const app = new App(body);
app.render();
const frame = document.querySelector(".frame");
const pokemonUnit = new PokemonItem(frame!, pokemonInfo.results[0]);
pokemonUnit.render();
