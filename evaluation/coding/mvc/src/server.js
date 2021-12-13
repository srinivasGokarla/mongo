const express = require("express")

const connect = require("./configs/db")
const userController  = require("./controller/user.controller")

const app = express()

app.use(express.json())
  

app.use("/users",userController)

app.listen(3575, async function() {
    await connect();
    console.log("listening on port 3575")
})