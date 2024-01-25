const http=require('http')
const fs=require('fs');
const home=fs.readFileSync(`./home.html`);
const about=fs.readFileSync(`./about.html`);
const services=fs.readFileSync(`./services.html`);
const contactus=fs.readFileSync(`./contactus.html`);
const server=http.createServer((req,res)=>{
    console.log(req.url);
    url=req.url;
    res.statusCode=200;
    res.setHeader(`content-type`,`text/html`);
    // res.end(`hello world`)
   if(url == `/`){
       res.end(home)
   }
    else if(url == `/about`){
        res.end(about)
    }
    else if(url == `/contactus`){
        res.end(contactus)
    }
    else if(url == `/services`){
        res.end(services)
    }
    else{
        statusCode=404;
        res.end("<h1>404:not found</h1>")
    }
});
server.listen(100,'127.0.0.1',()=>{
   
    console.log("running at http://127.0.0.1:100/");
});