const cp=require('cookie-parser');
const express=require('express');
const app=express();
app.use(express.static(__dirname,{index:'cookieTask.html'}));
app.use(cp());
app.get("/next",(req,res)=>
    {
        res.cookie("fname",req.query.fn);
        res.cookie("lname",req.query.ln);
        res.cookie("pass",req.query.ps);
        res.redirect('/admin');
    })
app.get("/admin",(req,res)=>
    {
        res.clearCookie("lname");
        res.send(`Welcome ${req.cookies.fname} ${req.cookies.lname} Password is: ${req.cookies.pass}`)
    })
app.listen(8000);