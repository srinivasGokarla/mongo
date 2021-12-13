const express = require("express")

const router = express.Router();

const Movie = require("../models/movie.model")
const crudController = require("./crud.controller")

router.post("",crudController.post(Movie))
router.get("", async(req,res) => {
    const movies = await Movie.find().sort({id:-1}).lean().exec()

    return res.status(200).send({movies})
});


router.patch("/:id", crudController.updateOne(Movie))
router.delete("/:id", crudController.deleteOne(Movie))
router.get("/:id", crudController.getOne(Movie))


module.exports = router