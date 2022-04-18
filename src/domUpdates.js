let domUpdates = {
  viewErrorMessage() {
    const recipeList = document.querySelector(".recipe-list");
    const result = `
             <div class="pantry-preview">
               <div class="meal-info-preview">
                 <h2>Nothing has been added to this list yet!</h2>
               </div>
             </div>`;
    const mealInfo = recipeList;
    mealInfo.innerHTML = result;
    return mealInfo;
  },

  viewAllRecipes(list) {
    const recipeList = document.querySelector(".recipe-list");
    const result = list
      .map((eachRecipe) => {
        const mealPreview = `
       <div class="meal-preview" id="${eachRecipe.id}" role="button">
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
  },

  viewPantry(list) {
    const recipeList = document.querySelector(".recipe-list");
    const result = list
      .map((eachIngredient) => {
        const mealPreview = `
       <div class="pantry-preview" id="${eachIngredient.id}" aria-label = "An ingredient included within the user's pantry">
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
  },

  seeFavoritesView() {
    const searchBtn = document.querySelector(".search-button");
    const searchFavoritesBtn = document.querySelector(
      ".search-favorites-button"
    );
    const starIcon = document.querySelector(".star-icon");
    const allRecipeIcon = document.querySelector(".all-recipe-icon");
    const cooklistIcon = document.querySelector(".cooklist-icon");
    const pantryIcon = document.querySelector(".pantry-icon");
    const cookBtn = document.querySelector(".cook-btn");
    searchFavoritesBtn.classList.remove("hidden");
    searchBtn.classList.add("hidden");
    starIcon.src = "./images/red-star-icon.png";
    allRecipeIcon.src = "./images/grey-cookbook-icon.png";
    cooklistIcon.src = "./images/grey-cooklist-icon.png";
    pantryIcon.src = "./images/grey-pantry-icon.png";
    cookBtn.classList.add("hidden");
  },

  seeAllView() {
    const searchBtn = document.querySelector(".search-button");
    const searchFavoritesBtn = document.querySelector(
      ".search-favorites-button"
    );
    const starIcon = document.querySelector(".star-icon");
    const allRecipeIcon = document.querySelector(".all-recipe-icon");
    const cooklistIcon = document.querySelector(".cooklist-icon");
    const pantryIcon = document.querySelector(".pantry-icon");
    const cookBtn = document.querySelector(".cook-btn");
    searchBtn.classList.remove("hidden");
    searchFavoritesBtn.classList.add("hidden");
    starIcon.src = "./images/grey-star-icon.png";
    allRecipeIcon.src = "./images/red-cookbook-icon.png";
    cooklistIcon.src = "./images/grey-cooklist-icon.png";
    pantryIcon.src = "./images/grey-pantry-icon.png";
    cookBtn.classList.add("hidden");
  },

  toggleFavoriteStarRed() {
    const favoriteBtnStar = document.querySelector(".favorites-star");
    favoriteBtnStar.src = "./images/red-star-icon.png";
  },

  toggleCookListIconRed() {
    const addToCookListIcon = document.querySelector(".addToCook-plus");
    addToCookListIcon.src = "./images/red-cooklist-icon.png";
  },

  toggleErrorMessage(input) {
    const error = document.querySelector(".error");
    if (input) {
      error.classList.add("hidden");
    } else {
      error.classList.remove("hidden");
    }
  },

  changeRecipeName(recipe) {
    const recipeName = document.querySelector(".recipe-name");
    return (recipeName.innerHTML = recipe);
  },

  changeRecipeImage(recipe) {
    const dishImg = document.querySelector(".selected-dish-img");
    return (dishImg.src = recipe);
  },

  changeRecipeDirections(recipe) {
    const directions = document.querySelector(".step-number");
    const instructions = recipe
      .map((eachStep) => {
        const step = `<li class="step-items">${eachStep.instruction}</li>`;
        return step;
      })
      .join("");
    return (directions.innerHTML = instructions);
  },

  seeCookListView() {
    const searchBtn = document.querySelector(".search-button");
    const searchFavoritesBtn = document.querySelector(
      ".search-favorites-button"
    );
    const starIcon = document.querySelector(".star-icon");
    const allRecipeIcon = document.querySelector(".all-recipe-icon");
    const cooklistIcon = document.querySelector(".cooklist-icon");
    const pantryIcon = document.querySelector(".pantry-icon");
    searchFavoritesBtn.classList.add("hidden");
    searchBtn.classList.add("hidden");
    starIcon.src = "./images/grey-star-icon.png";
    allRecipeIcon.src = "./images/grey-cookbook-icon.png";
    cooklistIcon.src = "./images/red-cooklist-icon.png";
    pantryIcon.src = "./images/grey-pantry-icon.png";
  },

  seePantryView() {
    const searchFavoritesBtn = document.querySelector(
      ".search-favorites-button"
    );
    const searchBtn = document.querySelector(".search-button");
    const starIcon = document.querySelector(".star-icon");
    const allRecipeIcon = document.querySelector(".all-recipe-icon");
    const cooklistIcon = document.querySelector(".cooklist-icon");
    const pantryIcon = document.querySelector(".pantry-icon");
    searchFavoritesBtn.classList.add("hidden");
    searchBtn.classList.add("hidden");
    starIcon.src = "./images/grey-star-icon.png";
    allRecipeIcon.src = "./images/grey-cookbook-icon.png";
    cooklistIcon.src = "./images/grey-cooklist-icon.png";
    pantryIcon.src = "./images/red-pantry-icon.png";
  },

  toggleCookBtn(input) {
    const cookBtn = document.querySelector(".cook-btn");
    if (input) {
      cookBtn.classList.add("hidden");
    } else {
      cookBtn.classList.remove("hidden");
    }
  },

  changeRecipePrice(recipe) {
    const recipeCost = document.querySelector(".recipe-cost");
    recipeCost.innerHTML = `$${recipe}`;
  },

  changeRecipeIngred(recipe, pantryIngredients) {
    const listOfIngredients = document.querySelector(".list-of-ingredients");
    const pantryContents = pantryIngredients;
    const ingreds = recipe
      .map((eachIngred) => {
        if (pantryContents.some((e) => e.id === eachIngred.id)) {
          return `<li class="ingredient-item"><img class="ingredient-state-true" id="${eachIngred.id}" src="./images/red-pantry-icon.png" alt="ingredient pantry status"  role="button">${eachIngred.name} - ${eachIngred.amount} ${eachIngred.unit}</li>`;
        } else {
          return `<li class="ingredient-item"><img class="ingredient-state-false" id="${eachIngred.id}" src="./images/grey-plus-icon.png" alt="ingredient pantry status"  role="button">${eachIngred.name} - ${eachIngred.amount} ${eachIngred.unit}</li>`;
        }
      })
      .join("");
    return (listOfIngredients.innerHTML = ingreds);
  },
};
export default domUpdates;
