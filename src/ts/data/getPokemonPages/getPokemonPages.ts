import { type PokemonList } from "../../types/types";

const firstPageUrl = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=";
const pageStartingPokemonUrl = "100";

const getPokemonPages = async (
  url: string,
  pageStartingPokemonUrl: string,
): Promise<PokemonList> => {
  const response = await fetch(`${url}${pageStartingPokemonUrl}`);
  const responseBody = (await response.json()) as PokemonList;

  return responseBody;
};

export const pokemonInfo = await getPokemonPages(
  firstPageUrl,
  pageStartingPokemonUrl,
);

export const sayPokemonNames = (pokemons: PokemonList) => {
  pokemons.results.forEach((pokemon) => {
    console.log(pokemon.name);
  });
};

sayPokemonNames(pokemonInfo);
