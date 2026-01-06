const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.set("view engine", "ejs")
app.set("views", "views")

const memes = [
    {
        name: "Memes that make us smile",
        imgURL: "https://exse.eyewated.com/pict/c38cc4d7ef9a30de-1024x683.jpg",
        price: "$20.00 - $30.00"
    },
    {
        name: "Programmer memes",
        imgURL: "https://aprogrammerlife.com/images/pictuers/programmers_looking_at_programming_memes.jpg",
        price: "$10.00"
    }
]
app.get("/", (req, res) => {
    res.render("index")
})
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running: http://localhost:${PORT}`))

module.exports = app