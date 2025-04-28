const express=require("express")
const app=express()
app.use("/test1",(req,res,next)=>
    {
        res.write("<p>First</p>")
        next()
    },
    (req,res,next)=>
        {
        res.write("<p>second</p>"); 
        next();
        },
   (req,res,next)=>
    {
        res.write("<h3>Third</h3>");
        res.send();
    });

    app.listen(7001);