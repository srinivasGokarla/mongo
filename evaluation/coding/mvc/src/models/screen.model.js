const mongoose = require("mongoose")

const screenSchema = new mongoose.Schema({
    name : {type: String, required: true},
    threatre_id : [{type: mongoose.Schema.Types.ObjectId,ref:"theatre", required: true}],
    
}, {
versionKey: false,
timestamps: true,

})

const Screen = mongoose.model("screen",screenSchema)

module.exports = Screen