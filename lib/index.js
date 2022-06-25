import {Lista} from './lista.js';

let lista=null;

export function agregar(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();	
        lista.canvas=canvas;	
    }
    
    var result= document.getElementById('nodo').value;//obtener valor de input
    if(result==''){
        window.alert("Input esta vacio");
    }else{
        lista.inserta_inicio(result);	
        lista.dibujarNodosLog();
        lista.dibujarNodos();
    }
}////////////////////////////////////////////////////////

export function inserta_al_final(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();
        lista.canvas=canvas;		
    }
    if(lista.INICIO==null){//en el caso de que nunca se uso insertar inicio es null 
        window.alert("Para usar esta opcion primero use <inserta al inicio>");
    }
    else{
        var result= document.getElementById('nodo').value;//obtener valor de input 
        if(result==''){
            window.alert("Input esta vacio");
        }else{
            lista.inserta_final(result);	
            lista.dibujarNodosLog();
            lista.dibujarNodos();
        }
    }
}////////////////////////////////////////////////////////

export function insertaAntes_X(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();
        lista.canvas=canvas;		
    }
    if(lista.INICIO==null){//en el caso de que nunca se uso insertar inicio es null
        window.alert("Para usar esta opcion primero use <inserta al inicio>");
    }
    else{
        var result= document.getElementById('nodo').value;//obtener valor de ingrese nodo 
        var x= document.getElementById('nodo2').value;//obtener valor de  ingrese x
        if(result==''||x==''){
            window.alert("Input esta vacio");
        }else{
            lista.inserta_antes_X(result,x);	
            lista.dibujarNodosLog();
            lista.dibujarNodos();
        }
    }
}////////////////////////////////////////////////////////


export function insertaDespues_X(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();
        lista.canvas=canvas;		
    }
    if(lista.INICIO==null){//en el caso de que nunca se uso insertar inicio es null 
        window.alert("Para usar esta opcion primero use <inserta al inicio>");
    }
    else{
        var result= document.getElementById('nodo').value;//obtener valor de input 
        var x = document.getElementById('nodo2').value;//obtener valor de ingrese x 
        if(result==''||x==''){
            window.alert("Input esta vacio");
        }else{
            lista.inserta_despues_X(result,x);	
            lista.dibujarNodosLog();
            lista.dibujarNodos();
        }
    }
}////////////////////////////////////////////////////////
//funciones de eliminado

export function eliminarPrimer(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();
        lista.canvas=canvas;		
    }
    if(lista.INICIO==null){//en el caso de que nunca se uso insertar inicio es null
        window.alert("Para usar esta opcion primero use <inserta al inicio>");
    }
    else{
        lista.eliminar_primero();	
        lista.dibujarNodosLog();
        lista.dibujarNodos();
    }
}


export function eliminarFinal(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();
        lista.canvas=canvas;		
    }
    if(lista.INICIO==null){//en el caso de que nunca se uso insertar inicio es null
        window.alert("Para usar esta opcion primero use <inserta al inicio>");
    }
    else{
        lista.eliminar_final();	
        lista.dibujarNodosLog();
        lista.dibujarNodos();
    }
}


