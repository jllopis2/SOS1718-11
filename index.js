var express = require("express");
var app = express();

app.get("/hello", (req,res) =>{
    
    res.send("Hello world!");
} );

app.listen(process.env.PORT);
