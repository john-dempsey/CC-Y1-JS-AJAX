let xhr = new XMLHttpRequest();
let requestBody = null;

xhr.open("GET", "./json/movies.json", false);

xhr.send(requestBody);

let responseBody = xhr.response;
let movieData = JSON.parse(responseBody);

console.log(movieData);