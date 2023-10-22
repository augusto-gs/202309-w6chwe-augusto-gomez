import { getPokemonPages } from "./data/getPokemonPages/getPokemonPages.js";
import App from "./Components/App/App.js";
import PokemonList from "./Components/PokemonList/PokemonList.js";
import Button from "./Components/Button/Button.js";

const firstPageUrl = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=";
let pageStartingPokemonUrl = 0;

export const pokemonInfo = await getPokemonPages(
  firstPageUrl,
  pageStartingPokemonUrl,
);

const body = document.querySelector("body")!;

const app = new App(body);
app.render();
const frame = document.querySelector(".frame")!;

const pokemonList = new PokemonList(frame, pokemonInfo.results);
pokemonList.render();

const deletePokemonList = () => {
  const frame = document.querySelector(".frame")!;
  frame.querySelector("ul")?.remove();
  frame?.querySelectorAll("li").forEach((listElement) => {
    listElement.remove();
  });
};

const nextButton = new Button(body, "next", "Next", async () => {
  deletePokemonList();
  pageStartingPokemonUrl += 10;
  const currentPageUrl = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=";

  const pokemonInfo = await getPokemonPages(
    currentPageUrl,
    pageStartingPokemonUrl,
  );

  const pokemonList = new PokemonList(frame, pokemonInfo.results);
  pokemonList.render();
});
nextButton.render();

const previousButton = new Button(body, "previous", "Previous", async () => {
  deletePokemonList();
  const currentPageUrl = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=";

  pageStartingPokemonUrl -= 10;

  const pokemonInfo = await getPokemonPages(
    currentPageUrl,
    pageStartingPokemonUrl,
  );

  const pokemonList = new PokemonList(frame, pokemonInfo.results);
  pokemonList.render();
});
previousButton.render();
