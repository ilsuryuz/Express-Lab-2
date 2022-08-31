// set dependenices
const express = require("express");
// use express() function
const app = express();
// assign port
const port = 3000;

// Route greeting to greet a stranger
app.get("/greeting/", (req, res)=> {
    res.send("Hello, stranger");
});
// specific greeting based on non-specific parameter
app.get("/greeting/:name", (req, res) => {
    res.send("Howdy " + req.params.name + "!")
})
// tip calculator based on a total entry then tip percentage by the user tip/:total/:tipPercentage
app.get("/tip/:total/:tipPercentage", (req, res) => {
    res.send("Your tip is " + ((parseInt(req.params.total)) * parseInt(req.params.tipPercentage) / 100 ))
})

// check if the app is listening
app.listen(port, () =>{
    console.log("Chicago is listening");
});