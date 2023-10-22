import Component from "../Component/Component.js";
import { type FilteredPokemonData } from "../../types/types.js";

class PokemonItem extends Component {
  constructor(
    parentElement: Element,
    private readonly pokemon: FilteredPokemonData,
  ) {
    super(parentElement, "li", "pokemon-item");
  }

  protected populate(): void {
    this.element.innerHTML = `
    <span class="pokemon-item--name">
    ${this.pokemon.name}
    </span>
    <a class="pokemon${this.pokemon.id}">
        <img class="pokemon-img" src=${this.pokemon.image}>
    </a>`;
  }
}

export default PokemonItem;
