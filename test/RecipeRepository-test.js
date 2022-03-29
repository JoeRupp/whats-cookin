import { expect } from "chai";
import RecipeRepository from "../src/classes/RecipeRepository";
import recipes from "../src/data/recipes";
// const recipes = require("..src/data/recipes");

describe("Recipe", () => {
  let data;
  let recipeRepo;
  beforeEach(() => {
    data = recipes.recipeData;
    recipeRepo = new RecipeRepository(data);
  });
  it("Should be a function", () => {
    expect(RecipeRepository).to.be.a("function");
  });
  it("Should be an instance of Recipe Repository", () => {
    expect(recipeRepo).to.be.an.instanceOf(RecipeRepository);
  });
  it("Should be able to hold recipe data", () => {
    console.log(data[0]);
    expect(recipeRepo.data).to.equal(data);
  });
  it("Should have a method that filters by tag", () => {
    console.log(recipeRepo.filterRecipe("snack"));
    // expect(RecipeRepository.filterRecipe("snack").to.equal())
  });
});
