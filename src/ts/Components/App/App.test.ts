import App from "./App";

describe("Given an App component", () => {
  describe("When it receives a div parent element", () => {
    test("Then it should show 'Pokemon page' inside a heading", () => {
      const container = document.createElement("div");

      const app = new App(container);
      app.render();

      const heading = container.querySelector(".main-title")!;

      expect(heading).not.toBeNull();
      expect(heading?.textContent).toBe("Pokemon Page");
    });
  });
});
