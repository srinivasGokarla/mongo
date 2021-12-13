const express = require("express")

const router = express.Router();

const Theatre = require("../models/theatre.model")
const Post = require("../models/screen.model")
const crudController = require("./crud.controller")

router.post("",crudController.post(Theatre))
router.get("", async(req,res) => {
    const theatres = await Theatre.find().sort({id:-1}).lean().exec()

    return res.status(200).send({theatres})
});


router.patch("/:id", crudController.updateOne(Theatre))
router.delete("/:id", crudController.deleteOne(Theatre))
router.get("/:id", crudController.getOne(Theatre))


module.exports = router