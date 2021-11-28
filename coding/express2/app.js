const express = require("express")

const books = require("./books")

const app = express()

app.use(express.json());

app.get("/", (req, res) => {
    res.send({books})
});

app.get("/:id", (req, res) => {
    const newBooks = books.filter((book)=> book.id === req.params.id);
    res.send(newBooks)
});

app.post("/books", (req, res) => {
 
    console.log(req.body)
    res.send("Post")
});


app.patch("/books/:id", (req,res) => {
    console.log(req.params.id)
    res.send('Patch')
})


app.delete("/:id", (req,res) => {
    const newBooks = books.filter((book) => book.id !== req.params.id)

    res.send(newBooks)
})




app.listen(3012, function() {
    console.log("listening on port 3012")
})