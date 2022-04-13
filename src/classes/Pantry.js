import Ingredient from "./Ingredient";

//an array of ingredients
//takes ingredient id and amount associated with it
//create an instantiation of pantry when a new user is created
//pantry will create ingredient 
//instantiate ingredient
//2 methods in class
// Determine whether a user’s pantry has enough 
// ingredients to cook a given meal.

// Determine the amount of missing ingredients still needed
//to cook a given meal, based on what’s in the user’s pantry.

// [
//     {
//     name: "Saige O'Kon",
//     id: 1,
//     pantry: [
//     {
//     ingredient: 11297,
//     amount: 4
//     },

class Pantry {
    constructor(userIngredients, ingredientData) {
        this.ingredients = userIngredients;
        this.ingredientData = ingredientData;
        this.pantryList = this.createIngredientList();
    };

    getIngredientName(ingredList, ingredient){
        const data = ingredList;


        const findName = data.filter((item) => {
          return [item.id].includes(ingredient.ingredient);
        });
        return findName[0].name;
      };

      createIngredientList(){
        const ingredientList = this.ingredients.map((ingredient) => {
          const ingredName = this.getIngredientName(this.ingredientData, ingredient);
          return new Ingredient(ingredient.ingredient, ingredName, 0, null, ingredient.amount);
        });
    
        // this.ingredientList = ingredientList;
        return ingredientList;
      };
    
}

export default Pantry;