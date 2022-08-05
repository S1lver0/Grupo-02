import {ListaCir} from './listaCir.js';
import {bootbox_prompt,bootbox_alert} from '../utils/dialog.js';

let listaCir=null;

export async function inserIni(){
    var consola=document.getElementById('consola2');
    var canvas=document.getElementById('tutorial2'); 
    if(listaCir==null){
        listaCir=new ListaCir();	
        listaCir.canvas=canvas;
        listaCir.consola=consola;	
    }
    var result= await bootbox_prompt("Ingrese valor de nodo");
    if(result==null||result==''){
        return;
    }
    try{
        if(listaCir.buscar(result)==true){
            throw new Error("EL NODO YA SE INGRESO");
        }
        listaCir.insertarInicio(result);	
        listaCir.dibujarNodosLog();
        listaCir.dibujarNodos(result);
        listaCir.dibujarConsola();
    }catch(e){
        await bootbox_alert(e.message);
    }
}////////////////////////////////////////////////////////

export async function inserFinal(){
    var consola=document.getElementById('consola2');
    var canvas=document.getElementById('tutorial2'); 
    if(listaCir==null){
        listaCir=new ListaCir();	
        listaCir.canvas=canvas;
        listaCir.consola=consola;	
    }
    var result= await bootbox_prompt("Ingrese valor de nodo");
    if(result==null||result==''){
        return;
    }
    try{
        if(listaCir.buscar(result)==true){
            throw new Error("EL NODO YA SE INGRESO");
        }
        listaCir.insertarFinal(result);	
        listaCir.dibujarNodosLog();
        listaCir.dibujarNodos(result);
        listaCir.dibujarConsola();
    }catch(e){
        await bootbox_alert(e.message);
    }
    
}////////////////////////////////////////////////////////

export async function inserAntes_X(){
    var consola=document.getElementById('consola2');
    var canvas=document.getElementById('tutorial2'); 
    if(listaCir==null){
        listaCir=new ListaCir();
        listaCir.canvas=canvas;
        listaCir.consola=consola;		
    }
    try{
        if(listaCir.isVacio()==true){
            throw new Error("lista vacia");
        }
        var result= await bootbox_prompt("Ingrese valor de nodo");
        if(result==null||result=='') return;
        if(listaCir.buscar(result)==true){
            throw new Error("EL NODO YA SE INGRESO");
        }
        var x= await bootbox_prompt("Ingrese valor de X");
        if(x==null||x=='') return;
            listaCir.insertarAntesX(result,x);	
            listaCir.dibujarNodosLog();
            listaCir.dibujarNodos(result);
            listaCir.dibujarConsola();
    }catch(e){
        await bootbox_alert(e.message);
    }
}
////////////////////////////////////////////////////////


export async function inserDespues_X(){
    var consola=document.getElementById('consola2');
    var canvas=document.getElementById('tutorial2'); 
    if(listaCir==null){
        listaCir=new ListaCir();
        listaCir.canvas=canvas;
        listaCir.consola=consola;		
    }
    try{
        if(listaCir.isVacio()==true){
            throw new Error("lista vacia");
        }
        var result= await bootbox_prompt("Ingrese valor de nodo");
        if(result==null||result=='') return;
        if(listaCir.buscar(result)==true){
            throw new Error("EL NODO YA SE INGRESO");
        }
        var x= await bootbox_prompt("Ingrese valor de X");
        if(x==null||x=='') return;
            listaCir.insertarDespuesX(result,x);	
            listaCir.dibujarNodosLog();
            listaCir.dibujarNodos(result);
            listaCir.dibujarConsola();
    }catch(e){
        await bootbox_alert(e.message);
    }
   
}////////////////////////////////////////////////////////


export async function eliminarPrimerCir(){
    var consola=document.getElementById('consola2');
    var canvas=document.getElementById('tutorial2'); 
    if(listaCir==null){
        listaCir=new ListaCir();
        listaCir.canvas=canvas;
        listaCir.consola=consola;		
    }
    try{
        if(listaCir.isVacio()==true){
            throw new Error("lista vacia");
        }
        listaCir.eliminarPrimero();	
        listaCir.dibujarNodosLog();
        listaCir.dibujarNodos();
        listaCir.dibujarConsola();
        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function eliminarFinalCir(){
    var consola=document.getElementById('consola2');
    var canvas=document.getElementById('tutorial2'); 
    if(listaCir==null){
        listaCir=new ListaCir();
        listaCir.canvas=canvas;
        listaCir.consola=consola;		
    }
    try{
        if(listaCir.isVacio()==true){
            throw new Error("lista vacia");
        }
        listaCir.eliminarFinal();	
        listaCir.dibujarNodosLog();
        listaCir.dibujarNodos();
        listaCir.dibujarConsola();
        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function eliminarXCir(){
    var consola=document.getElementById('consola2');
    var canvas=document.getElementById('tutorial2'); 
    if(listaCir==null){
        listaCir=new ListaCir();
        listaCir.canvas=canvas;
        listaCir.consola=consola;		
    }
    try{
        if(listaCir.isVacio()==true){
            throw new Error("lista vacia");
        }
        var x= await bootbox_prompt("Ingrese valor de X");
        if(x==null||x=='') return;
        listaCir.eliminarX(x);	
        listaCir.dibujarNodosLog();
        listaCir.dibujarNodos();
        listaCir.dibujarConsola();

        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function eliminarDespuesXCir(){
    var consola=document.getElementById('consola2');
    var canvas=document.getElementById('tutorial2'); 
    if(listaCir==null){
        listaCir=new ListaCir();
        listaCir.canvas=canvas;
        listaCir.consola=consola;		
    }
    try{
        if(listaCir.isVacio()==true){
            throw new Error("lista vacia");
        }
        var x= await bootbox_prompt("Ingrese valor de X");
        if(x==null||x=='') return;
        listaCir.eliminarDespuesX(x);	
        listaCir.dibujarNodosLog();
        listaCir.dibujarNodos();
        listaCir.dibujarConsola();

        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function eliminarAntesXCir(){
    var consola=document.getElementById('consola2');
    var canvas=document.getElementById('tutorial2'); 
    if(listaCir==null){
        listaCir=new ListaCir();
        listaCir.canvas=canvas;
        listaCir.consola=consola;		
    }
    try{
        if(listaCir.isVacio()==true){
            throw new Error("lista vacia");
        }
        var x= await bootbox_prompt("Ingrese valor de X");
        if(x==null||x=='') return;
        listaCir.eliminarAntesX(x);	
        listaCir.dibujarNodosLog();
        listaCir.dibujarNodos();
        listaCir.dibujarConsola();

        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
    }catch(e){
        await bootbox_alert(e.message);
    }
}


