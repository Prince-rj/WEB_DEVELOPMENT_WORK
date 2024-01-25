// var body1=document.getElementsByTagName('body')
let count;
let not=true;
let elem =document.createElement('div');
elem.classList.add('elem')
// elem.innerHTML=`<h1>hii</h1>`
document.body.addEventListener('click',()=>{
    console.log(count+1);
    document.body.appendChild(elem);
});
elem.addEventListener('click',()=>{
        
        input=document.createElement('input')
        
        elem.appendChild(input)

}


)
