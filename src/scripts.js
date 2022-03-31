import './styles.css';
import apiCalls from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import "./images/What'sCookinLogo-01.png"
import "./images/What'sCookinLogo-02.png"
import "./images/chicken-leg.png"
import "./images/star-icon-red.png"
import "./images/star-icon-white.png"
import "./images/star-icon-grey.png"


console.log('Hello world');

//GlobalVariables
//const recipeRepo = new RecipeRepository;


//QuerySelectors
const recipeList = document.QuerySelectors('.recipe-list');
const searchBox = document.QuerySelectors('.search-box');
const favoriteFilterBtn = document.QuerySelectors('.filter-favorites-btn');
const favoriteBtn = document.QuerySelectors('.favorites-star');
const recipeName = document.QuerySelectors('.recipe-name');
const dishImg = document.QuerySelectors('.select-dish-img');
const directions = document.QuerySelectors('.directions');
const recipeCost = document.QuerySelectors('.recipe-cost');
const listOfIngredients = document.QuerySelectors('.list-of-ingredients');

//EventListeners
favoriteFilterBtn.addEventListener('click');
favoriteBtn.addEventListener('click');


//Functions


//Helper Functions
