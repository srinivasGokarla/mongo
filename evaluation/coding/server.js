const express = require("express")
const mongoose = require("mongoose")

const movies = require("./jobs.json")


 const connect = () => {
    return mongoose.connect("mongodb://localhost:27017/test", {
useNewUrlParser : true,
useCreateIndex :true,
useUnifiedTopology : true,

    });
};




 const jobSchema = new mongoose.Schema({
id:{type:Number,required:true},
job:{type:String,required:true},
city:{type:String,required:true},
skill:{type:String,required:true},
work_form_home:{type:Boolean,required:true},
months_notice_period:{type:Boolean,required:true},
rating:{type:Number,required:false},
company:{type:String,required:true},


 })
 const Movie = mongoose.model("jobs",jobSchema) 

 const app = express()
 app.use(express.json())
//get
 app.get("/jobs", async(req,res) => {
     try {
        const jobs = await Job.find().sort({id:1}).lean().exec();
        return res.status(200).send({jobs})
     } catch (e) {
         res.status(500).json({status: e.message})
     }
    
 });

//post

app.post("/jobs", async(req,res) => {
    try {
        const job = await Job.create(req.body)
        return res.status(201).send({jobs})
        
    } catch (e) {
        res.status(500).json({status: e.message})
    }
});


//patch


app.patch("/jobs/:id", async(res, req) => {
    try {
        const job = await Job.findByIdAndUpadate(req.params.id, req.body,{new:true}).lean().exec();
        return res.status(200).send({jobs})
    } catch (e) {
        res.status(500).json({status: e.message})
    }
})

//delete
app.delete("/jobs/:id", async(req,res) => {
    try {
        const job = await Job.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send({jobs})
        
    } catch (e) {
        res.status(500).json({status: e.message})
    }
});
 //get single job 

 app.get("/jobs/:id", async(res, req) => {
    try {
        const job = await Job.findById(req.params.id).lean().exec();
         res.send({jobs})
    } catch (e) {
        res.status(500).json({status: e.message})
    }
})




app.listen(3300, function() {
    console.log("listening on port 3300")
})