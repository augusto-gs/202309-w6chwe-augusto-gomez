import PokemonItem from "./PokemonItem";

describe("Given a PokemonItem component", () => {
  describe("When it receives a div element and a pokemon", () => {
    test("Then it should show its name", () => {
      const container = document.createElement("div");
      const expectedName = "exeggcute";
      const pokemonList = [
        {
          name: "electrode",
          url: "https://pokeapi.co/api/v2/pokemon/101/",
        },
        {
          name: "exeggcute",
          url: "https://pokeapi.co/api/v2/pokemon/102/",
        },
      ];

      const pokemon = new PokemonItem(container, pokemonList[1]);
      pokemon.render();
      const pokemonNameElement = container.querySelector(".pokemon-item--name");

      expect(pokemonNameElement).not.toBeNull();
      expect(pokemonNameElement?.textContent?.trim()).toBe(expectedName);
    });
  });
});
