let fetchPromise = fetch("./json/movies.json");

console.log("Sent request...");

fetchPromise.then((response) => {
    console.log("...received response");
    console.log(response);
});