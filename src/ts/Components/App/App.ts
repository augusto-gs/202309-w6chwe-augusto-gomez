import Component from "../Component/Component.js";
import Button from "../Button/Button.js";
import { getPokemonPages } from "../../data/getPokemonPages/getPokemonPages.js";
import PokemonList from "../PokemonList/PokemonList.js";

class App extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "div", "container");
  }

  protected populate(): void {
    this.element.innerHTML = `
      <header class="main-header">
        <h1 class="main-title">Pokemon Page</h1>
      </header>
      <main class="main">
        <section class="frame container">
        </section>
      </main>
    `;

    const nextButton = new Button(this.element, "next", "Next", async () => {
      const currentPageUrl =
        "https://pokeapi.co/api/v2/pokemon?limit=10&offset=";
      let pageStartingPokemonUrl = 0;
      const frame = this.deletePokemonList();
      pageStartingPokemonUrl += 10;

      const pokemonInfo = await getPokemonPages(
        currentPageUrl,
        pageStartingPokemonUrl,
      );

      const pokemonList = new PokemonList(frame, pokemonInfo.results);
      pokemonList.render();
    });
    nextButton.render();

    const previousButton = new Button(
      this.element,
      "previous",
      "Previous",
      () => {
        console.log("");
      },
    );
    previousButton.render();
  }

  private deletePokemonList() {
    const frame = document.querySelector(".frame")!;
    frame.querySelector("ul")?.remove();
    frame?.querySelectorAll("li").forEach((listElement) => {
      listElement.remove();
    });
    return frame;
  }
}

export default App;
