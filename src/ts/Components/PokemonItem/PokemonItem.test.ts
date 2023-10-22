import PokemonItem from "./PokemonItem";

describe("Given a PokemonItem component", () => {
  describe("When it receives a div element and a pokemon", () => {
    test("Then it should show its name", () => {
      const container = document.createElement("div");
      const expectedName = "exeggcute";
      const pokemonList = [
        {
          id: 1,
          name: "electrode",
          url: "https://pokeapi.co/api/v2/pokemon/101/",
          image: "",
        },
        {
          id: 2,
          name: "exeggcute",
          url: "https://pokeapi.co/api/v2/pokemon/102/",
          image: "",
        },
      ];

      const pokemon = new PokemonItem(container, pokemonList[0]);
      pokemon.render();
      const pokemonNameElement = container.querySelector(".pokemon-item--name");

      expect(pokemonNameElement).not.toBeNull();
      expect(pokemonNameElement?.textContent?.trim()).toBe(expectedName);
    });
  });
});
