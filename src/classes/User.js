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
};

export default User;