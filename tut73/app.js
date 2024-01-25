const express=require('express')
const path=require('path')
const app=express();
const port=3000;
//EXPRESS SPECIFIC STUFF

app.use(`static`,express.static(`static`));
//PUG SPECIFIC STUFF
app.set(`view engine`,`pug`);


app.set(`views`,path.join(__dirname,`views`))
//END POINTS

app.get(`/`,(req,res)=>{
    res.send(`hello world`)
})

//STARTING THE SERVER
app.listen(port,()=>{
    console.log('the application has started')
})