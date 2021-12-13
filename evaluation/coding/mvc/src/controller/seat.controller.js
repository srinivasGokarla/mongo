const express = require("express")

const router = express.Router();

const Seat = require("../models/seat.model")
const Post = require("../models/show.model")
const crudController = require("./crud.controller")

router.post("",crudController.post(Seat))
router.get("", async(req,res) => {
    const seats = await Seat.find().sort({id:-1}).lean().exec()

    return res.status(200).send({seats})
});


router.patch("/:id", crudController.updateOne(Seat))
router.delete("/:id", crudController.deleteOne(Seat))
router.get("/:id", crudController.getOne(Seat))


module.exports = router