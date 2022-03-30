import { expect } from "chai";
import RecipeRepository from "../src/classes/RecipeRepository";
import recipes from "../src/data/recipes";
import ingredients from "../src/data/ingredients";
// const recipes = require("..src/data/recipes");

describe("Recipe Repository", () => {
  let recipeData;
  let ingredData;
  let recipeRepo;

  beforeEach(() => {
    recipeData = recipes;
    ingredData = ingredients;
    recipeRepo = new RecipeRepository(ingredData, recipeData);

  });

  it.skip("Should be a function", () => {
    expect(RecipeRepository).to.be.a("function");
  });

  it.skip("Should be an instance of Recipe Repository", () => {
    expect(recipeRepo).to.be.an.instanceOf(RecipeRepository);
  });

  it.skip("Should be able to hold recipe data", () => {
    expect(recipeRepo.data).to.equal(data);
  });

  it.skip("Should have a method that filters by tag", () => {
    const dataTest = recipeRepo.filterRecipeTag("snack");
    
    expect(dataTest.length).to.equal(9);
  });

  it.skip("Should have a method that filters by name", () => {
    const dataTest = recipeRepo.filterRecipeName(
      "Loaded Chocolate Chip Pudding Cookie Cups"
    );

    expect(dataTest[0]).to.deep.equal(data[0]);
  });

  it.skip("Should convert recipe data into instances of Recipe", () => {
    console.log(recipeRepo)
    expect().to.equal();
  });
});
