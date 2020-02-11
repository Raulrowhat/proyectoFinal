function bucle(){
    
	if(inTutorial==true){
		
		contextoTutorial.clearRect(0,0,3000,3000);
		//console.log("dsfgsdfg");
		TutorialTutorial();
		
		
	}
    
    if(Iniciar_el_Juego==true){
        contextoJ1.clearRect(0,0,3000,3000);
        contextoJ2.clearRect(0,0,3000,3000);
		contextoBatalla.clearRect(0,0,3000,3000);
		contextoBatalla2.clearRect(0,0,3000,3000);
		//contextoJ1.drawImage(fondoPantalla,-250,-250,fondoPantalla.width,1920);//dibuja el mapa
        //contextoT.clearRect(0,0,256,256);
		//contextoCiudad.clearRect(0,0,3000,2000);
		contextoT.clearRect(0,0,256,256);
        camara.desplasarse();
		//var tiempo =time.getTime();
		startTime2();
		
        //console.log(tiempo-5);
        //contextoJ1.drawImage(mapa,camara.posX,camara.posY-mapay_inicial,mapa.width,mapa.height);//dibuja el mapa
		
		if(enLienzoMapa==true){
			numTropas=tropasInf1+tropasArq1+tropasCab1+tropasInf2+tropasInf3+tropasArq2+tropasCab2+tropasArq3+tropasCab3;
			//dibujar mapa gris y mapa color
			if(CiudadJugador<9){
				VolverGrisMapaDesconocido();//tono gris para mapa no capturado
			}else{
				contextoJ1.drawImage(mapa,camara.posX,camara.posY-mapay_inicial,mapa.width,mapa.height);//dibuja el mapa
				NombreCiudadEnMapa(CiudadJugador+1);//coloca los nombres de las ciudades en el mapa
			}
			
			//dibujarCiudad en mapa
			dibujaCiudad();//ubicacion ciudades
			
			
			
			// dibujar objetos y demas necesario para jugador
			DibujarGuiObjetos();//dibujar vida, recursos, info para jugador
			if(espada==true||puedoAtacar==true){
				contextoJ1.drawImage(imgSword,espadaX,espadaY,64,64);
				//console.log("holisggfegege");
			}
			
			alertaBatalla();
			if(mostarInventarioTropas==true){
				mostrarInventarioEjercito();
			}
			
			
		//reescalaVentana();
			
		}
		if(enLienzoCiudad==true){
			//console.log("holis");
			contextoCiudad.clearRect(0,0,3000,2000);
			numTropas=tropasInf1+tropasArq1+tropasCab1+tropasInf2+tropasInf3+tropasArq2+tropasCab2+tropasArq3+tropasCab3;
			dibujaCiudadEnLinzoCiudad(enLienzoCiudadID);
			
			if(mostrarPapiro==true){
				dibujaPapiroEnCiudad();
				dibujaInfoEnPapiroCiudad(enLienzoCiudadID,opcionPapiro);
				if(activoPorClickInfo==false){
					mostrarExplicacionInfo(enLienzoCiudadID,opcionPapiro,infoExpX,infoExpY,0);
				}else{
					mostrarExplicacionInfo(enLienzoCiudadID,opcionPapiro,infoExpX,infoExpY,1);
				}	
				if(Ciudades[enLienzoCiudadID-1].edificio.hayColaConst==true||Ciudades[enLienzoCiudadID-1].tropa.hayColaTropa==true){
					dibujarColaConstruccionYTropas(enLienzoCiudadID,opcionPapiro);
					//cancelarConstruccionOAlistamiento(enLienzoCiudadID,opcionPapiro,infoExpX,infoExpY);
				}
				
			}
			
			DibujarGuiObjetos();//dibujar vida, recursos, info para jugador
			
			alertaBatalla();
		}
		
		if(activarBatalla==true){
			dibujarCampoBatalla();
			if(preBatalla==true){
				if(reclutarEnemigo==true){
					crearTropasEnemigas();
					porcentajeFuerzaBruta();
					reclutarEnemigo=false;
				}
				generarCuadroPreBatalla();
			}
			
			
			//dibujarCampoBatalla();
			//dibujarCarrilTropas();
			//areaSalidaBatalla();
			
			
			if(juegoBatalla==true){
				//dibujarCampoBatalla();
				dibujarCarrilTropas();
				areaSalidaBatalla();
				
				dibujarEnLaBatalla();
				movimientoEjercitoMio();
				salidaTropasEnemigas();
				enemigosTropasdibujar();
				movimientoEnemigoMalos();
				choqueConElEnemigo();
				hayPeleaEntreTropas();
				if(finBatalla==false){
					danoResistenciaCiudad();
					finDeBatalla();
				}else{
					if(enemigoPierde==true){
						siGanoBatalla();
					}else{
						//si pierdo
						siPierdoBatalla();
						//console.log("ghg");
					}
				}
				
				
				
			}
		}else{
			produccionRecursos();
			construirFinal();
			reclutarFinal();
		}
		
		VictoriaJuego();
		DerrotaTotalJuego();
	}
	
	
	clearTimeout(temporizador);
	temporizador = setTimeout("bucle()", 32);

}
