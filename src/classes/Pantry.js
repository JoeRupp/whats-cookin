import Ingredient from "./Ingredient";

//an array of ingredients
//takes ingredient id and amount associated with it
//create an instantiation of pantry when a new user is created
//pantry will create ingredient 
//instantiate ingredient
//2 methods in class



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

    determineCookAbility(ingredientList){
    const pantry = this.pantryList.reduce((list, ingredient) => {
    let result = ingredientList.forEach(element => { 
        if([element.id].includes(ingredient.id) && ingredient.amount >= [element.amount]) {
            list.push(ingredient)
        }
    })
    return list
}, [])
return pantry
}
// Determine the amount of missing ingredients still needed to cook a given meal, 
//based on what’s in the user’s pantry.

    findMissingIngredients(ingredientList){
    const missingIngredients = ingredientList.reduce((list, ingredient) => {
    // let result = this.pantryList.forEach(element =>{
        // if(!this.pantryList.includes(ingredient)) {
        //     list.push(ingredient)
        // }
        if(!this.pantryList.includes(ingredient)) {
            list.push(ingredient)
        }
   
    return list
}, [])
return missingIngredients
}

    
}


//pantry list
// 0: Ingredient {id: 11206, name: 'cucumber', estCost: 0, unit: null, amount: 2}
// 1: Ingredient {id: 1124, name: 'egg albumen', estCost: 0, unit: null, amount: 7}
// 2: Ingredient {id: 6172, name: 'chicken stock', estCost: 0, unit: null, amount: 3}
// 3: Ingredient {id: 4053, name: 'pure olive oil', estCost: 0, unit: null, amount: 9}
// 4: Ingredient {id: 6194, name: 'chicken broth', estCost: 0, unit: null, amount: 4}
// 5: Ingredient {id: 6615, name: 'vegetable stock', estCost: 0, unit: null, amount: 2}
// 6: Ingredient {id: 18371, name: 'baking powder', estCost: 0, unit: null, amount: 7}
// 7: Ingredient {id: 10220445, name: 'steamed rice', estCost: 0, unit: null, amount: 2}
// 8: Ingredient {id: 20027, name: 'corn starch', estCost: 0, unit: null, amount: 3}
// 9: Ingredient {id: 11215, name: 'whole garlic clove', estCost: 0, unit: null, amount: 11}


//ingredientList
// 0: Ingredient {id: 20081, name: 'wheat flour', estCost: 213, unit: 'c', amount: '1.5'}
// 1: Ingredient {id: 18372, name: 'bicarbonate of soda', estCost: 291, unit: 'tsp', amount: '0.5'}
// 2: Ingredient {id: 1123, name: 'eggs', estCost: 472, unit: 'large', amount: '1.0'}
// 3: Ingredient {id: 19335, name: 'sucrose', estCost: 451, unit: 'c', amount: '0.5'}
// 4: Ingredient {id: 19206, name: 'instant vanilla pudding', estCost: 1980, unit: 'Tbsp', amount: '3.0'}
// 5: Ingredient {id: 19334, name: 'brown sugar', estCost: 279.5, unit: 'c', amount: '0.5'}
// 6: Ingredient {id: 2047, name: 'salt', estCost: 140, unit: 'tsp', amount: '0.5'}
// 7: Ingredient {id: 1012047, name: 'fine sea salt', estCost: 12672, unit: 'servings', amount: '24.0'}
// 8: Ingredient {id: 10019903, name: 'semi sweet chips', estCost: 506, unit: 'c', amount: '2.0'}
// 9: Ingredient {id: 1145, name: 'unsalted butter', estCost: 308.5, unit: 'c', amount: '0.5'}
// 10: Ingredient {id: 2050, name: 'vanilla',

export default Pantry;