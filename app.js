const express = require("express");
const BodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();
app.use(BodyParser.urlencoded({extended:true}));
app.set("view engine" , "ejs");

const items = ["Complete To-Do List"] ;
const work = [];

app.get("/" , (req , res)=>{
    
    res.render("index" , {day : date.day() , items : items});
});

app.post("/" , (req , res)=>{
    let item = req.body.task ;
    if(req.body.button === "Work"){
        work.push(item);
        res.redirect("/work");
    }
    else {
        items.push(item);
        res.redirect("/");
    }    
})

app.get("/work" , (req , res)=>{
    res.render("index" , {day : "Work List" , items : work});
})


app.listen(process.env.PORT || 3000 , ()=>{
    console.log("app started at port 3000");
})