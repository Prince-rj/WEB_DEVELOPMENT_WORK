var aud = new Audio('gameover.mp3')
var op= new Audio('opmop.mp3')
document.onkeydown= function(e){
    
    if(e.keyCode==13 || e.keyCode==32){
        cross=true
        score=0;
    gameover.classList.remove('ongameover')
    onepunchman = document.querySelector(['.obstacle'])
    onepunchman.classList.add('obstacleanimate')
            op.play()
            op.setAttribute("loop", true)
        aud.pause()
    console.log(e.keyCode)
}
dino = document.querySelector(['.dino'])
// var notmax=true;
// var notzero=true;
// console.log(dino.style.right)

// if(dino.style.right=='0')notmax=false;
// if(dino.style.left=='32')notzero=false;
if(e.keyCode==38){
    dino.classList.add('animateDino');
    setTimeout(()=>{
        dino.classList.remove('animateDino')
    },1000);
}
if(e.keyCode==39){
    dino = document.querySelector(['.dino'])
    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
        dino.style.left=dx+40 + "px"
        dino.classList.remove('reverse')
}
if(e.keyCode==37    ){
    dino = document.querySelector(['.dino'])
    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
        dino.style.left=dx-40 + "px"
        dino.classList.add('reverse')
}
}
setInterval(()=>{
    saitama = document.querySelector(['.obstacle'])
    gameover = document.querySelector(['.gameover'])
    dino = document.querySelector(['.dino'])
    ox=parseInt(window.getComputedStyle(saitama,null).getPropertyValue('left'))
    oy=parseInt(window.getComputedStyle(saitama,null).getPropertyValue('top'))
    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'))
    
    diffX=Math.abs(dx-ox);
    diffY=Math.abs(dy-oy);
    if(diffX<150 && diffY<10){
        saitama.classList.remove('obstacleanimate')
        gameover.classList.add('ongameover')
        aud.play()
        op.pause()
        anim= document.querySelector(['.obstacleanimate'])
        // jx=parseFloat(window.getComputedStyle(anime,null).getPropertyValue('animation-duration'))
        anim.style.animationDuration='3s';
    }
    else if(cross && diffX<150){
        scorebox = document.querySelector(['.score'])
        score = score + 1;
        scorebox.innerHTML = " Your Score: " + score;
        cross=false;
        setTimeout(() => {
            cross=true;
        }, 1100);
        setTimeout(() => {
            anime= document.querySelector(['.obstacleanimate'])
            fx=parseFloat(window.getComputedStyle(anime,null).getPropertyValue('animation-duration'))
            anime.style.animationDuration = fx-0.039 +'s';   
        }, 100);
    }
    
})
score=0;
var cross