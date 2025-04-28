const express=require("express")
const app=express()
app.use(express.urlencoded())
app.use(express.static(__dirname,{index:'ljform.html'}))
app.post("/login",(req,res)=>
    {
        if(req.body.un1=="admin")
            {
                res.write(`<h1>Welcome Admin</h1>`);
            }
        else
        {
            res.write(`<h1>Please login with admin name</h1>`)
        }
        res.send();
    })
    app.listen(5330);