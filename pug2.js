const express=require('express');
const app=express();
app.set("view engine","pug")
app.get("/",(req,res)=>
    {
        res.render(__dirname+"/pug2")
    })
app.listen(5090)