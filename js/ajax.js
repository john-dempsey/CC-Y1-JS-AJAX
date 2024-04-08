let fetchPromise = fetch("./json/movies.json");

console.log("Sent request...");

let jsonPromise = fetchPromise.then((response) => {
    console.log("...received response");
    console.log("Extracting JSON from request...");
    let dataPromise = response.json();  //start encoding into an object
    return dataPromise;
});

jsonPromise.then((data) => {
    console.log("...extracted JSON from request");
    console.log(data);
});