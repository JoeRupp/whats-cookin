import Recipe from "./Recipe";

class RecipeRepository {
  constructor(ingredData, recipeData) {
    this.ingredData = ingredData;
    this.recipeData = recipeData;
    this.repo = this.recipeData.map((recipe) => new Recipe(recipe, ingredData));
  };

  filterRecipeTag(userInput) {
    userInput.toLowerCase();

    const result = this.repo.filter((recipe) => {
      return recipe.tags.includes(userInput);
    });

    return result;
  }

  filterRecipeName(userInput) {
    userInput.toLowerCase();

    const result = this.repo.filter((recipe) => {
      return recipe.name.includes(userInput);
    });

    return result;
  };
};

export default RecipeRepository;
