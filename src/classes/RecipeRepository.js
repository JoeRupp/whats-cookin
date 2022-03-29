// const data = require("../data/recipes");
// const recipeInfo = data.recipeData;
// const recipes = require("..src/data/recipes");

class RecipeRepository {
  constructor(data) {
    this.data = data;
  }
  filterRecipe(userInput) {
    const result = this.data.filter((recipe) => {
      return recipe.tags.includes(userInput);
    });
    return result;
  }
}

export default RecipeRepository;
