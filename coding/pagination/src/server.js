const app = require("./index")

const connect = require("./configs/db")

app.listen(3231,  async function() {

    await connect()
    console.log("listening on port 3231")
})