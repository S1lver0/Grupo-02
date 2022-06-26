import {Lista} from './lista.js';

let lista=null;

export function agregar(){
    var consola=document.getElementById('consola');
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();	
        lista.canvas=canvas;
        lista.consola=consola;	
    }
    
    var result= document.getElementById('nodo').value;//obtener valor de input
    if(result==''){
        window.alert("Input esta vacio");
    }else{
        lista.inserta_inicio(result);	
        lista.dibujarNodosLog();
        lista.dibujarNodos();
        lista.dibujarConsola();
    }
}////////////////////////////////////////////////////////

export function inserta_al_final(){
    var consola=document.getElementById('consola');
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();
        lista.canvas=canvas;
        lista.consola=consola;		
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
            lista.dibujarConsola();
        }
    }
}////////////////////////////////////////////////////////

export function insertaAntes_X(){
    var consola=document.getElementById('consola');
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();
        lista.canvas=canvas;
        lista.consola=consola;		
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
            lista.dibujarConsola();
        }
    }
}////////////////////////////////////////////////////////


export function insertaDespues_X(){
    var consola=document.getElementById('consola');
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();
        lista.canvas=canvas;
        lista.consola=consola;		
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
            lista.dibujarConsola();
        }
    }
}////////////////////////////////////////////////////////
//funciones de eliminado

export function eliminarPrimer(){
    var consola=document.getElementById('consola');
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();
        lista.canvas=canvas;
        lista.consola=consola;		
    }
    if(lista.INICIO==null){//en el caso de que nunca se uso insertar inicio es null
        window.alert("Para usar esta opcion primero use <inserta al inicio>");
    }
    else{
        lista.eliminar_primero();	
        lista.dibujarNodosLog();
        lista.dibujarNodos();
        lista.dibujarConsola();
    }
}


export function eliminarFinal(){
    var consola=document.getElementById('consola');
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();
        lista.canvas=canvas;
        lista.consola=consola;		
    }
    if(lista.INICIO==null){//en el caso de que nunca se uso insertar inicio es null
        window.alert("Para usar esta opcion primero use <inserta al inicio>");
    }
    else{
        lista.eliminar_final();	
        lista.dibujarNodosLog();
        lista.dibujarNodos();
        lista.dibujarConsola();
    }
}

export function eliminarX(){
    var consola=document.getElementById('consola');
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();
        lista.canvas=canvas;
        lista.consola=consola;		
    }
    if(lista.INICIO==null){//en el caso de que nunca se uso insertar inicio es null
        window.alert("Para usar esta opcion primero use <inserta al inicio>");
    }
    else{
        var x = document.getElementById('nodo2').value;//obtener valor de ingrese x 
        if(x==''){
            window.alert("Input esta vacio");
        }else{
            lista.eliminar_X(x);	
            lista.dibujarNodosLog();
            lista.dibujarNodos();
            lista.dibujarConsola();
        }
    }
}

export function eliminarDespuesX(){
    var consola=document.getElementById('consola');
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();
        lista.canvas=canvas;
        lista.consola=consola;		
    }
    if(lista.INICIO==null){//en el caso de que nunca se uso insertar inicio es null
        window.alert("Para usar esta opcion primero use <inserta al inicio>");
    }
    else{
        var x = document.getElementById('nodo2').value;//obtener valor de ingrese x 
        if(x==''){
            window.alert("Input esta vacio");
        }else{
            lista.eliminar_Despues_X(x);	
            lista.dibujarNodosLog();
            lista.dibujarNodos();
            lista.dibujarConsola();
        }
    }
}

export function eliminarAntesX(){
    var consola=document.getElementById('consola'); 
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();
        lista.canvas=canvas;
        lista.consola=consola;		
    }
    if(lista.INICIO==null){//en el caso de que nunca se uso insertar inicio es null
        window.alert("Para usar esta opcion primero use <inserta al inicio>");
    }
    else{
        var x = document.getElementById('nodo2').value;//obtener valor de ingrese x 
        if(x==''){
            window.alert("Input esta vacio");
        }else{
            lista.eliminar_antes_X(x);	
            lista.dibujarNodosLog();
            lista.dibujarNodos();
            lista.dibujarConsola();
        }
    }
}




