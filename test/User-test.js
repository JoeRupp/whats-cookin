import { expect } from "chai";
import User from "../src/classes/User";
import data from "../src/data/users";

describe("User", () => {
  let user;
  let testUser;
  let recipe;

  beforeEach(() => {
    testUser = {
      "name": "Kevin",
      "id": 1,
      "pantry": [
        {
          "ingredient": 11297,
          "amount": 4
        },
        {
          "ingredient": 1082047,
          "amount": 10
        },
        {
          "ingredient": 20081,
          "amount": 5
        }
      ]
    }
    recipe = {
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
    user = new User(testUser);
  });

  it("Should be a function", () => {
    expect(User).to.be.a("function");
  });

  it("Should be an instance of User", () => {
    expect(user).to.be.an.instanceOf(User);
  });

  it("Should have a name", () => {
    expect(user.name).to.equal(testUser.name);
  });

  it("Should have an id", () => {
    expect(user.id).to.equal(testUser.id);
  });

  it("Should have a pantry", () => {
    expect(user.pantry.length).to.equal(3);
    expect(user.pantry).to.be.a("array");
  });

  it("Should have a list of favorite recipes", () => {
    expect(user.favoriteRecipes).to.be.a("array");
  });

  it("Should have a method that adds a recipe to the favorite recipes list", () => {
    user.addToFavoriteRecipes(recipe)
    expect(user.favoriteRecipes.length).to.equal(1);
  });

  it("Should have a list of recipes to cook", () => {
    expect(user.recipesToCook).to.be.a("array");
  });

  it("Should have a method that adds a recipe to the recipes to cook list", () => {
    user.addToRecipesToCook(recipe)
    expect(user.recipesToCook.length).to.equal(1);
  });

});