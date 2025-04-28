// JSON processing
const express=require("express")
const app=express()
var s={"name":"ABC","age":28};
app.get("/",(req,res)=>
    {
        // res.write(s);
        res.write(JSON.stringify(s));
        res.send();
    })
    app.get("/j",(req,res)=>{
        res.send(s);
    })
    app.get("/j1",(req,res)=>{
        res.json(s);
    })
    app.get("/age",(req,res)=>{
        // res.write(s.age); //TypeError: because age is in number.
        // res.json(s.age); // 28
        res.send(s.age);
        // res.send(200);  //output: 200
        // res.sendStatus(200);  //Output: OK


    })
    app.listen(5003,()=>{console.log("Started")})
//note: If you use write/json function then send function's parameter must be empty.
// res.json() and res.sendStatus() ends itself no need to use res.send() or res.end().