const express = require('express');
const app= express();
const port = 80;
const path= require('path')

app.set('view engine','pug')
// app.set('views', path(__dirname,'views'))
app.get('/',(req,res)=>{
    res.render('plannings.pug')
})
app.get('/profile',(req,res)=>{
    res.render('profile.pug')
})
app.get('/thinking',(req,res)=>{
    res.render('thinking.pug')
})

app.get('/journey', (req,res)=>{
    res.render('journey.pug')
})

app.get('/friends', (req,res)=>{
    res.render('friends.pug')
})
app.get('/memories', (req,res)=>{
    res.render('memories.pug')
})

app.listen(port,()=>{
    console.log(`This application started successfully on http://127.0.0.1:${port}`)
})