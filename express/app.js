const express = require('express');
// const { fstat } = require('fs');
// const { Agent } = require('http');
const path=require(`path`);
const app = express();
const port=40;
const fs=require(`fs`)

app.use(`/static`,express.static(`static`))

app.use(express.urlencoded())

app.set(`view engine`,`pug`);

app.set(`views`,path.join(__dirname,`views`))


app.get(`/`, (req,res)=>{
    res.render(`index.pug`)
})
app.post(`/`,(req,res)=>{ 
    // console.log(req.body)
    Name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more
    let outputToWrite=`the name of client is ${Name}, age is '${age}', gender is '${gender}',adderess is '${address}', more about him/her '${more}' `
    fs.writeFileSync(`output${Name}.txt`,outputToWrite)

    const params={'message':'your form has been uploaded successfully'}
    res.render(`index.pug`,params)
})
app.listen(port, ()=>{
console.log(`This application started successfully on http://127.0.0.1:${port}`);
});