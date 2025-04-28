const express=require('express')
const app=express()
app.use(express.static(__dirname,{index:'getTask3.html'}))
app.get("/calc",(req,res)=>
    {
        res.set("content-type","text/html");
        var a=req.query.a
        var b=req.query.b
        if(req.query.operation=="")
            {
                res.write("You have not selected any formula")
            }
        else if(req.query.operation=="add")
            {
                res.write("Addition: "+(a+b))
            }
        else if(req.query.operation=="sub")
            {
                res.write("Subtraction: "+(a-b))
            }
        else if(req.query.operation=="mul")
            {
                res.write("Multiplication: "+(a*b))
            }
            else if(req.query.operation=="div")
                {
                    res.write("Division: "+(a+b))
            }
            res.send()
    })
    app.listen(5008);