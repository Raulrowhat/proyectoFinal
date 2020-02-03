


function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  //m = checkTime(m);
  //s = checkTime(s);
  //console.log(s)
  if(primertiempo==false){
  	tiempoFin=s+30;
  	if(tiempoFin>=60){
  		var tempt =tiempoFin;
  		tiempoFin=tempt-60;
  	}
  	primertiempo=true;
  }
  if(tiempoFin>=s){
	  document.getElementById('txt').innerHTML=tiempoFin-s;
	  //console.log(s)
	  if((tiempoFin-s)==15){
	  	llenarPelotas();
	  }
	  if((tiempoFin-s)==0){
	  	findeJuego=true;
	  	tiempoFin=-1;
	  	primertiempo=false;
		}
  	
  }else{
  	document.getElementById('txt').innerHTML=60+tiempoFin-s;
  	//console.log(s)
  	if((60+tiempoFin-s)==15){
	  	llenarPelotas();
	  }
  	if((60+tiempoFin-s)==0){
  	findeJuego=true;
  	tiempoFin=-1;
  	primertiempo=false;
	}
  }
  //document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
  //console.log(h + ":" + m + ":" + s)
  //clearTimeout(t);
  //var t = setTimeout(startTime, 1000);
}


//// aqui lo del juego final

function reescalaVentana(){
		//Pongo las propiedades del canvas.
		anchuraVentana = window.innerWidth;
		alturaVentana = window.innerHeight;
		$("#lienzo1").attr("width",anchuraVentana);
		$("#lienzo1").attr("height",alturaVentana);
		
}

function eventoTeclasCamara(){
	
		$(document).keydown(function(){
			//console.log(event.which);
			if(enLienzoMapa==true){
				if(event.which == 37||event.which == 65){
					camara.moverse = true;
					//console.log(camara.posY)
					camara.direccion = 'izquierda';
				}
				if(event.which == 38||event.which == 87){
					camara.moverse = true;
					camara.direccion = 'arriba';
				}
				if(event.which == 39||event.which == 68){
					camara.moverse = true;
					camara.direccion = 'derecha';
				}
				if(event.which == 40||event.which == 83){
					camara.moverse = true;
					camara.direccion = 'abajo';
				}
			}
		})
		$(document).keyup(function(){
			if(enLienzoMapa==true){
				if(event.which == 37||event.which == 65){
					camara.moverse = false;
					this.direccion = "";
				}
				if(event.which == 38||event.which == 87){
					camara.moverse = false;
					this.direccion = "";
				}
				if(event.which == 39||event.which == 68){
					camara.moverse = false;
					this.direccion = "";
				}
				if(event.which == 40||event.which == 83){
					camara.moverse = false;
					this.direccion = "";
				}
			}
		})
	
	
}


function eventoTeclasJugador(){
	$(document).keydown(function(){
		//console.log(event.which);
		if(event.which == 65){
			personaje[0].moverse = true;
			personaje[0].direccion = 'izquierda';
		}
		if(event.which == 87){
			personaje[0].moverse = true;
			personaje[0].direccion = 'arriba';
		}
		if(event.which == 68){
			personaje[0].moverse = true;
			personaje[0].direccion = 'derecha';
		}
		if(event.which == 83){
			personaje[0].moverse = true;
			personaje[0].direccion = 'abajo';
		}
		
	})
	$(document).keyup(function(){
		if(event.which == 65){
			personaje[0].moverse = false;
			personaje[0].direccion = "";
		}
		if(event.which == 87){
			personaje[0].moverse = false;
			personaje[0].direccion = "";
		}
		if(event.which == 68){
			personaje[0].moverse = false;
			personaje[0].direccion = "";
		}
		if(event.which == 83){
			personaje[0].moverse = false;
			personaje[0].direccion = "";
		}
	})
}

function eventoTeclasJugador2(){
	$(document).keydown(function(){
		//console.log(event.which);
		if(event.which == 65){
			personaje[1].moverse = true;
			personaje[1].direccion = 'izquierda';
		}
		if(event.which == 87){
			personaje[1].moverse = true;
			personaje[1].direccion = 'arriba';
		}
		if(event.which == 68){
			personaje[1].moverse = true;
			personaje[1].direccion = 'derecha';
		}
		if(event.which == 83){
			personaje[1].moverse = true;
			personaje[1].direccion = 'abajo';
		}
		
	})
	$(document).keyup(function(){
		if(event.which == 65){
			personaje[1].moverse = false;
			personaje[1].direccion = "";
		}
		if(event.which == 87){
			personaje[1].moverse = false;
			personaje[1].direccion = "";
		}
		if(event.which == 68){
			personaje[1].moverse = false;
			personaje[1].direccion = "";
		}
		if(event.which == 83){
			personaje[1].moverse = false;
			personaje[1].direccion = "";
		}
	})
}


function dibujaCiudad(){
	for(let z=0;z<Px1.length;z++){
		
		contextoJ1.beginPath();
		if(z==0){
			if(CiudadJugador==0){
				contextoJ1.fillStyle = "red";
			}else{
				contextoJ1.fillStyle = "blue";
			}
		
		}else{
			if(CiudadJugador>=z+1){
				contextoJ1.fillStyle = "blue";
			}else{
				contextoJ1.fillStyle = "red";
			}
		}
		contextoJ1.fillRect(Px1[z]+camara.posX, Py1[z]+camara.posY-mapay_inicial, Px2[z],Py2[z]);// para contorno 
		//contextoJ1.strokeRect(Px1[z]+camara.posX, Py1[z]+camara.posY-mapay_inicial, Px2[z],Py2[z]);// para contorno 
		contextoJ1.fill();
		//contextoJ1.clearRect(Px1[z]+camara.posX+10, Py1[z]+camara.posY-mapay_inicial+10, Px2[z]-20,Py2[z]-20);
		contextoJ1.fillStyle = "white";
		//contextoJ1.fillRect(Px1[z]+camara.posX+10, Py1[z]+camara.posY-mapay_inicial+10, Px2[z]-20,Py2[z]-20);
		if(Ciudades[z].pertenencia==1){
			contextoJ1.fillStyle = "blue";
			contextoJ1.fillRect(Px1[z]+camara.posX, Py1[z]+camara.posY-mapay_inicial, Px2[z],Py2[z]);// para contorno 
			contextoJ1.fill();
			contextoJ1.drawImage(imgCiudad,Px1[z]+camara.posX, Py1[z]+camara.posY-mapay_inicial, Px2[z],Py2[z]);//dibuja ciudad en el mapa
		}else{
			if(z<=5){
				contextoJ1.drawImage(imgCiudad2,Px1[z]+camara.posX+2, Py1[z]+camara.posY-mapay_inicial+2, Px2[z]-5,Py2[z]-5);//dibuja ciudad en el mapa
			}else{
				if(z>5&&z<9){
					contextoJ1.drawImage(imgCiudad3,Px1[z]+camara.posX, Py1[z]+camara.posY-mapay_inicial, Px2[z],Py2[z]);//dibuja ciudad en el mapa
				}else{
					
					contextoJ1.drawImage(imgCiudad4,Px1[z]+camara.posX, Py1[z]+camara.posY-mapay_inicial, Px2[z],Py2[z]);//dibuja ciudad en el mapa
				}
			}
		}
		//contextoJ1.drawImage(imgCiudad,Px1[z]+camara.posX, Py1[z]+camara.posY-mapay_inicial, Px2[z],Py2[z]);//dibuja ciudad en el mapa
		//contextoJ1.fill();
		contextoJ1.closePath();
		
				
		
	}
	
}


function UbicaionCiudades(){
	//ubicacion ciudades
	var tamTempCiudad=40; //tamaño ciudades
	Px1[0]=989;	Py1[0]=959;	Px2[0]=tamTempCiudad; Py2[0]=tamTempCiudad;
	Px1[1]=729;	Py1[1]=890;	Px2[1]=tamTempCiudad; Py2[1]=tamTempCiudad;
	Px1[2]=239;	Py1[2]=829;	Px2[2]=tamTempCiudad; Py2[2]=tamTempCiudad;
	Px1[3]=464;	Py1[3]=672;	Px2[3]=tamTempCiudad; Py2[3]=tamTempCiudad;
	Px1[4]=721;	Py1[4]=615;	Px2[4]=tamTempCiudad; Py2[4]=tamTempCiudad;
	Px1[5]=826;	Py1[5]=479;	Px2[5]=tamTempCiudad; Py2[5]=tamTempCiudad;
	Px1[6]=527;	Py1[6]=372;	Px2[6]=tamTempCiudad; Py2[6]=tamTempCiudad;
	Px1[7]=258;	Py1[7]=180;	Px2[7]=tamTempCiudad; Py2[7]=tamTempCiudad;
	Px1[8]=597;	Py1[8]=126;	Px2[8]=tamTempCiudad; Py2[8]=tamTempCiudad;
	Px1[9]=936;	Py1[9]=109;	Px2[9]=tamTempCiudad; Py2[9]=tamTempCiudad;
	

}

function VolverGrisMapaDesconocido(){
	
	 // Aplicamos la escala de grises según el ojo humano
	contextoJ2.drawImage(mapa,camara.posX,camara.posY-mapay_inicial,mapa.width,mapa.height);//dibuja el mapa
    var imgData2=contextoJ2.getImageData(camara.posX,camara.posY-mapay_inicial,mapa.width,mapa.height);
    var data2=imgData2.data;
	
	
    for(let i = 0; i < data2.length; i += 4) {
		
      var grayscale= 0.33*data2[i]+0.5*data2[i+1]+0.15*data2[i+2];
      data2[i]=grayscale;
      data2[i+1]=grayscale;
      data2[i+2]=grayscale;
    }
 
    // Asignamos la imagen al Canvas
    contextoJ1.putImageData(imgData2,camara.posX,camara.posY-mapay_inicial);
	RedibujarMapaConocido();
}

function UbicaionZonasNoGrises(){
	//ubicacion zonas visibles
	
	ZonaX1[0]=615;	ZonaY1[0]=840;	ZonaX2[0]=1200; ZonaY2[0]=1078;
	ZonaX1[1]=0;	ZonaY1[1]=800;	ZonaX2[1]=1200; ZonaY2[1]=1078;//corte
	ZonaX1[2]=0;	ZonaY1[2]=650;	ZonaX2[2]=600; ZonaY2[2]=800;
	ZonaX1[3]=0;	ZonaY1[3]=600;	ZonaX2[3]=1200; ZonaY2[3]=800;//corte
	ZonaX1[4]=800;	ZonaY1[4]=450;	ZonaX2[4]=1200; ZonaY2[4]=600;
	ZonaX1[5]=0;	ZonaY1[5]=350;	ZonaX2[5]=1200; ZonaY2[5]=600;//corte
	ZonaX1[6]=0;	ZonaY1[6]=140;	ZonaX2[6]=400; ZonaY2[6]=350;
	ZonaX1[7]=0;	ZonaY1[7]=0;	ZonaX2[7]=750; ZonaY2[7]=350;//corte
	ZonaX1[8]=0;	ZonaY1[8]=0;	ZonaX2[8]=1200; ZonaY2[8]=1078;//todo
	
	

}


function RedibujarMapaConocido(){
	//console.log("holis");
	var XCorte=ZonaX1[0];
	var YCorte=ZonaY1[0];
	var XCorte2=ZonaX2[0];
	var YCorte2=ZonaY2[0];
	CiudadJugador=0;
	for(let p=0;p<10; p +=1){
		if(Ciudades[p].pertenencia==1){
			CiudadJugador+=1;
			//console.log("hola "+Ciudades[p].nombre);
		}else{
			p=50;
		}
	}
	
	for(let z = 0; z < CiudadJugador; z += 1) {
		
		XCorte=ZonaX1[z];
		YCorte=ZonaY1[z];
		XCorte2=ZonaX2[z];
		YCorte2=ZonaY2[z];
		contextoJ1.clearRect(XCorte+camara.posX,YCorte+camara.posY-mapay_inicial,XCorte2-XCorte,YCorte2-YCorte);
		contextoJ1.drawImage(mapa,XCorte,YCorte,XCorte2-XCorte,YCorte2-YCorte,XCorte+camara.posX,YCorte+camara.posY-mapay_inicial,XCorte2-XCorte,YCorte2-YCorte);//dibuja el mapa
		
	}
	NombreCiudadEnMapa(CiudadJugador+1);//coloca los nombres de las ciudades en el mapa
	//console.log(CiudadJugador);
	
}

function DibujarGuiObjetos(){
	contextoT.drawImage(imgPapiro,0,0,256,256);//dibuja el mapa
	contextoT.beginPath();
	contextoT.font="15pt Verdana";
	contextoT.fillStyle = "black";
	
	contextoT.fillText("Vidas: ",35,60);
	switch (numCorazon) {
			case 1:	contextoT.drawImage(imgCorazon,100,35,32,32);break;
			case 2:	contextoT.drawImage(imgCorazon,100,35,32,32);contextoT.drawImage(imgCorazon,130,35,32,32);break;
			case 3:	contextoT.drawImage(imgCorazon,100,35,32,32);contextoT.drawImage(imgCorazon,130,35,32,32);contextoT.drawImage(imgCorazon,160,35,32,32);break;
			
			default: break;
		}
	contextoT.fillText("Dinero: "+Dinero,35,85);
	contextoT.drawImage(imgDinero,190,60,32,32);
	contextoT.fillText("Tropas: "+numTropas,35,110);
	contextoT.drawImage(imgTropas,190,90,24,24);
	contextoT.fillText("Madera: "+numMadera,35,135);
	contextoT.drawImage(imgMadera,190,110,32,32);
	contextoT.fillText("Ladrillo: "+numLadrillos,35,160);
	contextoT.drawImage(imgLadrillo,190,135,32,32);
	contextoT.fillText("Metal: "+numMetal,35,185);
	contextoT.drawImage(imgMetal,190,160,32,32);
	contextoT.fillText("Nivel: "+Nivel,35,210);
	contextoT.drawImage(imgNivel,190,185,32,32);
	
	contextoT.fill();
	contextoT.closePath();
	//console.log(camara.posY);
}


function NombreCiudadEnMapa(nC){
	//ubicacion de los nombres de las ciudades en el mapa
	if(nC>=10){
		nC=10;
	}
	for(let n = 0; n<nC;n++){
		//console.log("holi");
		contextoJ1.beginPath();
		contextoJ1.font="15pt Verdana";
		contextoJ1.fillStyle = "black";
		contextoJ1.fillText(""+Ciudades[n].nombre,Px1[n]+camara.posX-5, Py1[n]+camara.posY-mapay_inicial+60);
		contextoJ1.fill();
		contextoJ1.closePath();
		
	}
	
	

}

function dibujaCiudadEnLinzoCiudad(id){
	
	if(id==1){
		contextoCiudad.drawImage(imgInCiudad1,50,0,1024,800);//dibuja la ciudad
	}else{ 
		if(id>1&&id<=6){
			contextoCiudad.drawImage(imgInCiudad2,50,0,1024,800);//dibuja la ciudad
		}else{
			if(id>6&&id<=9){
				contextoCiudad.drawImage(imgInCiudad3,50,0,1024,800);//dibuja la ciudad
			}else{
				contextoCiudad.drawImage(imgInCiudad4,50,0,1024,800);//dibuja la ciudad
			}
		}
	}
	//para el nombre de la ciudad
	contextoCiudad.beginPath();
	contextoCiudad.font="25pt Verdana";
	contextoCiudad.fillStyle = "black";
	switch (id) {
			case 1:	contextoCiudad.fillText("Heracleion",400,40);break;
			case 2:	contextoCiudad.fillText("Buto",400,40);break;
			case 3:	contextoCiudad.fillText("Sile",400,40);break;
			case 4:	contextoCiudad.fillText("Letopis",400,40);break;
			case 5:	contextoCiudad.fillText("Xios",400,40);break;
			case 6:	contextoCiudad.fillText("Apis",400,40);break;
			case 7:	contextoCiudad.fillText("Ptkheha",400,40);break;
			case 8:	contextoCiudad.fillText("Rosetta",400,40);break;
			case 9:	contextoCiudad.fillText("Raqote",400,40);break;
			case 10: contextoCiudad.fillText("Memphis",400,40);break;
			
			default: break;
		}
	contextoCiudad.fill();
	contextoCiudad.closePath();
	//DibujarGuiObjetos();//dibujar vida, recursos, info para jugador
	
}


function dibujaPapiroEnCiudad(){
	
	contextoCiudad.drawImage(imgInCiudadPapiro,250,25,825,750);//dibuja papiro en la ciudad
	
}

function dibujaInfoEnPapiroCiudad(id,info){
	
	//contextoCiudad.drawImage(imgInCiudadPapiro,515,50,575,580);//dibuja papiro en la ciudad
	if(info==1){
		contextoCiudad.beginPath();
		contextoCiudad.font="20pt Verdana";
		contextoCiudad.fillStyle = "black";
		contextoCiudad.fillText("EDIFICIO",400,110);
		contextoCiudad.fillText("NIVEL",600,110);
		contextoCiudad.fillText("PRODUCCIÓN",750,110);
		contextoCiudad.fill();
		//contextoCiudad.closePath();
		
		contextoCiudad.font="15pt Verdana";
		contextoCiudad.drawImage(imgEdifDin,410,155,64,64);//dibuja edificio en papiro en la ciudad
		contextoCiudad.fillText("Mercado",490,190);
		contextoCiudad.drawImage(imgEdifMad,410,225,64,64);//dibuja edificio en papiro en la ciudad
		contextoCiudad.fillText("Maderera",490,260);
		contextoCiudad.drawImage(imgEdifLad,410,295,64,64);//dibuja edificio en papiro en la ciudad
		contextoCiudad.fillText("Ladrillera",490,330);
		contextoCiudad.drawImage(imgEdifMet,410,365,64,64);//dibuja edificio en papiro en la ciudad
		contextoCiudad.fillText("Mina Metal",490,400);
		contextoCiudad.drawImage(imgEdifTInf,410,435,64,64);//dibuja edificio en papiro en la ciudad
		contextoCiudad.fillText("Barracas",490,470);
		contextoCiudad.drawImage(imgEdifTArq,410,505,64,64);//dibuja edificio en papiro en la ciudad
		contextoCiudad.fillText("Arqueria",490,540);
		contextoCiudad.drawImage(imgEdifTCab,410,575,64,64);//dibuja edificio en papiro en la ciudad
		contextoCiudad.fillText("Establos",490,610);
		
		contextoCiudad.fill();
		
		//contextoCiudad.beginPath();
		contextoCiudad.font="25pt Verdana";
		contextoCiudad.fillStyle = "black";
		
		switch (id) {
			case 1:	contextoCiudad.fillText(""+Ciudades[id-1].edificioDinero,630,190);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioRecursoMad,630,260);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioRecursoLad,630,330);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioRecursoMet,630,400);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioTropaInf,630,470);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioTropaArq,630,540);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioTropaCab,630,610);
					contextoCiudad.fillText(""+Ciudades[id-1].prodDinero,800,190);
					contextoCiudad.fillText(""+Ciudades[id-1].prodRecursoMad,800,260);
					contextoCiudad.fillText(""+Ciudades[id-1].prodRecursoLad,800,330);
					contextoCiudad.fillText(""+Ciudades[id-1].prodRecursoMet,800,400);
					contextoCiudad.fillText(""+Ciudades[id-1].prodTropaInf,800,470);
					contextoCiudad.fillText(""+Ciudades[id-1].prodTropaArq,800,540);
					contextoCiudad.fillText(""+Ciudades[id-1].prodTropaCab,800,610);break;
					
			case 2:	contextoCiudad.fillText(""+Ciudades[id-1].edificioDinero,630,190);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioRecursoMad,630,260);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioRecursoLad,630,330);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioRecursoMet,630,400);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioTropaInf,630,470);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioTropaArq,630,540);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioTropaCab,630,610);
					contextoCiudad.fillText(""+Ciudades[id-1].prodDinero,800,190);
					contextoCiudad.fillText(""+Ciudades[id-1].prodRecursoMad,800,260);
					contextoCiudad.fillText(""+Ciudades[id-1].prodRecursoLad,800,330);
					contextoCiudad.fillText(""+Ciudades[id-1].prodRecursoMet,800,400);
					contextoCiudad.fillText(""+Ciudades[id-1].prodTropaInf,800,470);
					contextoCiudad.fillText(""+Ciudades[id-1].prodTropaArq,800,540);
					contextoCiudad.fillText(""+Ciudades[id-1].prodTropaCab,800,610);break;
					
			case 3:	contextoCiudad.fillText(""+Ciudades[id-1].edificioDinero,630,190);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioRecursoMad,630,260);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioRecursoLad,630,330);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioRecursoMet,630,400);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioTropaInf,630,470);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioTropaArq,630,540);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioTropaCab,630,610);
					contextoCiudad.fillText(""+Ciudades[id-1].prodDinero,800,190);
					contextoCiudad.fillText(""+Ciudades[id-1].prodRecursoMad,800,260);
					contextoCiudad.fillText(""+Ciudades[id-1].prodRecursoLad,800,330);
					contextoCiudad.fillText(""+Ciudades[id-1].prodRecursoMet,800,400);
					contextoCiudad.fillText(""+Ciudades[id-1].prodTropaInf,800,470);
					contextoCiudad.fillText(""+Ciudades[id-1].prodTropaArq,800,540);
					contextoCiudad.fillText(""+Ciudades[id-1].prodTropaCab,800,610);break;
					
			case 4:	contextoCiudad.fillText(""+Ciudades[id-1].edificioDinero,630,190);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioRecursoMad,630,260);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioRecursoLad,630,330);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioRecursoMet,630,400);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioTropaInf,630,470);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioTropaArq,630,540);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioTropaCab,630,610);
					contextoCiudad.fillText(""+Ciudades[id-1].prodDinero,800,190);
					contextoCiudad.fillText(""+Ciudades[id-1].prodRecursoMad,800,260);
					contextoCiudad.fillText(""+Ciudades[id-1].prodRecursoLad,800,330);
					contextoCiudad.fillText(""+Ciudades[id-1].prodRecursoMet,800,400);
					contextoCiudad.fillText(""+Ciudades[id-1].prodTropaInf,800,470);
					contextoCiudad.fillText(""+Ciudades[id-1].prodTropaArq,800,540);
					contextoCiudad.fillText(""+Ciudades[id-1].prodTropaCab,800,610);break;
					
			case 5:	contextoCiudad.fillText(""+Ciudades[id-1].edificioDinero,630,190);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioRecursoMad,630,260);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioRecursoLad,630,330);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioRecursoMet,630,400);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioTropaInf,630,470);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioTropaArq,630,540);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioTropaCab,630,610);
					contextoCiudad.fillText(""+Ciudades[id-1].prodDinero,800,190);
					contextoCiudad.fillText(""+Ciudades[id-1].prodRecursoMad,800,260);
					contextoCiudad.fillText(""+Ciudades[id-1].prodRecursoLad,800,330);
					contextoCiudad.fillText(""+Ciudades[id-1].prodRecursoMet,800,400);
					contextoCiudad.fillText(""+Ciudades[id-1].prodTropaInf,800,470);
					contextoCiudad.fillText(""+Ciudades[id-1].prodTropaArq,800,540);
					contextoCiudad.fillText(""+Ciudades[id-1].prodTropaCab,800,610);break;
					
			case 6:	contextoCiudad.fillText(""+Ciudades[id-1].edificioDinero,630,190);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioRecursoMad,630,260);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioRecursoLad,630,330);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioRecursoMet,630,400);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioTropaInf,630,470);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioTropaArq,630,540);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioTropaCab,630,610);
					contextoCiudad.fillText(""+Ciudades[id-1].prodDinero,800,190);
					contextoCiudad.fillText(""+Ciudades[id-1].prodRecursoMad,800,260);
					contextoCiudad.fillText(""+Ciudades[id-1].prodRecursoLad,800,330);
					contextoCiudad.fillText(""+Ciudades[id-1].prodRecursoMet,800,400);
					contextoCiudad.fillText(""+Ciudades[id-1].prodTropaInf,800,470);
					contextoCiudad.fillText(""+Ciudades[id-1].prodTropaArq,800,540);
					contextoCiudad.fillText(""+Ciudades[id-1].prodTropaCab,800,610);break;
					
			case 7:	contextoCiudad.fillText(""+Ciudades[id-1].edificioDinero,630,190);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioRecursoMad,630,260);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioRecursoLad,630,330);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioRecursoMet,630,400);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioTropaInf,630,470);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioTropaArq,630,540);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioTropaCab,630,610);
					contextoCiudad.fillText(""+Ciudades[id-1].prodDinero,800,190);
					contextoCiudad.fillText(""+Ciudades[id-1].prodRecursoMad,800,260);
					contextoCiudad.fillText(""+Ciudades[id-1].prodRecursoLad,800,330);
					contextoCiudad.fillText(""+Ciudades[id-1].prodRecursoMet,800,400);
					contextoCiudad.fillText(""+Ciudades[id-1].prodTropaInf,800,470);
					contextoCiudad.fillText(""+Ciudades[id-1].prodTropaArq,800,540);
					contextoCiudad.fillText(""+Ciudades[id-1].prodTropaCab,800,610);break;
					
			case 8:	contextoCiudad.fillText(""+Ciudades[id-1].edificioDinero,630,190);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioRecursoMad,630,260);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioRecursoLad,630,330);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioRecursoMet,630,400);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioTropaInf,630,470);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioTropaArq,630,540);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioTropaCab,630,610);
					contextoCiudad.fillText(""+Ciudades[id-1].prodDinero,800,190);
					contextoCiudad.fillText(""+Ciudades[id-1].prodRecursoMad,800,260);
					contextoCiudad.fillText(""+Ciudades[id-1].prodRecursoLad,800,330);
					contextoCiudad.fillText(""+Ciudades[id-1].prodRecursoMet,800,400);
					contextoCiudad.fillText(""+Ciudades[id-1].prodTropaInf,800,470);
					contextoCiudad.fillText(""+Ciudades[id-1].prodTropaArq,800,540);
					contextoCiudad.fillText(""+Ciudades[id-1].prodTropaCab,800,610);break;
					
			case 9:	contextoCiudad.fillText(""+Ciudades[id-1].edificioDinero,630,190);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioRecursoMad,630,260);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioRecursoLad,630,330);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioRecursoMet,630,400);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioTropaInf,630,470);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioTropaArq,630,540);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioTropaCab,630,610);
					contextoCiudad.fillText(""+Ciudades[id-1].prodDinero,800,190);
					contextoCiudad.fillText(""+Ciudades[id-1].prodRecursoMad,800,260);
					contextoCiudad.fillText(""+Ciudades[id-1].prodRecursoLad,800,330);
					contextoCiudad.fillText(""+Ciudades[id-1].prodRecursoMet,800,400);
					contextoCiudad.fillText(""+Ciudades[id-1].prodTropaInf,800,470);
					contextoCiudad.fillText(""+Ciudades[id-1].prodTropaArq,800,540);
					contextoCiudad.fillText(""+Ciudades[id-1].prodTropaCab,800,610);break;
					
			case 10: contextoCiudad.fillText(""+Ciudades[id-1].edificioDinero,630,190);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioRecursoMad,630,260);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioRecursoLad,630,330);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioRecursoMet,630,400);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioTropaInf,630,470);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioTropaArq,630,540);
					contextoCiudad.fillText(""+Ciudades[id-1].edificioTropaCab,630,610);
					contextoCiudad.fillText(""+Ciudades[id-1].prodDinero,800,190);
					contextoCiudad.fillText(""+Ciudades[id-1].prodRecursoMad,800,260);
					contextoCiudad.fillText(""+Ciudades[id-1].prodRecursoLad,800,330);
					contextoCiudad.fillText(""+Ciudades[id-1].prodRecursoMet,800,400);
					contextoCiudad.fillText(""+Ciudades[id-1].prodTropaInf,800,470);
					contextoCiudad.fillText(""+Ciudades[id-1].prodTropaArq,800,540);
					contextoCiudad.fillText(""+Ciudades[id-1].prodTropaCab,800,610);break;
			
			default: break;
		}
		contextoCiudad.fill();
		contextoCiudad.closePath();
			
	}
	
	if(info==2){
		contextoCiudad.beginPath();
		contextoCiudad.font="20pt Verdana";
		contextoCiudad.fillStyle = "black";
		contextoCiudad.fillText("Construcción",575,110);
		contextoCiudad.fill();
		
		
		contextoCiudad.drawImage(imgEdifDin,410,155,64,64);//dibuja edificio en papiro en la ciudad
		contextoCiudad.fillText(""+Ciudades[id-1].edificioDinero,490,200);
		contextoCiudad.fillText("Mercado",390,245);
		
		contextoCiudad.drawImage(imgEdifMad,600,155,64,64);//dibuja edificio en papiro en la ciudad
		contextoCiudad.fillText(""+Ciudades[id-1].edificioRecursoMad,680,200);
		contextoCiudad.fillText("Maderera",580,245);
		
		contextoCiudad.drawImage(imgEdifLad,790,155,64,64);//dibuja edificio en papiro en la ciudad
		contextoCiudad.fillText(""+Ciudades[id-1].edificioRecursoLad,870,200);
		contextoCiudad.fillText("Ladrillera",770,245);
		
		contextoCiudad.drawImage(imgEdifMet,410,280,64,64);//dibuja edificio en papiro en la ciudad
		contextoCiudad.fillText(""+Ciudades[id-1].edificioRecursoMet,490,325);
		contextoCiudad.fillText("Mina Metal",390,370);
		
		contextoCiudad.drawImage(imgEdifTInf,600,280,64,64);//dibuja edificio en papiro en la ciudad
		contextoCiudad.fillText(""+Ciudades[id-1].edificioTropaInf,680,325);
		contextoCiudad.fillText("Barracas",580,370);
		
		contextoCiudad.drawImage(imgEdifTArq,790,280,64,64);//dibuja edificio en papiro en la ciudad
		contextoCiudad.fillText(""+Ciudades[id-1].edificioTropaArq,870,325);
		contextoCiudad.fillText("Arqueria",770,370);
		
		contextoCiudad.drawImage(imgEdifTCab,600,405,64,64);//dibuja edificio en papiro en la ciudad
		contextoCiudad.fillText(""+Ciudades[id-1].edificioTropaCab,680,450);
		contextoCiudad.fillText("Establos",580,495);
		
		contextoCiudad.fillRect(410, 510, 450,10);// para separar
		contextoCiudad.fillText("Cola de Construcción",500,550);
		contextoCiudad.fill();
		contextoCiudad.closePath();
	}
	
	if(info==3){
		contextoCiudad.beginPath();
		contextoCiudad.font="20pt Verdana";
		contextoCiudad.fillStyle = "black";
		contextoCiudad.fillText("Reclutamiento",575,110);
		contextoCiudad.fill();
		
		switch (Ciudades[id-1].edificioTropaInf) {
			case 1:	contextoCiudad.drawImage(imgTInf1,410,155,64,64);//dibuja tropa en papiro en la ciudad
					contextoCiudad.fillText(""+tropasInf1,490,200);
					contextoCiudad.fillText("Lanceros",390,245);	
					break;
					
			case 2:	contextoCiudad.drawImage(imgTInf1,410,155,64,64);//dibuja tropa en papiro en la ciudad
					contextoCiudad.fillText(""+tropasInf1,490,200);
					contextoCiudad.fillText("Lanceros",390,245);	
					contextoCiudad.drawImage(imgTInf2,600,155,64,64);//dibuja tropa en papiro en la ciudad
					contextoCiudad.fillText(""+tropasInf2,680,200);
					contextoCiudad.fillText("Hacheros",580,245);
					break;
					
			case 3:	contextoCiudad.drawImage(imgTInf1,410,155,64,64);//dibuja tropa en papiro en la ciudad
					contextoCiudad.fillText(""+tropasInf1,490,200);
					contextoCiudad.fillText("Lanceros",390,245);	
					contextoCiudad.drawImage(imgTInf2,600,155,64,64);//dibuja tropa en papiro en la ciudad
					contextoCiudad.fillText(""+tropasInf2,680,200);
					contextoCiudad.fillText("Hacheros",580,245);
					contextoCiudad.drawImage(imgTInf3,790,155,64,64);//dibuja tropa en papiro en la ciudad
					contextoCiudad.fillText(""+tropasInf3,870,200);
					contextoCiudad.fillText("Lan.Pesados",770,245);
					break;
			
			default: break;
		}
		
		switch (Ciudades[id-1].edificioTropaArq) {
			case 1:	contextoCiudad.drawImage(imgTArq1,410,280,64,64);//dibuja tropa en papiro en la ciudad
					contextoCiudad.fillText(""+tropasArq1,490,325);
					contextoCiudad.fillText("Jabalineros",390,370);	
					break;
					
			case 2:	contextoCiudad.drawImage(imgTArq1,410,280,64,64);//dibuja tropa en papiro en la ciudad
					contextoCiudad.fillText(""+tropasArq1,490,325);
					contextoCiudad.fillText("Jabalineros",390,370);	
					contextoCiudad.drawImage(imgTArq2,600,280,64,64);//dibuja tropa en papiro en la ciudad
					contextoCiudad.fillText(""+tropasArq2,680,325);
					contextoCiudad.fillText("Arqueros",580,370);
					break;
					
			case 3:contextoCiudad.drawImage(imgTArq1,410,280,64,64);//dibuja tropa en papiro en la ciudad
					contextoCiudad.fillText(""+tropasArq1,490,325);
					contextoCiudad.fillText("Jabalineros",390,370);
					contextoCiudad.drawImage(imgTArq2,600,280,64,64);//dibuja tropa en papiro en la ciudad
					contextoCiudad.fillText(""+tropasArq2,680,325);
					contextoCiudad.fillText("Arqueros",580,370);
					contextoCiudad.drawImage(imgTArq3,790,280,64,64);//dibuja tropa en papiro en la ciudad
					contextoCiudad.fillText(""+tropasArq3,870,325);
					contextoCiudad.fillText("Arq.Pesados",770,370);
					break;
			
			default: break;
		}
		
		switch (Ciudades[id-1].edificioTropaCab) {
			case 1:	contextoCiudad.drawImage(imgTCab1,410,405,64,64);//dibuja tropa en papiro en la ciudad
					contextoCiudad.fillText(""+tropasCab1,490,450);
					contextoCiudad.fillText("Cab.Ligera",390,495);
					break;
					
			case 2:	contextoCiudad.drawImage(imgTCab1,410,405,64,64);//dibuja tropa en papiro en la ciudad
					contextoCiudad.fillText(""+tropasCab1,490,450);
					contextoCiudad.fillText("Cab.Ligera",390,495);
					contextoCiudad.drawImage(imgTCab2,600,405,64,64);//dibuja tropa en papiro en la ciudad
					contextoCiudad.fillText(""+tropasCab2,680,450);
					contextoCiudad.fillText("Cab.Hacha",580,495);
		
					break;
					
			case 3:	contextoCiudad.drawImage(imgTCab1,410,405,64,64);//dibuja tropa en papiro en la ciudad
					contextoCiudad.fillText(""+tropasCab1,490,450);
					contextoCiudad.fillText("Cab.Ligera",390,495);	
					contextoCiudad.drawImage(imgTCab2,600,405,64,64);//dibuja tropa en papiro en la ciudad
					contextoCiudad.fillText(""+tropasCab2,680,450);
					contextoCiudad.fillText("Cab.Hacha",580,495);
		
					contextoCiudad.drawImage(imgTCab3,790,405,64,64);//dibuja tropa en papiro en la ciudad
					contextoCiudad.fillText(""+tropasCab3,870,450);
					contextoCiudad.fillText("Cab.Pesada",770,495);
					break;
			
			default: break;
		}
		
		
		contextoCiudad.fillRect(410, 510, 450,10);// para separar 
		contextoCiudad.fillText("Cola de Reclutamiento",500,550);
		contextoCiudad.fill();
		contextoCiudad.closePath();
	}
	
	
}
// INFO para saber si estamos en info, construir o reclutar en el papiro, X e Y coordenadas del mouse o click, id para saber ciudad, click para saber si se activo por click o en mosuse move

function mostrarExplicacionInfo(id,info,X,Y,click){
	var temporalEdifOTropa=0;
	var clickUnaVez=false;//para que me haga una vez lo del click
	if(X!=0){
		if(info==1){
			
			if((X>=410&&X<=474&&Y>=155&&Y<=219)){
				//console.log("mercado");
				if(click==1){
					activoPorClickInfo=true;
					infoExplicacion=true;
				}else {
					temporalExplicacion=true;
				}
				temporalEdifOTropa=1;
				clickUnaVez=true;
				dibujarExplicacionInfo(temporalEdifOTropa);
				
			}
			
			if((X>=410&&X<=474&&Y>=225&&Y<=289)){
				//console.log("madera");
				if(click==1){
					activoPorClickInfo=true;
					infoExplicacion=true;
				}else {
					temporalExplicacion=true;
				}
				temporalEdifOTropa=2;
				clickUnaVez=true;
				dibujarExplicacionInfo(temporalEdifOTropa);
				
				
			}
			
			if((X>=410&&X<=474&&Y>=295&&Y<=359)){
				//console.log("ladrillo");
				if(click==1){
					activoPorClickInfo=true;
					infoExplicacion=true;
				}else {
					temporalExplicacion=true;
				}
				temporalEdifOTropa=3;
				clickUnaVez=true;
				dibujarExplicacionInfo(temporalEdifOTropa);
				
				
			}
			
			if((X>=410&&X<=474&&Y>=365&&Y<=429)){
				//console.log("metal");
				if(click==1){
					activoPorClickInfo=true;
					infoExplicacion=true;
				}else {
					temporalExplicacion=true;
				}
				temporalEdifOTropa=4;
				clickUnaVez=true;
				dibujarExplicacionInfo(temporalEdifOTropa);
				
				
			}
			
			if((X>=410&&X<=474&&Y>=435&&Y<=499)){
				//console.log("infanteria");
				if(click==1){
					activoPorClickInfo=true;
					infoExplicacion=true;
				}else {
					temporalExplicacion=true;
				}
				temporalEdifOTropa=5;
				clickUnaVez=true;
				dibujarExplicacionInfo(temporalEdifOTropa);
				
				
			}
			
			if((X>=410&&X<=474&&Y>=505&&Y<=569)){
				//console.log("arqueria");
				if(click==1){
					activoPorClickInfo=true;
					infoExplicacion=true;
				}else {
					temporalExplicacion=true;
				}
				temporalEdifOTropa=6;
				clickUnaVez=true;
				dibujarExplicacionInfo(temporalEdifOTropa);
				
				
			}
			
			if((X>=410&&X<=474&&Y>=575&&Y<=639)){
				//console.log("caballeria");
				if(click==1){
					activoPorClickInfo=true;
					infoExplicacion=true;
				}else {
					temporalExplicacion=true;
				}
				temporalEdifOTropa=7;
				clickUnaVez=true;
				dibujarExplicacionInfo(temporalEdifOTropa);
				
				
			}
			
			
			
		}
		
		if(info==2){
			if((X>=410&&X<=474&&Y>=155&&Y<=219)){
				//console.log("mercado");
				if(click==1){
					activoPorClickInfo=true;
					infoExplicacion=true;
				}else {
					temporalExplicacion=true;
				}
				temporalEdifOTropa=1;
				clickUnaVez=true;
				dibujarExplicacionInfo(temporalEdifOTropa);
				
				
			}
			
			if((X>=600&&X<=664&&Y>=155&&Y<=219)){
				//console.log("madera");
				if(click==1){
					activoPorClickInfo=true;
					infoExplicacion=true;
				}else {
					temporalExplicacion=true;
				}
				temporalEdifOTropa=2;
				clickUnaVez=true;
				dibujarExplicacionInfo(temporalEdifOTropa);
				
				
			}
			
			if((X>=790&&X<=854&&Y>=155&&Y<=219)){
				//console.log("ladrillo");
				if(click==1){
					activoPorClickInfo=true;
					infoExplicacion=true;
				}else {
					temporalExplicacion=true;
				}
				temporalEdifOTropa=3;
				clickUnaVez=true;
				dibujarExplicacionInfo(temporalEdifOTropa);
				
				
			}
			
			if((X>=410&&X<=474&&Y>=280&&Y<=344)){
				//console.log("metal");
				if(click==1){
					activoPorClickInfo=true;
					infoExplicacion=true;
				}else {
					temporalExplicacion=true;
				}
				temporalEdifOTropa=4;
				clickUnaVez=true;
				dibujarExplicacionInfo(temporalEdifOTropa);
				
				
			}
			
			if((X>=600&&X<=664&&Y>=280&&Y<=344)){
				//console.log("infanteria");
				if(click==1){
					activoPorClickInfo=true;
					infoExplicacion=true;
				}else {
					temporalExplicacion=true;
				}
				temporalEdifOTropa=5;
				clickUnaVez=true;
				dibujarExplicacionInfo(temporalEdifOTropa);
				
				
			}
			
			if((X>=790&&X<=854&&Y>=280&&Y<=344)){
				//console.log("arqueria");
				if(click==1){
					activoPorClickInfo=true;
					infoExplicacion=true;
				}else {
					temporalExplicacion=true;
				}
				temporalEdifOTropa=6;
				clickUnaVez=true;
				dibujarExplicacionInfo(temporalEdifOTropa);
				
				
			}
			
			if((X>=600&&X<=664&&Y>=405&&Y<=469)){
				//console.log("caballeria");
				if(click==1){
					activoPorClickInfo=true;
					infoExplicacion=true;
				}else {
					temporalExplicacion=true;
				}
				temporalEdifOTropa=7;
				clickUnaVez=true;
				dibujarExplicacionInfo(temporalEdifOTropa);
				
				
			}
		}
		
		if(info==3){
		
		if((X>=410&&X<=474&&Y>=155&&Y<=219)){
			//console.log("lanceros");
			if(click==1){
				activoPorClickInfo=true;
				infoExplicacion=true;
				}else {
					temporalExplicacion=true;
				}
				temporalEdifOTropa=8;
				clickUnaVez=true;
				dibujarExplicacionInfo(temporalEdifOTropa);
			
			
		}
		
		if((X>=410&&X<=474&&Y>=280&&Y<=344)){
			//console.log("java");
			if(click==1){
				activoPorClickInfo=true;
				infoExplicacion=true;
				}else {
					temporalExplicacion=true;
				}
				temporalEdifOTropa=11;
				clickUnaVez=true;
				dibujarExplicacionInfo(temporalEdifOTropa);
			
			
		}
		
				
		if((X>=410&&X<=479&&Y>=405&&Y<=469)){
			//console.log("ligera");
			if(click==1){
				activoPorClickInfo=true;
				infoExplicacion=true;
				}else {
					temporalExplicacion=true;
				}
				temporalEdifOTropa=14;
				clickUnaVez=true;
				dibujarExplicacionInfo(temporalEdifOTropa);
			
			
		}
		
				
		if (Ciudades[id-1].edificioTropaInf==2) {
			
					
			if((X>=600&&X<=664&&Y>=155&&Y<=219)){
				//console.log("hacheros");
				if(click==1){
					activoPorClickInfo=true;
					infoExplicacion=true;
				}else {
					temporalExplicacion=true;
				}
				temporalEdifOTropa=9;
				clickUnaVez=true;
				dibujarExplicacionInfo(temporalEdifOTropa);
				
			}
			
			
		}
		
		if (Ciudades[id-1].edificioTropaInf==3) {
			
					
			if((X>=600&&X<=664&&Y>=155&&Y<=219)){
				//console.log("hacheros");
				if(click==1){
					activoPorClickInfo=true;
					infoExplicacion=true;
				}else {
					temporalExplicacion=true;
				}
				temporalEdifOTropa=9;
				clickUnaVez=true;
				dibujarExplicacionInfo(temporalEdifOTropa);
				
			}
			
			if((X>=790&&X<=854&&Y>=155&&Y<=219)){
				//console.log("Pesados");
				if(click==1){
					activoPorClickInfo=true;
					infoExplicacion=true;
				}else {
					temporalExplicacion=true;
				}
				temporalEdifOTropa=10;
				clickUnaVez=true;
				dibujarExplicacionInfo(temporalEdifOTropa);
				
			
			}
			
			
		}
		
		
		if(Ciudades[id-1].edificioTropaArq==2){
			if((X>=600&&X<=664&&Y>=280&&Y<=344)){
				//console.log("arq");
				if(click==1){
					activoPorClickInfo=true;
					infoExplicacion=true;
				}else {
					temporalExplicacion=true;
				}
				temporalEdifOTropa=12;
				clickUnaVez=true;
				dibujarExplicacionInfo(temporalEdifOTropa);
				
				
			}
		}
		if(Ciudades[id-1].edificioTropaArq==3){
			if((X>=600&&X<=664&&Y>=280&&Y<=344)){
				//console.log("arq");
				if(click==1){
					activoPorClickInfo=true;
					infoExplicacion=true;
				}else {
					temporalExplicacion=true;
				}
				temporalEdifOTropa=12;
				clickUnaVez=true;
				dibujarExplicacionInfo(temporalEdifOTropa);
				
				
			}
			
			if((X>=790&&X<=854&&Y>=280&&Y<=344)){
				//console.log("pesa");
				if(click==1){
					activoPorClickInfo=true;
					infoExplicacion=true;
				}else {
					temporalExplicacion=true;
				}
				temporalEdifOTropa=13;
				clickUnaVez=true;
				dibujarExplicacionInfo(temporalEdifOTropa);
				
				
			}
			
		}
		
		if(Ciudades[id-1].edificioTropaCab==2){
			if((X>=600&&X<=664&&Y>=405&&Y<=469)){
				//console.log("hacha");
				if(click==1){
					activoPorClickInfo=true;
					infoExplicacion=true;
				}else {
					temporalExplicacion=true;
				}
				temporalEdifOTropa=15;
				clickUnaVez=true;
				dibujarExplicacionInfo(temporalEdifOTropa);
				
				
			}
		}
		if(Ciudades[id-1].edificioTropaCab==3){
			if((X>=600&&X<=664&&Y>=405&&Y<=469)){
				//console.log("hacha");
				if(click==1){
					activoPorClickInfo=true;
					infoExplicacion=true;
				}else {
					temporalExplicacion=true;
				}
				temporalEdifOTropa=15;
				clickUnaVez=true;
				dibujarExplicacionInfo(temporalEdifOTropa);
				
				
			}
			
			if((X>=790&&X<=854&&Y>=405&&Y<=469)){
				//console.log("cabpesada");
				if(click==1){
					activoPorClickInfo=true;
					infoExplicacion=true;
				}else {
					temporalExplicacion=true;
				}
				temporalEdifOTropa=16;
				clickUnaVez=true;
				dibujarExplicacionInfo(temporalEdifOTropa);
				
				
			}
			
		}
		
		
		
		
		
		
		
		
		
		
		}
		
		if(clickUnaVez==false){
			activoPorClickInfo=false;
			$("#CerrarInfo").hide();
		}
		
		if(activoPorClickInfo==true){
			$("#CerrarInfo").show();
		}
	}
}


//nEdifOTrop para indetificar el edificio o tropa 
function dibujarExplicacionInfo(nEdifOTrop){
	
	contextoCiudad.drawImage(imgInCiudadPapiro2,0,300,300,500);//dibuja papiro en la ciudad
	contextoCiudad.beginPath();
	contextoCiudad.font="15pt Verdana";
	contextoCiudad.fillStyle = "black";
	switch (nEdifOTrop) {
			
			case 1:	contextoCiudad.fillText("Mercado",115,390);
					contextoCiudad.fill();
					contextoCiudad.font="10pt Verdana";
					contextoCiudad.fillText("Un mercado es un conjunto",50,450);
					contextoCiudad.fillText("de transacciones de procesos",50,480);
					contextoCiudad.fillText("o intercambio de bienes o",50,510);
					contextoCiudad.fillText("servicios entre individuos.",50,540);
					contextoCiudad.fillText("Este edificio genera dinero",50,570);
					contextoCiudad.fillText("50 monedas por cada nivel.",50,600);
					contextoCiudad.fillText("Cada 30 segundos.",50,630);
					contextoCiudad.fillText("Coste de mejora: 200 dinero,",50,660);
					contextoCiudad.fillText("200 madera, 200 ladrillo y 200",50,690);
					contextoCiudad.fillText("metal para nivel 2 y el doble",50,720);
					contextoCiudad.fillText("para nivel 3.",50,750);
			
			break;
			
			case 2:	contextoCiudad.fillText("Maderera",115,390);
					contextoCiudad.fill();
					contextoCiudad.font="10pt Verdana";
					contextoCiudad.fillText("La maderera se ocupa del",50,450);
					contextoCiudad.fillText("procesamiento de la madera,",50,480);
					contextoCiudad.fillText("desde su plantación hasta",50,510);
					contextoCiudad.fillText("su transformación en objetos.",50,540);
					contextoCiudad.fillText("Este edificio produce madera",50,570);
					contextoCiudad.fillText("50 madera por cada nivel.",50,600);
					contextoCiudad.fillText("Cada 30 segundos.",50,630);
					
					contextoCiudad.fillText("Coste de mejora: 200 dinero,",50,660);
					contextoCiudad.fillText("200 madera, 100 ladrillo y 100",50,690);
					contextoCiudad.fillText("metal para nivel 2 y el doble",50,720);
					contextoCiudad.fillText("para nivel 3.",50,750);
			
			break;
			
			case 3:	contextoCiudad.fillText("Ladrillera",115,390);
					contextoCiudad.fill();
					contextoCiudad.font="10pt Verdana";
					contextoCiudad.fillText("Un ladrillo es un material",50,450);
					contextoCiudad.fillText("de construcción, se emplea",50,480);
					contextoCiudad.fillText("en la albañilería para la",50,510);
					contextoCiudad.fillText("construcción en general.",50,540);
					contextoCiudad.fillText("Este edificio produce ladrillos",50,570);
					contextoCiudad.fillText("30 ladrillos por cada nivel.",50,600);
					contextoCiudad.fillText("Cada 30 segundos.",50,630);
					
					contextoCiudad.fillText("Coste de mejora: 200 dinero,",50,660);
					contextoCiudad.fillText("100 madera, 200 ladrillo y 100",50,690);
					contextoCiudad.fillText("metal para nivel 2 y el doble",50,720);
					contextoCiudad.fillText("para nivel 3.",50,750);
			
			break;
			
			case 4:	contextoCiudad.fillText("Mina Metal",115,390);
					contextoCiudad.fill();
					contextoCiudad.font="10pt Verdana";
					contextoCiudad.fillText("Se denominan metales a los",50,450);
					contextoCiudad.fillText("elementos caracterizados por",50,480);
					contextoCiudad.fillText("alta densidad y son sólidos",50,510);
					contextoCiudad.fillText("a temperatura ambiente.",50,540);
					contextoCiudad.fillText("Este edificio produce metal",50,570);
					contextoCiudad.fillText("25 metal por cada nivel.",50,600);
					contextoCiudad.fillText("Cada 30 segundos.",50,630);
					
					contextoCiudad.fillText("Coste de mejora: 200 dinero,",50,660);
					contextoCiudad.fillText("100 madera, 100 ladrillo y 200",50,690);
					contextoCiudad.fillText("metal para nivel 2 y el doble",50,720);
					contextoCiudad.fillText("para nivel 3.",50,750);
			 

			break;
			
			case 5:	contextoCiudad.fillText("Barracas",115,390);
					contextoCiudad.fill();
					contextoCiudad.font="10pt Verdana";
					contextoCiudad.fillText("Barracas es el edificio destinado",50,450);
					contextoCiudad.fillText("a dar residencia a los soldados.",50,480);
					contextoCiudad.fillText("También hace referencia a la",50,510);
					contextoCiudad.fillText("guarnición de tropas en la ciudad.",50,540);
					contextoCiudad.fillText("Este edificio recluta soldados",50,570);
					contextoCiudad.fillText("20 de infanteria por cada nivel.",50,600);
					contextoCiudad.fillText("Cada 50 segundos.",50,630);
					
					contextoCiudad.fillText("Coste de mejora: 200 dinero,",50,660);
					contextoCiudad.fillText("200 madera, 200 ladrillo y 100",50,690);
					contextoCiudad.fillText("metal para nivel 2 y el doble",50,720);
					contextoCiudad.fillText("para nivel 3.",50,750);
			

			break;
			
			case 6:	contextoCiudad.fillText("Arqueria",115,390);
					contextoCiudad.fill();
					contextoCiudad.font="10pt Verdana";
					contextoCiudad.fillText("Históricamente se ha practicado",50,450);
					contextoCiudad.fillText("el tiro con arco y lanzamineto",50,480);
					contextoCiudad.fillText("de jabalina para la caza",50,510);
					contextoCiudad.fillText("o para su uso en la guerra.",50,540);
					contextoCiudad.fillText("Este edificio recluta soldados",50,570);
					contextoCiudad.fillText("20 de arqueria por cada nivel.",50,600);
					contextoCiudad.fillText("Cada 75 segundos.",50,630);
					
					contextoCiudad.fillText("Coste de mejora: 200 dinero,",50,660);
					contextoCiudad.fillText("200 madera, 100 ladrillo y 200",50,690);
					contextoCiudad.fillText("metal para nivel 2 y el doble",50,720);
					contextoCiudad.fillText("para nivel 3.",50,750);
			

			break;
			
			case 7:	contextoCiudad.fillText("Establos",115,390);
					contextoCiudad.fill();
					contextoCiudad.font="10pt Verdana";
					contextoCiudad.fillText("El establo es un recinto",50,450);
					contextoCiudad.fillText("cerrado donde se guardan",50,480);
					contextoCiudad.fillText("caballos y se utiliza tanto",50,510);
					contextoCiudad.fillText("para alimentarlos y como asearlos.",50,540);
					contextoCiudad.fillText("Este edificio recluta soldados",50,570);
					contextoCiudad.fillText("20 de caballeria por cada nivel.",50,600);
					contextoCiudad.fillText("Cada 100 segundos.",50,630);
					
					contextoCiudad.fillText("Coste de mejora: 200 dinero,",50,660);
					contextoCiudad.fillText("100 madera, 200 ladrillo y 200",50,690);
					contextoCiudad.fillText("metal para nivel 2 y el doble",50,720);
					contextoCiudad.fillText("para nivel 3.",50,750);
			 
			break;
			
			case 8:	contextoCiudad.fillText("Lanceros",115,390);
					contextoCiudad.fill();
					contextoCiudad.font="10pt Verdana";
					contextoCiudad.fillText("Unidad de infanteria básica",50,450);
					contextoCiudad.fillText("que utiliza lanzas para",50,480);
					contextoCiudad.fillText("pelear, y es mejor en general",50,510);
					contextoCiudad.fillText("contra la caballeria enemiga.",50,540);
					contextoCiudad.fillText("Esta es una tropa de infanteria",50,570);
					contextoCiudad.fillText("del primer nivel y se puede",50,600);
					contextoCiudad.fillText("reclutar cada 50 segundos.",50,630);
					
					contextoCiudad.fillText("Coste de mejora: 100 dinero,",50,660);
					contextoCiudad.fillText("20 madera, 20 ladrillo y 10",50,690);
					contextoCiudad.fillText("metal por cada 20 soldados",50,720);
					contextoCiudad.fillText("que se recluten.",50,750);
			
			break;
			
			case 9:	contextoCiudad.fillText("Hacheros",115,390);
					contextoCiudad.fill();
					contextoCiudad.font="10pt Verdana";
					contextoCiudad.fillText("Unidad de infanteria media",50,450);
					contextoCiudad.fillText("que utiliza hachas para",50,480);
					contextoCiudad.fillText("pelear, y es mejor en general",50,510);
					contextoCiudad.fillText("contra la infanteria enemiga.",50,540);
					contextoCiudad.fillText("Esta es una tropa de infanteria",50,570);
					contextoCiudad.fillText("del segundo nivel y se puede",50,600);
					contextoCiudad.fillText("reclutar cada 50 segundos.",50,630);
					
					contextoCiudad.fillText("Coste de mejora: 200 dinero,",50,660);
					contextoCiudad.fillText("40 madera, 40 ladrillo y 20",50,690);
					contextoCiudad.fillText("metal por cada 20 soldados",50,720);
					contextoCiudad.fillText("que se recluten.",50,750);
			
			break;
			
			case 10: contextoCiudad.fillText("Lan.Pesados",115,390);
					contextoCiudad.fill();
					contextoCiudad.font="10pt Verdana";
					contextoCiudad.fillText("Unidad de infanteria avanzada",50,450);
					contextoCiudad.fillText("que utiliza lanzas para",50,480);
					contextoCiudad.fillText("pelear, y es mejor en general",50,510);
					contextoCiudad.fillText("contra la caballeria enemiga.",50,540);
					contextoCiudad.fillText("Esta es una tropa de infanteria",50,570);
					contextoCiudad.fillText("del tercer nivel y se puede",50,600);
					contextoCiudad.fillText("reclutar cada 50 segundos.",50,630);
					
					contextoCiudad.fillText("Coste de mejora: 300 dinero,",50,660);
					contextoCiudad.fillText("60 madera, 60 ladrillo y 30",50,690);
					contextoCiudad.fillText("metal por cada 20 soldados",50,720);
					contextoCiudad.fillText("que se recluten.",50,750);
			
			break;
			
			case 11: contextoCiudad.fillText("Jabalineros",115,390);
					contextoCiudad.fill();
					contextoCiudad.font="10pt Verdana";
					contextoCiudad.fillText("Unidad de arqueria básica",50,450);
					contextoCiudad.fillText("que utiliza jabalinas para",50,480);
					contextoCiudad.fillText("pelear, y es mejor en general",50,510);
					contextoCiudad.fillText("contra las tropas básicas enemigas.",50,540);
					contextoCiudad.fillText("Esta es una tropa de arqueria",50,570);
					contextoCiudad.fillText("del primer nivel y se puede",50,600);
					contextoCiudad.fillText("reclutar cada 75 segundos.",50,630);
					
					contextoCiudad.fillText("Coste de mejora: 120 dinero,",50,660);
					contextoCiudad.fillText("20 madera, 10 ladrillo y 20",50,690);
					contextoCiudad.fillText("metal por cada 20 soldados",50,720);
					contextoCiudad.fillText("que se recluten.",50,750);
			
			break;
			
			case 12: contextoCiudad.fillText("Arqueros",115,390);
					contextoCiudad.fill();
					contextoCiudad.font="10pt Verdana";
					contextoCiudad.fillText("Unidad de arqueria media",50,450);
					contextoCiudad.fillText("que utiliza arcos y flechas para",50,480);
					contextoCiudad.fillText("pelear, y es mejor en general",50,510);
					contextoCiudad.fillText("contra las tropas básicas enemigas.",50,540);
					contextoCiudad.fillText("Esta es una tropa de arqueria",50,570);
					contextoCiudad.fillText("del segundo nivel y se puede",50,600);
					contextoCiudad.fillText("reclutar cada 75 segundos.",50,630);
					
					contextoCiudad.fillText("Coste de mejora: 240 dinero,",50,660);
					contextoCiudad.fillText("40 madera, 20 ladrillo y 40",50,690);
					contextoCiudad.fillText("metal por cada 20 soldados",50,720);
					contextoCiudad.fillText("que se recluten.",50,750);
			
			break;
			
			case 13: contextoCiudad.fillText("Arq.Pesados",115,390);
					contextoCiudad.fill();
					contextoCiudad.font="10pt Verdana";
					contextoCiudad.fillText("Unidad de arqueria avanzada",50,450);
					contextoCiudad.fillText("que utiliza arcos y flechas para",50,480);
					contextoCiudad.fillText("pelear, y es mejor en general",50,510);
					contextoCiudad.fillText("contra tropas medias enemigas.",50,540);
					contextoCiudad.fillText("Esta es una tropa de arqueria",50,570);
					contextoCiudad.fillText("del tercer nivel y se puede",50,600);
					contextoCiudad.fillText("reclutar cada 75 segundos",50,630);
					
					contextoCiudad.fillText("Coste de mejora: 360 dinero,",50,660);
					contextoCiudad.fillText("60 madera, 30 ladrillo y 60",50,690);
					contextoCiudad.fillText("metal por cada 20 soldados",50,720);
					contextoCiudad.fillText("que se recluten.",50,750);
			
			break;
			
			case 14: contextoCiudad.fillText("Cab.Ligera",115,390);
					contextoCiudad.fill();
					contextoCiudad.font="10pt Verdana";
					contextoCiudad.fillText("Unidad de caballeria básica",50,450);
					contextoCiudad.fillText("que utiliza lanzas para",50,480);
					contextoCiudad.fillText("pelear, y es mejor en general",50,510);
					contextoCiudad.fillText("contra la arqueria enemiga.",50,540);
					contextoCiudad.fillText("Esta es una tropa de caballeria",50,570);
					contextoCiudad.fillText("del primer nivel y se puede",50,600);
					contextoCiudad.fillText("reclutar cada 100 segundos",50,630);
					
					contextoCiudad.fillText("Coste de mejora: 140 dinero,",50,660);
					contextoCiudad.fillText("10 madera, 20 ladrillo y 20",50,690);
					contextoCiudad.fillText("metal por cada 20 soldados",50,720);
					contextoCiudad.fillText("que se recluten.",50,750);
			
			break;
			
			case 15: contextoCiudad.fillText("Cab.Hacha",115,390);
					contextoCiudad.fill();
					contextoCiudad.font="10pt Verdana";
					contextoCiudad.fillText("Unidad de caballeria media",50,450);
					contextoCiudad.fillText("que utiliza hachas para",50,480);
					contextoCiudad.fillText("pelear, y es mejor en general",50,510);
					contextoCiudad.fillText("contra la infanteria enemiga.",50,540);
					contextoCiudad.fillText("Esta es una tropa de caballeria",50,570);
					contextoCiudad.fillText("del segundo nivel y se puede",50,600);
					contextoCiudad.fillText("reclutar cada 100 segundos",50,630);
					
					contextoCiudad.fillText("Coste de mejora: 280 dinero,",50,660);
					contextoCiudad.fillText("20 madera, 40 ladrillo y 40",50,690);
					contextoCiudad.fillText("metal por cada 20 soldados",50,720);
					contextoCiudad.fillText("que se recluten.",50,750);
			
			break;
			
			case 16: contextoCiudad.fillText("Cab.Pesada",115,390);
					contextoCiudad.fill();
					contextoCiudad.font="10pt Verdana";
					contextoCiudad.fillText("Unidad de caballeria avanzada",50,450);
					contextoCiudad.fillText("que utiliza lanzas para",50,480);
					contextoCiudad.fillText("pelear, y es mejor en general",50,510);
					contextoCiudad.fillText("contra la arqueria enemiga.",50,540);
					contextoCiudad.fillText("Esta es una tropa de caballeria",50,570);
					contextoCiudad.fillText("del tercer nivel y se puede",50,600);
					contextoCiudad.fillText("reclutar cada 100 segundos",50,630);
					
					contextoCiudad.fillText("Coste de mejora: 420 dinero,",50,660);
					contextoCiudad.fillText("40 madera, 80 ladrillo y 80",50,690);
					contextoCiudad.fillText("metal por cada 20 soldados",50,720);
					contextoCiudad.fillText("que se recluten.",50,750);
			
			break;
			
			
			default: break;
		}
	
	contextoCiudad.fill();
	contextoCiudad.closePath();
}


//MOSTRAR EL INVENTARIO DE TROPAS EN EL MAPA
function mostrarInventarioEjercito(){
	contextoJ1.drawImage(imgInCiudadPapiro,250,25,825,750);//dibuja papiro en la MAPA
	contextoJ1.beginPath();
	contextoJ1.font="20pt Verdana";
	contextoJ1.fillStyle = "black";
	contextoJ1.fillText("EJERCITO",575,110);
	contextoJ1.fill();
	
	contextoJ1.drawImage(imgTInf1,410,155,64,64);//dibuja tropa en papiro en la MAPA
	contextoJ1.fillText(""+tropasInf1,490,200);
	contextoJ1.fillText("Lanceros",390,245);	
	contextoJ1.drawImage(imgTInf2,600,155,64,64);//dibuja tropa en papiro en la MAPA
	contextoJ1.fillText(""+tropasInf2,680,200);
	contextoJ1.fillText("Hacheros",580,245);
	contextoJ1.drawImage(imgTInf3,790,155,64,64);//dibuja tropa en papiro en la MAPA
	contextoJ1.fillText(""+tropasInf3,870,200);
	contextoJ1.fillText("Lan.Pesados",770,245);
	
	contextoJ1.drawImage(imgTArq1,410,280,64,64);//dibuja tropa en papiro en la MAPA
	contextoJ1.fillText(""+tropasArq1,490,325);
	contextoJ1.fillText("Jabalineros",390,370);
	contextoJ1.drawImage(imgTArq2,600,280,64,64);//dibuja tropa en papiro en la MAPA
	contextoJ1.fillText(""+tropasArq2,680,325);
	contextoJ1.fillText("Arqueros",580,370);
	contextoJ1.drawImage(imgTArq3,790,280,64,64);//dibuja tropa en papiro en la MAPA
	contextoJ1.fillText(""+tropasArq3,870,325);
	contextoJ1.fillText("Arq.Pesados",770,370);
	
	contextoJ1.drawImage(imgTCab1,410,405,64,64);//dibuja tropa en papiro en la MAPA
	contextoJ1.fillText(""+tropasCab1,490,450);
	contextoJ1.fillText("Cab.Ligera",390,495);	
	contextoJ1.drawImage(imgTCab2,600,405,64,64);//dibuja tropa en papiro en la MAPA
	contextoJ1.fillText(""+tropasCab2,680,450);
	contextoJ1.fillText("Cab.Hacha",580,495);

	contextoJ1.drawImage(imgTCab3,790,405,64,64);//dibuja tropa en papiro en la MAPA
	contextoJ1.fillText(""+tropasCab3,870,450);
	contextoJ1.fillText("Cab.Pesada",770,495);
	
	contextoJ1.closePath();
	
	
}



//mostrar estandarte al iniciar juego
function dibujarEstandarteEnSeleccionNivel(){
	//console.log("hola");
	//contexto1.drawImage(imgCiudad,100, 325, 128,128);//dibuja estandarte en seleccion personaje
	switch (Nivel) {
		case 1:	contexto1.drawImage(imgCiudad,132, 250, 128,128);break;
		case 2:	contexto1.drawImage(imgCiudad,132, 250, 128,128);contexto1.drawImage(imgCiudad,300, 250, 128,128);break;
		case 3:	contexto1.drawImage(imgCiudad,132, 250, 128,128);contexto1.drawImage(imgCiudad,300, 250, 128,128);contexto1.drawImage(imgCiudad,450, 250, 128,128);break;
		
		default: break;
	}
	
}






/////////////////////////////////// FUNCIONES TUTORIAL////////////////////////


function TutorialTutorial(){
	switch (contadorPasos) {
			case 0:	dibujaMapaTutorial();break;
			case 1:	explicacionTutorial1();break;
			case 2:	explicacionTutorial2();break;
			case 3:	explicacionTutorial3();break;
			case 4:	explicacionTutorial4();break;
			case 5: explicacionTutorial5();break;
			case 6:	explicacionTutorial6();break;
			case 7:	explicacionTutorial7();break;
			case 8:	explicacionTutorial8();break;
			case 9:	explicacionTutorial9();break;
			case 10: explicacionTutorial10();break;
			case 11: explicacionTutorial11();break;
			case 12: explicacionTutorial12();break;
			case 13: explicacionTutorial13();break;
			
			default: break;
		}
	
}

function dibujaMapaTutorial(){
	contextoTutorial.drawImage(mapa,0,0,512,512);//dibuja el mapa
	
	contextoTutorial.drawImage(imgInCiudadPapiro,500,0,512,512);//dibuja papiro en la ciudad
	
	contextoTutorial.beginPath();
	contextoTutorial.font="17pt Verdana";
	contextoTutorial.fillStyle = "black";
	contextoTutorial.fillText("TUTORIAL",690,60);
	contextoTutorial.font="15pt Verdana";
	//contextoTutorial.fillText("Gran Faraon has sido derrotado mu",575,100);
	contextoTutorial.fillText("Bienvenido al tutorial de Mini War",575,100);
	contextoTutorial.fillText("Simulation, aqui encontraras las",575,130);
	contextoTutorial.fillText("bases para jugar y disfrutar de ",575,160);
	contextoTutorial.fillText("este titulo, ademas aprenderas",575,190);
	contextoTutorial.fillText("las funciones principales del juego",575,220);
	contextoTutorial.fillText("como lo son la construcción, el ",575,250);
	contextoTutorial.fillText("reclutamiento de tropas, que veras",575,280);
	contextoTutorial.fillText("en el mapa, y el atacar, y el como",575,310);
	contextoTutorial.fillText("pelear en batalla, si estas listo",575,340);
	contextoTutorial.fillText("haz click en el boton de siguiente",575,370);
	contextoTutorial.fillText("ubicado en la parte inferior del",575,400);
	contextoTutorial.fillText("papiro.",575,420);
	//contextoTutorial.fillText("click en el boton salir tutorial.",575,460);
	contextoTutorial.fill();
	contextoTutorial.closePath();
	
	
	//console.log("hola");
	
		
}

function explicacionTutorial1(){
	
	contextoTutorial.drawImage(mapa,0,0,512,512);//dibuja el mapa
	
	contextoTutorial.drawImage(imgInCiudadPapiro,500,0,512,512);//dibuja papiro en la ciudad
	
	contextoTutorial.beginPath();
	contextoTutorial.font="17pt Verdana";
	contextoTutorial.fillStyle = "black";
	contextoTutorial.fillText("TUTORIAL",690,60);
	contextoTutorial.font="15pt Verdana";
	
	contextoTutorial.fillText("Puedes salir de este tutorial en",575,100);
	contextoTutorial.fillText("cualquier instante al dar click en",575,130);
	contextoTutorial.fillText("el boton salir tutorial ubicado en",575,160);
	contextoTutorial.fillText("la parte inferior izquierda del mapa.",575,190);
	contextoTutorial.fillText("El mapa que vemos es una versión ",575,220);
	contextoTutorial.fillText("pequeña del mapa original, que ",575,250);
	contextoTutorial.fillText("veremos en el juego, ahí se ",575,280);
	contextoTutorial.fillText("ubicaran las distintas ciudades con",575,310);
	contextoTutorial.fillText("las que podremos interactuar.",575,340);
	//contextoTutorial.fillText("haz click en el boton de siguiente",575,370);
	//contextoTutorial.fillText("ubicado en la parte inferior del",575,400);
	//contextoTutorial.fillText("papiro.",575,420);

	contextoTutorial.fill();
	contextoTutorial.closePath();
	
	
	
	
}

function explicacionTutorial2(){
	
	contextoTutorial.drawImage(mapa,0,0,512,512);//dibuja el mapa
	
	contextoTutorial.drawImage(imgInCiudadPapiro,500,0,512,512);//dibuja papiro en la ciudad
	
	
	
	contextoTutorial.beginPath();
	contextoTutorial.fillStyle = "blue";
	contextoTutorial.fillRect(220, 400, 64,64);// para contorno 
	contextoTutorial.drawImage(imgCiudad,220, 400, 64,64);//dibuja ciudad en el mapa
	contextoTutorial.font="15pt Verdana";
	contextoTutorial.fillStyle = "black";
	contextoTutorial.fillText("Ramses",210,485);
	
	
	
	contextoTutorial.font="17pt Verdana";
	
	contextoTutorial.fillText("TUTORIAL",690,60);
	contextoTutorial.font="15pt Verdana";
	
	
	contextoTutorial.fillText("En el mapa aparecio una ciudad,",575,100);
	contextoTutorial.fillText("esta ciudad es de tu propiedad, por",575,130);
	contextoTutorial.fillText("eso se ve en un fondo azul, las ",575,160);
	contextoTutorial.fillText("ciudades enemigas apareceran en ",575,190);
	contextoTutorial.fillText("un fondo de color rojo.",575,220);
	contextoTutorial.fillText("El estandarte de las ciudades de",575,250);
	contextoTutorial.fillText("tu propiedad sera siempre el mismo,",575,280);
	contextoTutorial.fillText("y es el que ves en esta imagen, las",575,310);
	contextoTutorial.fillText("ciudades enemigas tienen distintos",575,340);
	contextoTutorial.fillText("estandartes, el nombre de la ciudad",575,370);
	contextoTutorial.fillText("aparece debajo de ella.",575,400);
	
	
	
	contextoTutorial.fill();
	contextoTutorial.closePath();
	
	
	
	
	
	
}



function explicacionTutorial3(){
	
	contextoTutorial.drawImage(mapa,0,0,512,512);//dibuja el mapa
	contextoTutorial2.drawImage(mapa,0,0,512,512);//dibuja el mapa
	contextoTutorial.drawImage(imgInCiudadPapiro,500,0,512,512);//dibuja papiro en la ciudad
	
	
	var imgData2=contextoTutorial2.getImageData(0,0,512,170);
    var data2=imgData2.data;
	
	
    for(let i = 0; i < data2.length; i += 4) {
		
      var grayscale= 0.33*data2[i]+0.5*data2[i+1]+0.15*data2[i+2];
      data2[i]=grayscale;
      data2[i+1]=grayscale;
      data2[i+2]=grayscale;
    }
 
    // Asignamos la imagen al Canvas
	contextoTutorial.clearRect(0,0,512,170);
    contextoTutorial.putImageData(imgData2,0,0);
	
	
	
	contextoTutorial.beginPath();
	contextoTutorial.fillStyle = "blue";
	contextoTutorial.fillRect(220, 400, 64,64);// para contorno 
	contextoTutorial.drawImage(imgCiudad,220, 400, 64,64);//dibuja ciudad en el mapa
	contextoTutorial.font="15pt Verdana";
	contextoTutorial.fillStyle = "black";
	contextoTutorial.fillText("Ramses",210,485);
	
	contextoTutorial.fillStyle = "red";
	contextoTutorial.fillRect(100, 250, 64,64);// para contorno 
	contextoTutorial.drawImage(imgCiudad2,100, 250, 62,62);//dibuja ciudad en el mapa
	contextoTutorial.font="15pt Verdana";
	contextoTutorial.fillStyle = "black";
	contextoTutorial.fillText("Vincent",90,335);
	contextoTutorial.fillStyle = "red";
	contextoTutorial.fillRect(200, 100, 64,64);// para contorno 
	contextoTutorial.drawImage(imgCiudad2,200, 100, 62,62);//dibuja ciudad en el mapa
	
	contextoTutorial.font="17pt Verdana";
	contextoTutorial.fillStyle = "black";
	contextoTutorial.fillText("TUTORIAL",690,60);
	contextoTutorial.font="15pt Verdana";
	
	
	contextoTutorial.fillText("Han aparecido ciudades enemigas,",575,100);
	contextoTutorial.fillText("en el mapa y este se ha tornado ",575,130);
	contextoTutorial.fillText("gris en una parte, esto se debe ",575,160);
	contextoTutorial.fillText("a que solo se puede ver el nombre",575,190);
	contextoTutorial.fillText("e interactuar para atacar con la",575,220);
	contextoTutorial.fillText("ciudad enemiga mas cercana y",575,250);
	contextoTutorial.fillText("ademas el mapa estara en tono de",575,280);
	contextoTutorial.fillText("grises en donde esten ubicadas ",575,310);
	contextoTutorial.fillText("las ciudades enemigas mas alejadas",575,340);
	contextoTutorial.fillText("de nuestra ultima ciudad.",575,370);
	//contextoTutorial.fillText("aparece debajo de ella.",575,400);
	
	
	
	
		
	contextoTutorial.fill();
	contextoTutorial.closePath();
	
	
	
}


function explicacionTutorial4(){
	
	contextoTutorial.drawImage(mapa,0,0,512,512);//dibuja el mapa
	contextoTutorial2.drawImage(mapa,0,0,512,512);//dibuja el mapa
	contextoTutorial.drawImage(imgInCiudadPapiro,500,0,512,512);//dibuja papiro en la ciudad
	
	//console.log(contadorPasos);
	var imgData2=contextoTutorial2.getImageData(0,0,512,170);
    var data2=imgData2.data;
	
	
    for(let i = 0; i < data2.length; i += 4) {
		
      var grayscale= 0.33*data2[i]+0.5*data2[i+1]+0.15*data2[i+2];
      data2[i]=grayscale;
      data2[i+1]=grayscale;
      data2[i+2]=grayscale;
    }
 
    // Asignamos la imagen al Canvas
	contextoTutorial.clearRect(0,0,512,170);
    contextoTutorial.putImageData(imgData2,0,0);
	
	
	
	contextoTutorial.beginPath();
	contextoTutorial.fillStyle = "blue";
	contextoTutorial.fillRect(220, 400, 64,64);// para contorno 
	contextoTutorial.drawImage(imgCiudad,220, 400, 64,64);//dibuja ciudad en el mapa
	contextoTutorial.font="15pt Verdana";
	contextoTutorial.fillStyle = "black";
	contextoTutorial.fillText("Ramses",210,485);
	
	contextoTutorial.fillStyle = "red";
	contextoTutorial.fillRect(100, 250, 64,64);// para contorno 
	contextoTutorial.drawImage(imgCiudad2,100, 250, 62,62);//dibuja ciudad en el mapa
	contextoTutorial.font="15pt Verdana";
	contextoTutorial.fillStyle = "black";
	contextoTutorial.fillText("Vincent",90,335);
	contextoTutorial.fillStyle = "red";
	contextoTutorial.fillRect(200, 100, 64,64);// para contorno 
	contextoTutorial.drawImage(imgCiudad2,200, 100, 62,62);//dibuja ciudad en el mapa
	
	contextoTutorial.font="17pt Verdana";
	contextoTutorial.fillStyle = "black";
	contextoTutorial.fillText("TUTORIAL",690,60);
	contextoTutorial.font="15pt Verdana";
	
	
	contextoTutorial.fillText("Haz click sobre tu ciudad, la",575,100);
	contextoTutorial.fillText("ciudad Ramses para entrar en ",575,130);
	contextoTutorial.fillText("la interfaz que te permitira",575,160);
	contextoTutorial.fillText("ver la informacion, construir",575,190);
	contextoTutorial.fillText("y reclutar tropas.",575,220);
	//contextoTutorial.fillText("ciudad enemiga mas cercana y",575,250);
	//contextoTutorial.fillText("ademas el mapa estara en tono de",575,280);
	//contextoTutorial.fillText("grises en donde esten ubicadas ",575,310);
	//contextoTutorial.fillText("las ciudades enemigas mas alejadas",575,340);
	//contextoTutorial.fillText("de nuestra ultima ciudad.",575,370);
	//contextoTutorial.fillText("aparece debajo de ella.",575,400);
	
	
	
	
		
	contextoTutorial.fill();
	contextoTutorial.closePath();
	$("#SiguienteTutorial").hide();
	
	
	
	
	
	
	
}

function explicacionTutorial5(){
	
	contextoTutorial.drawImage(imgInCiudad1,0,0,512,512);//dibuja el mapa
	//contextoTutorial2.drawImage(mapa,0,0,512,512);//dibuja el mapa
	contextoTutorial.drawImage(imgInCiudadPapiro,500,0,512,512);//dibuja papiro en la ciudad
	
	contextoTutorial.beginPath();
	
	contextoTutorial.font="17pt Verdana";
	contextoTutorial.fillStyle = "black";
	contextoTutorial.fillText("RAMSES",200,60)
	contextoTutorial.fillText("TUTORIAL",690,60);
	contextoTutorial.font="15pt Verdana";
	
	
	contextoTutorial.fillText("Esta es la interfaz de ciudad",575,100);
	contextoTutorial.fillText("en ella veras el nombre de la",575,130);
	contextoTutorial.fillText("ciudad, ademas de tres botones,",575,160);
	contextoTutorial.fillText("uno para ver informacion, otro",575,190);
	contextoTutorial.fillText("para poder mejorar los edificios,",575,220);
	contextoTutorial.fillText("y otro para reclutar tropas.",575,250);
	contextoTutorial.fillText("Cada boton conduce a una ventana",575,280);
	contextoTutorial.fillText("distinta, en Informacion puede.",575,310);
	contextoTutorial.fillText("observar los edificios de la",575,340);
	contextoTutorial.fillText("ciudad, su nivel y su producción.",575,370);
	//contextoTutorial.fillText("aparece debajo de ella.",575,400);
	
	
	
	
		
	contextoTutorial.fill();
	contextoTutorial.closePath();
	
	
	if(infTutorial==true){
		contextoTutorial.drawImage(imgInCiudadPapiro,125,75,400,400);//dibuja papiro en la ciudad
		
		contextoTutorial.beginPath();
		contextoTutorial.font="10pt Verdana";
		contextoTutorial.fillStyle = "black";
		contextoTutorial.fillText("EDIFICIO",200,115);
		contextoTutorial.fillText("NIVEL",300,115);
		contextoTutorial.fillText("PRODUCCIÓN",375,115);
		contextoTutorial.fill();
		//contextoCiudad.closePath();
		
		contextoTutorial.font="8pt Verdana";
		contextoTutorial.drawImage(imgEdifDin,210,150,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("Mercado",250,170);
		contextoTutorial.drawImage(imgEdifMad,210,185,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("Maderera",250,205);
		contextoTutorial.drawImage(imgEdifLad,210,220,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("Ladrillera",250,240);
		contextoTutorial.drawImage(imgEdifMet,210,255,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("Mina Metal",250,275);
		contextoTutorial.drawImage(imgEdifTInf,210,290,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("Barracas",250,310);
		contextoTutorial.drawImage(imgEdifTArq,210,325,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("Arqueria",250,345);
		contextoTutorial.drawImage(imgEdifTCab,210,360,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("Establos",250,380);
		
		contextoTutorial.fill();
		
		//contextoCiudad.beginPath();
		contextoTutorial.font="10pt Verdana";
		contextoTutorial.fillStyle = "black";
		
		contextoTutorial.fillText("1",315,170);
		contextoTutorial.fillText("1",315,205);
		contextoTutorial.fillText("1",315,240);
		contextoTutorial.fillText("1",315,275);
		contextoTutorial.fillText("1",315,310);
		contextoTutorial.fillText("1",315,345);
		contextoTutorial.fillText("1",315,380);
		contextoTutorial.fillText("50",405,170);
		contextoTutorial.fillText("50",405,205);
		contextoTutorial.fillText("30",405,240);
		contextoTutorial.fillText("25",405,275);
		contextoTutorial.fillText("20",405,310);
		contextoTutorial.fillText("20",405,345);
		contextoTutorial.fillText("20",405,380);
		contextoTutorial.fill();
		contextoTutorial.closePath();
		
	}
	
	if(constTutorial==true){
		
		contextoTutorial.drawImage(imgInCiudadPapiro,125,75,400,400);//dibuja papiro en la ciudad
		
		contextoTutorial.beginPath();
		contextoTutorial.font="10pt Verdana";
		contextoTutorial.fillStyle = "black";
		contextoTutorial.fillText("Construcción",285,115);
		contextoTutorial.fill();
		
		
		contextoTutorial.drawImage(imgEdifDin,210,150,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("1",250,170);
		contextoTutorial.fillText("Mercado",200,190);
		
		contextoTutorial.drawImage(imgEdifMad,310,150,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("1",350,170);
		contextoTutorial.fillText("Maderera",300,190);
		
		contextoTutorial.drawImage(imgEdifLad,410,150,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("1",450,170);
		contextoTutorial.fillText("Ladrillera",400,190);
		
		contextoTutorial.drawImage(imgEdifMet,210,200,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("1",250,220);
		contextoTutorial.fillText("Mina Metal",200,240);
		
		contextoTutorial.drawImage(imgEdifTInf,310,200,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("1",350,220);
		contextoTutorial.fillText("Barracas",300,240);
		
		contextoTutorial.drawImage(imgEdifTArq,410,200,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("1",450,220);
		contextoTutorial.fillText("Arqueria",400,240);
		
		contextoTutorial.drawImage(imgEdifTCab,310,250,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("1",350,270);
		contextoTutorial.fillText("Establos",300,290);
		
		contextoTutorial.fillRect(210, 320, 250,5);// para separar
		contextoTutorial.fillText("Cola de Construcción",250,340);
		contextoTutorial.fill();
		contextoTutorial.closePath();
		
	}
	
	if(recTutorial==true){
		
		contextoTutorial.drawImage(imgInCiudadPapiro,125,75,400,400);//dibuja papiro en la ciudad
		
		
		contextoTutorial.beginPath();
		contextoTutorial.font="10pt Verdana";
		contextoTutorial.fillStyle = "black";
		contextoTutorial.fillText("Reclutamiento",285,115);
		contextoTutorial.fill();
		
		contextoTutorial.font="8pt Verdana";
		contextoTutorial.drawImage(imgTInf1,210,150,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("10",250,170);
		contextoTutorial.fillText("Lanceros",200,190);
		
		contextoTutorial.drawImage(imgTInf2,310,150,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("10",350,170);
		contextoTutorial.fillText("Hacheros",300,190);
		
		contextoTutorial.drawImage(imgTInf3,410,150,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("10",450,170);
		contextoTutorial.fillText("Lan.Pesados",400,190);
		
		contextoTutorial.drawImage(imgTArq1,210,200,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("10",250,220);
		contextoTutorial.fillText("Jabalineros",200,240);
		
		contextoTutorial.drawImage(imgTArq2,310,200,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("10",350,220);
		contextoTutorial.fillText("Arqueros",300,240);
		
		contextoTutorial.drawImage(imgTArq3,410,200,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("10",450,220);
		contextoTutorial.fillText("Arq.Pesados",400,240);
		
		contextoTutorial.drawImage(imgTCab1,210,250,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("10",250,270);
		contextoTutorial.fillText("Cab.Ligera",200,290);
		
		contextoTutorial.drawImage(imgTCab2,310,250,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("10",350,270);
		contextoTutorial.fillText("Cab.Hacha",300,290);
		
		contextoTutorial.drawImage(imgTCab3,410,250,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("10",450,270);
		contextoTutorial.fillText("Cab.Pesada",400,290);
		
		contextoTutorial.fillRect(210, 320, 250,5);// para separar
		contextoTutorial.fillText("Cola de Reclutamiento",250,340);
		contextoTutorial.fill();
		contextoTutorial.closePath();
		
		
		
	}
	
}


function explicacionTutorial6(){
	
	if(construirTutorial==false){
		$("#SiguienteTutorial").hide();
	}else{
		$("#SiguienteTutorial").show();
	}
	
	
	contextoTutorial.drawImage(imgInCiudad1,0,0,512,512);//dibuja el mapa
	//contextoTutorial2.drawImage(mapa,0,0,512,512);//dibuja el mapa
	contextoTutorial.drawImage(imgInCiudadPapiro,500,0,512,512);//dibuja papiro en la ciudad
	
	contextoTutorial.beginPath();
	
	contextoTutorial.font="17pt Verdana";
	contextoTutorial.fillStyle = "black";
	contextoTutorial.fillText("RAMSES",200,60)
	contextoTutorial.fillText("TUTORIAL",690,60);
	contextoTutorial.font="15pt Verdana";
	
	
	contextoTutorial.fillText("En la ventana de construcción",575,100);
	contextoTutorial.fillText("podras mejorar el nivel de un",575,130);
	contextoTutorial.fillText("edificio, haz doble click para",575,160);
	contextoTutorial.fillText("efectuar la acción de construir",575,190);
	contextoTutorial.fillText("cuando esto sucede aparecera el",575,220);
	contextoTutorial.fillText("edificio a mejorar en la cola",575,250);
	contextoTutorial.fillText("construccion y el tiempo para",575,280);
	contextoTutorial.fillText("terminar la mejora del edificio,",575,310);
	contextoTutorial.fillText("para cancelar la cosntruccion",575,340);
	contextoTutorial.fillText("esta el boton cancelar o con un",575,370);
	contextoTutorial.fillText("click sobre la imagen en la cola.",575,400);
	
	
	
	
		
	contextoTutorial.fill();
	contextoTutorial.closePath();
	
	
	if(infTutorial==true){
		contextoTutorial.drawImage(imgInCiudadPapiro,125,75,400,400);//dibuja papiro en la ciudad
		
		contextoTutorial.beginPath();
		contextoTutorial.font="10pt Verdana";
		contextoTutorial.fillStyle = "black";
		contextoTutorial.fillText("EDIFICIO",200,115);
		contextoTutorial.fillText("NIVEL",300,115);
		contextoTutorial.fillText("PRODUCCIÓN",375,115);
		contextoTutorial.fill();
		//contextoCiudad.closePath();
		
		contextoTutorial.font="8pt Verdana";
		contextoTutorial.drawImage(imgEdifDin,210,150,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("Mercado",250,170);
		contextoTutorial.drawImage(imgEdifMad,210,185,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("Maderera",250,205);
		contextoTutorial.drawImage(imgEdifLad,210,220,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("Ladrillera",250,240);
		contextoTutorial.drawImage(imgEdifMet,210,255,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("Mina Metal",250,275);
		contextoTutorial.drawImage(imgEdifTInf,210,290,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("Barracas",250,310);
		contextoTutorial.drawImage(imgEdifTArq,210,325,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("Arqueria",250,345);
		contextoTutorial.drawImage(imgEdifTCab,210,360,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("Establos",250,380);
		
		contextoTutorial.fill();
		
		//contextoCiudad.beginPath();
		contextoTutorial.font="10pt Verdana";
		contextoTutorial.fillStyle = "black";
		
		contextoTutorial.fillText("1",315,170);
		contextoTutorial.fillText("1",315,205);
		contextoTutorial.fillText("1",315,240);
		contextoTutorial.fillText("1",315,275);
		contextoTutorial.fillText("1",315,310);
		contextoTutorial.fillText("1",315,345);
		contextoTutorial.fillText("1",315,380);
		contextoTutorial.fillText("50",405,170);
		contextoTutorial.fillText("50",405,205);
		contextoTutorial.fillText("30",405,240);
		contextoTutorial.fillText("25",405,275);
		contextoTutorial.fillText("20",405,310);
		contextoTutorial.fillText("20",405,345);
		contextoTutorial.fillText("20",405,380);
		contextoTutorial.fill();
		contextoTutorial.closePath();
		
	}
	
	if(constTutorial==true){
		
		contextoTutorial.drawImage(imgInCiudadPapiro,125,75,400,400);//dibuja papiro en la ciudad
		
		contextoTutorial.beginPath();
		contextoTutorial.font="10pt Verdana";
		contextoTutorial.fillStyle = "black";
		contextoTutorial.fillText("Construcción",285,115);
		contextoTutorial.fill();
		
		
		contextoTutorial.drawImage(imgEdifDin,210,150,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("1",250,170);
		contextoTutorial.fillText("Mercado",200,190);
		
		contextoTutorial.drawImage(imgEdifMad,310,150,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("1",350,170);
		contextoTutorial.fillText("Maderera",300,190);
		
		contextoTutorial.drawImage(imgEdifLad,410,150,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("1",450,170);
		contextoTutorial.fillText("Ladrillera",400,190);
		
		contextoTutorial.drawImage(imgEdifMet,210,200,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("1",250,220);
		contextoTutorial.fillText("Mina Metal",200,240);
		
		contextoTutorial.drawImage(imgEdifTInf,310,200,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("1",350,220);
		contextoTutorial.fillText("Barracas",300,240);
		
		contextoTutorial.drawImage(imgEdifTArq,410,200,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("1",450,220);
		contextoTutorial.fillText("Arqueria",400,240);
		
		contextoTutorial.drawImage(imgEdifTCab,310,250,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("1",350,270);
		contextoTutorial.fillText("Establos",300,290);
		
		contextoTutorial.fillRect(210, 320, 250,5);// para separar
		contextoTutorial.fillText("Cola de Construcción",250,340);
		contextoTutorial.fill();
		contextoTutorial.closePath();
		
		if(construirTutorial==true){
			
			switch (tipoConstruirTutorial) {
				
				case 1:	contextoTutorial.drawImage(imgEdifDin,210,355,32,32);contextoTutorial.fillText("100000",350,370);break;
				case 2:	contextoTutorial.drawImage(imgEdifMad,210,355,32,32);contextoTutorial.fillText("100000",350,370);break;
				case 3:	contextoTutorial.drawImage(imgEdifLad,210,355,32,32);contextoTutorial.fillText("100000",350,370);break;
				case 4:	contextoTutorial.drawImage(imgEdifMet,210,355,32,32);contextoTutorial.fillText("100000",350,370);break;
				case 5: contextoTutorial.drawImage(imgEdifTInf,210,355,32,32);contextoTutorial.fillText("100000",350,370);break;
				case 6:	contextoTutorial.drawImage(imgEdifTArq,210,355,32,32);contextoTutorial.fillText("100000",350,370);break;
				case 7:	contextoTutorial.drawImage(imgEdifTCab,210,355,32,32);contextoTutorial.fillText("100000",350,370);break;
				
				
				default: break;
			}
			
		}
		
	}
	
	if(recTutorial==true){
		
		contextoTutorial.drawImage(imgInCiudadPapiro,125,75,400,400);//dibuja papiro en la ciudad
		
		
		contextoTutorial.beginPath();
		contextoTutorial.font="10pt Verdana";
		contextoTutorial.fillStyle = "black";
		contextoTutorial.fillText("Reclutamiento",285,115);
		contextoTutorial.fill();
		
		contextoTutorial.font="8pt Verdana";
		contextoTutorial.drawImage(imgTInf1,210,150,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("10",250,170);
		contextoTutorial.fillText("Lanceros",200,190);
		
		contextoTutorial.drawImage(imgTInf2,310,150,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("10",350,170);
		contextoTutorial.fillText("Hacheros",300,190);
		
		contextoTutorial.drawImage(imgTInf3,410,150,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("10",450,170);
		contextoTutorial.fillText("Lan.Pesados",400,190);
		
		contextoTutorial.drawImage(imgTArq1,210,200,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("10",250,220);
		contextoTutorial.fillText("Jabalineros",200,240);
		
		contextoTutorial.drawImage(imgTArq2,310,200,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("10",350,220);
		contextoTutorial.fillText("Arqueros",300,240);
		
		contextoTutorial.drawImage(imgTArq3,410,200,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("10",450,220);
		contextoTutorial.fillText("Arq.Pesados",400,240);
		
		contextoTutorial.drawImage(imgTCab1,210,250,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("10",250,270);
		contextoTutorial.fillText("Cab.Ligera",200,290);
		
		contextoTutorial.drawImage(imgTCab2,310,250,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("10",350,270);
		contextoTutorial.fillText("Cab.Hacha",300,290);
		
		contextoTutorial.drawImage(imgTCab3,410,250,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("10",450,270);
		contextoTutorial.fillText("Cab.Pesada",400,290);
		
		contextoTutorial.fillRect(210, 320, 250,5);// para separar
		contextoTutorial.fillText("Cola de Reclutamiento",250,340);
		contextoTutorial.fill();
		contextoTutorial.closePath();
		
		
		
	}
	
}


function explicacionTutorial7(){
	
	if(reclutarTutorial==false){
		$("#SiguienteTutorial").hide();
	}else{
		$("#SiguienteTutorial").show();
	}
	
	
	contextoTutorial.drawImage(imgInCiudad1,0,0,512,512);//dibuja el mapa
	//contextoTutorial2.drawImage(mapa,0,0,512,512);//dibuja el mapa
	contextoTutorial.drawImage(imgInCiudadPapiro,500,0,512,512);//dibuja papiro en la ciudad
	
	contextoTutorial.beginPath();
	
	contextoTutorial.font="17pt Verdana";
	contextoTutorial.fillStyle = "black";
	contextoTutorial.fillText("RAMSES",200,60)
	contextoTutorial.fillText("TUTORIAL",690,60);
	contextoTutorial.font="15pt Verdana";
	
	
	contextoTutorial.fillText("En la ventana de reclutamiento",575,100);
	contextoTutorial.fillText("podras reclutar tropas nuevas",575,130);
	contextoTutorial.fillText("para tu ejercito, 20 de cada",575,160);
	contextoTutorial.fillText("unidad por reclutamiento,",575,190);
	contextoTutorial.fillText("cuando esto sucede aparecera el",575,220);
	contextoTutorial.fillText("la tropa a reclutar en la cola",575,250);
	contextoTutorial.fillText("reclutamiento y el tiempo para",575,280);
	contextoTutorial.fillText("terminar el alistamiento,",575,310);
	contextoTutorial.fillText("para cancelar el reclutamiento",575,340);
	contextoTutorial.fillText("esta el boton cancelar o con un",575,370);
	contextoTutorial.fillText("click sobre la imagen en la cola.",575,400);
	
	
	
	
		
	contextoTutorial.fill();
	contextoTutorial.closePath();
	
	
	if(infTutorial==true){
		contextoTutorial.drawImage(imgInCiudadPapiro,125,75,400,400);//dibuja papiro en la ciudad
		
		contextoTutorial.beginPath();
		contextoTutorial.font="10pt Verdana";
		contextoTutorial.fillStyle = "black";
		contextoTutorial.fillText("EDIFICIO",200,115);
		contextoTutorial.fillText("NIVEL",300,115);
		contextoTutorial.fillText("PRODUCCIÓN",375,115);
		contextoTutorial.fill();
		//contextoCiudad.closePath();
		
		contextoTutorial.font="8pt Verdana";
		contextoTutorial.drawImage(imgEdifDin,210,150,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("Mercado",250,170);
		contextoTutorial.drawImage(imgEdifMad,210,185,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("Maderera",250,205);
		contextoTutorial.drawImage(imgEdifLad,210,220,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("Ladrillera",250,240);
		contextoTutorial.drawImage(imgEdifMet,210,255,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("Mina Metal",250,275);
		contextoTutorial.drawImage(imgEdifTInf,210,290,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("Barracas",250,310);
		contextoTutorial.drawImage(imgEdifTArq,210,325,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("Arqueria",250,345);
		contextoTutorial.drawImage(imgEdifTCab,210,360,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("Establos",250,380);
		
		contextoTutorial.fill();
		
		//contextoCiudad.beginPath();
		contextoTutorial.font="10pt Verdana";
		contextoTutorial.fillStyle = "black";
		
		contextoTutorial.fillText("1",315,170);
		contextoTutorial.fillText("1",315,205);
		contextoTutorial.fillText("1",315,240);
		contextoTutorial.fillText("1",315,275);
		contextoTutorial.fillText("1",315,310);
		contextoTutorial.fillText("1",315,345);
		contextoTutorial.fillText("1",315,380);
		contextoTutorial.fillText("50",405,170);
		contextoTutorial.fillText("50",405,205);
		contextoTutorial.fillText("30",405,240);
		contextoTutorial.fillText("25",405,275);
		contextoTutorial.fillText("20",405,310);
		contextoTutorial.fillText("20",405,345);
		contextoTutorial.fillText("20",405,380);
		contextoTutorial.fill();
		contextoTutorial.closePath();
		
	}
	
	if(constTutorial==true){
		
		contextoTutorial.drawImage(imgInCiudadPapiro,125,75,400,400);//dibuja papiro en la ciudad
		
		contextoTutorial.beginPath();
		contextoTutorial.font="10pt Verdana";
		contextoTutorial.fillStyle = "black";
		contextoTutorial.fillText("Construcción",285,115);
		contextoTutorial.fill();
		
		
		contextoTutorial.drawImage(imgEdifDin,210,150,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("1",250,170);
		contextoTutorial.fillText("Mercado",200,190);
		
		contextoTutorial.drawImage(imgEdifMad,310,150,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("1",350,170);
		contextoTutorial.fillText("Maderera",300,190);
		
		contextoTutorial.drawImage(imgEdifLad,410,150,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("1",450,170);
		contextoTutorial.fillText("Ladrillera",400,190);
		
		contextoTutorial.drawImage(imgEdifMet,210,200,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("1",250,220);
		contextoTutorial.fillText("Mina Metal",200,240);
		
		contextoTutorial.drawImage(imgEdifTInf,310,200,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("1",350,220);
		contextoTutorial.fillText("Barracas",300,240);
		
		contextoTutorial.drawImage(imgEdifTArq,410,200,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("1",450,220);
		contextoTutorial.fillText("Arqueria",400,240);
		
		contextoTutorial.drawImage(imgEdifTCab,310,250,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("1",350,270);
		contextoTutorial.fillText("Establos",300,290);
		
		contextoTutorial.fillRect(210, 320, 250,5);// para separar
		contextoTutorial.fillText("Cola de Construcción",250,340);
		contextoTutorial.fill();
		contextoTutorial.closePath();
		
		
		
	}
	
	if(recTutorial==true){
		
		contextoTutorial.drawImage(imgInCiudadPapiro,125,75,400,400);//dibuja papiro en la ciudad
		
		
		contextoTutorial.beginPath();
		contextoTutorial.font="10pt Verdana";
		contextoTutorial.fillStyle = "black";
		contextoTutorial.fillText("Reclutamiento",285,115);
		contextoTutorial.fill();
		
		contextoTutorial.font="8pt Verdana";
		contextoTutorial.drawImage(imgTInf1,210,150,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("10",250,170);
		contextoTutorial.fillText("Lanceros",200,190);
		
		contextoTutorial.drawImage(imgTInf2,310,150,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("10",350,170);
		contextoTutorial.fillText("Hacheros",300,190);
		
		contextoTutorial.drawImage(imgTInf3,410,150,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("10",450,170);
		contextoTutorial.fillText("Lan.Pesados",400,190);
		
		contextoTutorial.drawImage(imgTArq1,210,200,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("10",250,220);
		contextoTutorial.fillText("Jabalineros",200,240);
		
		contextoTutorial.drawImage(imgTArq2,310,200,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("10",350,220);
		contextoTutorial.fillText("Arqueros",300,240);
		
		contextoTutorial.drawImage(imgTArq3,410,200,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("10",450,220);
		contextoTutorial.fillText("Arq.Pesados",400,240);
		
		contextoTutorial.drawImage(imgTCab1,210,250,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("10",250,270);
		contextoTutorial.fillText("Cab.Ligera",200,290);
		
		contextoTutorial.drawImage(imgTCab2,310,250,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("10",350,270);
		contextoTutorial.fillText("Cab.Hacha",300,290);
		
		contextoTutorial.drawImage(imgTCab3,410,250,32,32);//dibuja edificio en papiro en la ciudad
		contextoTutorial.fillText("10",450,270);
		contextoTutorial.fillText("Cab.Pesada",400,290);
		
		contextoTutorial.fillRect(210, 320, 250,5);// para separar
		contextoTutorial.fillText("Cola de Reclutamiento",250,340);
		contextoTutorial.fill();
		contextoTutorial.closePath();
		
		if(reclutarTutorial==true){
			
			switch (tipoReclutarTutorial) {
				
				case 1:	contextoTutorial.drawImage(imgTInf1,210,355,32,32);contextoTutorial.fillText("20",300,370);contextoTutorial.fillText("100000",350,370);break;
				case 2:	contextoTutorial.drawImage(imgTInf2,210,355,32,32);contextoTutorial.fillText("20",300,370);contextoTutorial.fillText("100000",350,370);break;
				case 3:	contextoTutorial.drawImage(imgTInf3,210,355,32,32);contextoTutorial.fillText("20",300,370);contextoTutorial.fillText("100000",350,370);break;
				case 4:	contextoTutorial.drawImage(imgTArq1,210,355,32,32);contextoTutorial.fillText("20",300,370);contextoTutorial.fillText("100000",350,370);break;
				case 5: contextoTutorial.drawImage(imgTArq2,210,355,32,32);contextoTutorial.fillText("20",300,370);contextoTutorial.fillText("100000",350,370);break;
				case 6:	contextoTutorial.drawImage(imgTArq3,210,355,32,32);contextoTutorial.fillText("20",300,370);contextoTutorial.fillText("100000",350,370);break;
				case 7:	contextoTutorial.drawImage(imgTCab1,210,355,32,32);contextoTutorial.fillText("20",300,370);contextoTutorial.fillText("100000",350,370);break;
				case 8:	contextoTutorial.drawImage(imgTCab2,210,355,32,32);contextoTutorial.fillText("20",300,370);contextoTutorial.fillText("100000",350,370);break;
				case 9:	contextoTutorial.drawImage(imgTCab3,210,355,32,32);contextoTutorial.fillText("20",300,370);contextoTutorial.fillText("100000",350,370);break;
				
				default: break;
			}
			
		}
		
	}


}




function explicacionTutorial8(){
	
	contextoTutorial.drawImage(mapa,0,0,512,512);//dibuja el mapa
	contextoTutorial2.drawImage(mapa,0,0,512,512);//dibuja el mapa
	contextoTutorial.drawImage(imgInCiudadPapiro,500,0,512,512);//dibuja papiro en la ciudad
	
	$("#InformacionTutorial").hide();
	$("#ConstruccionTutorial").hide();
	$("#ReclutarTutorial").hide();
	$("#SiguienteTutorial").hide();
	
	//console.log(contadorPasos);
	var imgData2=contextoTutorial2.getImageData(0,0,512,170);
    var data2=imgData2.data;
	
	
    for(let i = 0; i < data2.length; i += 4) {
		
      var grayscale= 0.33*data2[i]+0.5*data2[i+1]+0.15*data2[i+2];
      data2[i]=grayscale;
      data2[i+1]=grayscale;
      data2[i+2]=grayscale;
    }
 
    // Asignamos la imagen al Canvas
	contextoTutorial.clearRect(0,0,512,170);
    contextoTutorial.putImageData(imgData2,0,0);
	
	
	
	contextoTutorial.beginPath();
	contextoTutorial.fillStyle = "blue";
	contextoTutorial.fillRect(220, 400, 64,64);// para contorno 
	contextoTutorial.drawImage(imgCiudad,220, 400, 64,64);//dibuja ciudad en el mapa
	contextoTutorial.font="15pt Verdana";
	contextoTutorial.fillStyle = "black";
	contextoTutorial.fillText("Ramses",210,485);
	
	contextoTutorial.fillStyle = "red";
	contextoTutorial.fillRect(100, 250, 64,64);// para contorno 
	contextoTutorial.drawImage(imgCiudad2,100, 250, 62,62);//dibuja ciudad en el mapa
	contextoTutorial.font="15pt Verdana";
	contextoTutorial.fillStyle = "black";
	contextoTutorial.fillText("Vincent",90,335);
	contextoTutorial.fillStyle = "red";
	contextoTutorial.fillRect(200, 100, 64,64);// para contorno 
	contextoTutorial.drawImage(imgCiudad2,200, 100, 62,62);//dibuja ciudad en el mapa
	
	contextoTutorial.font="17pt Verdana";
	contextoTutorial.fillStyle = "black";
	contextoTutorial.fillText("TUTORIAL",690,60);
	contextoTutorial.font="15pt Verdana";
	
	
	contextoTutorial.fillText("Ahora vamos a simular un ataque",575,100);
	contextoTutorial.fillText("a la ciudad enemiga, para",575,130);
	contextoTutorial.fillText("ello haz click sobre la ciudad",575,160);
	contextoTutorial.fillText("mas cercana, y luego sobre el",575,190);
	contextoTutorial.fillText("boton de atacar que aparece en",575,220);
	contextoTutorial.fillText("el mapa, esto te llevara a la",575,250);
	contextoTutorial.fillText("ventana para atacar, e iniciar",575,280);
	contextoTutorial.fillText("batalla.",575,310);
	//contextoTutorial.fillText("las ciudades enemigas mas alejadas",575,340);
	//contextoTutorial.fillText("de nuestra ultima ciudad.",575,370);
	//contextoTutorial.fillText("aparece debajo de ella.",575,400);
	
	
	
	
		
	contextoTutorial.fill();
	contextoTutorial.closePath();
	
	
	
	
}



function explicacionTutorial9(){
	
	
	contextoTutorial.drawImage(imgInCiudadPapiro,500,0,512,512);//dibuja papiro en la ciudad

	
	
	contextoTutorial.beginPath();		
	contextoTutorial.fillStyle = "black";
	contextoTutorial.font="10pt Verdana";
	
	contextoTutorial.drawImage(imgbatalla1,0,0,512,512);
	contextoTutorial.drawImage(imgCiudad,437,125,64,64);
	contextoTutorial.drawImage(imgCiudad2,12,125,64,64);
	contextoTutorial.fillText("RAMSES",437,200);
	contextoTutorial.fillText("Vincent",12,200);
	contextoTutorial.font="6pt Verdana";
	contextoTutorial.fillText("Resistencia: 1500",430,210);
	contextoTutorial.fillText("Resistencia: 1500",5,210);
	
	contextoTutorial.fillRect(100, 215, 312,1);// para separar
	contextoTutorial.fillRect(100, 280, 312,1);// para separar
	contextoTutorial.fill();
	
	
	
	
	
	contextoTutorial.fillStyle = "red";

	contextoTutorial.fillRect(60, 300, 400,1);// para separar
	contextoTutorial.fillRect(60, 300, 1,50);// para separar
	contextoTutorial.fillRect(459, 300, 1,50);// para separar
	contextoTutorial.fillRect(60, 350, 400,1);// para separar
	contextoTutorial.fill();
	contextoTutorial.fillStyle = "black";
	contextoTutorial.font="9pt Verdana";
	contextoTutorial.fillText("EJERCITO",225,297);
	contextoTutorial.fill();
	

	contextoTutorial.drawImage(imgTInf1,69,309,32,32);
	contextoTutorial.fillStyle = "black";
	contextoTutorial.font="6pt Verdana";
	
	contextoTutorial.fillText("20",90,337);
	
	contextoTutorial.fillText("200",80,349);
	contextoTutorial.fill();
	
	
	
	contextoTutorial.fillStyle = "black";
	contextoTutorial.font="7pt Verdana";
	
	contextoTutorial.fillRect(362, 97+(130),1,10);// para separar
	contextoTutorial.fillRect(362, 112+(130), 1,10);// para separar
	contextoTutorial.fillRect(362, 127+(130), 1,10);// para separar
	contextoTutorial.fillText("SALIDA",370,120+(130));
		
	contextoTutorial.fillRect(412, 97+(130), 1,10);// para separar
	contextoTutorial.fillRect(412, 112+(130), 1,10);// para separar
	contextoTutorial.fillRect(412, 127+(130), 1,10);// para separar
	
	contextoTutorial.fillRect(367, 92+(130), 10,1);// para separar
	contextoTutorial.fillRect(382, 92+(130), 10,1);// para separar
	contextoTutorial.fillRect(392, 92+(130), 10,1);// para separar
	
	contextoTutorial.fillRect(367, 142+(130), 10,1);// para separar
	contextoTutorial.fillRect(382, 142+(130), 10,1);// para separar
	contextoTutorial.fillRect(392, 142+(130), 10,1);// para separar
	
	contextoTutorial.fillRect(100, 97+(130), 1,10);// para separar
	contextoTutorial.fillRect(100, 112+(130), 1,10);// para separar
	contextoTutorial.fillRect(100, 127+(130), 1,10);// para separar
	contextoTutorial.fillText("ENEMIGO",101,120+(130));
	
	contextoTutorial.fillRect(150, 97+(130), 1,10);// para separar
	contextoTutorial.fillRect(150, 112+(130), 1,10);// para separar
	contextoTutorial.fillRect(150, 127+(130), 1,10);// para separar
	
	contextoTutorial.fillRect(105, 92+(130), 10,1);// para separar
	contextoTutorial.fillRect(120, 92+(130), 10,1);// para separar
	contextoTutorial.fillRect(135, 92+(130), 10,1);// para separar
	
	contextoTutorial.fillRect(105, 142+(130), 10,1);// para separar
	contextoTutorial.fillRect(120, 142+(130), 10,1);// para separar
	contextoTutorial.fillRect(135, 142+(130), 10,1);// para separar
	
	
	//zona ataque
	contextoTutorial.fillStyle = "red";
	contextoTutorial.fillRect(152, 92+(130), 211,1);// para separar
	contextoTutorial.fillRect(152, 142+(130), 211,1);// para separar
	contextoTutorial.fillRect(152, 92+(130), 1,50);// para separar
	contextoTutorial.fillRect(359, 92+(130), 1,50);// para separar
	contextoTutorial.fillText("ZONA DE GUERRA",212,120+(130));
	contextoTutorial.fill();
	contextoTutorial.fillStyle = "black";
	
	
	
	if(dibujarTropaTutorial==true){
		contextoTutorial.drawImage(imgTInf1,362,222,50,50);
		$("#SiguienteTutorial").show();
	}
	
	
	
	
	contextoTutorial.font="15pt Verdana";
	contextoTutorial.fillText("Esta es la zona de batalla, esta",575,100);
	contextoTutorial.fillText("aparecera tras iniciar batalla,",575,130);
	contextoTutorial.fillText("en ella veras las ciudades que",575,160);
	contextoTutorial.fillText("pelean, su resistencia, la zona",575,190);
	contextoTutorial.fillText("de guerra, las areas de salida de",575,220);
	contextoTutorial.fillText("tropas y tus tropas, para iniciar",575,250);
	contextoTutorial.fillText("el combate debes seleccionar una",575,280);
	contextoTutorial.fillText("tropa y colocarla en tu area de",575,310);
	contextoTutorial.fillText("salida(has eso para continuar el",575,340);
	contextoTutorial.fillText("tutorial), la batalla terminara",575,370);
	contextoTutorial.fillText("cuando alguno se quede sin tropas",575,400);
	contextoTutorial.fillText("o sin resistencia.",575,420);
	
	
	
	
	
	
	contextoTutorial.closePath();
	
}


function explicacionTutorial10(){
	
	contextoTutorial.drawImage(mapa,0,0,512,512);//dibuja el mapa
	//contextoTutorial2.drawImage(mapa,0,0,512,512);//dibuja el mapa
	contextoTutorial.drawImage(imgInCiudadPapiro,500,0,512,512);//dibuja papiro en la ciudad
	

	
	
	
	contextoTutorial.beginPath();
	contextoTutorial.fillStyle = "blue";
	contextoTutorial.fillRect(220, 400, 64,64);// para contorno 
	contextoTutorial.drawImage(imgCiudad,220, 400, 64,64);//dibuja ciudad en el mapa
	contextoTutorial.font="15pt Verdana";
	contextoTutorial.fillStyle = "black";
	contextoTutorial.fillText("Ramses",210,485);
	
	contextoTutorial.fillStyle = "blue";
	contextoTutorial.fillRect(100, 250, 64,64);// para contorno 
	contextoTutorial.drawImage(imgCiudad,100, 250, 62,62);//dibuja ciudad en el mapa
	contextoTutorial.font="15pt Verdana";
	contextoTutorial.fillStyle = "black";
	contextoTutorial.fillText("Vincent",90,335);
	contextoTutorial.fillStyle = "red";
	contextoTutorial.fillRect(200, 100, 64,64);// para contorno 
	contextoTutorial.drawImage(imgCiudad2,200, 100, 62,62);//dibuja ciudad en el mapa
	contextoTutorial.font="15pt Verdana";
	contextoTutorial.fillStyle = "black";
	contextoTutorial.fillText("Josefo",190,185);
	
	contextoTutorial.font="17pt Verdana";
	contextoTutorial.fillStyle = "black";
	contextoTutorial.fillText("TUTORIAL",690,60);
	contextoTutorial.font="15pt Verdana";
	
	
	contextoTutorial.fillText("Si vences en batalla obtienes",575,100);
	contextoTutorial.fillText("dinero, recursos y si la batalla",575,130);
	contextoTutorial.fillText("es ofensiva ontendras el control",575,160);
	contextoTutorial.fillText("de la ciudad enemiga atacada, ",575,190);
	contextoTutorial.fillText("y podras ver el nombre de la ",575,220);
	contextoTutorial.fillText("siguiente ciudad y por ende podras",575,250);
	contextoTutorial.fillText("atacar, ademas una nueva parte del",575,280);
	contextoTutorial.fillText("mapa se aclarara, ahora continua ",575,310);
	contextoTutorial.fillText("el tutorial para ver unos elementos",575,340);
	contextoTutorial.fillText("importantes antes de que inicies",575,370);
	contextoTutorial.fillText("tu aventura.",575,400);
	
	
	
	
		
	contextoTutorial.fill();
	contextoTutorial.closePath();

}


function explicacionTutorial11(){
	
	contextoTutorial.drawImage(mapa,0,0,512,512);//dibuja el mapa
	//contextoTutorial2.drawImage(mapa,0,0,512,512);//dibuja el mapa
	contextoTutorial.drawImage(imgInCiudadPapiro,500,0,512,512);//dibuja papiro en la ciudad
	

	
	
	
	contextoTutorial.beginPath();
	contextoTutorial.fillStyle = "blue";
	contextoTutorial.fillRect(220, 400, 64,64);// para contorno 
	contextoTutorial.drawImage(imgCiudad,220, 400, 64,64);//dibuja ciudad en el mapa
	contextoTutorial.font="15pt Verdana";
	contextoTutorial.fillStyle = "black";
	contextoTutorial.fillText("Ramses",210,485);
	
	contextoTutorial.fillStyle = "blue";
	contextoTutorial.fillRect(100, 250, 64,64);// para contorno 
	contextoTutorial.drawImage(imgCiudad,100, 250, 62,62);//dibuja ciudad en el mapa
	contextoTutorial.font="15pt Verdana";
	contextoTutorial.fillStyle = "black";
	contextoTutorial.fillText("Vincent",90,335);
	contextoTutorial.fillStyle = "red";
	contextoTutorial.fillRect(200, 100, 64,64);// para contorno 
	contextoTutorial.drawImage(imgCiudad2,200, 100, 62,62);//dibuja ciudad en el mapa
	contextoTutorial.font="15pt Verdana";
	contextoTutorial.fillStyle = "black";
	contextoTutorial.fillText("Josefo",190,185);
	
	contextoTutorial.font="17pt Verdana";
	contextoTutorial.fillStyle = "black";
	contextoTutorial.fillText("TUTORIAL",690,60);
	contextoTutorial.font="15pt Verdana";
	
	
	contextoTutorial.fillText("Ahora se puede observar en la",575,100);
	contextoTutorial.fillText("parte superior izquierda del ",575,130);
	contextoTutorial.fillText("mapa dos elementos importantes",575,160);
	contextoTutorial.fillText("de ayuda en el juego, el primero",575,190);
	contextoTutorial.fillText("es una tabla que indica las vidas,",575,220);
	contextoTutorial.fillText("dinero, recursos, tropas y nivel",575,250);
	contextoTutorial.fillText("que posees, el segundo es el cuadro",575,280);
	contextoTutorial.fillText("de alerta, este te indica que al ",575,310);
	contextoTutorial.fillText("final de la cuenta regresiva recibes",575,340);
	contextoTutorial.fillText("un ataque, desde la ciudad enemiga",575,370);
	contextoTutorial.fillText("mas cercana, esta sera una batalla",575,400);
	contextoTutorial.fillText("defensiva y no podras rechazarla.",575,420);
	
	
	contextoTutorial.drawImage(imgPapiro,0,0,128,128);//dibuja el mapa
	contextoTutorial.beginPath();
	contextoTutorial.font="7pt Verdana";
	contextoTutorial.fillStyle = "black";
	
	contextoTutorial.fillText("Vidas: ",17,30);
	contextoTutorial.drawImage(imgCorazon,50,17,16,16);contextoTutorial.drawImage(imgCorazon,65,17,16,16);contextoTutorial.drawImage(imgCorazon,80,17,16,16);
		
	contextoTutorial.fillText("Dinero: 100",17,42);
	contextoTutorial.drawImage(imgDinero,95,30,16,16);
	contextoTutorial.fillText("Tropas: 100",17,55);
	contextoTutorial.drawImage(imgTropas,95,45,12,12);
	contextoTutorial.fillText("Madera: 100",17,67);
	contextoTutorial.drawImage(imgMadera,95,55,16,16);
	contextoTutorial.fillText("Ladrillo: 100",17,80);
	contextoTutorial.drawImage(imgLadrillo,95,67,16,16);
	contextoTutorial.fillText("Metal: 100",17,92);
	contextoTutorial.drawImage(imgMetal,95,80,16,16);
	contextoTutorial.fillText("Nivel: 1",17,105);
	contextoTutorial.drawImage(imgNivel,95,92,16,16);
	
	contextoTutorial.font="8pt Verdana";
	contextoTutorial.drawImage(imgAlerta,37,125,64,64);
	contextoTutorial.fillText("ALERTA",52,147);
	contextoTutorial.fillText("300",45,165);
	contextoTutorial.fill();
	contextoTutorial.closePath();

}

function explicacionTutorial12(){
	
	contextoTutorial.drawImage(mapa,0,0,512,512);//dibuja el mapa
	//contextoTutorial2.drawImage(mapa,0,0,512,512);//dibuja el mapa
	contextoTutorial.drawImage(imgInCiudadPapiro,500,0,512,512);//dibuja papiro en la ciudad
	

	
	
	
	contextoTutorial.beginPath();
	contextoTutorial.fillStyle = "blue";
	contextoTutorial.fillRect(220, 400, 64,64);// para contorno 
	contextoTutorial.drawImage(imgCiudad,220, 400, 64,64);//dibuja ciudad en el mapa
	contextoTutorial.font="15pt Verdana";
	contextoTutorial.fillStyle = "black";
	contextoTutorial.fillText("Ramses",210,485);
	
	contextoTutorial.fillStyle = "blue";
	contextoTutorial.fillRect(100, 250, 64,64);// para contorno 
	contextoTutorial.drawImage(imgCiudad,100, 250, 62,62);//dibuja ciudad en el mapa
	contextoTutorial.font="15pt Verdana";
	contextoTutorial.fillStyle = "black";
	contextoTutorial.fillText("Vincent",90,335);
	contextoTutorial.fillStyle = "red";
	contextoTutorial.fillRect(200, 100, 64,64);// para contorno 
	contextoTutorial.drawImage(imgCiudad2,200, 100, 62,62);//dibuja ciudad en el mapa
	contextoTutorial.font="15pt Verdana";
	contextoTutorial.fillStyle = "black";
	contextoTutorial.fillText("Josefo",190,185);
	
	contextoTutorial.font="17pt Verdana";
	contextoTutorial.fillStyle = "black";
	contextoTutorial.fillText("TUTORIAL",690,60);
	contextoTutorial.font="15pt Verdana";
	
	
	contextoTutorial.fillText("Si pierdes una batalla defensiva",575,100);
	contextoTutorial.fillText("perderas la ciudad atacada y una",575,130);
	contextoTutorial.fillText("vida, si pierdes todas las vidas",575,160);
	contextoTutorial.fillText("o todas las ciudades, perderas ",575,190);
	contextoTutorial.fillText("totalmente y deberes comenzar de",575,220);
	contextoTutorial.fillText("nuevo ese nivel. Si conquistas",575,250);
	contextoTutorial.fillText("todas las ciudades obtendras una",575,280);
	contextoTutorial.fillText("victoria total y podras avanzar",575,310);
	contextoTutorial.fillText("al siguiente nivel.",575,340);
	//contextoTutorial.fillText("un ataque, desde la ciudad enemiga",575,370);
	//contextoTutorial.fillText("mas cercana, esta sera una batalla",575,400);
	//contextoTutorial.fillText("defensiva y no podras rechazarla.",575,420);
	
	
	contextoTutorial.drawImage(imgPapiro,0,0,128,128);//dibuja el mapa
	contextoTutorial.beginPath();
	contextoTutorial.font="7pt Verdana";
	contextoTutorial.fillStyle = "black";
	
	contextoTutorial.fillText("Vidas: ",17,30);
	contextoTutorial.drawImage(imgCorazon,50,17,16,16);contextoTutorial.drawImage(imgCorazon,65,17,16,16);contextoTutorial.drawImage(imgCorazon,80,17,16,16);
		
	contextoTutorial.fillText("Dinero: 100",17,42);
	contextoTutorial.drawImage(imgDinero,95,30,16,16);
	contextoTutorial.fillText("Tropas: 100",17,55);
	contextoTutorial.drawImage(imgTropas,95,45,12,12);
	contextoTutorial.fillText("Madera: 100",17,67);
	contextoTutorial.drawImage(imgMadera,95,55,16,16);
	contextoTutorial.fillText("Ladrillo: 100",17,80);
	contextoTutorial.drawImage(imgLadrillo,95,67,16,16);
	contextoTutorial.fillText("Metal: 100",17,92);
	contextoTutorial.drawImage(imgMetal,95,80,16,16);
	contextoTutorial.fillText("Nivel: 1",17,105);
	contextoTutorial.drawImage(imgNivel,95,92,16,16);
	
	contextoTutorial.font="8pt Verdana";
	contextoTutorial.drawImage(imgAlerta,37,125,64,64);
	contextoTutorial.fillText("ALERTA",52,147);
	contextoTutorial.fillText("300",45,165);
	contextoTutorial.fill();
	contextoTutorial.closePath();

}


function explicacionTutorial13(){
	
	contextoTutorial.drawImage(mapa,0,0,512,512);//dibuja el mapa
	//contextoTutorial2.drawImage(mapa,0,0,512,512);//dibuja el mapa
	contextoTutorial.drawImage(imgInCiudadPapiro,500,0,512,512);//dibuja papiro en la ciudad
	

	
	$("#SiguienteTutorial").hide();
	
	contextoTutorial.beginPath();
	contextoTutorial.fillStyle = "blue";
	contextoTutorial.fillRect(220, 400, 64,64);// para contorno 
	contextoTutorial.drawImage(imgCiudad,220, 400, 64,64);//dibuja ciudad en el mapa
	contextoTutorial.font="15pt Verdana";
	contextoTutorial.fillStyle = "black";
	contextoTutorial.fillText("Ramses",210,485);
	
	contextoTutorial.fillStyle = "blue";
	contextoTutorial.fillRect(100, 250, 64,64);// para contorno 
	contextoTutorial.drawImage(imgCiudad,100, 250, 62,62);//dibuja ciudad en el mapa
	contextoTutorial.font="15pt Verdana";
	contextoTutorial.fillStyle = "black";
	contextoTutorial.fillText("Vincent",90,335);
	contextoTutorial.fillStyle = "red";
	contextoTutorial.fillRect(200, 100, 64,64);// para contorno 
	contextoTutorial.drawImage(imgCiudad2,200, 100, 62,62);//dibuja ciudad en el mapa
	contextoTutorial.font="15pt Verdana";
	contextoTutorial.fillStyle = "black";
	contextoTutorial.fillText("Josefo",190,185);
	
	contextoTutorial.font="17pt Verdana";
	contextoTutorial.fillStyle = "black";
	contextoTutorial.fillText("TUTORIAL",690,60);
	contextoTutorial.font="15pt Verdana";
	
	
	contextoTutorial.fillText("Recuerda construir, asi aumentas",575,100);
	contextoTutorial.fillText("el numero de recursos que ",575,130);
	contextoTutorial.fillText("obtienes, y recuerda reclutar mas",575,160);
	contextoTutorial.fillText("tropas para que estes listo para",575,190);
	contextoTutorial.fillText("la batalla, hemos llegado al final",575,220);
	contextoTutorial.fillText("de este tutorial, recuerda pasar",575,250);
	contextoTutorial.fillText("un buen momento en este juego",575,280);
	contextoTutorial.fillText("y buscar la victoria total.",575,310);
	contextoTutorial.fillText("MINI WAR SIMULATION",575,340);
	//contextoTutorial.fillText("un ataque, desde la ciudad enemiga",575,370);
	//contextoTutorial.fillText("mas cercana, esta sera una batalla",575,400);
	//contextoTutorial.fillText("defensiva y no podras rechazarla.",575,420);
	
	
	contextoTutorial.drawImage(imgPapiro,0,0,128,128);//dibuja el mapa
	contextoTutorial.beginPath();
	contextoTutorial.font="7pt Verdana";
	contextoTutorial.fillStyle = "black";
	
	contextoTutorial.fillText("Vidas: ",17,30);
	contextoTutorial.drawImage(imgCorazon,50,17,16,16);contextoTutorial.drawImage(imgCorazon,65,17,16,16);contextoTutorial.drawImage(imgCorazon,80,17,16,16);
		
	contextoTutorial.fillText("Dinero: 100",17,42);
	contextoTutorial.drawImage(imgDinero,95,30,16,16);
	contextoTutorial.fillText("Tropas: 100",17,55);
	contextoTutorial.drawImage(imgTropas,95,45,12,12);
	contextoTutorial.fillText("Madera: 100",17,67);
	contextoTutorial.drawImage(imgMadera,95,55,16,16);
	contextoTutorial.fillText("Ladrillo: 100",17,80);
	contextoTutorial.drawImage(imgLadrillo,95,67,16,16);
	contextoTutorial.fillText("Metal: 100",17,92);
	contextoTutorial.drawImage(imgMetal,95,80,16,16);
	contextoTutorial.fillText("Nivel: 1",17,105);
	contextoTutorial.drawImage(imgNivel,95,92,16,16);
	
	contextoTutorial.font="8pt Verdana";
	contextoTutorial.drawImage(imgAlerta,37,125,64,64);
	contextoTutorial.fillText("ALERTA",52,147);
	contextoTutorial.fillText("300",45,165);
	contextoTutorial.fill();
	contextoTutorial.closePath();

}

/////////////////////////////////  FIN FUNCIONES TUTORIAL ///////////////////









