const express = require("express")

const connect = require("./configs/db")
const userController  = require("./controller/user.controller")
const movieController  = require("./controller/movie.controller")

const app = express()

app.use(express.json())
  

app.use("/users",userController)
app.use("/movies",movieController)

app.listen(3575, async function() {
    await connect();
    console.log("listening on port 3575")
})