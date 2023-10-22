import { type FilteredPokemonData, type PokemonData } from "../../types/types";

export const getPokemonById = async (
  pokemonUrl: string,
): Promise<FilteredPokemonData> => {
  const response = await fetch(pokemonUrl);
  const pokemonData = (await response.json()) as PokemonData;

  const filteredPokemonData: FilteredPokemonData = {
    id: pokemonData.id,
    name: pokemonData.name,
    image: pokemonData.sprites.front_default,
  };

  return filteredPokemonData;
};
