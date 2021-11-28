const express = require("express")

const books = require("./books.json")

const app = express()

const logger = (req,res,next) =>  {
    console.log(req.method)
    console.log("before")
    next()
    console.log("after")
};

app.use(logger)

app.use(express.json());

app.get("/", (req,res) => {
    console.log("getting")
    res.send(books)
})

app.post("/books",logger, (req,res) => {

    const newBooks = [...books,req.body];

    res.send(newBooks)
});

app.get("/books/:id", (req,res) => {
    const book = books.filter((book) => book.id === req.params.id)
    
    console.log("single item")
    res.send(book)
})

app.patch("/books/:author", (req,res) => {
    const newBooks = books.map((book) => {
        if(req.params.author === book.author) {
            return req.body
        }
        return book
    })
    res.send(newBooks)
})

app.delete("/books/:id", (req,res) => {
    const newBooks = books.filter((book) => book.id !== req.params.id)
    res.send(newBooks)
})

app.listen(3015,() =>{
    console.log("listening on port 3015")
   });