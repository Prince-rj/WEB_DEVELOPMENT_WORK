const fs= require("fs");
let text= fs.readFileSync("fs.txt","utf-8");
console.log(text);
text=text.replace("prince raj", "Prince");
fs.writeFileSync("pu.txt",text);
let newText=fs.readFileSync("pu.txt","utf-8");
console.log(newText);