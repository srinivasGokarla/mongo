const express = require("express")
const mongoose = require("mongoose")

const movies = require("./movies.json")



const connect = () => {
    return mongoose.connect("mongodb://localhost:27017/test", {
useNewUrlParser : true,
useCreateIndex :true,
useUnifiedTopology : true,

    });
};

//create schema(step1)
const movieSchema = new mongoose.Schema({
    id:{type:Number,required:true},
    movie_name:{type:String,reqired:true},
    budget:{type:Number,reqired:true},
    production_year:{type:Number,reqired:true},
})
//connect schema to movie collection(step2)
const Movie = mongoose.model("movies",movieSchema) //movies

const app = express();
app.use(express.json())

//---------CRUD APIS----------
//post
app.post("/movies",async(req,res)=>{
    try {
        const movie = await Movie.create(req.body) //db.movies.insert
 
        return res.status(201).send({movie});
    } catch (e) {
        res.status(500).json({status : e.message})
    }
   
})

//get
app.get("/movies",async(req,res)=>{
    const movies = await Movie.find().sort({id:-1}).lean().exec() //db.movies.find,exec will convert half promise(thennable)to full promise


    return res.status(200).send({movies})
})

//patch
app.patch("/movies/:id",async(req,res)=>{    //mongoid
    try {
        const movie = await Movie.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(200).send({movie})
    } catch (e) {
        res.status(500).json({status : e.message})
    }
          
    //db.movies.update({_id:""},{$set:{}})
}) 

//delete
app.delete("/movies/:id",async (req,res)=>{
    try {
        const movie = await Movie.findByIdAndDelete(req.params.id).lean().exec(); //db.movies.remove({_id:""})

        return res.status(200).send({movie});
    } catch (e) {
        res.status(500).json({status : e.message})
    }
   
    //delete=>delete single bar
})

//get a single movie
app.get("/movies/:id",async(req,res)=>{
    try {
        const movie = await Movie.findById(req.params.id).lean().exec();
     res.send({movie});
    } catch (e) {
        res.status(500).json({status : e.message})
    }
    
})

const start = async() => {
    await connect();
    app.listen(3212, () => {
        console.log("Listening on port 3212")
    })
}
start();


