let count=document.querySelector('#count');
let form=document.querySelector('.form');
let text=document.querySelector('#text');
let preview=document.querySelector('.preview')
let countedletters=0;
let texttocount;
function fun(){
    texttocount=text.value;
    preview.innerHTML=`<h1>Preview</h1><p>${texttocount}</p>`;
}
form.addEventListener('submit',(e)=>{
    e.preventDefault( );
    texttocount=text.value;
    countedletters=countLetters(texttocount);
    let countedwords=countwords(texttocount);
    count.innerHTML=`<div>No. of words are: ${countedwords}</div>
    <div>No. of letters are: ${countedletters}</div>`;
});
function countLetters(texttocount){
    let countedletters=0;
    for (let i = 0; i < texttocount.length; i++) {
        if(texttocount.charAt(i)!=' '&&texttocount.charAt(i)!='.'&&texttocount.charAt(i)!=','){
            countedletters++;
        }
        
    }
    return countedletters;
}
function countwords(texttocount){
    let countedwords=0;
    for (let i = 0; i < texttocount.length; i++) {
    if(texttocount.charAt(i)==' '){
        countedwords++;
    }    
}
if(countedletters==0){
    return 0;
}
return countedwords+1;   
}
