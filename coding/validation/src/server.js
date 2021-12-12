const app = require("./index");

const connect = require("./configs/db");

app.listen(3337, async function(){
    await connect()
    console.log("3337 port is listening")
})