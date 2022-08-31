// set dependenices
const express = require("express");
// use express() function
const app = express();
// assign port
const port = 3000;

// Route greeting to greet a stranger
app.get("/greeting/", (req, res) => {
    res.send("Hello, stranger");
});
// specific greeting based on non-specific parameter
app.get("/greeting/:name", (req, res) => {
    res.send("Howdy " + req.params.name + "!")
})
// tip calculator based on a total entry then tip percentage by the user tip/:total/:tipPercentage
app.get("/tip/:total/:tipPercentage", (req, res) => {
    res.send("Your tip is " + ((parseInt(req.params.total)) * parseInt(req.params.tipPercentage) / 100))
})

// magic 8 ball
app.get("/magic/:phrase", (req, res) => {
    const magicResponses =
        ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];
        // random response using math.random()
        res.send(`<h1>${magicResponses[Math.floor(Math.random() * magicResponses.length)]}</h1>`)
})


// check if the app is listening
app.listen(port, () => {
    console.log("Chicago is listening");
});