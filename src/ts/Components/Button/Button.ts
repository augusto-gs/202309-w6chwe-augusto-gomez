import Component from "../Component/Component.js";

class Button extends Component {
  constructor(
    parentElement: Element,
    buttonType: string,
    private readonly text: string,
    private readonly actionOnClick: () => void,
  ) {
    super(parentElement, "button", `button button--${buttonType}`);

    this.addListeners();
  }

  protected populate(): void {
    this.element.textContent = this.text;
  }

  private addListeners(): void {
    this.element.addEventListener("click", this.actionOnClick);
  }
}

export default Button;
