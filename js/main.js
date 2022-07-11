
let teclasNumero = document.querySelectorAll(".number");
let input=document.querySelector("#input");
let operators=document.querySelectorAll(".operator");
let textoInput="";
input.innerHTML="0"

leerTecla();
borrarTecla();
teclaOperacion();

function leerTecla(){
    for(let i=0;i<11;i++){
        let tecla=teclasNumero[i];
    let digitar = function(event){
        let texTecla=event.srcElement.innerHTML;
        textoInput=textoInput+texTecla;
        input.innerHTML=textoInput;
    
    }
    tecla.addEventListener("click",digitar);
    }
}

function borrarTecla(){
    let teclaClear = document.querySelector("#clear");
    console.log(teclaClear);
    
    let borrar=function(){
        input.innerHTML="0";
        textoInput="";
    }
    
    teclaClear.addEventListener("click",borrar)
}

function teclaOperacion(){

console.log("qweqweqw");
    


}







