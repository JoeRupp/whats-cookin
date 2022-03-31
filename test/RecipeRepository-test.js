import { expect } from "chai";
import RecipeRepository from "../src/classes/RecipeRepository";
import Recipe from "../src/classes/Recipe";
import recipes from "../src/data/recipes";
import ingredients from "../src/data/ingredients";

describe("Recipe Repository", () => {
  let recipeData;
  let ingredData;
  let recipeRepo;

  beforeEach(() => {
    recipeData = recipes;
    ingredData = ingredients;
    recipeRepo = new RecipeRepository(ingredData, recipeData);

  });

  it("Should be a function", () => {
    expect(RecipeRepository).to.be.a("function");
  });

  it("Should be an instance of Recipe Repository", () => {
    expect(recipeRepo).to.be.an.instanceOf(RecipeRepository);
  });

  it("Should be able to hold recipe data", () => {
    expect(recipeRepo.recipeData).to.equal(recipeData);
  });

  it("Should be able to hold ingredient data", () => {
    expect(recipeRepo.ingredData).to.equal(ingredData);
  });

  it("Should convert recipe data into instance of Recipe", () => {
    expect(recipeRepo.repo[0]).to.be.an.instanceOf(Recipe);
  });

  it("Should convert recipe data into an array of Recipes", () => {
    expect(recipeRepo.repo).to.be.a("array");
  });

  it("Should have a method that filters by tag", () => {
    const dataTest = recipeRepo.filterRecipeTag("snack");
    
    expect(dataTest.length).to.equal(9);
  });

  it("Should filter by tag even if user inputs all capitalized letters", () => {
    const dataTest = recipeRepo.filterRecipeTag("SNACK");
    
    expect(dataTest.length).to.equal(9);
  });

  it("Should have a method that filters by name", () => {
    const dataTest = recipeRepo.filterRecipeName("loaded chocolate chip pudding cookie cups");

    expect(dataTest[0].name).to.equal(recipeData[0].name);
  });

  it("Should filter by name even if user inputs all capitalized letters", () => {
    const dataTest = recipeRepo.filterRecipeName("LOADED CHOCOLATE CHIP PUDDING COOKIE CUPS");

    expect(dataTest[0].name).to.equal(recipeData[0].name);
  });
});
