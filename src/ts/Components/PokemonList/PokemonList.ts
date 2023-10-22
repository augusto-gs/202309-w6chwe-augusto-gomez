import { getPokemonById } from "../../data/GetPokemonByID/GetPokemonByID.js";
import { type PokemonName } from "../../types/types.js";
import Component from "../Component/Component.js";
import PokemonItem from "../PokemonItem/PokemonItem.js";
import Button from "../Button/Button.js";
import { expandPokemonDetails } from "../../data/expandPokemonDetails.js";
import PokemonCard from "../PokemonCard/PokemonCard.js";

class PokemonList extends Component {
  pokemonUrl: string;

  constructor(
    parentElement: Element,
    private readonly pokemons: PokemonName[],
  ) {
    super(parentElement, "ul", "pokemon-list");
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
        async () => {
          this.pokemonUrl = pokemon.url;
          console.log(this.pokemonUrl);
          this.deletePokemons();
          const expandedPokemonData = await expandPokemonDetails(
            this.pokemonUrl,
          );
          const frame = document.querySelector(".frame")!;
          // Const container = document.createElement("div");
          // container.textContent = expandedPokemonData.height.toString();
          // frame.appendChild(container);
          const pokemonCard = new PokemonCard(frame, expandedPokemonData);
          pokemonCard.render();
        },
      );
      button.render();
    });
  }

  private deletePokemons(): void {
    const frame = document.querySelector(".frame")!;
    frame.querySelector("ul")?.remove();
    frame?.querySelectorAll("li").forEach((listElement) => {
      listElement.remove();
    });
  }
}

export default PokemonList;
