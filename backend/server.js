const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.use("/tagline", (req, res)=>{
    res.json({
        tagline : "Make a ",
        bold: "Entrance"
    })
})

app.listen(3000, ()=>{
    console.log("Server running on 3000")
})