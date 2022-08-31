const express = require("express");
const app = express();
const port = 3000;


app.get("/greeting/", (req, res)=> {
    res.send("Hello, stranger")
})


app.listen(port, () =>{
    console.log("Chicago is listening")
})