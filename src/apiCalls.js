const fetchData = (extension) => {
  return fetch(`https://what-s-cookin-starter-kit.herokuapp.com/api/v1/${extension}`)
    .then(response => response.json())
    .catch(err => console.log(err));
};

export {fetchData}
