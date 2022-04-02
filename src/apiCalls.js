// Your fetch requests will live here!
// fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users').then(response => response.json()).then(data => console.log(data));
//
// //Ingredients Data
// fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients').then(response => response.json()).then(data => console.log(data));
//
// //Recipe Data
// fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes').then(response => response.json()).then(data => console.log(data));

const fetchData = (extension) => {
  return fetch(`https://what-s-cookin-starter-kit.herokuapp.com/api/v1/${extension}`)
    .then(response => response.json())
    .catch(err => console.log(err));
};

// function fetchAllData() {
//   Promise.all([fetchData('users'), fetchData('ingredients'), fetchData('recipes')])
//     .then(data => {
// 			console.log(data)
//       // userData = data[0]
//       // initializeUserData(data[0].userData, data[1].ingredientData, data[2].recipeData);
//       // getCurrentUser(1);
//   });
// };
// fetchAllData();


export {fetchData}
