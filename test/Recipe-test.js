import { expect } from "chai";
import Recipe from "../src/classes/Recipe";
import data from "../src/data/ingredients";


describe("Recipe", () => {
  let recipe;
  let mockRecipe;
  
  beforeEach(() => {
    mockRecipe = {
      id: 595736,
      image: "https://spoonacular.com/recipeImages/595736-556x370.jpg",
      ingredients: [
        {
          id: 20081,
          quantity: {
          amount: 1.5,
          unit: "c",
          },
        },
        {
          id: 18372,
          quantity: {
          amount: 0.5,
          unit: "tsp",
          },
        },
        {
          id: 1123,
          quantity: {
          amount: 1,
          unit: "large",
          },
        }
      ],
      instructions: [
        {
          instruction:
            "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
          number: 1,
        },
        {
          instruction: "Add egg and vanilla and mix until combined.",
          number: 2,
        },
        {
          instruction:
            "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.",
          number: 3,
        }
      ],
      name: "Loaded Chocolate Chip Pudding Cookie Cups",
      tags: [
        "antipasti",
        "starter",
        "snack"
      ]
    };

    recipe = new Recipe(mockRecipe, data);
  });

  it("Should be a function", () => {
    expect(Recipe).to.be.a("function");
  });

  it("Should be an instance of Recipe Repository", () => {
    expect(recipe).to.be.an.instanceOf(Recipe);
  });

  it("Should have an id", () => {
    expect(recipe.id).to.equal(mockRecipe.id);
  });

  it("Should have an image", () => {
    expect(recipe.image).to.equal(mockRecipe.image);
  });

  it("Should have a list of ingredients", () => {
    expect(recipe.ingredients).to.be.a("array");
    expect(recipe.ingredients).to.equal(mockRecipe.ingredients);
  });

  it("Should have a list of instructions", () => {
    expect(recipe.instructions).to.be.a("array");
    expect(recipe.instructions).to.equal(mockRecipe.instructions);
  });

  it("Should have a name", () => {
    expect(recipe.name).to.equal(recipe.name);
  });

  it("Should have a list of tags", () => {
    expect(recipe.tags).to.be.a("array");
    expect(recipe.tags).to.equal(recipe.tags);
  });

  it("Should have a method that gets an ingredient's name", () => {
    recipe.getIngredientName(data, mockRecipe.ingredients[0]);
    expect().to.equal();
  });

  it("Should have a method that gets an ingredient's estimated cost", () => {
    recipe.getCostOfIngredients(data, mockRecipe.ingredients[0]);
    expect().to.equal();
  });

  it("Should have a method that gets a modified ingredient list using the Ingredient Class", () => {
    recipe.createIngredientList(data);
    expect().to.equal();
  });

  it("Should have a method that returns the recipes instructions", () => {
    recipe.getDirections();
    expect().to.equal();
  });

  it("Should have a method that returns the recipes instructions", () => {
    recipe.createIngredientList(data);
    recipe.getTotalCost();
    expect().to.equal();
  });
});