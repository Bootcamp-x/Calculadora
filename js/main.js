
let teclasNumero = document.querySelectorAll(".number");
let input=document.querySelector("#input");
let operators=document.querySelectorAll(".operator");
let textoInput="0";
input.innerHTML="0"

leerTecla();
borrarTecla();
teclaOperacion();

function leerTecla(){
    for(let i=0;i<11;i++){
        let tecla=teclasNumero[i];
    let digitar = function(event){
        let texTecla=event.srcElement.innerHTML;
        if(!isNumber(textoInput+texTecla)){
            return;
        }
        textoInput=textoInput+texTecla;
        input.innerHTML=textoInput;
    
    }
    tecla.addEventListener("click",digitar);
    }
}

function borrarTecla(){
    let teclaClear = document.querySelector("#clear");
    let borrar=function(){
        input.innerHTML="0";
        textoInput="";
    }
    
    teclaClear.addEventListener("click",borrar)
}

function teclaOperacion(){

    for(let i=0;i<5;i++){
        console.log(operators[i].innerHTML);
    }
    

}


function isNumber(number){
    return !isNaN(number);
}





