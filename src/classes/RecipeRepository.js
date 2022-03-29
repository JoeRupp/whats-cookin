// const data = require("../data/recipes");
// const recipeInfo = data.recipeData;
// const recipes = require("..src/data/recipes");

class RecipeRepository {
  constructor(data) {
    this.data = data;
  }
  filterRecipe(userInput) {
    const result = data.filter((recipe) => {
      return recipe.includes(userInput);
    });
    return result;
  }
}

export default RecipeRepository;
