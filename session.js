const sess=require('express-session');
const express=require('express');
const app=express();
app.use(sess({
    resave:false,
    saveUnitialized:false,
    secret:'LJU123'
}));
app.get("/",(req,res)=>
    {
        if(req.session.page_views)
            {
                req.session.page_views++;
                res.send(`<h1 style='color:blue;'>You Have Visited ${req.session.page_views} times`)
            }
        else
        {
            req.session.page_views=1;
            res.send(`<h1 style='color:green'>Thank you For visiting</h1>`)
        }    
    })
    app.listen(8005);