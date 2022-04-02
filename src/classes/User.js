class User {
  constructor(user){
    this.name = user.name;
    this.id = user.id;
    this.pantry = user.pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  };

  addToFavoriteRecipes(recipe) {
    this.favoriteRecipes.push(recipe);
  };

  addToRecipesToCook(recipe) {
    this.recipesToCook.push(recipe);
  };

  filterFavoriteRecipeTag(userInput) {
    const input = userInput.toLowerCase();

    const result = this.favoriteRecipes.filter((recipe) => {
      return recipe.tags.includes(input);
    });
    return result;
  }

  filterFavoriteRecipeName(userInput) {
    const input = userInput
      .toLowerCase()
      .split(" ")
      .map((word) => word.replace(word[0], word[0].toUpperCase()))
      .join(" ");

    const result = this.favoriteRecipes.filter((recipe) => {
      return recipe.name.includes(input);
    });

    return result;
  }
};

export default User;