// set dependencies
const express = require("express");
// use express
const app = express();

//set port
const port = 4000;

// listen to port
app.listen(port, () => {
    console.log("Beer is on your ear");
});

// set homepage
app.get("/", (req, res) => {
    res.send(`
        <h1>99 bottles of beer on da wall</h1>
        <a href="/98"> Take one down, pass it around</a>
    `);
});

// 

app.get("/:numOfBottles", (req, res) => {
    // get the number of bottles from the URL
    let bottles = parseInt(req.params.numOfBottles); 
    // create a conditional statement to pass around the bottles
    if (bottles > 0) {
        res.send(
            `<h1>${bottles} bottles of beer on da wall</h1>
            <a href="/${bottles -1}"> Take one down, pass it around</a>
            `
        )
    } else if( bottles === 0){
        res.send(
            `<h1>0 bottles left</h1>
            <a href="/"> No more bottles, start over?</a>
            `
        )
    }
});