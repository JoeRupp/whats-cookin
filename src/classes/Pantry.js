import Ingredient from "./Ingredient";

class Pantry {
  constructor(userIngredients, ingredientData) {
    this.ingredients = userIngredients;
    this.ingredientData = ingredientData;
    this.pantryList = this.createIngredientList()
  }

  getIngredientName(ingredList, ingredient) {
    const data = ingredList;
    const findName = data.filter((item) => {
      return [item.id].includes(ingredient.ingredient);
    });
    return findName[0].name;
  }

  createIngredientList() {
    const ingredientList = this.ingredients.map((ingredient) => {
      const ingredName = this.getIngredientName(
        this.ingredientData,
        ingredient
      );
      return new Ingredient(
        ingredient.ingredient,
        ingredName,
        0,
        null,
        ingredient.amount
      );
    });
    return ingredientList
  }

  determineCookAbility(ingredientList) {
    const pantry = this.pantryList.reduce((list, ingredient) => {
      let result = ingredientList.forEach((element) => {
        if (
          [element.id].includes(ingredient.id) &&
          ingredient.amount >= [element.amount]
        ) {
          list.push(ingredient);
        }
      });
      return list;
    }, []);
    return pantry;
  }

  // Determine the amount of missing ingredients still needed to cook a given meal,
  //based on what’s in the user’s pantry.

  findMissingIngredients(ingredientList) {
    const ingredientsAvailable = this.determineCookAbility(ingredientList);
    ingredientsAvailable.map((ingredient) => {
      const matchingIndex = ingredientList.findIndex((element) => {
        return element.id === ingredient.id;
      });
      ingredientList.splice(matchingIndex, 1);
    });
    return ingredientList;
  }

  cookWithIngredients(recipeIngredients) {
    const cookShit = this.pantryList.forEach((ingredient) => {
      recipeIngredients.forEach((e) => {
        if (e.id === ingredient.id) {
          ingredient.amount = ingredient.amount - e.amount;
        }
      })
    })
    
    this.pantryList = this.pantryList.filter((ingredient) => {
      return ingredient.amount > 0
    })
  }
      

}
export default Pantry;
