const express = require("express")

const router = express.Router();

const User = require("../models/user.model")
const crudController = require("./crud.controller")

router.post("",crudController(User))
router.get("", async(req,res) => {
    const users = await User.find().sort({id:-1}).lean().exec()

    return res.status(200).send({users})
});


router.patch("/:id",crudController.updateOne(User))
router.delete("/:id",crudController.deleteOne(User))
router.get("/:id",crudController.geteOne(User))


module.exports = router