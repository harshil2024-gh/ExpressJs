//age should be in descending order

var express=require("express");
var app=express();
var s={d:[{"name":"A","Age":20},
    {"name":"C","Age":18},
    {"name":"Z","Age":30}
]}

//sorting in descending order of age.
s=s.d.sort((a,b)=>b.Age-a.Age)
console.log(s)
console.log(typeof(s))

app.get("/",(req,res)=>
    {
        res.write("<table border='1px solid black' rules='all'><tr><th>Name</th><th>Age</th></tr>");
        for (i of s)
            {
                res.write(`<tr><td>${i.name}</td><td>${i.Age}</td></tr>`)
            }
        res.write("</table>");
        res.send();
    })
    app.listen(5006,()=>{console.log("server started!!")})