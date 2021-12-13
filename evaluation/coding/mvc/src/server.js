const express = require("express")

const connect = require("./configs/db")

const userController  = require("./controller/user.controller")
const movieController  = require("./controller/movie.controller")
const theatreController  = require("./controller/theatre.controller")
const screenController  = require("./controller/screen.controller")
const showController  = require("./controller/show.controller")
const seatController  = require("./controller/seat.controller")

const app = express()

app.use(express.json())
  

app.use("/users",userController)
app.use("/movies",movieController)
app.use("/theatres",theatreController)
app.use("/screens",screenController)
app.use("/shows",showController)
app.use("/seats",seatController)

app.listen(3575, async function() {
    await connect();
    console.log("listening on port 3575")
})