export interface PokemonList {
  count: number;
  next: string;
  previous: string;
  results: PokemonName[];
}

export interface PokemonName {
  name: string;
  url: string;
}

export interface PokemonData {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
}

export interface FilteredPokemonData {
  id: number;
  name: string;
  image: string;
}
