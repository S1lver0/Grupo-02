
class Nodo{
    info=0;
    liga=null;
}

export class ListaCir{
    INICIO=null;
    canvas=null;
    consola=null;
    consolaY=0; //guarda Y se usa en dibujarconsola


    insertarInicio(DATO) {
        if(this.INICIO==null){//vacio
            var P=this.INICIO;
            var Q=new Nodo();
            Q.info=DATO;
            Q.liga=Q;
            P=Q;
      }
      else{//no vacio
          var P=this.INICIO;
          var Q=new Nodo();
          Q.info=DATO;

          var F=P;//buscar el ultimo
          while(F.liga!=P){
              F=F.liga;
          }
          F.liga=Q;
          Q.liga=P;
          P=Q;
      }
      this.INICIO=P;
    }


    insertarFinal(DATO){
        if(this.INICIO==null){
            var P=this.INICIO;
            var Q=new Nodo();
            Q.info=DATO;
            Q.liga=Q;
            P=Q;
        }
        else{
            var P=this.INICIO;
            var T=P;
            while(T.liga!=P){//ultimo nodo
                T=T.liga; 
            }
            var Q=new Nodo();
            Q.info=DATO;
            Q.liga=null;//no es necesario
            T.liga=Q;
            Q.liga=P;
        } 
        this.INICIO=P;
    }

    insertarAntesX(DATO,X){
        var P=this.INICIO; 
        var Q=P;
        var BAND=1;
        var T;
        while ( Q.info!=X && BAND==1 ){
            if(Q.liga!=P){//<-------OJO
                T=Q;
                Q=Q.liga;
            }
            else{
                BAND=0;
            }
        }
        if(BAND==1){
            var X1=new Nodo();
            X1.info=DATO;
            if(P==Q){
                /////////////////////////////
                var U=P;
                while(U.liga!=P){//llegar al ultimo;
                    U=U.liga;
                }
                ////////////////////////////
                X1.liga=P;
                P=X1;
                ////////////////////////////   
                U.liga=P;
                ////////////////////////////
            }
            else{
                T.liga=X1;
                X1.liga=Q;
            }
        }
        else{
            throw new Error("EL NODO DADO COMO REFERENCIA NO SE ENCUENTRA EN LA LISTA");
        }
        this.INICIO=P;
    }

    insertarDespuesX(DATO,X){
        var P=this.INICIO;
        var Q=P;
        var BAND=1;
        while ( Q.info!=X && BAND==1){
            if(Q.liga!=P){//////<-------OJO
                Q=Q.liga;
            }
            else{
                BAND=0;
            }
        }
        if(BAND==1){
            var T=new Nodo();
            T.info=DATO;
            T.liga=Q.liga;
            Q.liga=T;
        }
        else{
            throw new Error("EL NODO DADO COMO REFERENCIA NO SE ENCUENTRA EN LA LISTA");
        }
        
        this.INICIO=P;

    }

    /////////////////ELIMINADO

    eliminarPrimero(){
        var P_ini=this.INICIO;
        var aux=P_ini;
        var U=P_ini;
        while(U.liga!=P_ini){//llegar al ultimo;    
            U=U.liga;
        }
        U.liga=P_ini.liga;
        P_ini=P_ini.liga;
        if(aux==P_ini){// caso del primero
            P_ini=null;
        }
        this.INICIO=P_ini;
    }

    eliminarFinal(){
        var P_ini=this.INICIO;
        var aux=P_ini;
        var borrar;
        while(aux.liga!=P_ini){
            borrar=aux;
            aux=aux.liga; 
        }
            //caso -> inicio = final 
        if(aux==P_ini){
            P_ini=null;
        }
            //caso normal 
        else{
            borrar.liga=P_ini;
        }
        this.INICIO=P_ini;
    }
    eliminarX(comp){
        var P_ini=this.INICIO;
        var U=P_ini;
        var eliminar=P_ini;
        var BAND=1;
        var atras;
        while(eliminar.info!=comp && BAND==1 ){
            if(eliminar.liga!=P_ini){
                atras=eliminar;
                eliminar=eliminar.liga;
            }
            else{
                BAND=0;
            }
        }

        while(U.liga!=P_ini){//llegar al ultimo;    
            U=U.liga;
        }

        if(BAND==1){
            if(eliminar==P_ini){
                if(P_ini==U){ // caso de  1 elemento y ese sea el que se tiene que borrar
                    P_ini=null;
                }else{
                    P_ini=P_ini.liga; // caso de que el primero se tenga que eliminar pero existan mas elementos 
                    U.liga=P_ini;
                }
            }
            else{
                atras.liga=eliminar.liga; // caso general
            }
        }
        else{
            throw new Error('EL NODO NO SE ENCUENTRA EN LA LISTA');
        }
        this.INICIO=P_ini;
    }


    eliminarDespuesX(comp){
        var P_ini=this.INICIO;
        var X=P_ini;
        var BAND=1;
        var adelante=null;
        while(X.info!=comp && BAND==1 ){
            if(X.liga!=P_ini){
                X=X.liga;
                adelante=X.liga;
            }
            else{
                BAND=0;
            }
        }
        if(BAND==1){
            if(X==P_ini){
                if(P_ini.liga!=P_ini){
                    var aux = P_ini.liga;
                    P_ini.liga=aux.liga; // caso de despues de primero pero existen mas elementos
                }
                else{ // caso del despues de primero y solo un elemento primero apunta a primero
                    P_ini=null;
                }
            }
            else{
                if(adelante==P_ini){ // caso del ultimo  = borrar el primero
                    P_ini=P_ini.liga;
                    X.liga=P_ini;
                }else{
                    X.liga=adelante.liga; // caso general
                }
            }
        }
        else{
            throw new Error('EL NODO NO SE ENCUENTRA EN LA LISTA');
        }
        this.INICIO=P_ini;
    }

    eliminarAntesX(DATO){
        var P_ini=this.INICIO;
        var U=P_ini;
        var Atras_Ultimo;

        while(U.liga!=P_ini){//llegar al ultimo;
            Atras_Ultimo=U; //nodo atras del ultimo
            U=U.liga;
        }

        if(P_ini.info==DATO){
            if(P_ini==U){
             // caso de haber un elemento y sea ese mismo el x
                P_ini=null;
            }else{
                Atras_Ultimo.liga=P_ini; // caso del primero pero existiendo mas elementos en este caso borraria el ultimo
            }
        }
        else{
            var adelante=P_ini;
            var BAND=1;
            var atras;
            var aux;
            while(adelante.info!=DATO && BAND==1){
                if(adelante.liga!=P_ini){
                    aux=atras;
                    atras=adelante;
                    adelante=adelante.liga;
                }
                else{
                    BAND=0;
                }
            }
            if(BAND==0){
                throw new Error('No se encuentra el dato ingresado');
            }
            if(P_ini.liga==adelante){
                P_ini=adelante;
                U.liga=P_ini; // caso de que x sea el segundo el ultimo tiene que apuntar al primero actual
            }
            else{
                aux.liga=adelante; // caso general
            }
        }
        this.INICIO=P_ini;
    }







    buscar(DATO){
        var encontrado=false;
        var	tmp=this.INICIO;
        if(tmp!=null){
            if(tmp.info==DATO){
                encontrado=true;
            }else{
                tmp=tmp.liga;
                while(tmp!=this.INICIO){
                    if(tmp.info==DATO){
                        encontrado=true;
                        break;
                    }
                    tmp=tmp.liga;
                }
    
            }

        }
        return encontrado;
       }///////////////////////////////////////////

    dibujarNodosLog(){
        var P=this.INICIO;
        var cad="";
        if(P!=null){
            var F=P;
            
            if(F.liga==P){//1
                cad=P.info+"::";
                cad=cad+P.liga.info;
                
            }
            else{//2 o mas
            
                while(F.liga!=P){
                    cad=cad+F.info+"::";
                    F=F.liga;
                }    
                cad=cad+F.info+"::";
                cad=cad+F.liga.info;
            }
        }
        console.log(cad);
        return cad;
    }

    dibujarNodos(valor){

        var canvas=this.canvas;
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);//limpia el canva 

        if(window.innerWidth>800){//escritorio
            canvas.width  = window.innerWidth*1;  // set the resolution to fill the page
            canvas.height = window.innerHeight*0.2; 
        }
        else{//mobiles
             canvas.width  = window.innerWidth*1;  // set the resolution to fill the page
        }

        var	tmp=this.INICIO;
        var x=0;
        var y=0;
        var ctd=0;	
        var nodo = null;
        ////////////
        //para el caso de dibujar el primero con fecha circular
        var cont=0;	
        ////////////////////////////////////////////////////////

        while(tmp!=null){//dibuja toda la lista

            if(valor != undefined && tmp.info==valor){
                //Dibujar rectangulo
                ctx.beginPath();
                ctx.fillStyle = "rgb(155,155,155)";//GRIS
                ctx.fillRect (x,y, 55,30);
                
                nodo={};
                nodo.x=x;
                nodo.y=y;
                nodo.width=55;
                nodo.height=30;
                nodo.info=tmp.info;
            }
            else{
            //Dibujar rectangulo
            ctx.beginPath();
            ctx.fillStyle = "rgb(0,0,0)";
            ctx.fillRect (x,y, 55,30);
            }


            //texto
            ctx.fillStyle="white";
            ctx.font = '15px Arial';
            ctx.fillText(tmp.info,x+20,y+20);
            ctx.closePath();
            
            if(tmp.liga==this.INICIO){ /// EL FINAL TIENE QUE DIBUJAR HACIA EL PRIMERO
                ////////////////CASO DEL PRIMERO:

                if(cont==0){

                    //FLECHA QUE VA A LA DERECHA 
                    ctx.beginPath();
                    ctx.moveTo(x+55,y+15);
                    ctx.lineTo(x+55+20,y+15);
                    ctx.closePath();
                    ctx.stroke();
                    //FLECHA QUE BAJA
                    ctx.beginPath();
                    ctx.moveTo(x+55+20,y+15);
                    ctx.lineTo(x+55+20,y+55);
                    ctx.closePath();
                    ctx.stroke();
                    //FLECHA QUE A LA IZQUIERDA
                    ctx.beginPath();
                    ctx.moveTo(x+55+20,y+55);
                    ctx.lineTo(x+26,y+55);
                    ctx.closePath();
                    ctx.stroke();
                    ///////////////////////////////////////////////////////////////////////////////////
                    //Dibujar flecha
                    //linea de la flecha
                    ctx.beginPath();
                    ///flecha que mira para abajo
                    ctx.moveTo(x+27,y+30);
                    ctx.lineTo(x+27,y+30+25);
                    ///fecha que va hacia la izquierda
                    ctx.moveTo(x+27,y+55);
                    ctx.lineTo(x+27-x,y+30+25);
                    ///fecha que va para arriba
                    ctx.moveTo(x+27-x,y+55);
                    ctx.lineTo(x+27-x,y+30-1);
                    /////////////////////////////
                    ctx.closePath();
                    ctx.stroke();
                    //cabeza de la flecha
                    ctx.beginPath();
                    ctx.fillStyle="black";
                    ctx.moveTo(x+27-x-5,y+35);
                    ctx.lineTo(x+27-x+5,y+35);
                    ctx.lineTo(x+27-x,y+35-5);
                    ctx.closePath();
                    ctx.fill();

                }

                //Dibujar flecha
                //linea de la flecha
                ctx.beginPath();
                ///flecha que mira para abajo
                ctx.moveTo(x+27,y+30);
                ctx.lineTo(x+27,y+30+25);
                ///fecha que va hacia la izquierda
                ctx.moveTo(x+27,y+55);
                ctx.lineTo(x+27-x,y+30+25);
                ///fecha que va para arriba
                ctx.moveTo(x+27-x,y+55);
                ctx.lineTo(x+27-x,y+30-1-y);
                /////////////////////////////
                ctx.closePath();
                ctx.stroke();
                //cabeza de la flecha
                ctx.beginPath();
                ctx.fillStyle="black";
                ctx.moveTo(x+27-x-5,y+35-y);
                ctx.lineTo(x+27-x+5,y+35-y);
                ctx.lineTo(x+27-x,y+35-5-y);
                ctx.closePath();
                ctx.fill();
    
            }else{
                if(x>canvas.width-150){//para que baje si supera el limite 
                    //Dibujar flecha
                    //FLECHA QUE VA A LA DERECHA 
                    ctx.beginPath();
                    ctx.moveTo(x+55,y+15);
                    ctx.lineTo(x+55+20,y+15);
                    ctx.closePath();
                    ctx.stroke();
                    //FLECHA QUE BAJA
                    ctx.beginPath();
                    ctx.moveTo(x+55+20,y+15);
                    ctx.lineTo(x+55+20,y+40);
                    ctx.closePath();
                    ctx.stroke();
                    ///fecha que va hacia la izquierda
                    ctx.moveTo(x+55+20,y+40);
                    ctx.lineTo(x+27-x+80,y+40);
                    ///fecha que va para abajo
                    ctx.moveTo(x+107-x,y+40);
                    ctx.lineTo(x+107-x,y+50);
                    /////////////////////////////
                    ctx.closePath();
                    ctx.stroke();
                    //cabeza de la flecha
                    ctx.beginPath();
                    ctx.fillStyle="black";
                    ctx.moveTo(x+107-x-5,y+45);
                    ctx.lineTo(x+107-x+5,y+45);
                    ctx.lineTo(x+107-x,y+45+5);
                    ctx.closePath();
                    ctx.fill();
    
                }else{
                    ///////////CASO NORMAL 
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

                }
                
            }

            ////////////////////////////////////////////////////////////
            if(x>canvas.width-150){ // para que baje si supera el limite 
                ctd=1;
                x=80;
                y=y+50;
            }
            else{
                x=80*++ctd;
            }

            if(tmp.liga==this.INICIO){
                break;
            }
            tmp=tmp.liga;
            cont++;
        }

        if(nodo!=null){

            setTimeout(function(){

                ctx.beginPath();
                ctx.fillStyle = "rgb(0,0,0)";//ROJO
                ctx.fillRect (nodo.x,nodo.y,nodo.width,nodo.height);
    
                //texto
                ctx.fillStyle="white";
                ctx.font = '15px Arial';
                ctx.fillText(nodo.info,nodo.x+20,nodo.y+20);
                ctx.closePath();

            },1000);
           
        }
        
    }

    isVacio(){
        if(this.INICIO==null){
            return true;
        }else{
            return false;
        } 
    }///////////////////////////////////////////


    dibujarConsola(){
        var canvas=this.consola; 
        var ctx = canvas.getContext('2d');
    
        if(this.consolaY==0){ // se dibuja cuadro negro tamaño de canva
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0,700,300);
        }
    
        var x=0;			
        //estado actual de lista 
        var cad;
        cad=this.dibujarNodosLog();
        ctx.fillStyle="white";
        ctx.font = '20px Arial';
        ctx.fillText(">",x+20,this.consolaY+20); // se dibuja el >
        ctx.fillText(cad,x+35,this.consolaY+20); // se dibuja lista
        ctx.closePath();
        ctx.fillStyle = "black"; 
        ctx.fillRect(11, 7,x+20,this.consolaY); // se dibuja cuadrado negro de 11x7 para borrar > anterior 
        this.consolaY=this.consolaY+30 //y se actualiza para seguir bajando
        if(this.consolaY==90){ // si llega a 300 es que y esta en el final requiere reinicio 
            this.consolaY=0;
        }
    }



}