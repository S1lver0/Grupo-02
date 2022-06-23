class Nodo{

    info=0;
    liga=null;
}
export class Lista{
  
   INICIO=null;
   canvas=null;
   cen=1; //para saber si se uso insertar_incio

    inserta_inicio(DATO){
       this.cen=2;
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
        var	tmp=this.INICIO;
        
        var x=0;
        var y=0;
        var ctd=0;				
        while(tmp!=null){
            
            //Dibujar rectangulo
            ctx.beginPath();
            ctx.fillStyle = "rgb(10,10,10)";
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

            x=80*++ctd;
            tmp=tmp.liga;
        }
        
    }
}