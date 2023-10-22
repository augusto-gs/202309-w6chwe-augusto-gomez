import { getPokemonPages } from "./getPokemonPages.js";
import { mockFetch } from "../../mockFetch/mockFetch.js";
import mockData from "../../mockFetch/mockData.json";

describe("Given a getPokemonPages function", () => {
  describe("When you receive url for a starting page and a number ok pokemon to start the page viewing", () => {
    test("You receive a list of pokemon and a corresponding URL for details", async () => {
      const startingUrl = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=";
      const pageStartingPokemonUrl = 100;
      const testName = "electrode";
      window.fetch = mockFetch(mockData);

      const pokemonInfo = await getPokemonPages(
        startingUrl,
        pageStartingPokemonUrl,
      );
      expect(pokemonInfo.results[0].name).toBe(testName);
    });
  });
});
