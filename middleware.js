const express=require("express")
const app=express()
const func1=(req,res,next)=>
    {
        // res.set('content-type','text/html');
        console.log("function 1")
        res.write("<h1>Function 1 executed</h1>"); 
        //if <h1>/<p> is written in write without giving content-type it consider as html content else it consider as plain text
        next();
        }
const func2=(req,res,next)=>
    {
        res.write("<h3>Function 2 executed</h3>");
        next();
    }
const func3=(req,res,next)=>
    {
        res.write("<h3>Function 3 executed</h3>");
        next();
    }
app.use("/test",func1,func2,func3);
app.get("/test",(req,res)=>
    {
        res.write("Final Execution")
        res.send();
    });
    app.listen(7001);