import { type PokemonDetails } from "../../types/types";
import Component from "../Component/Component.js";

class PokemonCard extends Component {
  constructor(
    parentElement: Element,
    private readonly pokemonDetails: PokemonDetails,
  ) {
    super(parentElement, "article", "pokemon-card");
  }

  protected populate(): void {
    this.element.innerHTML = `
    <img class="pokemon-card--image"src=${this.pokemonDetails.sprites.other["official-artwork"].front_default} alt="" />
    <span class="pokemon-card--weight">${this.pokemonDetails.weight}
    </span>
    <span class="pokemon-card--height">${this.pokemonDetails.height}
    </span>`;
  }
}

export default PokemonCard;
