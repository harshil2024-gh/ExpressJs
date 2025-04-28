const express=require('express')
const app=express()
app.use(express.static(__dirname,{index:'getTask2.html'}))
app.get("/process",(req,res)=>
    {
        res.set("content-type","text/html");
        var sp=req.query.msg.split('.');
        for(i=0;i<sp.length;i++)
            {
                res.write(`<p>${sp[i]}</p>`)

            }
            res.send()
    })
    app.listen(5008);