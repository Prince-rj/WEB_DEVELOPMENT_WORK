let hamburger = document.querySelector('.hamburger');
let hamburger1 = document.querySelector('.hamburger1');
let con = document.querySelector('.containerham');
let nav = document.querySelector('nav')
let span = document.querySelector('#s1')

hamburger.addEventListener("click",()=>{
        con.style.left='0px'
})
span.addEventListener("click",()=>{
        con.style.left='-300px'
})
