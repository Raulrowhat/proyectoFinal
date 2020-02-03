function Personaje(img,num){
	//Propiedades
		
		this.posX=550;
		this.posY=495;
		this.posZ=0;
		
		this.moverse = false;
		this.velocidad = 5;
		this.direccion = "";
		
		this.rotZ=0;
		
		this.img=img;
		
		this.id=num;	// identificador con otra tabla
			
	//Metodos
	this.existo = function(){
		return("yo existo");
	}
	
	this.mover = function(){
		hayMovimiento(this.posX,this.posY);
		if(moverPersonaje==true){
				if(this.moverse == true){
					switch (this.direccion) {
						case 'arriba':		this.posY -= this.velocidad;break;
						case 'abajo':		this.posY += this.velocidad;break;
						case 'izquierda':	this.posX -= this.velocidad;break;
						case 'derecha': 	this.posX += this.velocidad;break;
						default: this.direccion = "";break;
					}
				}
			}	
		
		}
		
		this.mover2 = function(){
		hayMovimiento2(this.posX,this.posY);
		if(moverPersonaje==true){
				if(this.moverse == true){
					switch (this.direccion) {
						case 'arriba':		this.posY -= this.velocidad;break;
						case 'abajo':		this.posY += this.velocidad;break;
						case 'izquierda':	this.posX -= this.velocidad;break;
						case 'derecha': 	this.posX += this.velocidad;break;
						default: this.direccion = "";break;
					}
				}
			}	
		
		}
		
		
	this.dibujar = function(){

			if(this.id == 1){
				switch (this.direccion) {
					case 'arriba':		contextoJ1.drawImage(personaje1,96,48*numeroMovP1,48,48,this.posX+camara.posX,this.posY+camara.posY,24,24);numeroMovP1+=1;if(numeroMovP1==4){numeroMovP1=0};break;
					case 'abajo':		contextoJ1.drawImage(personaje1,0,48*numeroMovP1,48,48,this.posX+camara.posX,this.posY+camara.posY,24,24);numeroMovP1+=1;if(numeroMovP1==4){numeroMovP1=0};break;
					case 'izquierda':	contextoJ1.drawImage(personaje1,48,48*numeroMovP1,48,48,this.posX+camara.posX,this.posY+camara.posY,24,24);numeroMovP1+=1;if(numeroMovP1==4){numeroMovP1=0};break;
					case 'derecha': 	contextoJ1.drawImage(personaje1,144,48*numeroMovP1,48,48,this.posX+camara.posX,this.posY+camara.posY,24,24);numeroMovP1+=1;if(numeroMovP1==4){numeroMovP1=0};break;
					default: this.direccion = "";contextoJ1.drawImage(personaje1,0,0,48,48,this.posX+camara.posX,this.posY+camara.posY,24,24);numeroMovP1=0;break;
				}
			}else{
			    if(this.id == 2){
    				switch (this.direccion) {
    					case 'arriba':		contextoJ1.drawImage(personaje2,40*numeroMovP2,60,40,60,this.posX+camara.posX,this.posY+camara.posY,24,24);numeroMovP2+=1;if(numeroMovP2==4){numeroMovP2=0};break;
    					case 'abajo':		contextoJ1.drawImage(personaje2,40*numeroMovP2,0,40,60,this.posX+camara.posX,this.posY+camara.posY,24,24);numeroMovP2+=1;if(numeroMovP2==4){numeroMovP2=0};break;
    					case 'izquierda':	contextoJ1.drawImage(personaje2,40*numeroMovP2,120,40,60,this.posX+camara.posX,this.posY+camara.posY,24,24);numeroMovP2+=1;if(numeroMovP2==4){numeroMovP2=0};break;
    					case 'derecha': 	contextoJ1.drawImage(personaje2,40*numeroMovP2,180,40,60,this.posX+camara.posX,this.posY+camara.posY,24,24);numeroMovP2+=1;if(numeroMovP2==4){numeroMovP2=0};break;
    					default: this.direccion = "";contextoJ1.drawImage(personaje2,40,0,40,60,this.posX+camara.posX,this.posY+camara.posY,24,24);numeroMovP2=0;break;
    				}
    			}else{
    				switch (this.direccion) {
    					case 'arriba':		contextoJ1.drawImage(personaje3,60*numeroMovP3,180,60,60,this.posX+camara.posX,this.posY+camara.posY,24,24);numeroMovP3+=1;if(numeroMovP3==4){numeroMovP3=0};break;
    					case 'abajo':		contextoJ1.drawImage(personaje3,60*numeroMovP3,0,60,60,this.posX+camara.posX,this.posY+camara.posY,24,24);numeroMovP3+=1;if(numeroMovP3==4){numeroMovP3=0};break;
    					case 'izquierda':	contextoJ1.drawImage(personaje3,60*numeroMovP3,60,60,60,this.posX+camara.posX,this.posY+camara.posY,24,24);numeroMovP3+=1;if(numeroMovP3==4){numeroMovP3=0};break;
    					case 'derecha': 	contextoJ1.drawImage(personaje3,60*numeroMovP3,120,60,60,this.posX+camara.posX,this.posY+camara.posY,24,24);numeroMovP3+=1;if(numeroMovP3==4){numeroMovP3=0};break;
    					default: this.direccion = "";contextoJ1.drawImage(personaje3,180,0,60,60,this.posX+camara.posX,this.posY+camara.posY,24,24);numeroMovP3=0;break;
    				}
    			    //contextoJ1.drawImage(personaje3,this.posX+camara.posX,this.posY+camara.posY,24,24);
    			    
    			}
			}
			
		
		}	
		this.dibujar2 = function(){

			if(this.id == 1){
				switch (this.direccion) {
					case 'arriba':		contextoMini.drawImage(personaje1,96,48*numeroMovP1,48,48,this.posX+camara.posX,this.posY+camara.posY,64,64);numeroMovP1+=1;if(numeroMovP1==4){numeroMovP1=0};break;
					case 'abajo':		contextoMini.drawImage(personaje1,0,48*numeroMovP1,48,48,this.posX+camara.posX,this.posY+camara.posY,64,64);numeroMovP1+=1;if(numeroMovP1==4){numeroMovP1=0};break;
					case 'izquierda':	contextoMini.drawImage(personaje1,48,48*numeroMovP1,48,48,this.posX+camara.posX,this.posY+camara.posY,64,64);numeroMovP1+=1;if(numeroMovP1==4){numeroMovP1=0};break;
					case 'derecha': 	contextoMini.drawImage(personaje1,144,48*numeroMovP1,48,48,this.posX+camara.posX,this.posY+camara.posY,64,64);numeroMovP1+=1;if(numeroMovP1==4){numeroMovP1=0};break;
					default: this.direccion = "";contextoMini.drawImage(personaje1,0,0,48,48,this.posX+camara.posX,this.posY+camara.posY,64,64);numeroMovP1=0;break;
				}
			}else{
			    if(this.id == 2){
    				switch (this.direccion) {
    					case 'arriba':		contextoMini.drawImage(personaje2,40*numeroMovP2,60,40,60,this.posX+camara.posX,this.posY+camara.posY,64,64);numeroMovP2+=1;if(numeroMovP2==4){numeroMovP2=0};break;
    					case 'abajo':		contextoMini.drawImage(personaje2,40*numeroMovP2,0,40,60,this.posX+camara.posX,this.posY+camara.posY,64,64);numeroMovP2+=1;if(numeroMovP2==4){numeroMovP2=0};break;
    					case 'izquierda':	contextoMini.drawImage(personaje2,40*numeroMovP2,120,40,60,this.posX+camara.posX,this.posY+camara.posY,64,64);numeroMovP2+=1;if(numeroMovP2==4){numeroMovP2=0};break;
    					case 'derecha': 	contextoMini.drawImage(personaje2,40*numeroMovP2,180,40,60,this.posX+camara.posX,this.posY+camara.posY,64,64);numeroMovP2+=1;if(numeroMovP2==4){numeroMovP2=0};break;
    					default: this.direccion = "";contextoMini.drawImage(personaje2,40,0,40,60,this.posX+camara.posX,this.posY+camara.posY,64,64);numeroMovP2=0;break;
    				}
    			}else{
    				switch (this.direccion) {
    					case 'arriba':		contextoMini.drawImage(personaje3,60*numeroMovP3,180,60,60,this.posX+camara.posX,this.posY+camara.posY,64,64);numeroMovP3+=1;if(numeroMovP3==4){numeroMovP3=0};break;
    					case 'abajo':		contextoMini.drawImage(personaje3,60*numeroMovP3,0,60,60,this.posX+camara.posX,this.posY+camara.posY,64,64);numeroMovP3+=1;if(numeroMovP3==4){numeroMovP3=0};break;
    					case 'izquierda':	contextoMini.drawImage(personaje3,60*numeroMovP3,60,60,60,this.posX+camara.posX,this.posY+camara.posY,64,64);numeroMovP3+=1;if(numeroMovP3==4){numeroMovP3=0};break;
    					case 'derecha': 	contextoMini.drawImage(personaje3,60*numeroMovP3,120,60,60,this.posX+camara.posX,this.posY+camara.posY,64,64);numeroMovP3+=1;if(numeroMovP3==4){numeroMovP3=0};break;
    					default: this.direccion = "";contextoMini.drawImage(personaje3,180,0,60,60,this.posX+camara.posX,this.posY+camara.posY,64,64);numeroMovP3=0;break;
    				}
    			    //contextoJ1.drawImage(personaje3,this.posX+camara.posX,this.posY+camara.posY,24,24);
    			    
    			}
			}
			
		
		}
	

}