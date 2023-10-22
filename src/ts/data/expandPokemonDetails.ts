import { type PokemonDetails } from "../types/types";

export const expandPokemonDetails = async (pokemonUrl: string) => {
  const response = await fetch(pokemonUrl);
  const pokemonData = (await response.json()) as PokemonDetails;

  return pokemonData;
};
