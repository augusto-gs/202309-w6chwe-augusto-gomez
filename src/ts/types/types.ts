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

export interface ExpandedPokemonData {
  height: number;
  image: string;
  weight: number;
}

export interface PokemonDetails {
  abilities: unknown[];
  base_experience: number;
  forms: unknown[];
  game_indices: unknown[];
  height: number;
  held_items: unknown[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: unknown[];
  name: string;
  order: number;
  past_abilities: unknown[];
  past_types: unknown[];
  species: Record<string, unknown>;
  sprites: PokeSprites;
  stats: unknown[];
  types: unknown[];
  weight: number;
}

export interface PokeSprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: undefined;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: Other;
  versions: Record<string, unknown>;
}

export interface Other {
  dream_world: Record<string, unknown>;
  home: Record<string, unknown>;
  "official-artwork": OfficialArtWork;
}

export interface OfficialArtWork {
  front_default: string;
  front_shiny: string;
}
