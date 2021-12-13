const mongoose = require("mongoose")

const seatSchema = new mongoose.Schema({
    
    show_id : [{type: mongoose.Schema.Types.ObjectId,ref:"show", required: true}],
    
}, {
versionKey: false,
timestamps: true,

})

const Seat = mongoose.model("seat",seatSchema)

module.exports = Seat