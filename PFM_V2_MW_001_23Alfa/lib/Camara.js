/* Clase camara.
contiene la definicion de la clase camara, sus parametros y metodos.
Creado por JFRA 27.02.2018

******************************

*/
function Camara (){
	//Propiedades
		this.posX;
		this.posY;
		this.posZ;
		
		this.moverse = false;
		this.velocidad = 10;
		this.direccion = "";
		
		
	//Metodos
		this.existo = function (){
			return "yo existo";
		}
		this.desplasarse = function(){//DESPLAZAR CAMARA
			//var condicion =false;//REVISAR LIMITES DE LA CAMARA
			var X=this.posX;//X TEMPORAL
			var Y=this.posY;//Y TEMPORAL
			//LIMITES CAMARA
			if(this.moverse == true){
				switch (this.direccion) {
					case 'arriba':		Y += this.velocidad;/*console.log(this.posY)*/;break;
					case 'abajo':		Y -= this.velocidad;/*console.log(this.posY + " ABAJO")*/;break;
					case 'izquierda':	X += this.velocidad;/*console.log(this.posX + " IZQ")*/;break;
					case 'derecha': 	X -= this.velocidad;/*console.log(this.posX)*/;break;
					default: this.direccion = "";break;
				}
			
				if(X<-210||Y<-150||Y>500||X>210){
					this.moverse =false;
					this.direccion = "";
					//condicion =true;
				}else{
					this.moverse =true;
				}
			}
			////LIMITES CAMARA FIN
			
			//MOVER CAMARA
			if(this.moverse == true){
				switch (this.direccion) {
					case 'arriba':		this.posY += this.velocidad;/*console.log(this.posY)*/;break;
					case 'abajo':		this.posY -= this.velocidad;/*console.log(this.posY + " ABAJO")*/;break;
					case 'izquierda':	this.posX += this.velocidad;/*console.log(this.posX + " IZQ")*/;break;
					case 'derecha': 	this.posX -= this.velocidad;/*console.log(this.posX)*/;break;
					default: this.direccion = "";
				}
			}
			////MOVER CAMARA FIN
			
			
		}
}