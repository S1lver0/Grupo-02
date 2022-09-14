import {ListaDoblementeLigada} from './lista.js';
import {bootbox_prompt,bootbox_alert} from '../utils/dialog.js';
import { ListaDoblementeLigadaCanvas } from './listaCanvas.js';
import { Lista } from '../lstSimpLig/lista.js';

let lista=null;
let listaCanvas=null;

export async function insertar_al_inicio_dl(){
    
    if(lista==null){
        var canvas=document.getElementById('tutorial3');
        var consola=document.getElementById('consola3');
        listaCanvas=new ListaDoblementeLigadaCanvas(canvas,consola);
        lista=new ListaDoblementeLigada(listaCanvas);	

    }
    
    var DATO = await bootbox_prompt("ingrese valor de nodo");
    if(DATO==null || DATO.trim()=="")
        return;

    try{
        DATO=DATO.trim();
        if(lista.buscar(DATO)==true){
            throw new Error("EL NODO YA SE INGRESO");
        }
        lista.inserta_inicio(DATO);
        lista.consola();
        console.log("recorrido derecha");
        lista.dibujarNodosLogDer();
        console.log("recorrido izquierda");	
        lista.dibujarNodosLogIzq();	
    
    }catch(e){
        await bootbox_alert(e.message);
    }
}////////////////////////////////////////////////////////

export async function insertar_al_final_dl(){
    
    if(lista==null){
        var canvas=document.getElementById('tutorial3');
        var consola=document.getElementById('consola3');
        listaCanvas=new ListaDoblementeLigadaCanvas(canvas,consola);
        lista=new ListaDoblementeLigada(listaCanvas);	
    }
    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        var DATO = await bootbox_prompt("ingrese valor de nodo");
        if(DATO==null || DATO.trim()=="")
        return;

        DATO=DATO.trim();
        if(lista.buscar(DATO)==true){
            throw new Error("EL NODO YA SE INGRESO");
        }
        
        lista.inserta_final(DATO);
        lista.consola();
        console.log("recorrido derecha");
        lista.dibujarNodosLogDer();
        console.log("recorrido izquierda");	
        lista.dibujarNodosLogIzq();	
    
    }catch(e){
        await bootbox_alert(e.message);
    }
}////////////////////////////////////////////////////////


export async function insertar_antes_x_dl(){
    var canvas=document.getElementById('tutorial3'); 
    if(lista==null){
        var consola=document.getElementById('consola3');
        listaCanvas=new ListaDoblementeLigadaCanvas(canvas,consola);
        lista=new ListaDoblementeLigada(listaCanvas);		
    }
    
    try{

        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
       
        var DATO = await bootbox_prompt("ingrese valor de DATO");
        if(lista.buscar(DATO)==true){
            throw new Error("EL NODO YA SE INGRESO");
        }
        if(DATO==null || DATO.trim()=="")
                return;

        DATO=DATO.trim();
        
        var X = await bootbox_prompt("ingrese valor de X");
        if(X==null || DATO.trim()=="")
                return;
        
        X=X.trim();
        lista.inserta_antes_X(DATO,X);
        lista.consola();
        console.log("recorrido derecha");
        lista.dibujarNodosLogDer();
        console.log("recorrido izquierda");	
        lista.dibujarNodosLogIzq();
        
    }catch(e){
        await bootbox_alert(e.message);
    }

}/////////////////////////////////////////////////////////
export async function insertar_despues_x_dl(){
    var canvas=document.getElementById('tutorial3'); 
    if(lista==null){

        var consola=document.getElementById('consola3');
        listaCanvas=new ListaDoblementeLigadaCanvas(canvas,consola);
        lista=new ListaDoblementeLigada(listaCanvas);		
    }
    
    try{

        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
       
        var DATO = await bootbox_prompt("ingrese valor de DATO");
        if(lista.buscar(DATO)==true){
            throw new Error("EL NODO YA SE INGRESO");
        }
        if(DATO==null || DATO.trim()=="")
                return;

        DATO=DATO.trim();
        
        var X = await bootbox_prompt("ingrese valor de X");
        if(X==null || DATO.trim()=="")
                return;
        
        X=X.trim();
        lista.inserta_despues_X(DATO,X);
        lista.consola();
        console.log("recorrido derecha");
        lista.dibujarNodosLogDer();
        console.log("recorrido izquierda");	
        lista.dibujarNodosLogIzq();
        
    }catch(e){
        await bootbox_alert(e.message);
    }

}/////////////////////////////////////////////////////////



export async function eliminarX_dl(){
    //var consola=document.getElementById('consola');
    var canvas=document.getElementById('tutorial3'); 
    if(lista==null){
        var consola=document.getElementById('consola3');
        listaCanvas=new ListaDoblementeLigadaCanvas(canvas,consola);
        lista=new ListaDoblementeLigada(listaCanvas);	
        //lista.consola=consola;		
    }
    try{
        if(lista.isVacio()==true){
            throw new Error("lista vacia");
        }
        var x= await bootbox_prompt("Ingrese valor de X");
        if(x==null||x=='') return;
        await lista.eliminar_x(x);	
        lista.consola();
        console.log("recorrido derecha");
        lista.dibujarNodosLogDer();
        console.log("recorrido izquierda");	
        lista.dibujarNodosLogIzq();

        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function elimina_inicio_dl(){
    var canvas=document.getElementById('tutorial3'); 
    if(lista==null){
        var consola=document.getElementById('consola3');
        listaCanvas=new ListaDoblementeLigadaCanvas(canvas,consola);
        lista=new ListaDoblementeLigada(listaCanvas);		
    }

    try{
        
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }

        await lista.elimina_inicio();
        lista.consola();
        console.log("recorrido derecha");
        lista.dibujarNodosLogDer();
        console.log("recorrido izquierda");	
        lista.dibujarNodosLogIzq();

        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
    
    }catch(e){
        await bootbox_alert(e.message);
    }
}/////////////////////////////////////////////////////////

export async function elimina_final_dl(){
    var canvas=document.getElementById('tutorial3'); 
    if(lista==null){
        var consola=document.getElementById('consola3');
        listaCanvas=new ListaDoblementeLigadaCanvas(canvas,consola);
        lista=new ListaDoblementeLigada(listaCanvas);		
    }

    try{
        
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }

        await lista.eliminar_final();
        lista.consola();
        console.log("recorrido derecha");
        lista.dibujarNodosLogDer();
        console.log("recorrido izquierda");	
        lista.dibujarNodosLogIzq();
        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
    
    }catch(e){
        await bootbox_alert(e.message);
    }
}/////////////////////////////////////////////////////////

export async function eliminarAntesX_dl(){
    //var consola=document.getElementById('consola');
    var canvas=document.getElementById('tutorial3'); 
    if(lista==null){
        var consola=document.getElementById('consola3');
        listaCanvas=new ListaDoblementeLigadaCanvas(canvas,consola);
        lista=new ListaDoblementeLigada(listaCanvas);	
        //lista.consola=consola;		
    }
    try{
        if(lista.isVacio()==true){
            throw new Error("lista vacia");
        }
        var x= await bootbox_prompt("Ingrese valor de X");
        if(x==null||x=='') return;
        await lista.eliminar_antes_X(x);	
        lista.consola();
        console.log("recorrido derecha");
        lista.dibujarNodosLogDer();
        console.log("recorrido izquierda");	
        lista.dibujarNodosLogIzq();

        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function eliminarDespuesX_dl(){
    //var consola=document.getElementById('consola');
    var canvas=document.getElementById('tutorial3'); 
    if(lista==null){
        var consola=document.getElementById('consola3');
        listaCanvas=new ListaDoblementeLigadaCanvas(canvas,consola);
        lista=new ListaDoblementeLigada(listaCanvas);	
        //lista.consola=consola;		
    }
    try{
        if(lista.isVacio()==true){
            throw new Error("lista vacia");
        }
        var x= await bootbox_prompt("Ingrese valor de X");
        if(x==null||x=='') return;
        await lista.eliminar_despues_X(x);	
        lista.consola();
        console.log("recorrido derecha");
        lista.dibujarNodosLogDer();
        console.log("recorrido izquierda");	
        lista.dibujarNodosLogIzq();

        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
    }catch(e){
        await bootbox_alert(e.message);
    }
}
