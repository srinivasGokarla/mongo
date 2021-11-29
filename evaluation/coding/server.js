 const express = require("express")
 const mongoose = express("mongoose")

 const app = express()

 const connect = () => {
     return mongoose.connect("mongodb://localhost:27017/test")
     useNewUrlparser : true;
     useCreateIndex : true;
     useunifiedTopology : true;
     
 }