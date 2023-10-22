import PokemonList from "./PokemonList";
import mockData from "../../mockFetch/mockData.json";

describe("Given a PokemonList component", () => {
  describe("When it receives a a div element and a list of pokemon", () => {
    test("Then it should show a  pokemon", () => {
      const container = document.createElement("div");
      const expectedPokemonList = [
        {
          name: "electrode",
          url: "https://pokeapi.co/api/v2/pokemon/101/",
        },
        {
          name: "exeggcute",
          url: "https://pokeapi.co/api/v2/pokemon/102/",
        },
        {
          name: "exeggutor",
          url: "https://pokeapi.co/api/v2/pokemon/103/",
        },
      ];

      const actualPokemonList = new PokemonList(container, expectedPokemonList);
      actualPokemonList.render();
      const expectedElement = container.querySelector(".pokemon-list");
      const expectedChildElement = container.querySelector(
        ".pokemon-item--name",
      );

      expect(expectedElement).not.toBeNull();
      expect(expectedChildElement).not.toBeNull();
    });
  });
});
