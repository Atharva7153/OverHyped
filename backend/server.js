const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get("/tagline", (req, res)=>{
    res.json({
        tagline : "Make a ",
        bold: "Entrance"
    })
})

const top4 = ['Iphone 12', 'Iphone13', 'Galaxy S23','Samsung S45']

app.get("/top4", (req, res)=>{
    res.json(top4);
})

app.listen(3000, ()=>{
    console.log("Server running on 3000")
})