const express=require("express")
const app=express()
app.use(express.static(__dirname,{index:'mdTask.html'}))
app.use(express.urlencoded())
app.post("/login",(req,res,next)=>
    {
        res.set('content-type','text/html')
      res.write(`<h1>Welcome ${req.body.un} your Email Id is:${req.body.mail}</h1>`);
      next();
      
    })
    app.post("/login",(req,res)=>
        {
            if(req.body.cb=="on")
                {
                    res.write("<h1>Thank you!</h1>");
                    res.write("<a href='/'>Log out</a>")
                }
                else
                 {
                    res.write("<h1>you can subscribe</h1>");
                    res.write("<a href='/subscibe'>Subscibe</a>")
                }
                res.send();
            })
    app.get("/subscibe",(req,res)=>
                {
                    res.send(`<h1>Thank you</h1><a href='/'>Log out</a>`)
                })
    app.listen(5000)