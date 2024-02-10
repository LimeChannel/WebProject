var rev=document.getElementsByClassName("review");
var N=rev.length;
var num=document.getElementById("numb");
var next=document.getElementById("next");
var prev=document.getElementById("prev");
function closeAll(body){
    for(let i=0; i!=rev.length; i++){
        body[i].style.display="none";
    }
}
function open(i){
    closeAll(rev);
    rev[i].style.display="block";
    changeNumber();
}
function number(){
    for(let i=0; i!=N; i++){
        if(rev[i].style.display=="block") return i;
    }
}
function newNumber(i){
    let n=number()+i;
    if(n==N) n=0;
    if(n<0) n=N-1;
    return n;
}
function changeNumber(){
    let n=(number()+1)+"/"+N;
    num.innerHTML=n;
}
window.addEventListener("DOMContentLoaded", function(event) {
    open(1);
    prev.addEventListener("click", function(){
        let n=newNumber(-1);
        open(n);
    });
    next.addEventListener("click", function(){
        let n=newNumber(1);
        open(n);
    });
});
