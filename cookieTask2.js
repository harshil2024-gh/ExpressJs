const cp=require('cookie-parser');
const express=require('express');
const app=express();
app.use(express.urlencoded())
app.use(express.static(__dirname,{index:'cookieTask2.html'}));
app.use(cp());
app.post("/submit",(req,res)=>
    {
        const{un,eid,msg,rating}=req.body;
        const feedback={un,eid,msg,rating};
        res.cookie("feedback",feedback,{maxAge:10000});
        res.send("<h2>Thank you</h2><br><a href='/details'>Show Details</a>")
    });
    app.get("/details",(req,res)=>
        {
            var fb=req.cookies.feedback;
            if(fb)
                {
                    res.send(`<h2>Name:${fb.un}<br>Email:${fb.eid}<br>Message:${fb.msg}<br>
                        Rating:${fb.rating}</h2>`)
                }
            else
            {
                res.send("<h2>No Feedback Available.</h2>")
            }
        })
        app.listen(8001);
