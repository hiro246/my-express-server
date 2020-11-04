const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("Hello, World!");
});

app.get("/contact", function(req, res){
    res.send("contact:gmail");
});

app.get("/about", function(req, res){
    res.send("私は山田です");
});

app.get("/hobbies", function(req, res){
    res.send("<ul><li>ビール</li><li>おつまみ</li></ul>");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});


