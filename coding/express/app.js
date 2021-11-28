const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();

app.get("/",function(req,res){
    res.send("Welcome to Home page")
})

app.get("/users",function(req,res){
    res.send(users);
})

app.listen(3002,() =>{
    console.log("listening on port 3002")
   });