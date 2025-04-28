var express=require("express");
var app=express();
var s={d:[{"name":"A","Age":20},
    {"name":"C","Age":18},
    {"name":"Z","Age":30}
]}
app.get("/",(req,res)=>
    {
        res.write("<table border='1px solid black' rules='all'><tr><th>Name</th><th>Age</th></tr>");
        for (i of s.d)
            {
                res.write(`<tr><td>${i.name}</td><td>${i.Age}</td></tr>`)
            }
        res.write("</table>");
        res.send();
    })
    app.listen(5005,()=>{console.log("server started!!")})