
let teclasNumero = document.querySelectorAll(".number");
let input=document.querySelector("#input");
let operators=document.querySelectorAll(".operator");
let textoInput="0";
input.innerHTML="0"
let ultimaOperacion="";
let numerosGuardados=[];

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
        if(texTecla!="."&&textoInput=="0"){
            textoInput="";

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

    let guardarNumeroActual = function(){
        
        let numeroInput=parseFloat(textoInput);
        if(!isNaN(numeroInput)){
            numerosGuardados.push(numeroInput);
            textoInput="";
            console.log(numerosGuardados);
        }
        
    }

    let ejecutarUlitmaOperacion = function(){
        console.log(ultimaOperacion);

            if(numerosGuardados[1]==null){
                return
            }



        if(ultimaOperacion!=null && ultimaOperacion!== "="){
            console.log("realizar operacion");
            let numero1 = numerosGuardados[0];
            let numero2 = numerosGuardados[1];
            let operador = ultimaOperacion;
            let resultado=0;
                if(operador=="+"){

                resultado=numero1+numero2;

                }else if(operador=="-"){

                    resultado=numero1-numero2;

                }else if(operador == "×"){

                    resultado=numero1*numero2;

                }else if(operador == "÷"){

                    resultado=numero1/numero2;
                    

                }
            

                
      input.innerHTML=" "+resultado ;
            textoInput="";
            numerosGuardados=[];
            numerosGuardados.push(resultado);
                
         


        }else{

            console.log("no se hace nada");
        }

            
        
    }

    
    let actualizarOperacion = function (recibiendo){

        let operadorClick=recibiendo.srcElement.innerHTML;
       
        ultimaOperacion=operadorClick;

        // console.log(ultimaOperacion); mostrar cuando haces click
    }   

   
    
    for(let i=0;i<5;i++){

       
        operators[i].addEventListener("click",guardarNumeroActual);
        operators[i].addEventListener("click",ejecutarUlitmaOperacion);
        operators[i].addEventListener("click",actualizarOperacion);
    }


}


function isNumber(number){
    return !isNaN(number);
}





