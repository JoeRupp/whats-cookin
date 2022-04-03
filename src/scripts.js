import "./styles.css";
import apiCalls from "./apiCalls";
import RecipeRepository from "../src/classes/RecipeRepository";
import User from "./classes/user";
import recipes from "../src/data/recipes";
import ingredients from "../src/data/ingredients";
import users from "../src/data/users";
import { fetchData } from "./apiCalls";
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import "./images/turing-logo.png";
import "./images/What'sCookinLogo-01.png";
import "./images/What'sCookinLogo-02.png";
import "./images/chicken-leg.png";
import "./images/star-icon-red.png";
import "./images/star-icon-white.png";
import "./images/star-icon-grey.png";
import "./images/addToCook.png";

//GlobalVariables
let ingredData;
let recipeData;
let userData;
var recipeRepo;
let currentUser;
let currentRecipe;

//QuerySelectors
const recipeList = document.querySelector(".recipe-list");
const searchBox = document.querySelector(".search-box");

const searchButton = document.querySelector(".search-button");
const searchFavoritesBtn = document.querySelector(".search-favorites-button");

const favoriteFilterBtn = document.querySelector(".filter-favorites-btn");
const filterAllBtn = document.querySelector(".filter-all-btn");

const favoriteBtn = document.querySelector(".favorites-btn");
const favoriteBtnStar = document.querySelector(".favorites-star");

const recipeName = document.querySelector(".recipe-name");
const dishImg = document.querySelector(".selected-dish-img");
const directions = document.querySelector(".step-number");
const recipeCost = document.querySelector(".recipe-cost");
const listOfIngredients = document.querySelector(".list-of-ingredients");

//EventListeners
favoriteFilterBtn.addEventListener("click", viewFavoriteRecipes);
filterAllBtn.addEventListener("click", allRecipes);
searchButton.addEventListener("click", searchRecipe);
searchFavoritesBtn.addEventListener("click", searchFavoriteRecipe);

favoriteBtn.addEventListener("click", favoriteRecipe);

recipeList.addEventListener("click", function (event) {
  recipeRepo.repo.forEach((recipe) => {
    if (event.target.parentNode.id === `${recipe.id}`) {
      displayRecipe(recipe);
    }
  });
});

//Functions
function instantiateClasses(userData, ingredData, recipeData) {
  recipeRepo = new RecipeRepository(ingredData, recipeData);
  currentUser = new User(userData[0]);
  displayRecipe(recipeRepo.repo[0]);
  viewAllRecipes(recipeRepo.repo);
}

function fetchAllData() {
  Promise.all([
    fetchData("users"),
    fetchData("ingredients"),
    fetchData("recipes"),
  ]).then((data) => {
    userData = data[0].usersData;
    ingredData = data[1].ingredientsData;
    recipeData = data[2].recipeData;
    instantiateClasses(userData, ingredData, recipeData);
  });
}
fetchAllData();

function favoriteRecipe() {
  if (!currentUser.favoriteRecipes.includes(currentRecipe)) {
    currentUser.addToFavoriteRecipes(currentRecipe);
    favoriteBtnStar.src = "./images/star-icon-red.png";
  }
}

function viewFavoriteRecipes() {
  viewAllRecipes(currentUser.favoriteRecipes);
  seeFavoritesView();
}

function allRecipes() {
  viewAllRecipes(recipeRepo.repo);
  seeAllView();
}

//searchBox.value === recipeRepo.forEach((recipe) => recipe.name)

function searchRecipe() {
  if (!searchBox.value) {
    viewAllRecipes(recipeRepo.repo);
  }
  const tagSearched = recipeRepo.filterRecipeTag(searchBox.value);
  const nameSearched = recipeRepo.filterRecipeName(searchBox.value);
  if (tagSearched.length > 0) {
    viewAllRecipes(tagSearched);
  } else if (nameSearched.length > 0) {
    viewAllRecipes(nameSearched);
  } else {
    viewAllRecipes(recipeRepo.repo);
  }
}

function searchFavoriteRecipe() {
  if (!searchBox.value) {
    viewAllRecipes(currentUser.favoriteRecipes);
  }
  const tagSearched = currentUser.filterFavoriteRecipeTag(searchBox.value);
  const nameSearched = currentUser.filterFavoriteRecipeName(searchBox.value);
  if (tagSearched.length > 0) {
    viewAllRecipes(tagSearched);
  } else if (nameSearched.length > 0) {
    viewAllRecipes(nameSearched);
  } else {
    viewAllRecipes(currentUser.favoriteRecipes);
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
  favoriteBtnStar.src = "./images/star-icon-grey.png";
  currentRecipe = recipe;
};

const seeFavoritesView = () => {
  searchFavoritesBtn.classList.remove("hidden");
  searchButton.classList.add("hidden");
  filterAllBtn.classList.remove("hidden");
  favoriteFilterBtn.classList.add("hidden");
};

const seeAllView = () => {
  filterAllBtn.classList.add("hidden");
  favoriteFilterBtn.classList.remove("hidden");
  filterAllBtn.classList.add("hidden");
  searchButton.classList.remove("hidden");
  searchFavoritesBtn.classList.add("hidden");
};
