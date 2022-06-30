import {Lista} from './lista.js';
import {bootbox_prompt,bootbox_alert} from './dialog.js';

let lista=null;

export async function agregar(){
    var consola=document.getElementById('consola');
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();	
        lista.canvas=canvas;
        lista.consola=consola;	
    }
    try{
        var result= document.getElementById('nodo').value;//obtener valor de input
        if(result==''){
            throw new Error("Input esta vacio");
        }else{
            if(lista.buscar(result)==true){
                throw new Error("EL NODO YA SE INGRESO");
            }
            lista.inserta_inicio(result);	
            lista.dibujarNodosLog();
            lista.dibujarNodos(result);
            lista.dibujarConsola();
        }
    }catch(e){
        await bootbox_alert(e.message);
    }
}////////////////////////////////////////////////////////

export async function inserta_al_final(){
    var consola=document.getElementById('consola');
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();
        lista.canvas=canvas;
        lista.consola=consola;		
    }
    try{
        if(lista.INICIO==null){//en el caso de que nunca se uso insertar inicio es null 
            throw new Error("Para usar esta opcion primero use [inserta al inicio]");
        }
        else{
            var result= document.getElementById('nodo').value;//obtener valor de input 
            if(result==''){
                throw new Error("Input esta vacio");
            }else{
                if(lista.buscar(result)==true){
                    throw new Error("EL NODO YA SE INGRESO");
                }
                lista.inserta_final(result);	
                lista.dibujarNodosLog();
                lista.dibujarNodos(result);
                lista.dibujarConsola();
            }
        }
    }catch(e){
        await bootbox_alert(e.message);
    }
}////////////////////////////////////////////////////////

export async function insertaAntes_X(){
    var consola=document.getElementById('consola');
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();
        lista.canvas=canvas;
        lista.consola=consola;		
    }
    try{
        if(lista.INICIO==null){//en el caso de que nunca se uso insertar inicio es null
            throw new Error("Para usar esta opcion primero use [inserta al inicio]");
        }
        else{
            var result= document.getElementById('nodo').value;//obtener valor de ingrese nodo 
            var x= document.getElementById('nodo2').value;//obtener valor de  ingrese x
            if(result==''||x==''){
                throw new Error("Input esta vacio");
            }else{
                if(lista.buscar(result)==true){
                    throw new Error("EL NODO YA SE INGRESO");
                }
                lista.inserta_antes_X(result,x);	
                lista.dibujarNodosLog();
                lista.dibujarNodos(result);
                lista.dibujarConsola();
            }
        }
    }catch(e){
        await bootbox_alert(e.message);
    }
}
////////////////////////////////////////////////////////


export async function insertaDespues_X(){
    var consola=document.getElementById('consola');
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();
        lista.canvas=canvas;
        lista.consola=consola;		
    }
    try{
        if(lista.INICIO==null){//en el caso de que nunca se uso insertar inicio es null 
            throw new Error("Para usar esta opcion primero use [inserta al inicio]");
        }
        else{
            var result= document.getElementById('nodo').value;//obtener valor de input 
            var x = document.getElementById('nodo2').value;//obtener valor de ingrese x 
            if(result==''||x==''){
                throw new Error("Input esta vacio");
            }else{
                if(lista.buscar(result)==true){
                    throw new Error("EL NODO YA SE INGRESO");
                }
                lista.inserta_despues_X(result,x);	
                lista.dibujarNodosLog();
                lista.dibujarNodos(result);
                lista.dibujarConsola();
            }
        }
    }catch(e){
        await bootbox_alert(e.message);
    }
}////////////////////////////////////////////////////////
//funciones de eliminado

export async function eliminarPrimer(){
    var consola=document.getElementById('consola');
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();
        lista.canvas=canvas;
        lista.consola=consola;		
    }
    try{
        if(lista.INICIO==null){//en el caso de que nunca se uso insertar inicio es null
            throw new Error("Para usar esta opcion primero use [inserta al inicio]");
        }
        else{
            lista.eliminar_primero();	
            lista.dibujarNodosLog();
            lista.dibujarNodos();
            lista.dibujarConsola();
        }
    }catch(e){
        await bootbox_alert(e.message);
    }
}


export async function eliminarFinal(){
    var consola=document.getElementById('consola');
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();
        lista.canvas=canvas;
        lista.consola=consola;		
    }
    try{
        if(lista.INICIO==null){//en el caso de que nunca se uso insertar inicio es null
            throw new Error("Para usar esta opcion primero use [inserta al inicio]");
        }
        else{
            lista.eliminar_final();	
            lista.dibujarNodosLog();
            lista.dibujarNodos();
            lista.dibujarConsola();
        }
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function eliminarX(){
    var consola=document.getElementById('consola');
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();
        lista.canvas=canvas;
        lista.consola=consola;		
    }
    try{
        if(lista.INICIO==null){//en el caso de que nunca se uso insertar inicio es null
            throw new Error("Para usar esta opcion primero use [inserta al inicio]");
        }
        else{
            var x = document.getElementById('nodo2').value;//obtener valor de ingrese x 
            if(x==''){
                throw new Error("Input esta vacio");
            }else{
                lista.eliminar_X(x);	
                lista.dibujarNodosLog();
                lista.dibujarNodos();
                lista.dibujarConsola();
            }
        }
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function eliminarDespuesX(){
    var consola=document.getElementById('consola');
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();
        lista.canvas=canvas;
        lista.consola=consola;		
    }
    try{
        if(lista.INICIO==null){//en el caso de que nunca se uso insertar inicio es null
            throw new Error("Para usar esta opcion primero use [inserta al inicio]");
        }
        else{
            var x = document.getElementById('nodo2').value;//obtener valor de ingrese x 
            if(x==''){
                throw new Error("Input esta vacio");
            }else{
                lista.eliminar_Despues_X(x);	
                lista.dibujarNodosLog();
                lista.dibujarNodos();
                lista.dibujarConsola();
            }
        }
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function eliminarAntesX(){
    var consola=document.getElementById('consola'); 
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();
        lista.canvas=canvas;
        lista.consola=consola;		
    }
    try{
        if(lista.INICIO==null){//en el caso de que nunca se uso insertar inicio es null
            throw new Error("Para usar esta opcion primero use [inserta al inicio]");
        }
        else{
            var x = document.getElementById('nodo2').value;//obtener valor de ingrese x 
            if(x==''){
                throw new Error("Input esta vacio");
            }else{
                lista.eliminar_antes_X(x);	
                lista.dibujarNodosLog();
                lista.dibujarNodos();
                lista.dibujarConsola();
            }
        }
    }catch(e){
        await bootbox_alert(e.message);
    }
}




