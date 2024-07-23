const express = require("express")
const path = require("path")
const app = express()

app.use(express.static(path.join(__dirname,"stylesheets")))
app.use(express.static(path.join(__dirname,"images")))
app.use(express.static("javascripts"))

app.get("/",(req,res)=>{
    res.render("pokemon.ejs")
})
app.get("/:variable",(req,res)=>{
    const {variable}=req.params;
    res.render(`${variable}.ejs`);
})
app.listen(3000,()=>{
    console.log("server started")
})