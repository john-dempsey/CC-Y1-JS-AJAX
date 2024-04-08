let response = await fetch("./json/movies.json");

console.log("Sent request...");
console.log("...received response");
console.log("Extracting JSON from request...");

let data = await response.json(); 

console.log("...extracted JSON from request");
console.log(data);
