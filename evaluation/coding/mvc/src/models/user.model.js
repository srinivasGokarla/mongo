const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name : {type: String, required: true},
    email : {type: String, required: true, unique: true},
    password : {type: String, required: true},
    profile_photo_url : {type: String, required: true},
    roles : {type: String, required: true}
}, {
versionKey: false,
timestamps: true,

})

const User = mongoose.model("user",userSchema)

module.exports = User