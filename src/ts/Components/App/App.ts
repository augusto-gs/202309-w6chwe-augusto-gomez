import Component from "../Component/Component.js";
import Button from "../Button/Button.js";

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

    const nextButton = new Button(this.element, "next", "Next", () => {
      console.log("");
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
}

export default App;
