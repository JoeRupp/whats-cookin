import "./styles.css";
import apiCalls from "./apiCalls";
import RecipeRepository from "../src/classes/RecipeRepository";
import User from "./classes/user";
import recipes from "../src/data/recipes";
import ingredients from "../src/data/ingredients";
import users from "../src/data/users";
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import "./images/turing-logo.png";
import "./images/What'sCookinLogo-01.png";
import "./images/What'sCookinLogo-02.png";
import "./images/chicken-leg.png";
import "./images/star-icon-red.png";
import "./images/star-icon-white.png";
import "./images/star-icon-grey.png";


//GlobalVariables
let ingredData = ingredients;
let recipeData = recipes;
let userData = users;
var recipeRepo = new RecipeRepository(ingredData, recipeData);
let currentUser = new User(userData[0]);
let currentRecipe;

//QuerySelectors
const recipeList = document.querySelector(".recipe-list");
const searchBox = document.querySelector(".search-box");
const searchButton = document.querySelector(".search-button");
const favoriteFilterBtn = document.querySelector(".filter-favorites-btn");
const favoriteBtn = document.querySelector(".favorites-btn");
const favoriteBtnStar = document.querySelector(".favorites-star");
const recipeName = document.querySelector(".recipe-name");
const dishImg = document.querySelector(".selected-dish-img");
const directions = document.querySelector(".step-number");
const recipeCost = document.querySelector(".recipe-cost");
const listOfIngredients = document.querySelector(".list-of-ingredients");

//EventListeners
// favoriteFilterBtn.addEventListener('click');
favoriteBtn.addEventListener('click', favoriteRecipe);

searchBox.addEventListener("keypress", searchRecipe);

recipeList.addEventListener("click", function (event) {
  recipeRepo.repo.forEach((recipe) => {
    if (event.target.parentNode.id === `${recipe.id}`) {
      displayRecipe(recipe);
    }
  });
});

//Functions
function favoriteRecipe() {
  if (!currentUser.favoriteRecipes.includes(currentRecipe)) {
    currentUser.addToFavoriteRecipes(currentRecipe);
    favoriteBtnStar.src = "./images/star-icon-red.png";
  };
};


function searchRecipe() {
  const tagSearched = recipeRepo.filterRecipeTag(searchBox.value);
  viewAllRecipes(tagSearched);
  console.log(viewAllRecipes(tagSearched));
  if (viewAllRecipes(tagSearched) === []) {
    const nameSearched = recipeRepo.filterRecipeName(searchBox.value);
    viewAllRecipes(nameSearched);
    console.log(!viewAllRecipes(tagSearched));
  }
}

var viewAllRecipes = (list) => {
  let result = list
    .map((eachRecipe) => {
      const mealPreview = `
   <div class="meal-preview" id="${eachRecipe.id}"> 
     <img class="meal-img-preview" src="${eachRecipe.image}" alt="picture of food" />
     <div class="meal-info-preview">
       <h2>${eachRecipe.name}</h2>
       <p class="meal-preview-cost">$${eachRecipe.totalCost}</p>
     </div>
   </div>`;
      return mealPreview;
    })
    .join("");
  const mealInfo = recipeList;
  mealInfo.innerHTML = result;
  return mealInfo;
};

//Helper Functions

const changeRecipeName = (recipe) => {
  return (recipeName.innerHTML = recipe);
};

const changeRecipeImage = (recipe) => {
  return (dishImg.src = recipe);
};

const changeRecipeDirections = (recipe) => {
  const instructions = recipe
    .map((eachStep) => {
      const step = `<li>${eachStep.instruction}</li><br>`;
      return step;
    })
    .join("");
  return (directions.innerHTML = instructions);
};

const changeRecipePrice = (recipe) => {
  return (recipeCost.innerHTML = `$${recipe}`);
};

const changeRecipeIngred = (recipe) => {
  const ingreds = recipe
    .map(
      (eachIngred) =>
        `<li>${eachIngred.name} - ${eachIngred.amount} ${eachIngred.unit}</li><br>`
    )
    .join("");
  return (listOfIngredients.innerHTML = ingreds);
};

var displayRecipe = (recipe) => {
  changeRecipeName(recipe.name);
  changeRecipeDirections(recipe.instructions);
  changeRecipeImage(recipe.image);
  changeRecipePrice(recipe.totalCost);
  changeRecipeIngred(recipe.ingredientList);
  currentRecipe = recipe;
};

displayRecipe(recipeRepo.repo[0]);
viewAllRecipes(recipeRepo.repo);
