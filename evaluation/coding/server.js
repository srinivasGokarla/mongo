 const express = require("express")
 const mongoose = express("mongoose")

 const jobs = require("./jobs.json")


 const connect = () => {
     return mongoose.connect("mongodb://localhost:27017/test", {
         useNewUrlParser : true,
         useCreateIndex : true,
         useUnifiedTopology: true,
     })
 }

 const app = express()

app.listen(3300, function() {
    console.log("listening on port 3300")
})