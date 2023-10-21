import { getPokemonPages } from "./data/getPokemonPages/getPokemonPages.js";
import App from "./Components/App/App.js";
import PokemonList from "./Components/PokemonList/PokemonList.js";

const firstPageUrl = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=";
const pageStartingPokemonUrl = "100";

const pokemonInfo = await getPokemonPages(firstPageUrl, pageStartingPokemonUrl);

const body = document.querySelector("body")!;

const app = new App(body);
app.render();
const frame = document.querySelector(".frame")!;

const pokemonList = new PokemonList(frame, pokemonInfo.results);
pokemonList.render();
