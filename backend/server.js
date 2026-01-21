const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config();
app.use(express.json()); //middleware (convert to json format)
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Mongodb connected successfully")
})
.catch((err)=>{console.log(err)})
app.use('/auth',require('./routes/authRoutes'))
app.use('/task',require('./routes/taskRoutes'))

app.get('/api',(req,res)=>{
    res.send("hi hello")
})
app.post('/api',(req,res)=>{
    const temp =req.body;
   res.send(temp);
})

app.listen(4000,()=>{
    console.log("server is running on 4000")
})