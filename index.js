var express = require("express");
var app = express();
var path = require("path")
var port = (process.env.PORT || 16778)

app.use("/", express.static(path.join(__dirname,"public")))

app.get("/hello", (req,res) =>{
    
    res.send("Hello world!");
} );

app.listen(port);

