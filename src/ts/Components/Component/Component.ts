abstract class Component {
  element: Element;

  constructor(
    private readonly parentElement: Element,
    tagName: string,
    className: string,
  ) {
    this.element = document.createElement(tagName);
    this.element.className = className;
  }

  public render(): void {
    this.parentElement.appendChild(this.element);

    this.populate();
  }

  protected abstract populate(): void;
}

export default Component;
