const express = require("express")

const router = express.Router();

const Screen = require("../models/screen.model")
const Post = require("../models/theatre.model")

const crudController = require("./crud.controller")

router.post("",crudController.post(Screen))
router.get("", async(req,res) => {
    const screens = await Screen.find().sort({id:-1}).lean().exec()

    return res.status(200).send({screens})
});


router.patch("/:id", crudController.updateOne(Screen))
router.delete("/:id", crudController.deleteOne(Screen))
router.get("/:id", crudController.getOne(Screen))


module.exports = router