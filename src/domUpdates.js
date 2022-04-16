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
  },

  viewPantry(list) {
    const recipeList = document.querySelector(".recipe-list");
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
};

export default domUpdates;
