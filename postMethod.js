    const express=require("express")
    const app=express()
    app.use(express.urlencoded())
    app.use(express.static(__dirname,{index:'postMethod.html'}));
    app.post("/data",(req,res)=>{
        console.log(req.body);
        res.send(`<h1>Welcome ${req.body.un}</h1>`);
    })
    app.listen(5002)