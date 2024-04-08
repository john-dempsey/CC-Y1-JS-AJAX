console.log("About to send request...");
fetch("./json/movies.json")
.then((response) => {
    console.log("...received response");
    console.log("Extracting JSON from request...");
    let dataPromise = response.json();  //start encoding into an object
    return dataPromise;
})
.then((data) => {
    console.log("...extracted JSON from request");
    console.log(data);
});