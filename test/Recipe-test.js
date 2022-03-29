import { expect } from "chai";
import Recipe from "../src/classes/Recipe";

describe("Recipe", () => {
  let ingredient;
  let recipe;
  
  beforeEach(() => {
    recipe = new Recipe();
  });

  it("Should be a function", () => {
    expect(recipe).to.be.a("function");
  });

  it("Should be an instance of Recipe Repository", () => {
    expect(recipe).to.be.an.instanceOf();
  });

  it("Should be an instance of Recipe Repository", () => {
    expect(recipe).to.be.an.instanceOf();
  });
});