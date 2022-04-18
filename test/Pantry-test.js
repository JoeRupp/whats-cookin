import { expect } from "chai";
import Pantry from "../src/classes/Pantry";

describe("Pantry", () => {
  let pantry;
  let userIngredients;
  let ingredientData;
  let recipeIngredientList;

  beforeEach(() => {
    userIngredients = [
      {
        ingredient: 20081,
        amount: 4,
      },
      {
        ingredient: 1082047,
        amount: 1,
      },
      {
        ingredient: 1123,
        amount: 0,
      },
      {
        ingredient: 11215,
        amount: 5,
      },
      {
        ingredient: 19206,
        amount: 6,
      },
    ];

    ingredientData = [
      {
        id: 20081,
        name: "wheat flour",
        estimatedCostInCents: 142,
      },
      {
        id: 1082047,
        name: "bicarbonate of soda",
        estimatedCostInCents: 582,
      },
      {
        id: 1123,
        name: "eggs",
        estimatedCostInCents: 472,
      },
      {
        id: 11215,
        name: "sucrose",
        estimatedCostInCents: 902,
      },
      {
        id: 19206,
        name: "instant vanilla pudding",
        estimatedCostInCents: 660,
      },
    ];

    recipeIngredientList = [
      {
        id: 20081,
        name: "wheat flour",
        estCost: 213,
        unit: "c",
        amount: "1.5",
      },
      { id: 1082047, name: "salt", estCost: 140, unit: "tsp", amount: "1" },
      { id: 1123, name: "vanilla", estCost: 463, unit: "tsp", amount: "5" },
    ];

    pantry = new Pantry(userIngredients, ingredientData);
  });

  it("Should be a function", () => {
    expect(Pantry).to.be.a("function");
  });

  it("Should be an instance of Pantry Repository", () => {
    expect(pantry).to.be.an.instanceOf(Pantry);
  });

  it("Should be able to store User data", () => {
    expect(pantry.ingredients).to.equal(userIngredients);
  });

  it("Should be able to store ingredient data", () => {
    expect(pantry.ingredientData).to.equal(ingredientData);
  });

  it("Should be able to store pantry ingredient list", () => {
    expect(pantry.pantryList).to.deep.equal(pantry.createIngredientList());
  });

  it("Should be able to get ingredient by name", () => {
    const ingredName = pantry.getIngredientName(
      ingredientData,
      userIngredients[0]
    );
    expect(ingredName).to.equal("wheat flour");
  });

  it("Should be able to create ingredient list", () => {
    expect(pantry.pantryList).to.be.a("array");
    expect(pantry.createIngredientList()).to.deep.equal(pantry.pantryList);
  });

  it("Should be able to determine cook ability", () => {
    expect(pantry.determineCookAbility(recipeIngredientList)[0].id).to.equal(
      20081
    );
    expect(pantry.determineCookAbility(recipeIngredientList).length).to.equal(
      2
    );
  });

  it("Should be able to find the missing ingredients", () => {
    expect(pantry.findMissingIngredients(recipeIngredientList)[0].id).to.equal(
      1123
    );
  });

  it("Should be able to cook with ingredients", () => {
    pantry.cookWithIngredients(recipeIngredientList);
    expect(pantry.pantryList.length).to.equal(3);
  });
});
