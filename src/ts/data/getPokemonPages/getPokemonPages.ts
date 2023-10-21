import { type PokemonList } from "../../types/types";

export const getPokemonPages = async (
  url: string,
  pageStartingPokemonUrl: string,
): Promise<PokemonList> => {
  const response = await fetch(`${url}${pageStartingPokemonUrl}`);
  const responseBody = (await response.json()) as PokemonList;

  return responseBody;
};

export const sayPokemonNames = (pokemons: PokemonList) => {
  pokemons.results.forEach((pokemon) => {
    console.log(pokemon.name);
  });
};
