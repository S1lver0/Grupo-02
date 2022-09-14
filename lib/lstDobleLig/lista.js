class Nodo{

    info=0;
    ligaDer=null;
    ligaIzq=null;
}
export class ListaDoblementeLigada{

   INICIO=null;
   FIN=null;
   LISTA_CANVAS=null;

   constructor(listaCanvas) {
        this.LISTA_CANVAS = listaCanvas;
   }///////////////////////////////////////////
   isVacio(){
        if(this.INICIO==null)
            return true;
        else 
            return false;
   }///////////////////////////////////////////
   inserta_inicio(DATO){

        if(this.INICIO==null){//Algoritmo Jorge
            
            var Q=new Nodo();
            Q.info=DATO;
            
            this.INICIO=Q;
            this.FIN=Q;
        }
        else{//Algoritmo cairo
            
            var P=this.INICIO;
                
            var Q=new Nodo();
            Q.info=DATO;
            Q.ligaDer=P;
            P.ligaIzq=Q;
            Q.ligaIzq=null;//Opcional no es necesario
            P=Q;
            
            this.INICIO=P;    
        }

        this.LISTA_CANVAS.inserta_inicio(this.INICIO);

    }///////////////////////////////////////////

    inserta_final(DATO){
     
        let F=this.FIN;
        let Q=new Nodo();
        Q.info=DATO;
        F.ligaDer=Q;
        Q.ligaIzq=F;
        Q.ligaDer=null;//Opcional no necesario
        F=Q;
        this.FIN=F;
        this.LISTA_CANVAS.inserta_final(this.INICIO);

    }/////////////////////////////////////////////////////////
    inserta_antes_X(DATO,X){
        
        var P=this.INICIO;
        
        var Q=P;
        while(Q.ligaDer!=null && Q.info!=X){
            Q=Q.ligaDer;
        }
        if(Q.info==X){
            var T=new Nodo();
            T.info=DATO;
            T.ligaDer=Q;
            var R=Q.ligaIzq;
            Q.ligaIzq=T;
            
            if(P==Q){//LA lista tiene solo un elemento
                P=T;
                T.ligaIzq=null;//OPCIONAL 
            }
            else{
                R.ligaDer=T;
                T.ligaIzq=R;
            }
        }
        else{

            throw new Error("EL elemento no se encuentra en la lista");
        }
        
        this.INICIO=P;

        this.LISTA_CANVAS.inserta_antes_X(this.INICIO,T);

    }///////////////////////////////////////////
    inserta_despues_X (DATO,X){
        var P=this.INICIO;
        var F=this.FIN;
        
        var Q=P;
        var BAND=1;
        while ( Q.info!=X && BAND==1 ){
            if(Q.ligaDer!=null){
                Q=Q.ligaDer;
            }
            else{
                BAND=0;
            }
        }
        if(BAND==1){
            var T=new Nodo();
            T.info=DATO;
            T.ligaDer=Q.ligaDer;
            Q.ligaDer=T;
            
            ////------------------
            T.ligaIzq=Q;
            if(Q==F){//ULTIMO NODO
                
                F=T;
            }
            else{
                
                T.ligaDer.ligaIzq=T;    
            }
            ////----------------------
        }
        else{
            throw new Error("EL NODO DADO COMO REFERENCIA NO SE ENCUENTRA EN LA LISTA");
        }
        
        this.INICIO=P;
        this.FIN=F;

        this.LISTA_CANVAS.inserta_despues_X(this.INICIO,T);

    }//////////////////////////////////////////////////////////////////
    async elimina_inicio(){

        await this.LISTA_CANVAS.elimina_inicio_pre(this.INICIO);

        let Q = this.INICIO;
        this.INICIO = Q.ligaDer;
        
        if(this.INICIO!=null)//Solo si hay mas de un nodo
            this.INICIO.ligaIzq=null;//Necesario
        
        else{
            this.FIN=null;//En c++ "delete Q",como buena práctica(en esta caso no es necesario) revisar https://es.javascript.info/garbage-collection
        }
        Q=null;
        this.LISTA_CANVAS.elimina_post(this.INICIO);
        
    }///////////////////////////////////////////// 
    async eliminar_final(){
        await this.LISTA_CANVAS.elimina_final_pre(this.INICIO);

        let P=this.INICIO;
        let Q=this.FIN;
            
        if(Q.ligaIzq!=null){//verifica si solo tine un nodo
            this.FIN=Q.ligaIzq;
            this.FIN.ligaDer=null;
        }else{
            this.FIN=null;
            P=null;
        }           
        Q=null;
        this.INICIO=P;

        this.LISTA_CANVAS.elimina_post(this.INICIO);
    }///////////////////////////////////////////////////

    async eliminar_x(x){
            let P=this.INICIO;
            let Q=P;
            
            while(Q.ligaDer!=null && Q.info!=x){
                Q=Q.ligaDer;
            }
            
            if(Q.info==x){
                await this.LISTA_CANVAS.elimina_x_pre(this.INICIO,x);
                if(Q==P && Q==this.FIN){//SOLO UN NODO
                    P=null;
                    this.FIN=null;
                }else{
                    if(Q==P){//ES EL PRIMERO
                        P=Q.ligaDer;
                        P.ligaIzq=null;
                    }else{
                        if(Q==this.FIN){
                            this.FIN=Q.ligaIzq;
                            this.FIN.ligaDer=null;
                        }else{
                            let T;
                            let R;
                            T=Q.ligaIzq;
                            R=Q.ligaDer;
                            T.ligaDer=R;
                            R.ligaIzq=T;
                        }
                    }
                }
                Q=null;
            }else{
                throw new Error("No se encuentra el elemento X");
            }
            this.INICIO=P;
        this.LISTA_CANVAS.elimina_post(this.INICIO);
    }////////////////////////////////////////

    async eliminar_antes_X(X){    
        let Q = this.INICIO;
        while(Q.ligaDer!=null && Q.info!=X){
            Q=Q.ligaDer;
        }
        if(Q.info==X){
            if(this.INICIO==Q){
                throw new Error("No existe nodo anterior\n");
            }
            else{
                await this.LISTA_CANVAS.elimina_antes_x_pre(this.INICIO,X);
                let T = Q.ligaIzq;
                if(this.INICIO==T){ 
                    this.INICIO=Q;
                    this.INICIO.ligaIzq=null;
                }
                else{
                    let R=T.ligaIzq;
                    Q.ligaIzq=R;
                    R.ligaDer=Q;
                }
                T=null;
            }
                     
        }
        else{
            throw new Error("No se encuentra elemento X");
        }
        
        this.LISTA_CANVAS.elimina_post(this.INICIO);
    }//////////////////////////////////////////
    async eliminar_despues_X(X){

        let P = this.INICIO;
        let Q = P;
        while(Q.ligaDer!=null&&Q.info!=X){
            Q=Q.ligaDer;
        }
        if(Q.info==X){
            if(Q.ligaDer==null){ // caso X  ultimo
                throw new Error("No hay elemento despues");
            }else{
                await this.LISTA_CANVAS.elimina_despues_x_pre(this.INICIO,X);
                let eliminar = Q.ligaDer;
                Q.ligaDer=eliminar.ligaDer;
                if(eliminar.ligaDer!=null){ 
                    eliminar.ligaDer.ligaIzq=Q;
                }else{ //caso X antes de ultimo 
                    this.FIN=Q;
                }
                eliminar=null;
            }       
        }else{
            throw new Error("No se encuentra el elemento X");
        }
        this.LISTA_CANVAS.elimina_post(this.INICIO);
    }
    dibujarNodosLogDer(){

        var P=this.INICIO;
        var cad="";
        while(P!=null){
            cad+=P.info+"::";
            P=P.ligaDer;
        }
        console.log(cad);
        return cad;
    }/////////////////////////////////////////////
    dibujarNodosLogIzq(){

        var P=this.FIN;
        var cad="";
        while(P!=null){
            cad+=P.info+"::";
            P=P.ligaIzq;
        } 
        console.log(cad);
        return cad;
    }/////////////////////////////////////////////
    buscar(DATO){
        var encontrado=false;
        var	tmp=this.INICIO;
        while(tmp!=null){
            if(tmp.info==DATO){
                encontrado=true;
                break;
            }
            tmp=tmp.ligaDer;
        }
    
        return encontrado;
    }///////////////////////////////////////////
    consola(){
        var cad_izq=this.dibujarNodosLogIzq();
        var cad_der=this.dibujarNodosLogDer();
        this.LISTA_CANVAS.dibujarconsola(cad_izq,cad_der);
    }
}