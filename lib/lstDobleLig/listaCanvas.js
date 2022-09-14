import {Spin} from '../utils/load.js'
export class ListaDoblementeLigadaCanvas{

    CANVAS=null;
    CTX=null;
    CONSOLA=null;

    constructor(canvas,consola) {
        this.CANVAS = this.responsive(canvas);
        this.CONSOLA= consola.getContext('2d');
        this.CTX=canvas.getContext('2d');
    }///////////////////////////////////////////
    async elimina_inicio_pre(inicio){

        this.clearCanvas();

        var nodo=inicio;
        
        this.dibujarNodo(0,0,nodo.info,"rgb(130,130,130)","black",nodo);//COLOR GRAY 
        
        var ctd=1;

        while(nodo.ligaDer!=null){
            
            nodo=nodo.ligaDer;
            let x=80*ctd;
            let y=0;
                
            this.dibujarNodo(x,y,nodo.info,"rgb(255,255,255)","black",nodo);
    
            ctd++;        
        } 

        Spin.load();
        await new Promise(r => setTimeout(r, 1500));//sleep
        Spin.unload();

    }///////////////////////////////////////////

    async elimina_final_pre(inicio){

        this.clearCanvas();

        var nodo=inicio;
        
        this.dibujarNodo(0,0,nodo.info,"rgb(255,255,255)","black",nodo);
        
        var ctd=1;
        var x=0,y=0;

        while(nodo.ligaDer!=null){
            nodo=nodo.ligaDer;
            x=80*ctd;
            y=0;
            this.dibujarNodo(x,y,nodo.info,"rgb(255,255,255)","black",nodo);

            ctd++;        
        } 

        this.dibujarNodo(x,y,nodo.info,"rgb(130,130,130)","black",nodo);

        Spin.load();
        await new Promise(r => setTimeout(r, 1500));//sleep
        Spin.unload();

    }///////////////////////////////////////////

    async elimina_antes_x_pre(inicio,dato_x){

        this.clearCanvas();

        var nodo=inicio;
        if(nodo.ligaDer.info==dato_x){
            this.dibujarNodo(0,0,nodo.info,"rgb(130,130,130)","black",nodo);
        }else{
            this.dibujarNodo(0,0,nodo.info,"rgb(255,255,255)","black",nodo);
        }
        
        var ctd=1;
        var x=0,y=0;

        while(nodo.ligaDer!=null){
            nodo=nodo.ligaDer;
            x=80*ctd;
            y=0;
            if(nodo.ligaDer!=null){
                if(nodo.ligaDer.info==dato_x){
                    this.dibujarNodo(x,y,nodo.info,"rgb(130,130,130)","black",nodo);
                }else{
                    this.dibujarNodo(x,y,nodo.info,"rgb(255,255,255)","black",nodo);
                }
            }else{
                this.dibujarNodo(x,y,nodo.info,"rgb(255,255,255)","black",nodo);
            }
            ctd++;        
        } 

        Spin.load();
        await new Promise(r => setTimeout(r, 1500));//sleep
        Spin.unload();

    }

    async elimina_despues_x_pre(inicio,dato_x){

        this.clearCanvas();
        var cen=false;
        var nodo=inicio;

        this.dibujarNodo(0,0,nodo.info,"rgb(255,255,255)","black",nodo);
        
        var ctd=1;
        var x=0,y=0;

        if(nodo.info==dato_x){
            cen=true;
        }

        while(nodo.ligaDer!=null){
            nodo=nodo.ligaDer;
            x=80*ctd;
            y=0;
            if(cen==true){
                this.dibujarNodo(x,y,nodo.info,"rgb(130,130,130)","black",nodo);
                cen=false;
            }else{
                this.dibujarNodo(x,y,nodo.info,"rgb(255,255,255)","black",nodo);
            }

            if(nodo.info==dato_x){
                cen=true;
            }
            ctd++;        
        } 

        Spin.load();
        await new Promise(r => setTimeout(r, 1500));//sleep
        Spin.unload();

    }



    async elimina_x_pre(inicio,dato_x){

        this.clearCanvas();

        var nodo=inicio;
        if(nodo.info==dato_x){
            this.dibujarNodo(0,0,nodo.info,"rgb(130,130,130)","black",nodo);
        }else{
            this.dibujarNodo(0,0,nodo.info,"rgb(255,255,255)","black",nodo);
        }
        
        var ctd=1;
        var x=0,y=0;

        while(nodo.ligaDer!=null){
            nodo=nodo.ligaDer;
            x=80*ctd;
            y=0;
            if(nodo.info==dato_x){
                this.dibujarNodo(x,y,nodo.info,"rgb(130,130,130)","black",nodo);
            }else{
                this.dibujarNodo(x,y,nodo.info,"rgb(255,255,255)","black",nodo);
            }
            ctd++;        
        } 

        Spin.load();
        await new Promise(r => setTimeout(r, 1500));//sleep
        Spin.unload();

    }


    elimina_post(inicio){
        if(inicio==null){
            this.clearCanvas();
            return;
        }

        this.clearCanvas();

        var nodo=inicio;
        
        this.dibujarNodo(0,0,nodo.info,"rgb(255,255,255)","black",nodo);  
        
        var ctd=1;

        while(nodo.ligaDer!=null){
            
            nodo=nodo.ligaDer;
            let x=80*ctd;
            let y=0;
                
            this.dibujarNodo(x,y,nodo.info,"rgb(255,255,255)","black",nodo);
    
            ctd++;        
        } 

    }///////////////////////////////////////////



    inserta_inicio(inicio){

        if(inicio.ligaDer==null){//PRIMER NODO

            this.dibujarNodoAnimado(0,0,inicio.info,"rgb(255,255,255)","black",inicio);

        }
        else{   

            
            this.clearCanvas();

            var nodo=inicio;
            
            this.dibujarNodoAnimado(0,0,nodo.info,"rgb(255,255,255)","black",nodo);  

            var ctd=1;
            while(nodo.ligaDer!=null){
               
                nodo=nodo.ligaDer;
                let x=80*ctd;
                let y=0;
               
                this.dibujarNodo(x,y,nodo.info,"rgb(255,255,255)","black",nodo);
                
                ctd++;
            } 
            
        }        

    }
    inserta_final(inicio){
        this.clearCanvas();
        var nodo=inicio;
        this.dibujarNodo(0,0,nodo.info,"rgb(255,255,255)","black",nodo);
        var ctd=1;
        var x=0,y=0;
        while(nodo.ligaDer!=null){ 
            nodo=nodo.ligaDer;
            x=80*ctd;
            y=0;
            if(nodo.ligaDer!=null){
                this.dibujarNodo(x,y,nodo.info,"rgb(255,255,255)","black",nodo);
            } 
            ctd++;
        } 
        this.dibujarNodoAnimado(x,y,nodo.info,"rgb(255,255,255)","black",nodo);    
    }        
    ///////////////////////////////////////////////////////////////////////////////

    inserta_despues_X(inicio,nodo_dato){

        this.clearCanvas();

        var nodo=inicio;
        
        
        this.dibujarNodo(0,0,nodo.info,"rgb(255,255,255)","black",nodo);  

        var ctd=1;

        while(nodo.ligaDer!=null){
            
            nodo=nodo.ligaDer;
            let x=80*ctd;
            let y=0;
            
            if(nodo==nodo_dato){
                
                this.dibujarNodoAnimado(x,y,nodo.info,"rgb(255,255,255)","black",nodo);
                
            }
            else{
                
                this.dibujarNodo(x,y,nodo.info,"rgb(255,255,255)","black",nodo);
                
            }
           

            ctd++;
            
        } 
        

    }

    inserta_antes_X(inicio,nodo_dato){

        this.clearCanvas();

        var nodo=inicio;
        
        if(inicio==nodo_dato)//PRIMER NODO
            this.dibujarNodoAnimado(0,0,nodo.info,"rgb(255,255,255)","black",nodo);  
        else
            this.dibujarNodo(0,0,nodo.info,"rgb(255,255,255)","black",nodo);  

        var ctd=1;

        while(nodo.ligaDer!=null){
            
            nodo=nodo.ligaDer;
            let x=80*ctd;
            let y=0;
                
            if(nodo==nodo_dato){
                
                this.dibujarNodoAnimado(x,y,nodo.info,"rgb(255,255,255)","black",nodo);
                
            }
            else{
                
                this.dibujarNodo(x,y,nodo.info,"rgb(255,255,255)","black",nodo);
                
            }

            ctd++;
            
        } 
        

    }////////////////////////////////////////////////////////////////////////////////////////
    async dibujarNodoAnimado(xFinal,yFinal,dato,colorFondo,colorTexto,nodo){

        let num=4;
        let yInicio=105;
        let xInicio=0;
        
        let yAltura=yInicio-yFinal;
        let xAltura=xFinal-xInicio;

        //let desplazmiento=Math.sqrt(yAltura*yAltura+xAltura*xAltura);
        
        let vary=yAltura/(num-1);
        let yTmp=yInicio;

        let varx=xAltura/(num-1);
        let xTmp=xInicio;


        for(let i=0;i<num;i++){//SOLO VERTICAL
            
            if(i==num-1)
                this.dibujarNodo(xTmp,yTmp,dato,colorFondo,colorTexto,nodo);
            else
                this.dibujarNodo(xTmp,yTmp,dato,"rgb(130,130,130)",colorTexto,nodo);

            let yy_anterior=yTmp;
            let xx_anterior=xTmp;

            yTmp-=vary;
            xTmp+=varx;

            await new Promise(r => setTimeout(r, 250));//sleep
            if(i!=num-1)
                this.dibujarNodoClear(xx_anterior,yy_anterior);
            
        }

    }/////////////////////////////////////////////////////////////////////////////
    dibujarNodoClear(x,y){

        this.CTX.beginPath();
        this.CTX.fillStyle = "black";
        //this.CTX.fillRect (x,y, 55,30); 
        this.CTX.fillRect (x-3,y-3, 55+30,30+5); 
        this.CTX.closePath();

    }///////////////////////////////////////////////////////////////
    clearCanvas(){

        this.CTX.clearRect(0, 0, this.CANVAS.width, this.CANVAS.height);//limpia el canva 
    }///////////////////////////////////////////////////////////////
    dibujarNodo(x,y,dato,colorFondo,colorTexto,nodo){

        
        this.CTX.beginPath();
        //this.CTX.fillStyle = "rgb(200,0,0)";  //ROJO
        this.CTX.fillStyle = colorFondo;  //ROJO
        this.CTX.fillRect (x,y, 55,30);
            
        this.CTX.fillStyle=colorTexto;
        this.CTX.font = '15px Arial';
        this.CTX.fillText(dato,x+20,y+20);
        this.CTX.closePath();
        //Dibujar flecha
        //linea de la flecha
        this.CTX.beginPath();
        this.CTX.moveTo(x+55,y+10);
        this.CTX.lineTo(x+55+20,y+10);
        this.CTX.strokeStyle = "#FFFFFF";
        this.CTX.closePath();
        this.CTX.stroke();
        //cabeza de la flecha
        this.CTX.beginPath();
        this.CTX.fillStyle="white";
        this.CTX.moveTo(x+55+20,y+5);
        this.CTX.lineTo(x+55+20+5,y+10);
        this.CTX.lineTo(x+55+20,y+15);
        this.CTX.closePath();
        this.CTX.fill();
        
        if(nodo.ligaDer!=null){
            this.CTX.beginPath();
            this.CTX.moveTo(x+55,y+25);
            this.CTX.lineTo(x+55+25,y+25);
            this.CTX.strokeStyle = "#FFFFFF";
            this.CTX.closePath();
            this.CTX.stroke();

            this.CTX.beginPath();
            this.CTX.fillStyle="white";
            this.CTX.moveTo(x+40+20,y+20);
            this.CTX.lineTo(x+40+20-5,y+25);
            this.CTX.lineTo(x+40+20,y+30);
            this.CTX.closePath();
            this.CTX.fill();
        }

    }///////////////////////////////////////////////////////////////
    responsive(canvas){
        
        if(window.innerWidth>800){//escritorio
            canvas.width  = window.innerWidth*1;  // set the resolution to fill the page
            canvas.height = window.innerHeight*0.2; 
        }
        else{//mobiles
             canvas.width  = window.innerWidth*1;  // set the resolution to fill the page
        }
        return canvas;
    }///////////////////////////////////////////////////////////////

    dibujarconsola(cad_izq,cad_der){
        this.CONSOLA.fillStyle= "black";
        this.CONSOLA.fillRect(0,0,700,300);
        this.CONSOLA.fillStyle="white";
        this.CONSOLA.font='18px Arial';
        this.CONSOLA.fillText(">[Recorrido a la derecha]",10,20);
        this.CONSOLA.fillText(cad_der,10,45);
        this.CONSOLA.fillText(">[Recorrido a la izquierda]",10,70);
        this.CONSOLA.fillText(cad_izq,10,95);
        this.CONSOLA.closePath();
    }
}
