import { expect } from "chai";
import RecipeRepository from "../src/classes/RecipeRepository";
import Recipe from "../src/classes/Recipe";

describe("Recipe Repository", () => {
  let recipeData;
  let ingredData;
  let recipeRepo;

  beforeEach(() => {
    recipeData = [
      {
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
          },
          {
            instruction:
              "Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.",
            number: 4,
          },
          {
            instruction:
              "Bake for 9 to 10 minutes, or until you see the edges start to brown.",
            number: 5,
          },
          {
            instruction:
              "Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.",
            number: 6,
          },
        ],
        name: "Loaded Chocolate Chip Pudding Cookie Cups",
        tags: [
          "antipasti",
          "starter",
          "snack",
          "appetizer",
          "antipasto",
          "hor d'oeuvre",
        ],
      },
      {
        id: 678353,
        image: "https://spoonacular.com/recipeImages/678353-556x370.jpg",
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
              "Season the pork chops with salt and pepper and grill or pan fry over medium high heat until cooked, about 3-5 minutes per side. (If grilling, baste the chops in the maple dijon apple cider sauce as you grill.)Meanwhile, mix the remaining ingredients except the apple slices, bring to a simmer and cook until the sauce thickens, about 2-5 minutes.Grill or saute the apple slices until just tender but still crisp.Toss the pork chops and apple slices in the maple dijon apple cider sauce and enjoy!",
            number: 1,
          },
        ],
        name: "Maple Dijon Apple Cider Grilled Pork Chops",
        tags: ["lunch", "main course", "main dish", "dinner"],
      }
    ];
    ingredData = [
      {
        "id": 20081,
        "name": "wheat flour",
        "estimatedCostInCents": 142
      },
      {
        "id": 18372,
        "name": "bicarbonate of soda",
        "estimatedCostInCents": 582
      },
      {
        "id": 1123,
        "name": "eggs",
        "estimatedCostInCents": 472
      }
    ]
    recipeRepo = new RecipeRepository(ingredData, recipeData);
    ingredData = [
    {
      "id": 20081,
      "name": "wheat flour",
      "estimatedCostInCents": 142
    },
    {
      "id": 18372,
      "name": "bicarbonate of soda",
      "estimatedCostInCents": 582
    },
    {
      "id": 1123,
      "name": "eggs",
      "estimatedCostInCents": 472
    },
    {
      "id": 19335,
      "name": "sucrose",
      "estimatedCostInCents": 902
    }
  ];
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

    expect(dataTest.length).to.equal(1);
  });

  it("Should filter by tag even if user inputs all capitalized letters", () => {
    const dataTest = recipeRepo.filterRecipeTag("SNACK");

    expect(dataTest.length).to.equal(1);
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
