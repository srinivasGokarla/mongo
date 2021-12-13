const express = require("express")

const router = express.Router();

const Show = require("../models/show.model")
const Post = require("../models/screen.model")
const crudController = require("./crud.controller")

router.post("",crudController.post(Show))
router.get("", async(req,res) => {
    const shows = await Show.find().sort({id:-1}).lean().exec()

    return res.status(200).send({shows})
});


router.patch("/:id", crudController.updateOne(Show))
router.delete("/:id", crudController.deleteOne(Show))
router.get("/:id", crudController.getOne(Show))


module.exports = router