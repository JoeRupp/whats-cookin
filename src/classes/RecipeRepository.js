import Recipe from "./Recipe";

class RecipeRepository {
  constructor(ingredData, recipeData) {
    this.ingredData = ingredData;
    this.recipeData = recipeData;
    this.repo = this.recipeData.map((recipe) => new Recipe(recipe, ingredData));
  }

  // addRecipeInfo(userInput) {
  //   const recipeInfo = this.repo.map((recipe) => {
  //     return recipe.name.includes(userInput);
  //   });
  //   console.log(recipeInfo);
  //   return recipeInfo;
  // }

  filterRecipeTag(userInput) {
    const input = userInput.toLowerCase();
    // addRecipeInfo();

    const result = this.repo.filter((recipe) => {
      return recipe.tags.includes(input);
    });
    return result;
  }

  filterRecipeName(userInput) {
    const input = userInput
      .toLowerCase()
      .split(" ")
      .map((word) => word.replace(word[0], word[0].toUpperCase()))
      .join(" ");

    const result = this.repo.filter((recipe) => {
      return recipe.name.includes(input);
    });

    return result;
  }
}

export default RecipeRepository;
