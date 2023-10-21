import { type PokemonName } from "../../types/types.js";
import Component from "../Component/Component.js";
import PokemonItem from "../PokemonItem/PokemonItem.js";

class PokemonList extends Component {
  constructor(
    parentElement: Element,
    private readonly pokemons: PokemonName[],
  ) {
    super(parentElement, "ul", "pokemon-list");
  }

  protected populate(): void {
    this.pokemons.forEach((pokemon) => {
      const pokemonItem = new PokemonItem(this.element, pokemon);
      pokemonItem.render();
    });
  }
}

export default PokemonList;
