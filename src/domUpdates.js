
// const displayAllRecipes = () => {
//     viewAllRecipes(recipeRepo.repo);
//     displayRecipe(recipeRepo.repo[0]);
//     seeAllView();
//   }
//   export { displayAllRecipes };
//
// const viewFavoriteRecipes = () => {
//     viewAllRecipes(currentUser.favoriteRecipes);
//     seeFavoritesView();
//     displayRecipe(currentUser.favoriteRecipes[0]);
//   }
//   export { viewFavoriteRecipes } ;
const starIcon = document.querySelector(".star-icon");
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
// const starIcon = document.querySelector(".star-icon");
const cooklistIcon = document.querySelector(".cooklist-icon");
const pantryIcon = document.querySelector(".pantry-icon");
const allRecipeIcon = document.querySelector(".all-recipe-icon");
const pantryBtn = document.querySelector(".pantry-btn");
const cookBtn = document.querySelector(".cook-btn");



const seeFavoritesView = () => {
      searchFavoritesBtn.classList.remove("hidden");
      searchBtn.classList.add("hidden");
      starIcon.src = "./images/red-star-icon.png";
      allRecipeIcon.src = "./images/grey-cookbook-icon.png";
      cooklistIcon.src = "./images/grey-cooklist-icon.png";
      pantryIcon.src = "./images/grey-pantry-icon.png";
      cookBtn.classList.add("hidden");
};
      export { seeFavoritesView };
