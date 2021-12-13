const mongoose = require("mongoose")

const showSchema = new mongoose.Schema({
    timing : {type: Number, required: true},
    movie : [{type: mongoose.Schema.Types.ObjectId, ref:"movie", required: true}],
    screen : [{type: mongoose.Schema.Types.ObjectId, ref:"screen", required: true}],
    seats:  {type: Number, required: true}
    
}, {
versionKey: false,
timestamps: true,

})

const Show = mongoose.model("show",showSchema)

module.exports = Show