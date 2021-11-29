 const express = require("express")
 const mongoose = express("mongoose")

 const app = express()

app.listen(3300, function() {
    console.log("listening on port 3300")
})