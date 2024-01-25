taskbar= document.getElementsByClassName('taskbar')[0]
start= document.getElementsByClassName('start')[0]
edge=document.getElementById('edge')
vid= document.getElementsByClassName('vid')[0]
let i=10;
// edge.addEventListener('mouseup',()=>{
//     if(edge.style.left='0px'){
//     edge.style.left='16px'
//     }
//     // if(edge.style.left='16px'){
//     //     edge.style.left='0px'
//     // }
// })
taskbar.addEventListener('click', ()=>{
    if (start.style.bottom=='50px') {
        start.style.bottom='-500px'
    }
    else{
        start.style.bottom="50px"
    }
});
vid.addEventListener('click', ()=>{
    if (start.style.bottom=='50px') {
        start.style.bottom='-500px'
    }
});
console.log(i)