const express=require('express')
const app=express()
app.use("/t",express.static("Frontend",{index:"2.html"}));
app.listen(5001)