class RecipeRepository {
  constructor(data) {
    this.data = data;
  }

  filterRecipeTag(userInput) {
    userInput.toLowerCase();

    const result = this.data.filter((recipe) => {
      return recipe.tags.includes(userInput);
    });
    return result;
  }

  filterRecipeName(userInput) {
    userInput.toLowerCase();

    const result = this.data.filter((recipe) => {
      return recipe.name.includes(userInput);
    });

    return result;
  };
};

export default RecipeRepository;
