// const { Console } = require('console');
let fs=require('fs');
let http=require('http');
const { url } = require('inspector');
// const { urlToHttpOptions, URL } = require('url');
let one=fs.readFileSync('./1.html');
let two=fs.readFileSync('./2.html');
const server =http.createServer((req,res)=>{

    console.log(req.url);
    const url=req.url;
    if(url=='/'){
        res.end(one);
    }
    if(url=='/1'){
        res.end(one)
    }
    if(url=='/2'){
        res.end(two)
    }
})
server.listen(100,'127.0.0.1',()=>{
   
    console.log("running at http://127.0.0.1:100/");
});