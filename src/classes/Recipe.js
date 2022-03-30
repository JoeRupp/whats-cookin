import Ingredient from "./Ingredient";

class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.name = recipe.name;
    this.tags = recipe.tags;
    // this.totalCost = ?;
    // this.ingredientList = ?;
  };

  getIngredientName(recipeList, ingredient){
    const data = recipeList;
    
    const findName = data.filter((item) => {
      return [item.id].includes(ingredient.id);
    });
    
    return findName[0].name;
  };

  getCostOfIngredients(recipeList, ingredient){
    const data = recipeList;

    const findCost = data.filter((item) => {
      return [item.id].includes(ingredient.id);
    });

    return (findCost[0].estimatedCostInCents * ingredient.quantity.amount);
  };

  createIngredientList(recipeList){
    const ingredientList = this.ingredients.map((ingredient) => {
      const ingredName = this.getIngredientName(recipeList, ingredient)
      const ingredCost = this.getCostOfIngredients(recipeList, ingredient)
      return new Ingredient(ingredient.id, ingredName, ingredCost)
    });

    console.log(ingredientList)
    return ingredientList;
  }

  getDirections() {
    return this.instructions;
  }
};

export default Recipe;