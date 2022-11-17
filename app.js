const express = require('express')
const mongoose = require('mongoose')
const url ='mongodb://localhost:27017/viewers'

const app = express()

mongoose.connect(url, {useNewUrlParser: true})
const con=mongoose.connection

con.on('open',function(){
    console.log("connected");
})

app.use(express.json())

const viewersRoute = require('./routes/viewers')
app.use('/viewers',viewersRoute)

app.listen(9090,()=>{
    console.log("Server started.")
})


