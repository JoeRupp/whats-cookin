//Imports
import "./styles.css";
import RecipeRepository from "../src/classes/RecipeRepository";
import User from "./classes/user";
import { fetchData } from "./apiCalls";
import { postData } from "./apiCalls";
import Pantry from "./classes/Pantry";
import domUpdates from "./domUpdates";

//Images
import "./images/What'sCookinLogo-01.png";
import "./images/What'sCookinLogo-02.png";
import "./images/grey-cook-icon.png";
import "./images/grey-cookbook-icon.png";
import "./images/grey-cooklist-icon.png";
import "./images/grey-pantry-icon.png";
import "./images/grey-plus-icon.png";
import "./images/grey-star-icon.png";
import "./images/pan-logo.png";
import "./images/red-cook-icon.png";
import "./images/red-cookbook-icon.png";
import "./images/red-cooklist-icon.png";
import "./images/red-pantry-icon.png";
import "./images/red-plus-icon.png";
import "./images/red-star-icon.png";
import "./images/white-star-icon.png";

//GlobalVariables
let ingredData;
let recipeData;
let userData;
let recipeRepo;
let currentUser;
let currentPantry;
let currentRecipe;

//QuerySelectors
const recipeList = document.querySelector(".recipe-list");
const searchBox = document.querySelector(".search-box");
const searchBtn = document.querySelector(".search-button");
const searchFavoritesBtn = document.querySelector(".search-favorites-button");
const favoriteFilterBtn = document.querySelector(".filter-favorites-btn");
const filterAllBtn = document.querySelector(".filter-all-btn");
const favoriteBtn = document.querySelector(".favorites-btn");
const favoriteBtnStar = document.querySelector(".favorites-star");
const addToCookListBtn = document.querySelector(".addToCookList-btn");
const cookListBtn = document.querySelector(".cook-list");
const addToCookListIcon = document.querySelector(".addToCook-plus");
const listOfIngredients = document.querySelector(".list-of-ingredients");
const pantryBtn = document.querySelector(".pantry-btn");
const cookBtn = document.querySelector(".cook-btn");

//Functions
function instantiateClasses(userData, ingredData, recipeData) {
  recipeRepo = new RecipeRepository(ingredData, recipeData);
  currentUser = new User(userData[Math.floor(Math.random() * userData.length)]);
  currentPantry = new Pantry(currentUser.pantry, ingredData);
  displayRecipe(recipeRepo.repo[0]);
  domUpdates.viewAllRecipes(recipeRepo.repo);
}

function fetchAllData() {
  Promise.all([
    fetchData("users"),
    fetchData("ingredients"),
    fetchData("recipes"),
  ]).then((data) => {
    userData = data[0];
    ingredData = data[1];
    recipeData = data[2];
    instantiateClasses(userData, ingredData, recipeData);
  });
}

fetchAllData();

function postAllData(ingredient, addIngred) {
  if (addIngred === true) {
    let data = {
      userID: currentUser.id,
      ingredientID: ingredient.id,
      ingredientModification: (ingredient.amount)* 1
    }
    postData(data)
  } else {
    let data = {
      userID: currentUser.id,
      ingredientID: ingredient.id,
      ingredientModification: -(ingredient.amount)
    }
    console.log("what?", ingredient)
    console.log("whwwwhwhwhwhhhaaaa", -(ingredient.amount))
    postData(data)
  }
}

function addFavoriteRecipe() {
  if (!currentUser.favoriteRecipes.includes(currentRecipe)) {
    currentUser.addToFavoriteRecipes(currentRecipe);
    domUpdates.toggleFavoriteStarRed();
  }
}

function addToCookList() {
  if (!currentUser.recipesToCook.includes(currentRecipe)) {
    currentUser.addToRecipesToCook(currentRecipe);
    domUpdates.toggleCookListIconRed();
  }
}

function displayAllRecipes() {
  domUpdates.viewAllRecipes(recipeRepo.repo);
  domUpdates.seeAllView();
  displayRecipe(recipeRepo.repo[0]);
}

function viewFavoriteRecipes() {
  domUpdates.viewAllRecipes(currentUser.favoriteRecipes);
  domUpdates.seeFavoritesView();
  if (currentUser.favoriteRecipes.length === 0) {
    domUpdates.viewErrorMessage();
  } else {
    displayRecipe(currentUser.favoriteRecipes[0]);
  }
}

function viewCookList() {
  domUpdates.viewAllRecipes(currentUser.recipesToCook);
  domUpdates.seeCookListView();
  showCookAbility();
  if (currentUser.recipesToCook.length === 0) {
    domUpdates.viewErrorMessage();
  } else {
    displayRecipe(currentUser.recipesToCook[0]);
  }
}

function displayPantry() {
  domUpdates.viewPantry(currentPantry.pantryList);
  domUpdates.seePantryView();
}

function searchRecipe() {
  if (!searchBox.value) {
    domUpdates.viewAllRecipes(recipeRepo.repo);
  }
  const tagSearched = recipeRepo.filterRecipeTag(searchBox.value);
  const nameSearched = recipeRepo.filterRecipeName(searchBox.value);
  if (tagSearched.length > 0) {
    domUpdates.viewAllRecipes(tagSearched);
  } else if (nameSearched.length > 0) {
    domUpdates.viewAllRecipes(nameSearched);
  } else {
    domUpdates.viewAllRecipes(recipeRepo.repo);
  }
  domUpdates.toggleErrorMessage(true);
}

function searchFavoriteRecipe() {
  if (!searchBox.value) {
    domUpdates.viewAllRecipes(currentUser.favoriteRecipes);
  }
  const tagSearched = currentUser.filterFavoriteRecipeTag(searchBox.value);
  const nameSearched = currentUser.filterFavoriteRecipeName(searchBox.value);
  if (tagSearched.length > 0) {
    domUpdates.viewAllRecipes(tagSearched);
  } else if (nameSearched.length > 0) {
    domUpdates.viewAllRecipes(nameSearched);
  } else {
    domUpdates.viewAllRecipes(currentUser.favoriteRecipes);
  }
  domUpdates.toggleErrorMessage(true);
}

const cookRecipe = () => {
  currentRecipe.ingredientList.forEach((ingredient) => postAllData(ingredient, false)) 
  currentPantry.cookWithIngredients(currentRecipe.ingredientList);
  const currentRecipeIndex = currentUser.recipesToCook.findIndex((element) => {
    return element.id === currentRecipe.id;
  });
  currentUser.recipesToCook.splice(currentRecipeIndex, 1);
  viewCookList();
};

const displayRecipe = (recipe) => {
  domUpdates.changeRecipeName(recipe.name);
  domUpdates.changeRecipeDirections(recipe.instructions);
  domUpdates.changeRecipeImage(recipe.image);
  domUpdates.changeRecipePrice(recipe.totalCost);
  domUpdates.changeRecipeIngred(
    recipe.ingredientList,
    currentPantry.determineCookAbility(recipe.ingredientList)
  );
  favoriteBtnStar.src = "./images/grey-star-icon.png";
  addToCookListIcon.src = "./images/grey-cooklist-icon.png";
  showFavoriteStatus(recipe.name);
  showCookListStatus(recipe.name);
  currentRecipe = recipe;
  showCookAbility();
};

const showFavoriteStatus = (recipe) => {
  currentUser.favoriteRecipes.forEach((element) => {
    if (element.name.includes(recipe)) {
      domUpdates.toggleFavoriteStarRed();
    }
  });
};

const showCookListStatus = (recipe) => {
  currentUser.recipesToCook.forEach((element) => {
    if (element.name.includes(recipe)) {
      domUpdates.toggleCookListIconRed();
    }
  });
};

const showCookAbility = () => {
  const cookAbility = currentPantry.determineCookAbility(
    currentRecipe.ingredientList
  ).length;
  if (cookAbility >= currentRecipe.ingredientList.length) {
    domUpdates.toggleCookBtn(false);
  } else {
    domUpdates.toggleCookBtn(true);
  }
};

//EventListeners
favoriteFilterBtn.addEventListener("click", viewFavoriteRecipes);
filterAllBtn.addEventListener("click", displayAllRecipes);
searchBtn.addEventListener("click", searchRecipe);
favoriteBtn.addEventListener("click", addFavoriteRecipe);
searchFavoritesBtn.addEventListener("click", searchFavoriteRecipe);
addToCookListBtn.addEventListener("click", addToCookList);
cookListBtn.addEventListener("click", viewCookList);
pantryBtn.addEventListener("click", displayPantry);
cookBtn.addEventListener("click", cookRecipe);

listOfIngredients.addEventListener("click", function (event) {
  currentRecipe.ingredientList.forEach((ingredient) => {
    if (event.target.id === `${ingredient.id}`) {
      currentPantry.pantryList.push(ingredient);
      domUpdates.changeRecipeIngred(
        currentRecipe.ingredientList,
        currentPantry.determineCookAbility(currentRecipe.ingredientList)
      );
      console.log(currentUser)
      console.log("add", ingredient)
      postAllData(ingredient, true)
      displayPantry();
    }
  });
});

searchBox.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    domUpdates.toggleErrorMessage(false);
  }
});

recipeList.addEventListener("click", function (event) {
  recipeRepo.repo.forEach((recipe) => {
    if (event.target.parentNode.id === `${recipe.id}`) {
      displayRecipe(recipe);
    }
  });
});
