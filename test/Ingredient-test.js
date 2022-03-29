import { expect } from "chai";
import Ingredient from "../src/classes/Ingredient";
// import ingredients from "../src/data/ingredients";

describe("Ingredient", () => {
  let ingredient;
  let testIngredient;
  let faltyIngredient;
  
  beforeEach(() => {
    testIngredient = {
      "id": 20081,
      "name": "wheat flour",
      "estimatedCostInCents": 142
    }

    ingredient = new Ingredient(testIngredient.id, testIngredient.name, testIngredient.estimatedCostInCents);

    faltyIngredient = new Ingredient();
  });

  it("Should be a function", () => {
    expect(Ingredient).to.be.a("function");
  });

  it("Should be an instance of Recipe Repository", () => {
    expect(ingredient).to.be.an.instanceOf(Ingredient);
  });

  it("Should have an id", () => {
    expect(ingredient.id).to.equal(20081);
  });

  it("Should return an error if no id is provided", () => {
    expect(faltyIngredient.id).to.equal("no id provided");
  });

  it("Should have a name", () => {
    expect(ingredient.name).to.equal("wheat flour");
  });

  it("Should return an error if no name is provided", () => {
    expect(faltyIngredient.name).to.equal("no name provided");
  });

  it("Should have an estimated cost in cents", () => {
    expect(ingredient.estCost).to.equal(142);
  });

  it("Should return an error if no estimated cost is provided", () => {
    expect(faltyIngredient.estCost).to.equal("no estimated cost provided");
  });
});