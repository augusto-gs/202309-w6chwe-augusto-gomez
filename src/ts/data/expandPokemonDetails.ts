import { type PokemonDetails } from "../types/types";

export const expandPokemonDetails = async (pokemonUrl: string) => {
  const response = await fetch(pokemonUrl);
  const pokemonData = (await response.json()) as PokemonDetails;

  // Const expandPokemonData: ExpandedPokemonData = {
  //   height: pokemonData.height,
  //   image: pokemonData.sprites.other["official-artwork"].front_default,
  //   weight: pokemonData.weight,
  // };

  return pokemonData;
};
