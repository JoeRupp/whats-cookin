const fetchData = (extension) => {
  return fetch(`http://localhost:3001/api/v1/${extension}`)
    .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw Error(response.statusText)
    }
  })
    // .then(response => response.json())
    .catch(err => console.log(err));
};

const postData = (data) => {
  return fetch(`http://localhost:3001/api/v1/users`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw Error(response.statusText)
    }
  })
  // .then(response => response.json())
  .catch(err => console.log(err))
};

export {fetchData, postData};
