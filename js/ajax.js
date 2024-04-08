let xhr = new XMLHttpRequest();
let requestBody = null;

xhr.open("GET", "./json/movies.json", true);
xhr.addEventListener("load", () => {
    console.log("...received response");
    let responseBody = xhr.response;
    let movieData = JSON.parse(responseBody);

    console.log(movieData);
});
xhr.send(requestBody);
console.log("Sent request...");