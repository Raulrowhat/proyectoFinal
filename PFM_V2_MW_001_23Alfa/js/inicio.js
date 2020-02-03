inicio();
function inicio(){



$("#Jugar").click(function(){
        
        $("#Login").fadeOut(1000)
        
        $("#SelPersonajes").fadeIn(1000)
		$("#P1").show();
		if(Nivel>=2){
			$("#P2").show();
		}
		if(Nivel>=3){
			$("#P3").show();
		}
		
         enEleccionNivel=true;
		 //console.log(enEleccionNivel);
      
        if(enEleccionNivel==true){
		contexto1.clearRect(0,0,3000,3000);
		//console.log("hola");
		dibujarEstandarteEnSeleccionNivel();
	}
})
 
        
  
  
  $("#P1").click(function(){
        if(cImg==true){ 
           enEleccionNivel=false;       
                       
        $("#SelPersonajes").fadeOut(1000)
        $("#CondicionVictoria").hide();
        $("#Juego").fadeIn(1000)
        $("#lienzo2").hide();
		$("#lienzoCiudad").hide();
		$("#Ejercito").show();
		$("#lienzo1").show();
		$("#escenarioT").show();
        //$("#lienzo1").hide();
        console.log("Eligio a personaje 1");
        Iniciar_el_Juego=true;
		enLienzoCiudad=false;
		enLienzoMapa=true;
		Nivel=1;
		
        
        bucle();//pasa al bucle
		}
		else{
             alert("Disculpa las molestias, las imagenes se estan cargando");
             }
  })
 
  
  $("#lienzo1").click(function(e){
		var cont=0;
		
		//console.log(e.pageX + "  " + e.pageY+ "  " +" holis " );
		//console.log((Px1[t]+camara.posX) + "  " + (Py1[t]+camara.posY-mapay_inicial)+ "  " +" holis " );
		if(mostarInventarioTropas==false){
			for(let t = 0; t<10; t++){
				if(e.pageX>=Px1[t]+camara.posX&&
				e.pageX<=Px1[t]+camara.posX+Px2[t]&&
				e.pageY>=Py1[t]+camara.posY-mapay_inicial&&
				e.pageY<=Py1[t]+camara.posY+Py2[t]-mapay_inicial){
					//console.log(e.pageX + "  " + e.pageY+ "  " +" holis " );
					//console.log("  si holis " );
					if(Ciudades[t].pertenencia==1){
						//console.log("  Esa ciudad me pertenece " );
						enLienzoCiudad=true;
						enLienzoMapa=false;
						enLienzoCiudadID=Ciudades[t].id;
						$("#lienzo1").fadeOut(500);
						$("#Ejercito").hide();
						$("#lienzoCiudad").fadeIn(1000);
						$("#AtrasMapa").fadeIn(1000);
						$("#Informacion").fadeIn(1000);
						$("#Construccion").fadeIn(1000);
						$("#Reclutar").fadeIn(1000);
						$("#Atacar").hide();
						puedoAtacar=false;
						
					}else{
						//console.log("  ciudad enemiga " );
						generarAtaque(Ciudades[t].id);
					}
				}else{
					cont+=1;
					//console.log("  ciudad enemiga " );
					//$("#Atacar").hide();
				}
			}
			if(cont==10){
				//puedoAtacar=false;
				$("#Atacar").hide();
				puedoAtacar=false;
			}
			
		}
		
	})
	
	
	  
  $("#lienzo1").mousemove(function(event){
	//console.log(event.pageX + ", " + event.pageY);
	if(mostarInventarioTropas==false){
		dibujarEspada(event.pageX,event.pageY);
			//infoExpX=event.pageX;
			//infoExpY=event.pageY;
			//mostrarExplicacionInfo(enLienzoCiudadID,opcionPapiro,infoExpX,infoExpY,0);
			
		if(puedoAtacar==true){
			espadaX=event.pageX;
			espadaY=event.pageY;
		}
	}
	
  });
	
	
	$("#Ejercito").click(function(){
		
		mostarInventarioTropas=true;
		$("#Ejercito").hide();
		$("#Atacar").hide();
		puedoAtacar=false;
		$("#RegresarEaMapa").show();
	})
	
	
	$("#RegresarEaMapa").click(function(){
		
		mostarInventarioTropas=false;
		$("#Ejercito").show();
		$("#RegresarEaMapa").hide();
	})
	
	$("#AtrasMapa").click(function(){
		$("#lienzoCiudad").fadeOut(500);
		$("#AtrasMapa").fadeOut(500);
		$("#Informacion").fadeOut(500);
		$("#Construccion").fadeOut(500);
		$("#Reclutar").fadeOut(500);
		contextoCiudad.clearRect(0,0,3000,2000);
		$("#lienzo1").fadeIn(1000);
		$("#Ejercito").fadeIn(1000);
		enLienzoCiudad=false;
		enLienzoMapa=true;
		mostrarPapiro=false;
  		$("#CerrarPapiro").hide();
		opcionPapiro=0;
		enLienzoCiudadID=0;
		temporalExplicacion= false;//mostrar la info temporalmente mousemove
		infoExplicacion=false;//mostrar la info con click
		infoExpX=0;
		infoExpY=0;
		activoPorClickInfo=false;
		$("#CerrarInfo").hide();
		segundoClick=0;//para mandar a construir
		for(let co=0;co<16;co++){
			contadorClick[co]=0;
		}// para saber numero de click
		$("#Construir").hide();
		$("#ReclutarTropas").hide();
		$("#Cancelar").hide();
		okConstruccionOrTropa=false;
								
		
    })
	
	$("#Informacion").click(function(){
		mostrarPapiro=true;
		dibujaPapiroEnCiudad();
		$("#CerrarPapiro").show();
		opcionPapiro=1;
		temporalExplicacion= false;//mostrar la info temporalmente mousemove
		infoExplicacion=false;//mostrar la info con click
		infoExpX=0;
		infoExpY=0;
		activoPorClickInfo=false;
		$("#CerrarInfo").hide();
		segundoClick=0;//para mandar a construir
		for(let co=0;co<16;co++){
			contadorClick[co]=0;
		}// para saber numero de click
		//hayColaConst=false;//para saber si ya se esta construyendo un edificio
		$("#Construir").hide();
		$("#ReclutarTropas").hide();
		$("#Cancelar").hide();
		okConstruccionOrTropa=false;
		//saberEdifTropa=0;// para saber que edificio o tropa hacer desde el boton construir o alistar
    })
	
	$("#Construccion").click(function(){
		mostrarPapiro=true;
		dibujaPapiroEnCiudad();
		$("#CerrarPapiro").show();
		opcionPapiro=2;
		temporalExplicacion= false;//mostrar la info temporalmente mousemove
		infoExplicacion=false;//mostrar la info con click
		infoExpX=0;
		infoExpY=0;
		activoPorClickInfo=false;
		$("#CerrarInfo").hide();
		segundoClick=0;//para mandar a construir
		for(let co=0;co<16;co++){
			contadorClick[co]=0;
		}// para saber numero de click
		//hayColaConst=false;//para saber si ya se esta construyendo un edificio
		$("#Construir").hide();
		$("#ReclutarTropas").hide();
		$("#Cancelar").hide();
		okConstruccionOrTropa=false;
		//saberEdifTropa=0;// para saber que edificio o tropa hacer desde el boton construir o alistar
    })
	
	$("#Reclutar").click(function(){
		mostrarPapiro=true;
		dibujaPapiroEnCiudad();
		$("#CerrarPapiro").show();
		opcionPapiro=3;
		temporalExplicacion= false;//mostrar la info temporalmente mousemove
		infoExplicacion=false;//mostrar la info con click
		infoExpX=0;
		infoExpY=0;
		activoPorClickInfo=false;
		$("#CerrarInfo").hide();
		segundoClick=0;//para mandar a construir
		for(let co=0;co<16;co++){
			contadorClick[co]=0;
		}// para saber numero de click
		//hayColaConst=false;//para saber si ya se esta construyendo un edificio
		$("#Construir").hide();
		$("#ReclutarTropas").hide();
		$("#Cancelar").hide();
		okConstruccionOrTropa=false;
		
		
    })
   
   $("#CerrarPapiro").click(function(){
	    mostrarPapiro=false;
		contextoCiudad.clearRect(0,0,3000,2000);
		$("#CerrarPapiro").hide();
		$("#CerrarInfo").hide();
		opcionPapiro=0;
		temporalExplicacion= false;//mostrar la info temporalmente mousemove
		infoExplicacion=false;//mostrar la info con click
		infoExpX=0;
		infoExpY=0;
		activoPorClickInfo=false;
		$("#Construir").hide();
		$("#ReclutarTropas").hide();
		segundoClick=0;//para mandar a construir
		for(let co=0;co<16;co++){
			contadorClick[co]=0;
		}// para saber numero de click
		$("#Cancelar").hide();
		okConstruccionOrTropa=false;
    })
   
   
  
  $("#lienzoCiudad").mousemove(function(event){
	//console.log(event.pageX + ", " + event.pageY);
	
	if(mostrarPapiro==true&&activoPorClickInfo==false){
		infoExpX=event.pageX;
		infoExpY=event.pageY;
		//mostrarExplicacionInfo(enLienzoCiudadID,opcionPapiro,infoExpX,infoExpY,0);
		
	}
	
	
  });
	
   $("#lienzoCiudad").click(function(e2){
	
		
		//console.log(e2.pageX + "  " + e2.pageY+ "  " +" holis " );
	if(mostrarPapiro==true){
		infoExpX=e2.pageX;
		infoExpY=e2.pageY;
		//mostrarExplicacionInfo(enLienzoCiudadID,opcionPapiro,infoExpX,infoExpY,0);
		mostrarExplicacionInfo(enLienzoCiudadID,opcionPapiro,infoExpX,infoExpY,1);
		if(opcionPapiro==2||opcionPapiro==3){
			//console.log("");
			seleccionarEdificioConstruirOTropaReclutar(enLienzoCiudadID,opcionPapiro,infoExpX,infoExpY);
			cancelarConstruccionOAlistamiento(enLienzoCiudadID,opcionPapiro,infoExpX,infoExpY);
		}
		
	}
		
		
		
		
	})
   
    $("#CerrarInfo").click(function(){
	    //mostrarPapiro=false;
		//contextoCiudad.clearRect(0,0,3000,2000);
		$("#CerrarInfo").hide();
		
		temporalExplicacion= false;//mostrar la info temporalmente mousemove
		infoExplicacion=false;//mostrar la info con click
		infoExpX=0;
		infoExpY=0;
		activoPorClickInfo=false;
		segundoClick=0;//para mandar a construir
		for(let co=0;co<16;co++){
			contadorClick[co]=0;
		}// para saber numero de click
		$("#Construir").hide();
		okConstruccionOrTropa=false;
  
    })
	
	 $("#Construir").click(function(){
	    //mostrarPapiro=false;
		//contextoCiudad.clearRect(0,0,3000,2000);
		$("#CerrarInfo").hide();
		
		temporalExplicacion= false;//mostrar la info temporalmente mousemove
		infoExplicacion=false;//mostrar la info con click
		infoExpX=0;
		infoExpY=0;
		activoPorClickInfo=false;
		segundoClick=0;//para mandar a construir
		for(let co=0;co<16;co++){
			contadorClick[co]=0;
		}// para saber numero de click
		$("#Construir").hide();
		materiasUsarConstruccionYTropas(enLienzoCiudadID,Ciudades[enLienzoCiudadID-1].edificioAConstruir);
		if(okConstruccionOrTropa==true){
			$("#Cancelar").fadeIn(1000);
			
			switch (Ciudades[enLienzoCiudadID-1].edificioAConstruir) {
				case 1:	
				startTimeConstruir(enLienzoCiudadID,Ciudades[enLienzoCiudadID-1].edificioDinero);
				break;
				case 2:	
				startTimeConstruir(enLienzoCiudadID,Ciudades[enLienzoCiudadID-1].edificioRecursoMad);
				break;
				case 3:	
				startTimeConstruir(enLienzoCiudadID,Ciudades[enLienzoCiudadID-1].edificioRecursoLad);
				break;
				case 4:	
				startTimeConstruir(enLienzoCiudadID,Ciudades[enLienzoCiudadID-1].edificioRecursoMet);
				break;
				case 5:	
				startTimeConstruir(enLienzoCiudadID,Ciudades[enLienzoCiudadID-1].edificioTropaInf);
				break;
				case 6:	
				startTimeConstruir(enLienzoCiudadID,Ciudades[enLienzoCiudadID-1].edificioTropaArq);
				break;
				case 7:	
				startTimeConstruir(enLienzoCiudadID,Ciudades[enLienzoCiudadID-1].edificioTropaCab);
				break;
				
				
				
				
				
				default: break;
			}
			
			
			
			//Ciudades[enLienzoCiudadID-1].edificioAConstruir=1;
			Ciudades[enLienzoCiudadID-1].hayColaConst=true;
			//haga dibujo
			okConstruccionOrTropa=false;
		
		}
    })
	
	$("#ReclutarTropas").click(function(){
	    //mostrarPapiro=false;
		//contextoCiudad.clearRect(0,0,3000,2000);
		$("#CerrarInfo").hide();
		
		temporalExplicacion= false;//mostrar la info temporalmente mousemove
		infoExplicacion=false;//mostrar la info con click
		infoExpX=0;
		infoExpY=0;
		activoPorClickInfo=false;
		segundoClick=0;//para mandar a construir
		for(let co=0;co<16;co++){
			contadorClick[co]=0;
		}// para saber numero de click
		$("#ReclutarTropas").hide();
		materiasUsarConstruccionYTropas(enLienzoCiudadID,Ciudades[enLienzoCiudadID-1].tropaAAlistar);
		if(okConstruccionOrTropa==true){
			$("#Cancelar").fadeIn(1000);
			
			switch (Ciudades[enLienzoCiudadID-1].tropaAAlistar) {
				case 8:	
				Ciudades[enLienzoCiudadID-1].nivelEdiAlInDeRecInf=Ciudades[enLienzoCiudadID-1].edificioTropaInf;
				//console.log("holis"+Ciudades[enLienzoCiudadID-1].nivelEdiAlInDeRecInf);
				startTimeTropa(enLienzoCiudadID,Ciudades[enLienzoCiudadID-1].edificioTropaInf,Ciudades[enLienzoCiudadID-1].tropaAAlistar);
				
				break;
				case 9:	
				Ciudades[enLienzoCiudadID-1].nivelEdiAlInDeRecInf=Ciudades[enLienzoCiudadID-1].edificioTropaInf;
				startTimeTropa(enLienzoCiudadID,Ciudades[enLienzoCiudadID-1].edificioTropaInf,Ciudades[enLienzoCiudadID-1].tropaAAlistar);
				break;
				case 10:	
				Ciudades[enLienzoCiudadID-1].nivelEdiAlInDeRecInf=Ciudades[enLienzoCiudadID-1].edificioTropaInf;
				startTimeTropa(enLienzoCiudadID,Ciudades[enLienzoCiudadID-1].edificioTropaInf,Ciudades[enLienzoCiudadID-1].tropaAAlistar);
				break;
				case 11:
				Ciudades[enLienzoCiudadID-1].nivelEdiAlInDeRecArq=Ciudades[enLienzoCiudadID-1].edificioTropaArq;				
				startTimeTropa(enLienzoCiudadID,Ciudades[enLienzoCiudadID-1].edificioTropaArq,Ciudades[enLienzoCiudadID-1].tropaAAlistar);
				break;
				case 12:
				Ciudades[enLienzoCiudadID-1].nivelEdiAlInDeRecArq=Ciudades[enLienzoCiudadID-1].edificioTropaArq;				
				startTimeTropa(enLienzoCiudadID,Ciudades[enLienzoCiudadID-1].edificioTropaArq,Ciudades[enLienzoCiudadID-1].tropaAAlistar);
				break;
				case 13:
				Ciudades[enLienzoCiudadID-1].nivelEdiAlInDeRecArq=Ciudades[enLienzoCiudadID-1].edificioTropaArq;
				startTimeTropa(enLienzoCiudadID,Ciudades[enLienzoCiudadID-1].edificioTropaArq,Ciudades[enLienzoCiudadID-1].tropaAAlistar);
				break;
				case 14:	
				Ciudades[enLienzoCiudadID-1].nivelEdiAlInDeRecCab=Ciudades[enLienzoCiudadID-1].edificioTropaCab;
				startTimeTropa(enLienzoCiudadID,Ciudades[enLienzoCiudadID-1].edificioTropaCab,Ciudades[enLienzoCiudadID-1].tropaAAlistar);
				break;
				case 15:	
				Ciudades[enLienzoCiudadID-1].nivelEdiAlInDeRecCab=Ciudades[enLienzoCiudadID-1].edificioTropaCab;
				startTimeTropa(enLienzoCiudadID,Ciudades[enLienzoCiudadID-1].edificioTropaCab,Ciudades[enLienzoCiudadID-1].tropaAAlistar);
				break;
				case 16:	
				Ciudades[enLienzoCiudadID-1].nivelEdiAlInDeRecCab=Ciudades[enLienzoCiudadID-1].edificioTropaCab;
				startTimeTropa(enLienzoCiudadID,Ciudades[enLienzoCiudadID-1].edificioTropaCab,Ciudades[enLienzoCiudadID-1].tropaAAlistar);
				break;
				default: break;
			}
			
			//Ciudades[enLienzoCiudadID-1].edificioAConstruir=1;
			Ciudades[enLienzoCiudadID-1].hayColaTropa=true;
			//haga dibujo
		
		
		}
  
    })
	
	
	
	$("#Cancelar").click(function(){
		$("#Cancelar").hide();
		if(opcionPapiro==2){
			Ciudades[enLienzoCiudadID-1].hayColaConst=false;
			//quitar tiempo a 0
			//devolver materiales
			Ciudades[enLienzoCiudadID-1].tiempoTerminarC=0;
			devolverRecursos(enLienzoCiudadID,Ciudades[enLienzoCiudadID-1].edificioAConstruir);
		}
		if(opcionPapiro==3){
			Ciudades[enLienzoCiudadID-1].hayColaTropa=false;
			//quitar tiempo a 0
			//devolver materiales
			Ciudades[enLienzoCiudadID-1].tiempoTerminarT=0;
			devolverRecursos(enLienzoCiudadID,Ciudades[enLienzoCiudadID-1].tropaAAlistar);
		}
		for(let co=0;co<16;co++){
			contadorClick[co]=0;
		}// para saber numero de click
		
		
		
	})
   
   
   
   // para batallar y atacar
   
   
   $("#Atacar").click(function(){
	   enLienzoCiudad=false;
		enLienzoMapa=false;
		contextoJ1.clearRect(0,0,3000,3000);
        contextoJ2.clearRect(0,0,3000,3000);
        contextoT.clearRect(0,0,256,256);
		
		$("#lienzo1").hide();
		$("#lienzoCiudad").hide();
		$("#escenarioT").hide();
		$("#Ejercito").hide();
		activarBatalla=true;
		$("#Atacar").hide();
		puedoAtacar=false;
		$("#RegresarMapa").show();
		//$("#lienzoAtaque2").show();
		$("#lienzoAtaque").fadeIn(500);
	
		tiempoPausado=tiempoRestante-time;
		for (let ti=0;ti<10;ti++){
			Ciudades[ti].tiempoPausadoPro=Ciudades[ti].tiempoTerminarPro-time;
			Ciudades[ti].tiempoPausadoCons=Ciudades[ti].tiempoTerminarC-time;
			Ciudades[ti].tiempoPausadoRec=Ciudades[ti].tiempoTerminarT-time;
			
		}
		
		preBatalla=true;
		reclutarEnemigo=true;
		$("#IniciarBatalla").show();
		$("#SimuladorBatalla").show();
		numContTropMio=0;
		//puedoAtacar=false;
   })
   
   
   $("#RegresarMapa").click(function(){
	   //enLienzoCiudad=false;
	   activarBatalla=false;
		
		//contextoJ1.clearRect(0,0,3000,3000);
        //contextoJ2.clearRect(0,0,3000,3000);
		contextoBatalla.clearRect(0,0,3000,3000);
        //contextoT.clearRect(0,0,256,256);
		$("#lienzoAtaque").hide();
		$("#lienzo1").show();
		$("#Ejercito").show();
		//$("#lienzoCiudad").hide();
		$("#escenarioT").show();
		enLienzoMapa=true;
		
		$("#Atacar").hide();
		puedoAtacar=false;
		$("#RegresarMapa").hide();
		iniciarTiempo=true;
		$("#SimuladorBatalla").hide();
		preBatalla=false;
        juegoBatalla=false;
		reclutarEnemigo=false;
		$("#IniciarBatalla").hide();
		for (let ti=0;ti<10;ti++){
			Ciudades[ti].tiempoPausadoPro=0;
			Ciudades[ti].tiempoPausadoCons=0;
			Ciudades[ti].tiempoPausadoRec=0;
			
		}
		//puedoAtacar=false;
   })
   
   $("#IniciarBatalla").click(function(){
		$("#IniciarBatalla").hide();
		$("#RegresarMapa").hide();
		$("#Abandonar").show();
		preBatalla=false;
        juegoBatalla=true;
		reclutarEnemigo=false;
		$("#SimuladorBatalla").hide();
     })
   
   $("#FailBatalla").click(function(){
	   $("#FailBatalla").hide();
	   $("#IniciarBatalla").hide();
		$("#RegresarMapa").hide();
		$("#Abandonar").hide();
		preBatalla=false;
        juegoBatalla=false;
		reclutarEnemigo=false;
		
		activarBatalla=false;
		
		//contextoJ1.clearRect(0,0,3000,3000);
        //contextoJ2.clearRect(0,0,3000,3000);
		contextoBatalla.clearRect(0,0,3000,3000);
        //contextoT.clearRect(0,0,256,256);
		$("#lienzoAtaque").hide();
		$("#lienzo1").show();
		$("#Ejercito").show();
		//$("#lienzoCiudad").hide();
		$("#escenarioT").show();
		enLienzoMapa=true;
		
		$("#Atacar").hide();
		puedoAtacar=false;
		$("#RegresarMapa").hide();
		iniciarTiempo=true;
		tiempoPausado=0;
		for (let ti=0;ti<10;ti++){
			Ciudades[ti].tiempoPausadoPro=0;
			Ciudades[ti].tiempoPausadoCons=0;
			Ciudades[ti].tiempoPausadoRec=0;
			
		}
		//perderAbandonarBatalla();
		for (let e21=0;e21<9;e21++){
			ejercitoEnemigo[e21]=0;
		}
		contadorEnemigo=0;
		contadorNoJuega=0;
		
		
		
		contadorEnemigo=0;
		contadorNoJuega=0;
		
		
		var temID31=0;
		//var temporalCiudad=0;
		for(let C72 = 0; C72<10; C72++){
			if(Ciudades[C72].pertenencia==1){
				temID31=Ciudades[C72].id;
				
				//console.log("hola");
				//console.log(temID31);
			}
			
			Ciudades[C72].reestablecerPuntosVida(C72);
			
		}
		/*if(batallaDefensiva==true){
			Ciudades[temID31-1].pertenencia=0;
		}*/
		
		
		finBatalla=false;//para saber que termino la batalla;
	    ganancia=0;//lo que gane al ganar la batalla;
	    yoPierdo=false;//para saber si pierdo yo
	    enemigoPierde=false;//para saber si pierde enemigo
		batallaDefensiva=false;
		abandono=false;
		numContTropMio=0;
		//console.log("perdedor")
		$("#SimuladorBatalla").hide();
    
   })

  $("#Abandonar").click(function(){
		$("#FailBatalla").show();
		perderAbandonarBatalla();
		abandono=true;
		finBatalla=true;
		numContTropMio=0;
		$("#SimuladorBatalla").hide();
		
	 })
		
   
   $("#lienzoAtaque").click(function(ea){
	   
	   
	  
	   puntoSalidaTropaSel(ea.pageX,ea.pageY)
	   tropaSeleccionarEnBatalla(ea.pageX,ea.pageY);
	   
   }) 
   
   
   $("#VictoriaBatalla").click(function(){
	   
		$("#IniciarBatalla").hide();
		$("#RegresarMapa").hide();
		$("#Abandonar").hide();
		$("#VictoriaBatalla").hide();
		preBatalla=false;
        juegoBatalla=false;
		reclutarEnemigo=false;
		
		activarBatalla=false;
		
		//contextoJ1.clearRect(0,0,3000,3000);
        //contextoJ2.clearRect(0,0,3000,3000);
		contextoBatalla.clearRect(0,0,3000,3000);
        //contextoT.clearRect(0,0,256,256);
		$("#lienzoAtaque").hide();
		$("#lienzo1").show();
		$("#Ejercito").show();
		//$("#lienzoCiudad").hide();
		$("#escenarioT").show();
		enLienzoMapa=true;
		
		$("#Atacar").hide();
		puedoAtacar=false;
		$("#RegresarMapa").hide();
		iniciarTiempo=true;
		tiempoPausado=0;
		for (let ti=0;ti<10;ti++){
			Ciudades[ti].tiempoPausadoPro=0;
			Ciudades[ti].tiempoPausadoCons=0;
			Ciudades[ti].tiempoPausadoRec=0;
			
		}
		//perderAbandonarBatalla();
		for (let e21=0;e21<9;e21++){
			ejercitoEnemigo[e21]=0;
		}
		contadorEnemigo=0;
		contadorNoJuega=0;
	
		
		var temID3=0;
		//var temporalCiudad=0;
		for(let C72 = 0; C72<10; C72++){
			if(Ciudades[C72].pertenencia==1){
				temID3=Ciudades[C72].id;
				//console.log(temID3);
			}
			
			Ciudades[C72].reestablecerPuntosVida(C72);
		}
		if(batallaDefensiva==false){
			Ciudades[temID3].pertenencia=1;
		}
		
	
		
		finBatalla=false;//para saber que termino la batalla;
	    ganancia=0;//lo que gane al ganar la batalla;
	    yoPierdo=false;//para saber si pierdo yo
	    enemigoPierde=false;//para saber si pierde enemigo
		batallaDefensiva=false;
		numContTropMio=0;
		$("#SimuladorBatalla").hide();
   
   })
   
   
   
   $("#SimuladorBatalla").click(function(){
	
		$("#IniciarBatalla").hide();
		$("#RegresarMapa").hide();
		$("#SimuladorBatalla").hide();
		preBatalla=false;
        juegoBatalla=true;
		reclutarEnemigo=false;
		simuladorBatalla();
		
	 })
   
   $("#CondicionVictoria").click(function(){
		finNivel = true;
		$("#CondicionVictoria").hide();
		if(Nivel==1){
			$("#P2").show();
		}
		if(Nivel==2){
			$("#P3").show();
		}
    })
	
	
	
	$("#CondicionDerrota").click(function(){
		
		$("#CondicionDerrota").hide();
		
		
		if(Nivel==1){
			
			
			
			$("#Login").hide();
			
			$("#Juego").fadeOut(500);
			$("#lienzo2").hide();
			$("#lienzoCiudad").hide();
			$("#Ejercito").hide();
			$("#lienzo1").hide();
			$("#escenarioT").hide();
			$("#lienzoAtaque2").hide();
			$("#lienzoAtaque").hide();
			//$("#lienzo1").hide();
			
		
			//bandera para iniciar el juego
			Iniciar_el_Juego=false;
			UbicaionZonasNoGrises();
			CiudadJugador=1;//para saber cuantas ciudades tiene el jugador en su control
			enLienzoMapa=false; //para saber en que lienzo estoy
			numCorazon=3;
			Dinero=500;
			numTropas=100;
			numMadera=500;
			numLadrillos=500;
			numMetal=500;
			Recursos=numMadera+numLadrillos+numMetal;
			for(let c=0;c<10;c++){
				
				//Ciudades[c].existo();
				Ciudades[c].id=c+1;
				if(c<=0){
					Ciudades[c].pertenencia=1;  ////////////////////////CIUDADES-CIUDADES////////////////////////////////
				}else{
					Ciudades[c].pertenencia=0;
				}
				Ciudades[c].ubicacionEnElMapa(c);
				Ciudades[c].nombreCiudad(c);
				//console.log(Ciudades[c].nombre);
			}

			enLienzoCiudad=false; //para saber en que lienzo estoy
			enLienzoCiudadID=0;//saber en que ciudad estoy en el lienzo ciudad
			mostrarPapiro=false;
			opcionPapiro=0;//para saber si estamos en info, construir o reclutar en el papiro
			temporalExplicacion= false;//mostrar la info temporalmente mousemove
			infoExplicacion=false;//mostrar la info con click
			infoExpX=0;//x de donde esta el mouese o el click en el papiro de informacion, const o reclutar
			infoExpY=0;//y de donde esta el mouese o el click en el papiro de informacion, const o reclutar
			activoPorClickInfo=false;//para saber si activo la info por un click
			segundoClick=0;//para mandar a construir
			for(let co=0;co<16;co++){
				contadorClick[co]=0;
			}
			okConstruccionOrTropa=false;//dar ok para construir o para saber si puedo reclutar tropas
			tropasInf1=40;
			tropasInf2=0;//infanteria
			tropasInf3=0;
			tropasArq1=40;
			tropasArq2=0;//arqueria
			tropasArq3=0;
			tropasCab1=20;
			tropasCab2=0;//caballeria
			tropasCab3=0;
			numTropas=tropasInf1+tropasArq1+tropasCab1+tropasInf2+tropasInf3+tropasArq2+tropasCab2+tropasArq3+tropasCab3;
			fuerzaTropasInf1=50;
			fuerzaTropasInf2=100;//infanteria porcentaje de fuerza para combate
			fuerzaTropasInf3=150;
			fuerzaTropasArq1=40;
			fuerzaTropasArq2=80;//arqueria porcentaje de fuerza para combate
			fuerzaTropasArq3=125;
			fuerzaTropasCab1=75;
			fuerzaTropasCab2=125;//caballeria porcentaje de fuerza para combate
			fuerzaTropasCab3=200;
			miFuerzaBruta=0;//fuerza bruta de pelea mia
			enemigoFuerzaBruta=0;//fuerza bruta de pelea enemigo
			for (let e1=0;e1<9;e1++){
				ejercitoEnemigo[e1]=0;
			}
			contadorNoJuega=0;//si jugador no coloca tropas dar permiso a Ia a que si
			mostarInventarioTropas=false;// mostrar inventario de las tropas en el mapa
			activarBatalla=false;// para activar el lienzo batalla
			idCiudadAtacada=0;//ciudad que ataco o recibe el ataque
			idCiudadDesdeAtaque=0;//ciudad desde donde viene el ataque
			batallaDefensiva=false;//para saber si ataco o me atacan
			tropaSeleccionB=0;//seleccionar tropa en la batalla
			posTropaSelec=0;//posicion a colocar de la tropa seleccionada
			tropaX[0]=0;
			tropaY[0]=0;
			tropaNumSoldado[0]=0;
			tipoSoldado[0]=0;
			tropaEnemigaX[0]=0;
			tropaEnemigaY[0]=0;
			tropaEnemigaNumSoldado[0]=0;
			tipoEnemigaSoldado[0]=0;
			tiempoCreacionTropa=0;//intervalo de tiempo para que de salida a tropa enemiga
			creandoSalidaEnemiga=true;//darle estar al tiempo de salida enemiga
			contadorEnemigo=0;//contar tamaño array de tropas enemigas
			tropaPeleaMia[0]=-1;
			tropaPeleaMia[1]=-1;
			tropaPeleaMia[2]=-1;
			tropaPeleaE[0]=-1;
			tropaPeleaE[1]=-1;
			tropaPeleaE[2]=-1;
			finBatalla=false;//para saber que termino la batalla;
			ganancia=0;//lo que gane al ganar la batalla;
			yoPierdo=false;//para saber si pierdo yo
			enemigoPierde=false;//para saber si pierde enemigo
			abandono=false;//saber si abandone
			numContTropMio=0;//saber tropass muertas en batalla
			preBatalla=false;// para activar lo de pre batalla y mostrar pre batalla
			juegoBatalla=false;// para activar el juego de batalla y mostrarlo
			reclutarEnemigo=false; //para reclutar tropas enemigas una sola vez
			tiempoAtaque=300;//segundos para hacer un ataque
			iniciarTiempo=true;// para iniciar el tiempo
			tiempoRestante=0;//segundos que faltan para hacer un ataque
			tiempoPausado=0;// tiempo al entrar en batalla y no pelear
			contPeligro=0;// para que titile el mensaje alerta
			espada=false;//dibujar espada
			espadaX=0;//coordenada X espada
			espadaY=0;//coordenada Y espada
			puedoAtacar=false;//dibujar espada para atacar

			time=0;//tiempo del juego
			camara.posX = 0;
			camara.posY = 0;
			//inicializar camara fin
			//final juego
			finNivel = false;
					
			
			
			
			
			$("#SelPersonajes").fadeIn(1000);
			
			 enEleccionNivel=true;
			 //console.log(enEleccionNivel);
		  
			if(enEleccionNivel==true){
				contexto1.clearRect(0,0,3000,3000);
				//console.log("hola");
				dibujarEstandarteEnSeleccionNivel();
			}
				
			
			
			
			
			
			
			
			
			
		}else{
			if(Nivel==2){
				console.log("pierdes nivel dos");
				Nivel=3;
			}else{
				if(Nivel==3){
					console.log("pierdes nivel 3");
					Nivel=4;
				}
				
			}
		}
		
    })
   
  $("#AtrasP").click(function(){
			
		$("#P1").hide();
		$("#P2").hide();
		$("#P3").hide();
		$("#SelPersonajes").fadeOut(750);
		$("#Login").fadeIn(1000);
        
        
		
         enEleccionNivel=false;
		 //console.log(enEleccionNivel);
      
       
		contexto1.clearRect(0,0,3000,3000);

	})
	
	$("#AtrasTutorial").click(function(){
			
		$("#TutorialJ").fadeOut(500);
		$("#Login").fadeIn(1000)
		
		$("#SiguienteTutorial").hide();
		$("#AtrasTutorial").hide();
		inTutorial=false;

		contadorPasos=0;
		contextoTutorial.clearRect(0,0,3000,3000);
		
		$("#InformacionTutorial").hide();
		$("#ConstruccionTutorial").hide();
		$("#ReclutarTutorial").hide();
		clickTropaTutorial=0;
		dibujarTropaTutorial=false;

	})
	
	
	$("#SiguienteTutorial").click(function(){
		
		contadorPasos+=1;
		contextoTutorial.clearRect(0,0,3000,3000);
		constTutorial=false;
		recTutorial=false;
		infTutorial=false;
		
		construirTutorial=false;
		reclutarTutorial=false;
		tipoConstruirTutorial=0;
		tipoReclutarTutorial=0;
		clickTutorial=0;
		
	})
	

  $("#Tutorial").click(function(){
		
		if(cImg==true){ 
		
			inTutorial=true;
			$("#Login").fadeOut(750)
			$("#TutorialJ").fadeIn(1000);
			$("#SiguienteTutorial").fadeIn(1100);
			$("#AtrasTutorial").fadeIn(1100);
			//console.log(inTutorial);
			 bucle();//pasa al bucle
		}else{
			alert("Disculpa las molestias, las imagenes se estan cargando");
		}
    })
	
	
	$("#AtacarTutorial").click(function(){
		
		contadorPasos+=1;
		contextoTutorial.clearRect(0,0,3000,3000);
		constTutorial=false;
		recTutorial=false;
		infTutorial=false;
		
		construirTutorial=false;
		reclutarTutorial=false;
		tipoConstruirTutorial=0;
		tipoReclutarTutorial=0;
		clickTutorial=0;
		$("#AtacarTutorial").hide();

		
	})
	
	
	$("#lienzoTutorial1").click(function(ea1){
	   
	   //puntoSalidaTropaSel(ea.pageX,ea.pageY)
	   //tropaSeleccionarEnBatalla(ea.pageX,ea.pageY);
	   //console.log(ea1.pageX);
	   //console.log(ea1.pageY);
	   if(ea1.pageX>=220&&ea1.pageX<=284&&ea1.pageY>=400&&ea1.pageY<=464&&contadorPasos==4){
		   contadorPasos+=1;
		   contextoTutorial.clearRect(0,0,3000,3000);
		   $("#ConstruccionTutorial").show();
		   $("#ReclutarTutorial").show();
		   $("#InformacionTutorial").show();
		   $("#SiguienteTutorial").show();
	   }
	   
	   if(contadorPasos==6&&constTutorial==true){
		   
		   if(ea1.pageX>=210&&ea1.pageX<=242&&ea1.pageY>=150&&ea1.pageY<=182){
			  if(clickTutorial==2&&tipoConstruirTutorial==0&&construirTutorial==false){
				   clickTutorial=0;
				   tipoConstruirTutorial=1;
				   construirTutorial=true;
			  }
			  clickTutorial+=1;
			  
		   }
		   
		   if(ea1.pageX>=310&&ea1.pageX<=342&&ea1.pageY>=150&&ea1.pageY<=182){
			  if(clickTutorial==2&&tipoConstruirTutorial==0&&construirTutorial==false){
				   clickTutorial=0;
				   tipoConstruirTutorial=2;
				   construirTutorial=true;
			  }
			  clickTutorial+=1;
			  
		   }
		   
		   if(ea1.pageX>=410&&ea1.pageX<=442&&ea1.pageY>=150&&ea1.pageY<=182){
			  if(clickTutorial==2&&tipoConstruirTutorial==0&&construirTutorial==false){
				   clickTutorial=0;
				   tipoConstruirTutorial=3;
				   construirTutorial=true;
			  }
			  clickTutorial+=1;
			  
		   }
		   
		   if(ea1.pageX>=210&&ea1.pageX<=242&&ea1.pageY>=200&&ea1.pageY<=232){
			  if(clickTutorial==2&&tipoConstruirTutorial==0&&construirTutorial==false){
				   clickTutorial=0;
				   tipoConstruirTutorial=4;
				   construirTutorial=true;
			  }
			  clickTutorial+=1;
			  
		   }
		   
		   if(ea1.pageX>=310&&ea1.pageX<=342&&ea1.pageY>=200&&ea1.pageY<=232){
			  if(clickTutorial==2&&tipoConstruirTutorial==0&&construirTutorial==false){
				   clickTutorial=0;
				   tipoConstruirTutorial=5;
				   construirTutorial=true;
			  }
			  clickTutorial+=1;
			  
		   }
		   
		   if(ea1.pageX>=410&&ea1.pageX<=442&&ea1.pageY>=200&&ea1.pageY<=232){
			  if(clickTutorial==2&&tipoConstruirTutorial==0&&construirTutorial==false){
				   clickTutorial=0;
				   tipoConstruirTutorial=6;
				   construirTutorial=true;
			  }
			  clickTutorial+=1;
			  
		   }
		   
		   if(ea1.pageX>=310&&ea1.pageX<=342&&ea1.pageY>=250&&ea1.pageY<=282){
			  if(clickTutorial==2&&tipoConstruirTutorial==0&&construirTutorial==false){
				   clickTutorial=0;
				   tipoConstruirTutorial=7;
				   construirTutorial=true;
			  }
			  clickTutorial+=1;
			  
		   }
		   
		
		   
	   }
	   
	   
	    if(contadorPasos==7&&recTutorial==true){
		   
		   if(ea1.pageX>=210&&ea1.pageX<=242&&ea1.pageY>=150&&ea1.pageY<=182){
			  if(clickTutorial==2&&tipoReclutarTutorial==0&&reclutarTutorial==false){
				   clickTutorial=0;
				   tipoReclutarTutorial=1;
				   reclutarTutorial=true;
			  }
			  clickTutorial+=1;
			  
		   }
		   
		   if(ea1.pageX>=310&&ea1.pageX<=342&&ea1.pageY>=150&&ea1.pageY<=182){
			  if(clickTutorial==2&&tipoReclutarTutorial==0&&reclutarTutorial==false){
				   clickTutorial=0;
				   tipoReclutarTutorial=2;
				   reclutarTutorial=true;
			  }
			  clickTutorial+=1;
			  
		   }
		   
		   if(ea1.pageX>=410&&ea1.pageX<=442&&ea1.pageY>=150&&ea1.pageY<=182){
			  if(clickTutorial==2&&tipoReclutarTutorial==0&&reclutarTutorial==false){
				   clickTutorial=0;
				   tipoReclutarTutorial=3;
				   reclutarTutorial=true;
			  }
			  clickTutorial+=1;
			  
		   }
		   
		   if(ea1.pageX>=210&&ea1.pageX<=242&&ea1.pageY>=200&&ea1.pageY<=232){
			  if(clickTutorial==2&&tipoReclutarTutorial==0&&reclutarTutorial==false){
				   clickTutorial=0;
				   tipoReclutarTutorial=4;
				   reclutarTutorial=true;
			  }
			  clickTutorial+=1;
			  
		   }
		   
		   if(ea1.pageX>=310&&ea1.pageX<=342&&ea1.pageY>=200&&ea1.pageY<=232){
			  if(clickTutorial==2&&tipoReclutarTutorial==0&&reclutarTutorial==false){
				   clickTutorial=0;
				   tipoReclutarTutorial=5;
				   reclutarTutorial=true;
			  }
			  clickTutorial+=1;
			  
		   }
		   
		   if(ea1.pageX>=410&&ea1.pageX<=442&&ea1.pageY>=200&&ea1.pageY<=232){
			  if(clickTutorial==2&&tipoReclutarTutorial==0&&reclutarTutorial==false){
				   clickTutorial=0;
				   tipoReclutarTutorial=6;
				   reclutarTutorial=true;
			  }
			  clickTutorial+=1;
			  
		   }
		   
		   if(ea1.pageX>=210&&ea1.pageX<=242&&ea1.pageY>=250&&ea1.pageY<=282){
			  if(clickTutorial==2&&tipoReclutarTutorial==0&&reclutarTutorial==false){
				   clickTutorial=0;
				   tipoReclutarTutorial=7;
				   reclutarTutorial=true;
			  }
			  clickTutorial+=1;
			  
		   }
		   
		   if(ea1.pageX>=310&&ea1.pageX<=342&&ea1.pageY>=250&&ea1.pageY<=282){
			  if(clickTutorial==2&&tipoReclutarTutorial==0&&reclutarTutorial==false){
				   clickTutorial=0;
				   tipoReclutarTutorial=8;
				   reclutarTutorial=true;
			  }
			  clickTutorial+=1;
			  
		   }
		   
		   if(ea1.pageX>=410&&ea1.pageX<=442&&ea1.pageY>=250&&ea1.pageY<=282){
			  if(clickTutorial==2&&tipoReclutarTutorial==0&&reclutarTutorial==false){
				   clickTutorial=0;
				   tipoReclutarTutorial=9;
				   reclutarTutorial=true;
			  }
			  clickTutorial+=1;
			  
		   }
		   
		
		   
	   }
	   
		if(contadorPasos==8){
			if(ea1.pageX>=100&&ea1.pageX<=164&&ea1.pageY>=250&&ea1.pageY<=314){
				$("#AtacarTutorial").show();
			}
		}
	
		if(contadorPasos==9){
			if(clickTropaTutorial==1&&ea1.pageX>=362&&ea1.pageX<=412&&ea1.pageY>=227&&ea1.pageY<=277){
				dibujarTropaTutorial=true;
			}
			
			if(ea1.pageX>=69&&ea1.pageX<=101&&ea1.pageY>=309&&ea1.pageY<=341){
				clickTropaTutorial=1;
			}else{
				clickTropaTutorial=0;
			}
		}
	
	
	
	}) 
	
	
		
	$("#InformacionTutorial").click(function(){
		
		//saberEdifTropa=0;// para saber que edificio o tropa hacer desde el boton construir o alistar
		constTutorial=false;
		recTutorial=false;
		infTutorial=true;
    })
	
	$("#ConstruccionTutorial").click(function(){
		
		constTutorial=true;
		recTutorial=false;
		infTutorial=false;
		//saberEdifTropa=0;// para saber que edificio o tropa hacer desde el boton construir o alistar
    })
	
	$("#ReclutarTutorial").click(function(){
		
		constTutorial=false;
		recTutorial=true;
		infTutorial=false;
		
    })
	
	
	
	$("#Creditos").click(function(){
			
		 $("#Login").fadeOut(1000)
        
        $("#CreditosC").fadeIn(1000)
		  $("#AtrasCr").fadeIn(1000)

	})
	
	$("#AtrasCr").click(function(){
			
		$("#CreditosC").fadeOut(1000)
		  $("#AtrasCr").fadeOut(1000)	
		 $("#Login").fadeIn(1000)
        
        

	})
	
	
	
	$("#Instrucciones").click(function(){
			
		 $("#Login").fadeOut(1000)
        
        $("#Instruccion").fadeIn(1000)
		  $("#SiguienteI").fadeIn(1000)
		   $("#AtrasI").fadeIn(1000)
		   $("#TituloI2").fadeIn(1000)
		  $("#TituloI3").fadeIn(1000)
		  $("#TituloI4").fadeIn(1000)
		  $("#TituloI5").fadeIn(1000)

	})
	
	$("#AtrasI").click(function(){
			
		
        
        $("#Instruccion").fadeOut(1000)
		  $("#SiguienteI").fadeOut(1000)
		   $("#AtrasI").fadeOut(1000)
		    $("#Login").fadeIn(1000)
			pasoIntrucciones=0;
			  $("#TituloI26").fadeOut(1000)
			    $("#TituloI6").hide()
		  $("#TituloI7").hide()
		  $("#TituloI8").hide()
		  $("#TituloI9").hide()
			    $("#TituloI10").hide()
		  $("#TituloI11").hide()
		  $("#TituloI12").hide()
		  $("#TituloI13").hide()
		   $("#TituloI14").hide()
		  $("#TituloI15").hide()
		  $("#TituloI16").hide()
		  $("#TituloI17").hide()
			   $("#TituloI18").hide()
		  $("#TituloI19").hide()
		  $("#TituloI20").hide()
		  $("#TituloI21").hide()
		   $("#TituloI22").hide()
		  $("#TituloI23").hide()
		  $("#TituloI24").hide()
		  $("#TituloI25").hide()
		

	})
	
	$("#SiguienteI").click(function(){
			
		pasoIntrucciones+=1;
        if(pasoIntrucciones==1){
		  $("#TituloI2").hide()
		  $("#TituloI3").hide()
		  $("#TituloI4").hide()
		  $("#TituloI5").hide()
		  $("#TituloI6").show()
		  $("#TituloI7").show()
		  $("#TituloI8").show()
		  $("#TituloI9").show()
		}
		 if(pasoIntrucciones==2){
		  $("#TituloI6").hide()
		  $("#TituloI7").hide()
		  $("#TituloI8").hide()
		  $("#TituloI9").hide()
		  $("#TituloI10").show()
		  $("#TituloI11").show()
		  $("#TituloI12").show()
		  $("#TituloI13").show()
		}
		  if(pasoIntrucciones==3){
		  $("#TituloI10").hide()
		  $("#TituloI11").hide()
		  $("#TituloI12").hide()
		  $("#TituloI13").hide()
		  $("#TituloI14").show()
		  $("#TituloI15").show()
		  $("#TituloI16").show()
		  $("#TituloI17").show()
		}
		 if(pasoIntrucciones==4){
		  $("#TituloI14").hide()
		  $("#TituloI15").hide()
		  $("#TituloI16").hide()
		  $("#TituloI17").hide()
		  $("#TituloI18").show()
		  $("#TituloI19").show()
		  $("#TituloI20").show()
		  $("#TituloI21").show()
		}
		if(pasoIntrucciones==5){
		  $("#TituloI18").hide()
		  $("#TituloI19").hide()
		  $("#TituloI20").hide()
		  $("#TituloI21").hide()
		  $("#TituloI22").show()
		  $("#TituloI23").show()
		  $("#TituloI24").show()
		  $("#TituloI25").show()
		}
		
		if(pasoIntrucciones==6){
		 
		  $("#TituloI22").hide()
		  $("#TituloI23").hide()
		  $("#TituloI24").hide()
		  $("#TituloI25").hide()
		  $("#TituloI26").show()
		  $("#SiguienteI").hide()
		}
      

	})
	
   
   
    $(window).resize(function(){
		//console.log("resize")
		reescalaVentana();
	})
    
    //Resgistra los eventos para el control de la camara.
	eventoTeclasCamara();
	//Resgistra los eventos para el control del jugador.
	//eventoTeclasJugador();
	//eventoTeclasJugador2();
	
    
}