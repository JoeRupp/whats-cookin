//Imports
import "./styles.css";
import RecipeRepository from "../src/classes/RecipeRepository";
import User from "./classes/user";
import { fetchData } from "./apiCalls";
import Pantry from "./classes/Pantry";

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
const recipeName = document.querySelector(".recipe-name");
const dishImg = document.querySelector(".selected-dish-img");
const directions = document.querySelector(".step-number");
const recipeCost = document.querySelector(".recipe-cost");
const listOfIngredients = document.querySelector(".list-of-ingredients");
const error = document.querySelector(".error");
const starIcon = document.querySelector(".star-icon");
const cooklistIcon = document.querySelector(".cooklist-icon");
const pantryIcon = document.querySelector(".pantry-icon");
const allRecipeIcon = document.querySelector(".all-recipe-icon");
const pantryBtn = document.querySelector(".pantry-btn");
const cookBtn = document.querySelector(".cook-btn");

//EventListeners
favoriteFilterBtn.addEventListener("click", viewFavoriteRecipes);
filterAllBtn.addEventListener("click", displayAllRecipes);
searchBtn.addEventListener("click", searchRecipe);
favoriteBtn.addEventListener("click", addFavoriteRecipe);
searchFavoritesBtn.addEventListener("click", searchFavoriteRecipe);
addToCookListBtn.addEventListener("click", addToCookList);
cookListBtn.addEventListener("click", viewCookList);
pantryBtn.addEventListener("click", displayPantry);

searchBox.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    error.classList.remove("hidden");
  }
});

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
  currentUser = new User(userData[Math.floor(Math.random() * userData.length)]);
  currentPantry = new Pantry(currentUser.pantry, ingredData);
  console.log(currentPantry);

  displayRecipe(recipeRepo.repo[0]);
  viewAllRecipes(recipeRepo.repo);
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

function addFavoriteRecipe() {
  if (!currentUser.favoriteRecipes.includes(currentRecipe)) {
    currentUser.addToFavoriteRecipes(currentRecipe);
    favoriteBtnStar.src = "./images/red-star-icon.png";
  }
}

function addToCookList() {
  if (!currentUser.recipesToCook.includes(currentRecipe)) {
    currentUser.addToRecipesToCook(currentRecipe);
    addToCookListIcon.src = "./images/red-cooklist-icon.png";
  }
}

function displayAllRecipes() {
  viewAllRecipes(recipeRepo.repo);
  displayRecipe(recipeRepo.repo[0]);
  seeAllView();
}

function viewFavoriteRecipes() {
  viewAllRecipes(currentUser.favoriteRecipes);
  seeFavoritesView();
  displayRecipe(currentUser.favoriteRecipes[0]);
}

function viewCookList() {
  viewAllRecipes(currentUser.recipesToCook);
  seeCookListView();
  displayRecipe(currentUser.recipesToCook[0]);
}

function displayPantry() {
  viewPantry(currentPantry.pantryList);
  console.log(currentPantry.pantryList)
  seePantryView();
}

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
  error.classList.add("hidden");
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
  error.classList.add("hidden");
}

const viewAllRecipes = (list) => {
  const result = list
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

const viewPantry = (list) => {
  const result = list
    .map((eachIngredient) => {
      const mealPreview = `
   <div class="pantry-preview" id="${eachIngredient.id}">
     <div class="meal-info-preview">
       <h2>${eachIngredient.name} (${eachIngredient.amount})</h2>
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
  const steve = currentPantry.determineCookAbility(recipe);
  const ingreds = recipe.map((eachIngred) => {
      if (steve.some((e) => e.id === eachIngred.id)) {
        return `<li><img class="ingredient-state" src="./images/red-pantry-icon.png" alt="ingredient pantry status">${eachIngred.name} - ${eachIngred.amount} ${eachIngred.unit}</li><br>`
      } else {
        return `<li><img class="ingredient-state" src="./images/grey-plus-icon.png" alt="ingredient pantry status">${eachIngred.name} - ${eachIngred.amount} ${eachIngred.unit}</li><br>`
      }
    })
    .join("");
  return (listOfIngredients.innerHTML = ingreds);
};

const displayRecipe = (recipe) => {
  changeRecipeName(recipe.name);
  changeRecipeDirections(recipe.instructions);
  changeRecipeImage(recipe.image);
  changeRecipePrice(recipe.totalCost);
  changeRecipeIngred(recipe.ingredientList);
  favoriteBtnStar.src = "./images/grey-star-icon.png";
  addToCookListIcon.src = "./images/grey-cooklist-icon.png";
  showFavoriteStatus(recipe.name);
  showCookListStatus(recipe.name);
  currentRecipe = recipe;
};

const showFavoriteStatus = (recipe) => {
  currentUser.favoriteRecipes.forEach((element) => {
    if (element.name.includes(recipe)) {
      favoriteBtnStar.src = "./images/red-star-icon.png";
    }
  });
};

const showCookListStatus = (recipe) => {
  currentUser.recipesToCook.forEach((element) => {
    if (element.name.includes(recipe)) {
      addToCookListIcon.src = "./images/red-cooklist-icon.png";
    }
  });
};

const seeFavoritesView = () => {
  searchFavoritesBtn.classList.remove("hidden");
  searchBtn.classList.add("hidden");
  starIcon.src = "./images/red-star-icon.png";
  allRecipeIcon.src = "./images/grey-cookbook-icon.png";
  cooklistIcon.src = "./images/grey-cooklist-icon.png";
  pantryIcon.src = "./images/grey-pantry-icon.png";
  cookBtn.classList.add("hidden");
};

const seeAllView = () => {
  searchBtn.classList.remove("hidden");
  searchFavoritesBtn.classList.add("hidden");
  starIcon.src = "./images/grey-star-icon.png";
  allRecipeIcon.src = "./images/red-cookbook-icon.png";
  cooklistIcon.src = "./images/grey-cooklist-icon.png";
  pantryIcon.src = "./images/grey-pantry-icon.png";
  cookBtn.classList.add("hidden");
};

const seeCookListView = () => {
  searchFavoritesBtn.classList.add("hidden");
  searchBtn.classList.add("hidden");
  starIcon.src = "./images/grey-star-icon.png";
  allRecipeIcon.src = "./images/grey-cookbook-icon.png";
  cooklistIcon.src = "./images/red-cooklist-icon.png";
  pantryIcon.src = "./images/grey-pantry-icon.png";
  cookBtn.classList.remove("hidden");
};

const seePantryView = () => {
  searchFavoritesBtn.classList.add("hidden");
  searchBtn.classList.add("hidden");
  starIcon.src = "./images/grey-star-icon.png";
  allRecipeIcon.src = "./images/grey-cookbook-icon.png";
  cooklistIcon.src = "./images/grey-cooklist-icon.png";
  pantryIcon.src = "./images/red-pantry-icon.png";
};
