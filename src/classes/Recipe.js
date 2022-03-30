import Ingredient from "./Ingredient";

class Recipe {
  constructor(recipe, ingredData) {
    this.id = recipe.id;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.name = recipe.name;
    this.tags = recipe.tags;
    this.ingredData = ingredData;
    this.ingredientList = this.createIngredientList();
    this.totalCost = this.getTotalCost();
  };

  getIngredientName(ingredList, ingredient){
    const data = ingredList;
    
    const findName = data.filter((item) => {
      return [item.id].includes(ingredient.id);
    });
    
    return findName[0].name;
  };

  getCostOfIngredients(ingredList, ingredient){
    const data = ingredList;

    const findCost = data.filter((item) => {
      return [item.id].includes(ingredient.id);
    });

    return (findCost[0].estimatedCostInCents * ingredient.quantity.amount);
  };

  createIngredientList(){
    const ingredientList = this.ingredients.map((ingredient) => {
      const ingredName = this.getIngredientName(this.ingredData, ingredient);
      const ingredCost = this.getCostOfIngredients(this.ingredData, ingredient);
      return new Ingredient(ingredient.id, ingredName, ingredCost, ingredient.quantity.unit);
    });

    this.ingredientList = ingredientList;
    return ingredientList;
  };

  getTotalCost(){
    const totalCost = this.ingredientList.reduce((total, cost) => {
      return total += cost.estCost;
    },0);

    console.log(totalCost)
    this.totalCost = totalCost;
    return totalCost;
  };

  getDirections() {
    return this.instructions;
  };
};

export default Recipe;