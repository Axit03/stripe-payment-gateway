const express = require('express');
const app = express();
const mongoose =require('mongoose');

const userRoute =require('./routes/Route')
app.use(express.json())
app.use('/a',userRoute)

mongoose.connect('mongodb://localhost:27017/authdb',()=>{
    console.log("Db Connected")
 })

app.listen(8080,()=>{
    console.log("server running")
})

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiYWRtaW4iLCJpYXQiOjE2NjgwNzUzMjQsImV4cCI6MTY3MDE0ODkyNH0.EwZC8Q7JF-uatLx_CebV25K8ZDTHWVjy52YdBjJknsI