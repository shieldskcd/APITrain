fetch("http://swapi.dev/api/people/")
  .then((res) => res.json())
  .then((response) => console.log(response));
