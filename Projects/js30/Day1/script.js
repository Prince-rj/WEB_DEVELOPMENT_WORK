const A=new Audio('/audio/1.wav');
const B=new Audio('/audio/2.wav');
const C=new Audio('/audio/3.wav');
const D=new Audio('/audio/4.wav');
const E=new Audio('/audio/5.wav');
const F=new Audio('/audio/6.wav');
const G=new Audio('/audio/7.wav');
const H=new Audio('/audio/8.wav');
const I=new Audio('/audio/9.wav');
let t=65;
const key1=document.querySelector("#A")
const key2=document.querySelector("#B")
const key3=document.querySelector("#C")
const key4=document.querySelector("#D")
const key5=document.querySelector("#E")
const key6=document.querySelector("#F")
const key7=document.querySelector("#G")
const key8=document.querySelector("#H")
const key9=document.querySelector("#I")
// A.play()
let playing=false;
// let key='';
document.addEventListener('keydown',(e)=>{
    console.log(e.key)
    if(e.key=='a'){
        A.load();
        A.play();
        key1.classList.add('st')
        setTimeout(() => {
            key1.classList.remove('st')
        }, 200);

            // playing=false;
    }else
    if(e.key=='s'){
        // if(playing){
            B.load();
            B.play();
            key2.classList.add('st')
        setTimeout(() => {
            key2.classList.remove('st')
        }, 200);
            // playing=false;
        
        
    }else
    if(e.key=='d'){
        // if(playing){
            C.load();
            C.play();
            key3.classList.add('st')
        setTimeout(() => {
            key3.classList.remove('st')
        }, 200);
            // playing=false;
        // }
        // else{
        //     playing=true;
        //     C.play();
        // }
    }else
    if(e.key=='f'){
        // if(playing){
            D.load();
            D.play();
            key4.classList.add('st')
        setTimeout(() => {
            key4.classList.remove('st')
        }, 200);
            // playing=false;
        // }
        // else{
        //     playing=true;
        //     D.play();
        // }
    }else
    if(e.key=='g'){
        // if(playing){
            E.load();
            E.play();
            key5.classList.add('st')
        setTimeout(() => {
            key5.classList.remove('st')
        }, 200);
            // playing=false;
        // }
        // else{
        //     playing=true;
        //     E.play();
        // }
    }else
    if(e.key=='h'){
        // if(playing){
            F.load();
            F.play();
            key6.classList.add('st')
        setTimeout(() => {
            key6.classList.remove('st')
        }, 200);
            // playing=false;
        // }
        // else{
        //     playing=true;
        //     F.play();
        // }
    }else
    if(e.key=='j'){
        // if(playing){
            G.load();
            G.play();
            key7.classList.add('st')
        setTimeout(() => {
            key7.classList.remove('st')
        }, 200);
            // playing=false;
        // }
        // else{
        //     playing=true;
        //     G.play();
        // }
    }else
    if(e.key=='k'){
        // if(playing){
            H.load();
            H.play();
            key8.classList.add('st')
        setTimeout(() => {
            key8.classList.remove('st')
        }, 200);
            // playing=false;
        // }
        // else{
        //     playing=true;
        //     H.play();
        // }
    }else
    if(e.key=='l'){
        // if(playing){
            I.load();
            I.play();
            key9.classList.add('st')
        setTimeout(() => {
            key9.classList.remove('st')
        }, 200);
            // playing=false;
        // }
        // else{
        //     playing=true;
        //     I.play();
        // }
        // I.load()
        
    }
    else{
        return;
    }
    
})
// function loa(key){
//     key.pause();
//     playing=false;
//     // key.load();
// }
// let A=Audio('1');
// let A=Audio('1');
// let A=Audio('1');
// let A=Audio('1');