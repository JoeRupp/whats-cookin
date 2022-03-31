import './styles.css';
import apiCalls from './apiCalls';
import RecipeRepository from "../src/classes/RecipeRepository";
import recipes from "../src/data/recipes";
import ingredients from "../src/data/ingredients";
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import "./images/What'sCookinLogo-01.png"
import "./images/What'sCookinLogo-02.png"
import "./images/chicken-leg.png"
import "./images/star-icon-red.png"
import "./images/star-icon-white.png"
import "./images/star-icon-grey.png"


console.log('Hello world');

//GlobalVariables
let ingredData = ingredients;
let recipeData = recipes;
let recipeRepo = new RecipeRepository(ingredData, recipeData)


//QuerySelectors
const recipeList = document.querySelector('.recipe-list');
const searchBox = document.querySelector('.search-box');
const favoriteFilterBtn = document.querySelector('.filter-favorites-btn');
const favoriteBtn = document.querySelector('.favorites-star');
const recipeName = document.querySelector('.recipe-name');
const dishImg = document.querySelector('.select-dish-img');
const directions = document.querySelector('.directions');
const recipeCost = document.querySelector('.recipe-cost');
const listOfIngredients = document.querySelector('.list-of-ingredients');

//EventListeners
// favoriteFilterBtn.addEventListener('click');
// favoriteBtn.addEventListener('click');



//Functions





const viewAllRecipes = () => {
 const result = recipeRepo.repo.map(eachRecipe => {

   const mealPreview = `
   <div class="meal-preview">
     <img class="meal-img-preview" src="${eachRecipe.image}" alt="picture of food" />
     <div class="meal-info-preview">
       <h2>${eachRecipe.name}</h2>
       <p class="meal-preview-cost">$${eachRecipe.totalCost}</p>
       <div class="favorite-status"></div>
     </div>
   </div>`
   return mealPreview;

 });
 const mealInfo = recipeList
 mealInfo.innerHTML = result;
 return mealInfo;

};
viewAllRecipes()



;
//Helper Functions
