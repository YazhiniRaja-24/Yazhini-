const express = require('express')
const app = express()
app.get('/api',(req,res)=>{
    res.send("hi hello")
})
app.listen(4000,()=>{
    console.log("server is running")
})