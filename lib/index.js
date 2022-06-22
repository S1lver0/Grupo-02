import {Lista} from './lista.js';

let lista=null;

export function agregar(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }
    
    var result= document.getElementById('nodo').value;
    console.log(result);
    if(result==''){
        window.alert("Input esta vacio");
    }else{
        lista.agregarNodo(result);	
    }
}////////////////////////////////////////////////////////