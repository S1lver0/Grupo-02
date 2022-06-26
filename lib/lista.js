class Nodo{

    info=0;
    liga=null;
}
export class Lista{
  
   INICIO=null;
   canvas=null;
   consola=null;
   consolaY=0;

    inserta_inicio(DATO){
       var P=this.INICIO;
       var Q=new Nodo();
       Q.info=DATO;
       Q.liga=P;
       P=Q;

       this.INICIO=P;
   }
   ///////////////////////////////////////////
    inserta_final(DATO){
        var P=this.INICIO;
        
        var T=P;
        while(T.liga!=null){
            T=T.liga; 
        }
        var Q=new Nodo();
        Q.info=DATO;
        Q.liga=null;
        T.liga=Q;
        
        this.INICIO=P;
    }/////////////////////////////////////////////

    inserta_antes_X (DATO,comp){
        var P_ini=this.INICIO;
        var adelante=P_ini;
        var BAND=1;
        var atras=null;
        while ( adelante.info!=comp && BAND==1 ){
            if(adelante.liga!=null){
                atras=adelante;
                adelante=adelante.liga;
            }
            else{
                BAND=0;
            }
        }
    
        if(BAND==1){
            var nuevo=new Nodo();
            nuevo.info=DATO;
            if(P_ini==adelante){
                nuevo.liga=P_ini;
                P_ini=nuevo;
            }
            else{
                atras.liga=nuevo;
                nuevo.liga=adelante;
            }
        }
        else{
            window.alert("EL NODO DADO COMO REFERENCIA NO SE ENCUENTRA EN LA LISTA")
        }
        this.INICIO=P_ini;
    }

    inserta_despues_X (DATO,comp){
        var P_ini=this.INICIO;
        var atras=P_ini;
        var BAND=1;
        var adelante=null;
        
        while ( atras.info!=comp && BAND==1 ){
            if(atras.liga!=null){
                atras=atras.liga;
                adelante=atras.liga;
            }
            else{
                BAND=0;
            }
        }
        
        if(BAND==1){
            var nuevo=new Nodo();
            if(atras==P_ini){
                var aux=P_ini.liga;
                nuevo.info=DATO;
                atras.liga=nuevo;
                nuevo.liga=aux;
            }
            else{
                nuevo.info=DATO;
                atras.liga=nuevo;
                nuevo.liga=adelante;
            }
        }
        else{
            window.alert("EL NODO DADO COMO REFERENCIA NO SE ENCUENTRA EN LA LISTA")
        } 
    }

    dibujarNodosLog(){

        var	tmp=this.INICIO;
        var cad="";
        while(tmp!=null){
            cad+=tmp.info+"::";
            tmp=tmp.liga;
        }
        console.log(cad);
    }
     dibujarNodos(){

        var canvas=this.canvas;
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);//limpia el canva 
        var	tmp=this.INICIO;
        var x=0;
        var y=0;
        var ctd=0;				
        while(tmp!=null){//dibuja toda la lista
            
            //Dibujar rectangulo
            ctx.beginPath();
            ctx.fillStyle = "rgb(0,0,255)";
             ctx.fillRect (x,y, 55,30);
            //texto
            ctx.fillStyle="white";
            ctx.font = '15px Arial';
            ctx.fillText(tmp.info,x+20,y+20);
            ctx.closePath();

            //Dibujar flecha
            //linea de la flecha
            ctx.beginPath();
            ctx.moveTo(x+55,y+15);
            ctx.lineTo(x+55+20,y+15);
            ctx.closePath();
            ctx.stroke();
            //cabeza de la flecha
            ctx.beginPath();
            ctx.fillStyle="black";
            ctx.moveTo(x+55+20,y+10);
            ctx.lineTo(x+55+20+5,y+15);
            ctx.lineTo(x+55+20,y+20);
            ctx.closePath();
            ctx.fill();
            if(x==640){
                x=0;
                y=y+50;
                ctd=0;
            }
            else{
                x=80*++ctd;
            }
            console.log(x);
            tmp=tmp.liga;
        }
        
    }

    //////algoritmos de eliminacion 

    eliminar_primero(){
        var P_ini = this.INICIO;
        if(P_ini!=null){
            var aux = P_ini;
            P_ini=P_ini.liga;
        }
        else{
            alert("<Lista Vacia>");
        }
        this.INICIO=P_ini;
    }


    eliminar_final(){
        var P_ini=this.INICIO;
        if(P_ini!=null){
            var aux=P_ini;
            var borrar=null;
            while(aux.liga!=null){
                borrar=aux;
                aux=aux.liga;
            }
            if(aux==P_ini){
                P_ini=null;
            }
            else{
                borrar.liga=null;
            }
        }
        else{
            alert("<Lista Vacia");
        }
        this.INICIO=P_ini;
    }

    eliminar_X(comp){
        var P_ini=this.INICIO;
        if(P_ini!=null){
            var eliminar = P_ini;
            var BAND=1;
            var atras=null;
            while(eliminar.info!=comp&&BAND==1){
                if(eliminar.liga!=null){
                    atras=eliminar;
                    eliminar=eliminar.liga;
                }else{
                    BAND=0;
                }
            }
            if(BAND==1){
                if(eliminar==P_ini){
                    P_ini=P_ini.liga;
                }
                else{
                    atras.liga=eliminar.liga;
                }
            }
            else{
                alert("El nodo no se encuentra en la lista");
            }
        }
        else{
            alert("Lista vacia");
        }
        this.INICIO=P_ini;
    }

    eliminar_Despues_X(comp){
        var P_ini=this.INICIO;
        if(P_ini!=null){
            var eliminar = P_ini;
            var BAND=1;
            var adelante=null;
            while(eliminar.info!=comp&&BAND==1){
                if(eliminar.liga!=null){
                    eliminar=eliminar.liga;
                    adelante=eliminar.liga;
                }else{
                    BAND=0;
                }
            }
            if(BAND==1){
                if(eliminar==P_ini){
                    if(P_ini.liga!=null){
                        P_ini.liga=P_ini.liga.liga;
                    }
                    else{
                        alert("No existe un nodo despues de este");
                    }
                }
                else{
                    if(adelante!=null){
                        eliminar.liga=adelante.liga;
                    }
                    else{
                        alert("No existe elemento despues");
                    }
                }
            }
            else{
                alert("El nodo no se encuentra en la lista")

            }
        }
        else{
            alert("Lista vacia");
        }
        this.INICIO=P_ini;
    }

    eliminar_antes_X (DATO){
        var P_ini=this.INICIO;
        if(P_ini.info==DATO){
            alert("No hay nodo antes de este");
        }
        else{
            var adelante=P_ini;
            var BAND=1;
            var atras=null;
            var aux=null;
            while (adelante.info!=DATO && BAND==1 ){
                if(adelante.liga!=null){
                    aux=atras;
                    atras=adelante;
                    adelante=adelante.liga;
                }
                else{
                    BAND=0;
                }
            }
            if(BAND==0){
                alert("No se encuentra el dato ingresado");
            }
            if(P_ini.liga==adelante){
                P_ini=adelante;
            }
            else{
               aux.liga=adelante;
            }
        }
        this.INICIO=P_ini;
    }


    ///////////////////////////////////////
    //consola
    ///////////////////////////////////////
    dibujarConsola(){
        var canvas=this.consola;
        var ctx = canvas.getContext('2d');
        if(this.consolaY==0){
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0,700,300);
        }
        var	tmp=this.INICIO;
        var x=0;			
        while(tmp!=null){
            var cad="";
            while(tmp!=null){
                cad+=tmp.info+"::";
                tmp=tmp.liga;
            }
        }
        ctx.fillStyle="white";
        ctx.font = '20px Arial';
        ctx.fillText(">",x+20,this.consolaY+20);
        ctx.fillText(cad,x+35,this.consolaY+20);
        ctx.closePath();
        this.consolaY=this.consolaY+30
        if(this.consolaY==300){
            this.consolaY=0;
        }
    }
}