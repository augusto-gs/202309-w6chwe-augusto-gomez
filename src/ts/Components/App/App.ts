import Component from "../Component/Component.js";

class App extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "div", "container");
  }

  protected populate(): void {
    this.element.innerHTML = `
      <header class="main-header">
        <img class="header-logo" src="./images/pokemon-23.svg" alt="Pokemon logo" />
      </header>
      <main class="main">
        <section class="frame container">
        </section>
      </main>
    `;
  }
}

export default App;
