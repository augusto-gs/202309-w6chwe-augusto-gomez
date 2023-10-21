import Component from "../Component/Component.js";
import { type PokemonName } from "../../types/types.js";

class PokemonItem extends Component {
  constructor(
    parentElement: Element,
    private readonly pokemon: PokemonName,
  ) {
    super(parentElement, "div", "pokemon-item");
  }

  protected populate(): void {
    this.element.innerHTML = `
    <span class="pokemon-item--name">
    ${this.pokemon.name}
    </span>
    <a href="" class="pokemon-item-url">
    ${this.pokemon.url}
    </a>`;
  }
}

export default PokemonItem;
