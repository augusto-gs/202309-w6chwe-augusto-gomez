import { getPokemonById } from "../../data/GetPokemonByID/GetPokemonByID.js";
import { type PokemonName } from "../../types/types.js";
import Component from "../Component/Component.js";
import PokemonItem from "../PokemonItem/PokemonItem.js";
import Button from "../Button/Button.js";

class PokemonList extends Component {
  pokemonUrl: string;

  constructor(
    parentElement: Element,
    private readonly pokemons: PokemonName[],
  ) {
    super(parentElement, "ul", "pokemon-list");
  }

  printPokemon(pokemon: PokemonName): string {
    console.log(`${pokemon.url}`);
    return pokemon.url;
  }

  protected populate(): void {
    this.pokemons.forEach(async (pokemon) => {
      const pokemonData = await getPokemonById(pokemon.url);
      const pokemonItem = new PokemonItem(this.element, pokemonData);
      pokemonItem.render();
      const button = new Button(
        this.element,
        `button${pokemon.name}`,
        "Details",
        () => {
          this.pokemonUrl = pokemon.url;
          console.log(this.pokemonUrl);
        },
      );
      button.render();
    });
  }
}

export default PokemonList;
