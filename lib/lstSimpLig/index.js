import {Lista} from './lista.js';
import {bootbox_prompt,bootbox_alert} from '../utils/dialog.js';

let lista=null;

export async function agregar(){
    var consola=document.getElementById('consola');
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();	
        lista.canvas=canvas;
        lista.consola=consola;	
    }
    var result= await bootbox_prompt("Ingrese valor de nodo");
    if(result==null||result==''){
        return;
    }
    try{
        if(lista.buscar(result)==true){
            throw new Error("EL NODO YA SE INGRESO");
        }
        lista.inserta_inicio(result);	
        lista.dibujarNodosLog();
        lista.dibujarNodos(result);
        lista.dibujarConsola();
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
        if(lista.isVacio()==true){
            throw new Error("Lista Vacia");
        }
        var result= await bootbox_prompt("Ingrese valor de nodo");
        if(result==null||result==''){
            return;
        }
        if(lista.buscar(result)==true){
            throw new Error("EL NODO YA SE INGRESO");
        }
        lista.inserta_final(result);	
        lista.dibujarNodosLog();
        lista.dibujarNodos(result);
        lista.dibujarConsola();
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
        if(lista.isVacio()==true){
            throw new Error("lista vacia");
        }
        var result= await bootbox_prompt("Ingrese valor de nodo");
        if(result==null||result=='') return;
        if(lista.buscar(result)==true){
            throw new Error("EL NODO YA SE INGRESO");
        }
        var x= await bootbox_prompt("Ingrese valor de X");
        if(x==null||x=='') return;
            lista.inserta_antes_X(result,x);	
            lista.dibujarNodosLog();
            lista.dibujarNodos(result);
            lista.dibujarConsola();
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
        if(lista.isVacio()==true){
            throw new Error("lista vacia");
        }
        var result= await bootbox_prompt("Ingrese valor de nodo");
        if(result==null||result=='') return;
        if(lista.buscar(result)==true){
            throw new Error("EL NODO YA SE INGRESO");
        }
        var x= await bootbox_prompt("Ingrese valor de X");
        if(x==null||x=='') return;
            lista.inserta_despues_X(result,x);	
            lista.dibujarNodosLog();
            lista.dibujarNodos(result);
            lista.dibujarConsola();
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
        if(lista.isVacio()==true){
            throw new Error("lista vacia");
        }
        lista.eliminar_primero();	
        lista.dibujarNodosLog();
        lista.dibujarNodos();
        lista.dibujarConsola();
        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
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
        if(lista.isVacio()==true){
            throw new Error("lista vacia");
        }
        lista.eliminar_final();	
        lista.dibujarNodosLog();
        lista.dibujarNodos();
        lista.dibujarConsola();
        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
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
        if(lista.isVacio()==true){
            throw new Error("lista vacia");
        }
        var x= await bootbox_prompt("Ingrese valor de X");
        if(x==null||x=='') return;
        lista.eliminar_X(x);	
        lista.dibujarNodosLog();
        lista.dibujarNodos();
        lista.dibujarConsola();

        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
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
        if(lista.isVacio()==true){
            throw new Error("lista vacia");
        }
        var x= await bootbox_prompt("Ingrese valor de X");
        if(x==null||x=='') return;
        lista.eliminar_Despues_X(x);	
        lista.dibujarNodosLog();
        lista.dibujarNodos();
        lista.dibujarConsola();

        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
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
        if(lista.isVacio()==true){
            throw new Error("lista vacia");
        }
        var x= await bootbox_prompt("Ingrese valor de X");
        if(x==null||x=='') return;        
        lista.eliminar_antes_X(x);	
        lista.dibujarNodosLog();
        lista.dibujarNodos();
        lista.dibujarConsola();
        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
    }catch(e){
        await bootbox_alert(e.message);
    }
}






