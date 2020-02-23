function seleccionarEdificioConstruirOTropaReclutar(id,info,X,Y){
	// INFO para saber si estamos en info, construir o reclutar en el papiro, id para saber ciudad
	//X e Y coordenadas del click
	var seleccionEdif=0;
	var clickafuera=false;
	if(info==2){
		if((X>=410&&X<=474&&Y>=155&&Y<=219)){
				//console.log("mercado");
				if(Ciudades[id-1].edificio.hayColaConst==false&&Ciudades[id-1].edificio.edificioDinero<=2){
					contadorClick[0]+=1;
					for(let co=0;co<16;co++){
							if(co!=0){
								contadorClick[co]=0;
							}
						}// para saber numero de click
					
					if(contadorClick[0]==1){
						$("#Construir").show();
						Ciudades[id-1].edificio.edificioAConstruir=1;
						clickafuera=true;
						
						
					}
					if(contadorClick[0]==2){
						for(let co=0;co<16;co++){
							contadorClick[co]=0;
						}// para saber numero de click
						$("#Construir").hide();
						//seleccionEdif=1;
						
						Ciudades[id-1].edificio.edificioAConstruir=1;
						materiasUsarConstruccionYTropas(id,Ciudades[id-1].edificio.edificioAConstruir);
						if(okConstruccionOrTropa==true){
							Ciudades[id-1].edificio.hayColaConst=true;
							$("#Cancelar").fadeIn(100);
							startTimeConstruir(id,Ciudades[enLienzoCiudadID-1].edificio.edificioDinero);
						}
						//aqui dibujar
						
					}
				}else{
					for(let co=0;co<16;co++){
						contadorClick[co]=0;
					}// para saber numero de click
				}
			}
			
			if((X>=600&&X<=664&&Y>=155&&Y<=219)){
				//console.log("madera");
				if(Ciudades[id-1].edificio.hayColaConst==false&&Ciudades[id-1].edificio.edificioRecursoMad<=2){
					contadorClick[1]+=1;
					for(let co=0;co<16;co++){
							if(co!=1){
								contadorClick[co]=0;
							}
						}// para saber numero de click
					
					if(contadorClick[1]==1){
						$("#Construir").show();
						Ciudades[id-1].edificio.edificioAConstruir=2;
						clickafuera=true;
						
					}
					if(contadorClick[1]==2){
						for(let co=0;co<16;co++){
							contadorClick[co]=0;
						}// para saber numero de click
						$("#Construir").hide();
						//seleccionEdif=1;
						Ciudades[id-1].edificio.edificioAConstruir=2;
						materiasUsarConstruccionYTropas(id,Ciudades[id-1].edificio.edificioAConstruir);
						if(okConstruccionOrTropa==true){
							
							Ciudades[id-1].edificio.hayColaConst=true;
							$("#Cancelar").fadeIn(100);
							startTimeConstruir(id,Ciudades[enLienzoCiudadID-1].edificio.edificioRecursoMad);
						}
						//aqui dibujar
						
					}
				}else{
					for(let co=0;co<16;co++){
						contadorClick[co]=0;
					}// para saber numero de click
				}
			}
			
			if((X>=790&&X<=854&&Y>=155&&Y<=219)){
				//console.log("ladrillo");
				if(Ciudades[id-1].edificio.hayColaConst==false&&Ciudades[id-1].edificio.edificioRecursoLad<=2){
					contadorClick[2]+=1;
					for(let co=0;co<16;co++){
							if(co!=2){
								contadorClick[co]=0;
							}
						}// para saber numero de click
					
					if(contadorClick[2]==1){
						$("#Construir").show();
						Ciudades[id-1].edificio.edificioAConstruir=3;
						clickafuera=true;
						
					}
					if(contadorClick[2]==2){
						for(let co=0;co<16;co++){
							contadorClick[co]=0;
						}// para saber numero de click
						$("#Construir").hide();
						//seleccionEdif=1;
						Ciudades[id-1].edificio.edificioAConstruir=3;
						materiasUsarConstruccionYTropas(id,Ciudades[id-1].edificio.edificioAConstruir);
						if(okConstruccionOrTropa==true){
							
							Ciudades[id-1].edificio.hayColaConst=true;
							$("#Cancelar").fadeIn(100);
							startTimeConstruir(id,Ciudades[enLienzoCiudadID-1].edificio.edificioRecursoLad);
						}
						//aqui dibujar
						
					}
				}else{
					for(let co=0;co<16;co++){
						contadorClick[co]=0;
					}// para saber numero de click
				}
			}
			
			if((X>=410&&X<=474&&Y>=280&&Y<=344)){
				//console.log("metal");
				if(Ciudades[id-1].edificio.hayColaConst==false&&Ciudades[id-1].edificio.edificioRecursoMet<=2){
					contadorClick[3]+=1;
					for(let co=0;co<16;co++){
							if(co!=3){
								contadorClick[co]=0;
							}
						}// para saber numero de click
					
					if(contadorClick[3]==1){
						$("#Construir").show();
						Ciudades[id-1].edificio.edificioAConstruir=4;
						clickafuera=true;
						
					}
					if(contadorClick[3]==2){
						for(let co=0;co<16;co++){
							contadorClick[co]=0;
						}// para saber numero de click
						$("#Construir").hide();
						//seleccionEdif=1;
						Ciudades[id-1].edificio.edificioAConstruir=4;
						materiasUsarConstruccionYTropas(id,Ciudades[id-1].edificio.edificioAConstruir);
						if(okConstruccionOrTropa==true){
							
							Ciudades[id-1].edificio.hayColaConst=true;
							$("#Cancelar").fadeIn(100);
							startTimeConstruir(id,Ciudades[enLienzoCiudadID-1].edificio.edificioRecursoMet);
						}
						//aqui dibujar
						
					}
				}else{
					for(let co=0;co<16;co++){
						contadorClick[co]=0;
					}// para saber numero de click
				}
			}
			
			if((X>=600&&X<=664&&Y>=280&&Y<=344)){
				//console.log("infanteria");
			if(Ciudades[id-1].edificio.hayColaConst==false&&Ciudades[id-1].edificio.edificioTropaInf<=2){
					contadorClick[4]+=1;
					for(let co=0;co<16;co++){
							if(co!=4){
								contadorClick[co]=0;
							}
						}// para saber numero de click
					
					if(contadorClick[4]==1){
						$("#Construir").show();
						Ciudades[id-1].edificio.edificioAConstruir=5;
						clickafuera=true;
						
					}
					if(contadorClick[4]==2){
						for(let co=0;co<16;co++){
							contadorClick[co]=0;
						}// para saber numero de click
						$("#Construir").hide();
						//seleccionEdif=1;
						Ciudades[id-1].edificio.edificioAConstruir=5;
						materiasUsarConstruccionYTropas(id,Ciudades[id-1].edificio.edificioAConstruir);
						if(okConstruccionOrTropa==true){
							
							Ciudades[id-1].edificio.hayColaConst=true;
							$("#Cancelar").fadeIn(100);
							startTimeConstruir(id,Ciudades[enLienzoCiudadID-1].edificio.edificioTropaInf);
						}
						//aqui dibujar
						
					}
				}else{
					for(let co=0;co<16;co++){
						contadorClick[co]=0;
					}// para saber numero de click
				}
			}
			
			if((X>=790&&X<=854&&Y>=280&&Y<=344)){
				//console.log("arqueria");
				if(Ciudades[id-1].edificio.hayColaConst==false&&Ciudades[id-1].edificio.edificioTropaArq<=2){
					contadorClick[5]+=1;
					for(let co=0;co<16;co++){
							if(co!=5){
								contadorClick[co]=0;
							}
						}// para saber numero de click
					
					if(contadorClick[5]==1){
						$("#Construir").show();
						Ciudades[id-1].edificio.edificioAConstruir=6;
						clickafuera=true;
						
					}
					if(contadorClick[5]==2){
						for(let co=0;co<16;co++){
							contadorClick[co]=0;
						}// para saber numero de click
						$("#Construir").hide();
						//seleccionEdif=1;
						Ciudades[id-1].edificio.edificioAConstruir=6;
						materiasUsarConstruccionYTropas(id,Ciudades[id-1].edificio.edificioAConstruir);
						if(okConstruccionOrTropa==true){
							
							Ciudades[id-1].edificio.hayColaConst=true;
							$("#Cancelar").fadeIn(100);
							startTimeConstruir(id,Ciudades[enLienzoCiudadID-1].edificio.edificioTropaArq);
						}
						//aqui dibujar
						
					}
				}else{
					for(let co=0;co<16;co++){
						contadorClick[co]=0;
					}// para saber numero de click
				}
			}
			
			if((X>=600&&X<=664&&Y>=405&&Y<=469)){
				//console.log("caballeria");
				if(Ciudades[id-1].edificio.hayColaConst==false&&Ciudades[id-1].edificio.edificioTropaCab<=2){
					contadorClick[6]+=1;
					for(let co=0;co<16;co++){
							if(co!=6){
								contadorClick[co]=0;
							}
						}// para saber numero de click
					
					if(contadorClick[6]==1){
						$("#Construir").show();
						Ciudades[id-1].edificio.edificioAConstruir=7;
						clickafuera=true;
						
					}
					if(contadorClick[6]==2){
						for(let co=0;co<16;co++){
							contadorClick[co]=0;
						}// para saber numero de click
						$("#Construir").hide();
						//seleccionEdif=1;
						Ciudades[id-1].edificio.edificioAConstruir=7;
						materiasUsarConstruccionYTropas(id,Ciudades[id-1].edificio.edificioAConstruir);
						if(okConstruccionOrTropa==true){
							
							Ciudades[id-1].edificio.hayColaConst=true;
							$("#Cancelar").fadeIn(100);
							startTimeConstruir(id,Ciudades[enLienzoCiudadID-1].edificio.edificioTropaCab);
						}
						//aqui dibujar
						
					}
				}else{
					for(let co=0;co<16;co++){
						contadorClick[co]=0;
					}// para saber numero de click
				}
				
			}
		
		if(clickafuera==false){
			for(let co=0;co<16;co++){
					contadorClick[co]=0;
				}// para saber numero de click
				$("#Construir").hide();
				//Ciudades[id-1].edificioAConstruir=0;
		}
	}
	
	if(info==3){
		if((X>=410&&X<=474&&Y>=155&&Y<=219)){
				if(Ciudades[id-1].tropa.hayColaTropa==false){
					contadorClick[7]+=1;
					for(let co=0;co<16;co++){
							if(co!=7){
								contadorClick[co]=0;
							}
						}// para saber numero de click
					
					if(contadorClick[7]==1){
						$("#ReclutarTropas").show();
						Ciudades[id-1].tropa.tropaAAlistar=8;
						clickafuera=true;
						
					}
					if(contadorClick[7]==2){
						for(let co=0;co<16;co++){
							contadorClick[co]=0;
						}// para saber numero de click
						$("#ReclutarTropas").hide();
						//seleccionEdif=1;
						Ciudades[id-1].tropa.tropaAAlistar=8;
						materiasUsarConstruccionYTropas(id,Ciudades[id-1].tropa.tropaAAlistar);
						if(okConstruccionOrTropa==true){
						
							Ciudades[id-1].tropa.hayColaTropa=true;
							$("#Cancelar").fadeIn(100);
							Ciudades[id-1].tropa.nivelEdiAlInDeRecInf=Ciudades[id-1].edificio.edificioTropaInf;
							startTimeTropa(id,Ciudades[id-1].edificio.edificioTropaInf,Ciudades[id-1].tropa.tropaAAlistar);
						}
						//aqui dibujar
						
					}
				}else{
					for(let co=0;co<16;co++){
						contadorClick[co]=0;
					}// para saber numero de click
				}
		}
		//contextoCiudad.drawImage(imgTInf1,410,155,64,64);//dibuja tropa en papiro en la ciudad 600 790
			//contextoCiudad.drawImage(imgTArq1,410,280,64,64);//dibuja tropa en papiro en la ciudad
			//contextoCiudad.drawImage(imgTCab1,410,405,64,64);//dibuja tropa en papiro en la ciudad
			
			
			if((X>=600&&X<=664&&Y>=155&&Y<=219)){
				//console.log("i2");
				if(Ciudades[id-1].tropa.hayColaTropa==false&&Ciudades[id-1].edificio.edificioTropaInf>=2){
					contadorClick[8]+=1;
					for(let co=0;co<16;co++){
							if(co!=8){
								contadorClick[co]=0;
							}
						}// para saber numero de click
					
					if(contadorClick[8]==1){
						$("#ReclutarTropas").show();
						Ciudades[id-1].tropa.tropaAAlistar=9;
						clickafuera=true;
						
					}
					if(contadorClick[8]==2){
						for(let co=0;co<16;co++){
							contadorClick[co]=0;
						}// para saber numero de click
						$("#ReclutarTropas").hide();
						//seleccionEdif=1;
						
						Ciudades[id-1].tropa.tropaAAlistar=9;
						materiasUsarConstruccionYTropas(id,Ciudades[id-1].tropa.tropaAAlistar);
						if(okConstruccionOrTropa==true){
							Ciudades[id-1].tropa.hayColaTropa=true;
							$("#Cancelar").fadeIn(100);
							Ciudades[id-1].tropa.nivelEdiAlInDeRecInf=Ciudades[id-1].edificio.edificioTropaInf;
							startTimeTropa(id,Ciudades[id-1].edificio.edificioTropaInf,Ciudades[id-1].tropa.tropaAAlistar);
						//aqui dibujar
						}
					}
				}else{
					for(let co=0;co<16;co++){
						contadorClick[co]=0;
					}// para saber numero de click
				}
			}
			
			if((X>=790&&X<=854&&Y>=155&&Y<=219)){
				//console.log("i3");
				if(Ciudades[id-1].tropa.hayColaTropa==false&&Ciudades[id-1].edificio.edificioTropaInf==3){
					contadorClick[9]+=1;
					for(let co=0;co<16;co++){
							if(co!=9){
								contadorClick[co]=0;
							}
						}// para saber numero de click
					
					if(contadorClick[9]==1){
						$("#ReclutarTropas").show();
						Ciudades[id-1].tropa.tropaAAlistar=10;
						clickafuera=true;
						
					}
					if(contadorClick[9]==2){
						for(let co=0;co<16;co++){
							contadorClick[co]=0;
						}// para saber numero de click
						$("#ReclutarTropas").hide();
						//seleccionEdif=1;
						
						Ciudades[id-1].tropa.tropaAAlistar=10;
						materiasUsarConstruccionYTropas(id,Ciudades[id-1].tropa.tropaAAlistar);
						if(okConstruccionOrTropa==true){
							Ciudades[id-1].tropa.hayColaTropa=true;
							$("#Cancelar").fadeIn(100);
							Ciudades[id-1].tropa.nivelEdiAlInDeRecInf=Ciudades[id-1].edificio.edificioTropaInf;
							startTimeTropa(id,Ciudades[id-1].edificio.edificioTropaInf,Ciudades[id-1].tropa.tropaAAlistar);
						//aqui dibujar
						}
					}
				}else{
					for(let co=0;co<16;co++){
						contadorClick[co]=0;
					}// para saber numero de click
				}
			}
			
			if((X>=410&&X<=474&&Y>=280&&Y<=344)){
				//console.log("a1");
				if(Ciudades[id-1].tropa.hayColaTropa==false){
					contadorClick[10]+=1;
					for(let co=0;co<16;co++){
							if(co!=10){
								contadorClick[co]=0;
							}
						}// para saber numero de click
					
					if(contadorClick[10]==1){
						$("#ReclutarTropas").show();
						Ciudades[id-1].tropa.tropaAAlistar=11;
						clickafuera=true;
						
					}
					if(contadorClick[10]==2){
						for(let co=0;co<16;co++){
							contadorClick[co]=0;
						}// para saber numero de click
						$("#ReclutarTropas").hide();
						//seleccionEdif=1;
						
						Ciudades[id-1].tropa.tropaAAlistar=11;
						materiasUsarConstruccionYTropas(id,Ciudades[id-1].tropa.tropaAAlistar);
						if(okConstruccionOrTropa==true){
							Ciudades[id-1].tropa.hayColaTropa=true;
							$("#Cancelar").fadeIn(100);
							Ciudades[id-1].tropa.nivelEdiAlInDeRecArq=Ciudades[id-1].edificio.edificioTropaArq;
							startTimeTropa(id,Ciudades[id-1].edificio.edificioTropaArq,Ciudades[id-1].tropa.tropaAAlistar);
						//aqui dibujar
						}
					}
				}else{
					for(let co=0;co<16;co++){
						contadorClick[co]=0;
					}// para saber numero de click
				}
			}
			
			if((X>=600&&X<=664&&Y>=280&&Y<=344)){
				//console.log("a2");
			if(Ciudades[id-1].tropa.hayColaTropa==false&&Ciudades[id-1].edificio.edificioTropaArq>=2){
					contadorClick[11]+=1;
					for(let co=0;co<16;co++){
							if(co!=11){
								contadorClick[co]=0;
							}
						}// para saber numero de click
					
					if(contadorClick[11]==1){
						$("#ReclutarTropas").show();
						Ciudades[id-1].tropa.tropaAAlistar=12;
						clickafuera=true;
						
					}
					if(contadorClick[11]==2){
						for(let co=0;co<16;co++){
							contadorClick[co]=0;
						}// para saber numero de click
						$("#ReclutarTropas").hide();
						//seleccionEdif=1;
						
						Ciudades[id-1].tropa.tropaAAlistar=12;
						materiasUsarConstruccionYTropas(id,Ciudades[id-1].tropa.tropaAAlistar);
						if(okConstruccionOrTropa==true){
							Ciudades[id-1].tropa.hayColaTropa=true;
							$("#Cancelar").fadeIn(100);
							Ciudades[id-1].tropa.nivelEdiAlInDeRecArq=Ciudades[id-1].edificio.edificioTropaArq;
							startTimeTropa(id,Ciudades[id-1].edificio.edificioTropaArq,Ciudades[id-1].tropa.tropaAAlistar);
						//aqui dibujar
						}
					}
				}else{
					for(let co=0;co<16;co++){
						contadorClick[co]=0;
					}// para saber numero de click
				}
			}
			
			if((X>=790&&X<=854&&Y>=280&&Y<=344)){
				//console.log("a3");
				if(Ciudades[id-1].tropa.hayColaTropa==false&&Ciudades[id-1].edificio.edificioTropaArq==3){
					contadorClick[12]+=1;
					for(let co=0;co<16;co++){
							if(co!=12){
								contadorClick[co]=0;
							}
						}// para saber numero de click
					
					if(contadorClick[12]==1){
						$("#ReclutarTropas").show();
						Ciudades[id-1].tropa.tropaAAlistar=13;
						clickafuera=true;
						
					}
					if(contadorClick[12]==2){
						for(let co=0;co<16;co++){
							contadorClick[co]=0;
						}// para saber numero de click
						$("#ReclutarTropas").hide();
						//seleccionEdif=1;
						
						Ciudades[id-1].tropa.tropaAAlistar=13;
						materiasUsarConstruccionYTropas(id,Ciudades[id-1].tropa.tropaAAlistar);
						if(okConstruccionOrTropa==true){
							Ciudades[id-1].tropa.hayColaTropa=true;
							$("#Cancelar").fadeIn(100);
							Ciudades[id-1].tropa.nivelEdiAlInDeRecArq=Ciudades[id-1].edificio.edificioTropaArq;
							startTimeTropa(id,Ciudades[id-1].edificio.edificioTropaArq,Ciudades[id-1].tropa.tropaAAlistar);
						//aqui dibujar
						}
					}
				}else{
					for(let co=0;co<16;co++){
						contadorClick[co]=0;
					}// para saber numero de click
				}
			}
			
			if((X>=410&&X<=474&&Y>=405&&Y<=469)){
				//console.log("c1");
				if(Ciudades[id-1].tropa.hayColaTropa==false){
					contadorClick[13]+=1;
					for(let co=0;co<16;co++){
							if(co!=13){
								contadorClick[co]=0;
							}
						}// para saber numero de click
					
					if(contadorClick[13]==1){
						$("#ReclutarTropas").show();
						Ciudades[id-1].tropa.tropaAAlistar=14;
						clickafuera=true;
						
					}
					if(contadorClick[13]==2){
						for(let co=0;co<16;co++){
							contadorClick[co]=0;
						}// para saber numero de click
						$("#ReclutarTropas").hide();
						//seleccionEdif=1;
						
						Ciudades[id-1].tropa.tropaAAlistar=14;
						materiasUsarConstruccionYTropas(id,Ciudades[id-1].tropa.tropaAAlistar);
						if(okConstruccionOrTropa==true){
							Ciudades[id-1].tropa.hayColaTropa=true;
							$("#Cancelar").fadeIn(100);
							Ciudades[id-1].tropa.nivelEdiAlInDeRecCab=Ciudades[id-1].edificio.edificioTropaCab;
							startTimeTropa(id,Ciudades[id-1].edificio.edificioTropaCab,Ciudades[id-1].tropa.tropaAAlistar);
						//aqui dibujar
						}
					}
				}else{
					for(let co=0;co<16;co++){
						contadorClick[co]=0;
					}// para saber numero de click
				}
				
			}
					
			if((X>=600&&X<=664&&Y>=405&&Y<=469)){
				//console.log("c2");
				if(Ciudades[id-1].tropa.hayColaTropa==false&&Ciudades[id-1].edificio.edificioTropaCab>=2){
					contadorClick[14]+=1;
					for(let co=0;co<16;co++){
							if(co!=14){
								contadorClick[co]=0;
							}
						}// para saber numero de click
					
					if(contadorClick[14]==1){
						$("#ReclutarTropas").show();
						Ciudades[id-1].tropa.tropaAAlistar=15;
						clickafuera=true;
						
					}
					if(contadorClick[14]==2){
						for(let co=0;co<16;co++){
							contadorClick[co]=0;
						}// para saber numero de click
						$("#ReclutarTropas").hide();
						//seleccionEdif=1;
						
						Ciudades[id-1].tropa.tropaAAlistar=15;
						materiasUsarConstruccionYTropas(id,Ciudades[id-1].tropa.tropaAAlistar);
						if(okConstruccionOrTropa==true){
							Ciudades[id-1].tropa.hayColaTropa=true;
							$("#Cancelar").fadeIn(100);
							Ciudades[id-1].tropa.nivelEdiAlInDeRecCab=Ciudades[id-1].edificio.edificioTropaCab;
							startTimeTropa(id,Ciudades[id-1].edificio.edificioTropaCab,Ciudades[id-1].tropa.tropaAAlistar);
						//aqui dibujar
						}
					}
				}else{
					for(let co=0;co<16;co++){
						contadorClick[co]=0;
					}// para saber numero de click
				}
				
			}
		
			if((X>=790&&X<=854&&Y>=405&&Y<=469)){
				//console.log("c3");
				if(Ciudades[id-1].tropa.hayColaTropa==false&&Ciudades[id-1].edificio.edificioTropaCab==3){
					contadorClick[15]+=1;
					for(let co=0;co<16;co++){
							if(co!=15){
								contadorClick[co]=0;
							}
						}// para saber numero de click
					
					if(contadorClick[15]==1){
						$("#ReclutarTropas").show();
						Ciudades[id-1].tropa.tropaAAlistar=16;
						clickafuera=true;
						
					}
					if(contadorClick[15]==2){
						for(let co=0;co<16;co++){
							contadorClick[co]=0;
						}// para saber numero de click
						$("#ReclutarTropas").hide();
						//seleccionEdif=1;
						
						Ciudades[id-1].tropa.tropaAAlistar=16;
						materiasUsarConstruccionYTropas(id,Ciudades[id-1].tropa.tropaAAlistar);
						if(okConstruccionOrTropa==true){
							Ciudades[id-1].tropa.hayColaTropa=true;
							$("#Cancelar").fadeIn(100);
							Ciudades[id-1].tropa.nivelEdiAlInDeRecCab=Ciudades[id-1].edificio.edificioTropaCab;
							startTimeTropa(id,Ciudades[id-1].edificio.edificioTropaCab,Ciudades[id-1].tropa.tropaAAlistar);
						//aqui dibujar
						}
					}
				}else{
					for(let co=0;co<16;co++){
						contadorClick[co]=0;
					}// para saber numero de click
				}
				
			}
		
			if(clickafuera==false){
				for(let co=0;co<16;co++){
						contadorClick[co]=0;
					}// para saber numero de click
					//Ciudades[id-1].tropaAAlistar=0;
					$("#ReclutarTropas").hide();
			}
			
	}
	
}

function dibujarColaConstruccionYTropas(id,info){
	// INFO para saber si estamos en info, construir o reclutar en el papiro, id para saber ciudad
	var tempEdif=0;
	var numTropa=0;
	var tiempos=0;
	if(info==2&&Ciudades[id-1].edificio.hayColaConst==true){
		contextoCiudad.beginPath();
		contextoCiudad.font="20pt Verdana";
		contextoCiudad.fillStyle = "black";
		
		
		switch (Ciudades[id-1].edificio.edificioAConstruir) {
			case 1:	contextoCiudad.drawImage(imgEdifDin,410,565,64,64);//dibuja edificio en papiro en la ciudad
					tempEdif=Ciudades[id-1].edificio.edificioDinero+1;
					contextoCiudad.fillText(Ciudades[id-1].edificio.edificioDinero+" --> "+tempEdif,600,600);
					//startTimeConstruir(id,Ciudades[id-1].edificioDinero);
					tiempos=Ciudades[id-1].edificio.tiempoTerminarC-time;
					contextoCiudad.fillText(tiempos,790,600);	
					break;
					
			case 2:	contextoCiudad.drawImage(imgEdifMad,410,565,64,64);//dibuja edificio en papiro en la ciudad
					tempEdif=Ciudades[id-1].edificio.edificioRecursoMad+1;
					contextoCiudad.fillText(Ciudades[id-1].edificio.edificioRecursoMad+" --> "+tempEdif,600,600);
					tiempos=Ciudades[id-1].edificio.tiempoTerminarC-time;
					contextoCiudad.fillText(tiempos,790,600);		
					
					break;
					
			case 3:	contextoCiudad.drawImage(imgEdifLad,410,565,64,64);//dibuja edificio en papiro en la ciudad
					tempEdif=Ciudades[id-1].edificio.edificioRecursoLad+1;
					contextoCiudad.fillText(Ciudades[id-1].edificio.edificioRecursoLad+" --> "+tempEdif,600,600);
					tiempos=Ciudades[id-1].edificio.tiempoTerminarC-time;
					contextoCiudad.fillText(tiempos,790,600);		
					
					break;
			
			case 4:	contextoCiudad.drawImage(imgEdifMet,410,565,64,64);//dibuja edificio en papiro en la ciudad
					tempEdif=Ciudades[id-1].edificio.edificioRecursoMet+1;
					contextoCiudad.fillText(Ciudades[id-1].edificio.edificioRecursoMet+" --> "+tempEdif,600,600);
					tiempos=Ciudades[id-1].edificio.tiempoTerminarC-time;
					contextoCiudad.fillText(tiempos,790,600);		
					break;
					
			case 5:	contextoCiudad.drawImage(imgEdifTInf,410,565,64,64);//dibuja edificio en papiro en la ciudad
					tempEdif=Ciudades[id-1].edificio.edificioTropaInf+1;
					contextoCiudad.fillText(Ciudades[id-1].edificio.edificioTropaInf+" --> "+tempEdif,600,600);
					tiempos=Ciudades[id-1].edificio.tiempoTerminarC-time;
					contextoCiudad.fillText(tiempos,790,600);		
					
					break;
					
			case 6:	contextoCiudad.drawImage(imgEdifTArq,410,565,64,64);//dibuja edificio en papiro en la ciudad
					tempEdif=Ciudades[id-1].edificio.edificioTropaArq+1;
					contextoCiudad.fillText(Ciudades[id-1].edificio.edificioTropaArq+" --> "+tempEdif,600,600);
					tiempos=Ciudades[id-1].edificio.tiempoTerminarC-time;
					contextoCiudad.fillText(tiempos,790,600);		
					
					break;
			
			case 7:	contextoCiudad.drawImage(imgEdifTCab,410,565,64,64);//dibuja edificio en papiro en la ciudad
					tempEdif=Ciudades[id-1].edificio.edificioTropaCab+1;
					contextoCiudad.fillText(Ciudades[id-1].edificio.edificioTropaCab+" --> "+tempEdif,600,600);
					tiempos=Ciudades[id-1].edificio.tiempoTerminarC-time;
					contextoCiudad.fillText(tiempos,790,600);		
					
					break;
			
			
			default: break;
		}
		
		contextoCiudad.fill();
		contextoCiudad.closePath();
		if(Ciudades[id-1].edificio.hayColaConst==true){
			$("#Cancelar").fadeIn(200);
			}
	}
	
	if(info==3&&Ciudades[id-1].tropa.hayColaTropa==true){
		contextoCiudad.beginPath();
		contextoCiudad.font="20pt Verdana";
		contextoCiudad.fillStyle = "black";
		
		switch (Ciudades[id-1].tropa.tropaAAlistar) {
			case 8:	contextoCiudad.drawImage(imgTInf1,410,565,64,64);//dibuja edificio en papiro en la ciudad
					numTropa=Ciudades[id-1].tropa.tropasMinimo*Ciudades[id-1].tropa.nivelEdiAlInDeRecInf;
					//console.log(Ciudades[id-1].tropa.tropasMinimo);
					//console.log(Ciudades[id-1].tropa.nivelEdiAlInDeRecInf);
					contextoCiudad.fillText(numTropa,600,600);
					tiempos=Ciudades[id-1].tropa.tiempoTerminarT-time;
					contextoCiudad.fillText(tiempos,790,600);	
					break;
					
			case 9:	contextoCiudad.drawImage(tropasInf2,410,565,64,64);//dibuja edificio en papiro en la ciudad
					if(Ciudades[id-1].tropa.nivelEdiAlInDeRecInf==2){
						numTropa=Ciudades[id-1].tropa.tropasMinimo;
					}else{
						numTropa=Ciudades[id-1].tropa.tropasMinimo*2;
					}
					contextoCiudad.fillText(numTropa,600,600);
					tiempos=Ciudades[id-1].tropa.tiempoTerminarT-time;
					contextoCiudad.fillText(tiempos,790,600);		
					
					break;
					
			case 10: contextoCiudad.drawImage(tropasInf3,410,565,64,64);//dibuja edificio en papiro en la ciudad
					numTropa=Ciudades[id-1].tropa.tropasMinimo;
					contextoCiudad.fillText(numTropa,600,600);
					tiempos=Ciudades[id-1].tropa.tiempoTerminarT-time;
					contextoCiudad.fillText(tiempos,790,600);			
					
					break;
			
			case 11: contextoCiudad.drawImage(imgTArq1,410,565,64,64);//dibuja edificio en papiro en la ciudad
					numTropa=Ciudades[id-1].tropa.tropasMinimo*Ciudades[id-1].tropa.nivelEdiAlInDeRecArq;
					contextoCiudad.fillText(numTropa,600,600);
					tiempos=Ciudades[id-1].tropa.tiempoTerminarT-time;
					contextoCiudad.fillText(tiempos,790,600);		
					break;
					
			case 12: contextoCiudad.drawImage(imgTArq2,410,565,64,64);//dibuja edificio en papiro en la ciudad
					if(Ciudades[id-1].tropa.nivelEdiAlInDeRecArq==2){
						numTropa=Ciudades[id-1].tropa.tropasMinimo;
					}else{
						numTropa=Ciudades[id-1].tropa.tropasMinimo*2;
					}
					contextoCiudad.fillText(numTropa,600,600);
					tiempos=Ciudades[id-1].tropa.tiempoTerminarT-time;
					contextoCiudad.fillText(tiempos,790,600);			
					
					break;
					
			case 13: contextoCiudad.drawImage(imgTArq3,410,565,64,64);//dibuja edificio en papiro en la ciudad
					numTropa=Ciudades[id-1].tropa.tropasMinimo;
					contextoCiudad.fillText(numTropa,600,600);
					tiempos=Ciudades[id-1].tropa.tiempoTerminarT-time;
					contextoCiudad.fillText(tiempos,790,600);		
					
					break;
			
			case 14: contextoCiudad.drawImage(imgTCab1,410,565,64,64);//dibuja edificio en papiro en la ciudad
					numTropa=Ciudades[id-1].tropa.tropasMinimo*Ciudades[id-1].tropa.nivelEdiAlInDeRecCab;
					contextoCiudad.fillText(numTropa,600,600);
					tiempos=Ciudades[id-1].tropa.tiempoTerminarT-time;
					contextoCiudad.fillText(tiempos,790,600);	
					
					break;
			
			case 15: contextoCiudad.drawImage(imgTCab2,410,565,64,64);//dibuja edificio en papiro en la ciudad
					if(Ciudades[id-1].tropa.nivelEdiAlInDeRecCab==2){
						numTropa=Ciudades[id-1].tropa.tropasMinimo;
					}else{
						numTropa=Ciudades[id-1].tropa.tropasMinimo*2;
					}
					contextoCiudad.fillText(numTropa,600,600);
					tiempos=Ciudades[id-1].tropa.tiempoTerminarT-time;
					contextoCiudad.fillText(tiempos,790,600);	
					
					break;
			
			case 16: contextoCiudad.drawImage(imgTCab3,410,565,64,64);//dibuja edificio en papiro en la ciudad
					numTropa=Ciudades[id-1].tropa.tropasMinimo;
					contextoCiudad.fillText(numTropa,600,600);
					tiempos=Ciudades[id-1].tropa.tiempoTerminarT-time;
					contextoCiudad.fillText(tiempos,790,600);		
					
					break;
					
			default: break;
		}
		
		contextoCiudad.fill();
		contextoCiudad.closePath();
		if(Ciudades[id-1].tropa.hayColaTropa==true){
			$("#Cancelar").fadeIn(200);
			//console.log("holis");
			}
		
	}
}



function cancelarConstruccionOAlistamiento(id,info,X,Y){
	// INFO para saber si estamos en info, construir o reclutar en el papiro, id para saber ciudad
	//X e Y coordenadas del click
	if(info==2){
		if((X>=410&&X<=474&&Y>=565&&Y<=629)){
			Ciudades[id-1].edificio.hayColaConst=false;
			$("#Cancelar").hide();
			Ciudades[id-1].edificio.tiempoTerminarC=0;
			//quitar tiempo a 0
			devolverRecursos(id,Ciudades[id-1].edificio.edificioAConstruir);
			//devolver materiales
		}
		
	}
	
	if(info==3){
		if((X>=410&&X<=474&&Y>=565&&Y<=629)){
			$("#Cancelar").hide();
			Ciudades[id-1].tropa.hayColaTropa=false;
			Ciudades[id-1].tropa.tiempoTerminarT=0;
			//quitar tiempo a 0
			devolverRecursos(id,Ciudades[id-1].tropa.tropaAAlistar);
			//devolver materiales
		}
	}
}



function startTime2() {
	var today=new Date();//tiempo del juego
	time=today.getTime();
	//console.log(time);
	
		
}

function startTimeConstruir(id,nivel) {
	var today2=new Date();//tiempo del juego
	Ciudades[id-1].edificio.tiempoTerminarC=today2.getTime()+Ciudades[id-1].edificio.tiempoConstruir*nivel*1000;
	// INFO para saber si estamos en info, construir o reclutar en el papiro, id para saber ciudad
		
}


function startTimeTropa(id,nivel,tropa) {
	var today3=new Date();//tiempo del juego
	switch (tropa) {
			case 8:	
				Ciudades[id-1].tropa.tiempoTerminarT=today3.getTime()+Ciudades[id-1].tropa.tiempoTropasInf*1000*nivel;
			
					break;
					
			case 9:	Ciudades[id-1].tropa.tiempoTerminarT=today3.getTime()+Ciudades[id-1].tropa.tiempoTropasInf*1000*(nivel-1);
					break;
					
			case 10: Ciudades[id-1].tropa.tiempoTerminarT=today3.getTime()+Ciudades[id-1].tropa.tiempoTropasInf*1000;
			
					break;
			
			case 11: Ciudades[id-1].tropa.tiempoTerminarT=today3.getTime()+Ciudades[id-1].tropa.tiempoTropasArq*1000*nivel;
					break;
					
			case 12: Ciudades[id-1].tropa.tiempoTerminarT=today3.getTime()+Ciudades[id-1].tropa.tiempoTropasArq*1000*(nivel-1);
					
					break;
					
			case 13: Ciudades[id-1].tropa.tiempoTerminarT=today3.getTime()+Ciudades[id-1].tropa.tiempoTropasArq*1000;
					
					break;
			
			case 14: Ciudades[id-1].tropa.tiempoTerminarT=today3.getTime()+Ciudades[id-1].tropa.tiempoTropasCab*1000*nivel;
					
					break;
			
			case 15: Ciudades[id-1].tropa.tiempoTerminarT=today3.getTime()+Ciudades[id-1].tropa.tiempoTropasCab*1000*(nivel-1);
					
					break;
			
			case 16: Ciudades[id-1].tropa.tiempoTerminarT=today3.getTime()+Ciudades[id-1].tropa.tiempoTropasCab*1000;
					
					break;
					
			default: break;
		}
		
	
	
		// INFO para saber si estamos en info, construir o reclutar en el papiro, id para saber ciudad
}


function materiasUsarConstruccionYTropas(id,tipo){
	//  id para saber ciudad,nivel para nivel del edificio y tipo para saber que edificio o tropa
	var dinero=0;
	var madera=0;
	var ladrillos=0;
	var metal=0;
	switch (tipo) {
		
			case 1:	dinero=200*Ciudades[id-1].edificio.edificioDinero;madera=200*Ciudades[id-1].edificio.edificioDinero;ladrillos=200*Ciudades[id-1].edificio.edificioDinero;metal=200*Ciudades[id-1].edificio.edificioDinero;
							
					break;
					
			case 2:	dinero=200*Ciudades[id-1].edificio.edificioRecursoMad;madera=200*Ciudades[id-1].edificio.edificioRecursoMad;ladrillos=100*Ciudades[id-1].edificio.edificioRecursoMad;metal=100*Ciudades[id-1].edificio.edificioRecursoMad;
					break;
					
			case 3: dinero=200*Ciudades[id-1].edificio.edificioRecursoLad;madera=100*Ciudades[id-1].edificio.edificioRecursoLad;ladrillos=200*Ciudades[id-1].edificio.edificioRecursoLad;metal=100*Ciudades[id-1].edificio.edificioRecursoLad;
			
					break;
			
			case 4: dinero=200*Ciudades[id-1].edificio.edificioRecursoMet;madera=100*Ciudades[id-1].edificio.edificioRecursoMet;ladrillos=100*Ciudades[id-1].edificio.edificioRecursoMet;metal=200*Ciudades[id-1].edificio.edificioRecursoMet;
					break;
					
			case 5: dinero=200*Ciudades[id-1].edificio.edificioTropaInf;madera=200*Ciudades[id-1].edificio.edificioTropaInf;ladrillos=200*Ciudades[id-1].edificio.edificioTropaInf;metal=100*Ciudades[id-1].edificio.edificioTropaInf;
					
					break;
					
			case 6: dinero=200*Ciudades[id-1].edificio.edificioTropaArq;madera=200*Ciudades[id-1].edificio.edificioTropaArq;ladrillos=100*Ciudades[id-1].edificio.edificioTropaArq;metal=200*Ciudades[id-1].edificio.edificioTropaArq;
					
					break;
			
			case 7: dinero=200*Ciudades[id-1].edificio.edificioTropaCab;madera=100*Ciudades[id-1].edificio.edificioTropaCab;ladrillos=200*Ciudades[id-1].edificio.edificioTropaCab;metal=200*Ciudades[id-1].edificio.edificioTropaCab;
					
					break;
			
			
			case 8:	dinero=100*Ciudades[id-1].edificio.edificioTropaInf;madera=20*Ciudades[id-1].edificio.edificioTropaInf;ladrillos=20*Ciudades[id-1].edificio.edificioTropaInf;metal=10*Ciudades[id-1].edificio.edificioTropaInf;
				
			
					break;
					
			case 9:	dinero=200*(Ciudades[id-1].edificio.edificioTropaInf-1);madera=40*(Ciudades[id-1].edificio.edificioTropaInf-1);ladrillos=40*(Ciudades[id-1].edificio.edificioTropaInf-1);metal=20*(Ciudades[id-1].edificio.edificioTropaInf-1);
					break;
					
			case 10: dinero=300*(Ciudades[id-1].edificio.edificioTropaInf-2);madera=60*(Ciudades[id-1].edificio.edificioTropaInf-2);ladrillos=60*(Ciudades[id-1].edificio.edificioTropaInf2);metal=30*(Ciudades[id-1].edificio.edificioTropaInf-2);
			
					break;
			
			case 11: dinero=120*Ciudades[id-1].edificio.edificioTropaArq;madera=20*Ciudades[id-1].edificio.edificioTropaArq;ladrillos=10*Ciudades[id-1].edificio.edificioTropaArq;metal=20*Ciudades[id-1].edificio.edificioTropaArq;
					break;
					
			case 12: dinero=240*(Ciudades[id-1].edificio.edificioTropaArq-1);madera=40*(Ciudades[id-1].edificio.edificioTropaArq-1);ladrillos=20*(Ciudades[id-1].edificio.edificioTropaArq-1);metal=40*(Ciudades[id-1].edificio.edificioTropaArq-1);
					
					break;
					
			case 13: dinero=360*(Ciudades[id-1].edificio.edificioTropaArq-2);madera=60*(Ciudades[id-1].edificio.edificioTropaArq-2);ladrillos=30*(Ciudades[id-1].edificio.edificioTropaArq-2);metal=60*(Ciudades[id-1].edificio.edificioTropaArq-2);
					
					break;
			
			case 14: dinero=140*Ciudades[id-1].edificio.edificioTropaCab;madera=10*Ciudades[id-1].edificio.edificioTropaCab;ladrillos=20*Ciudades[id-1].edificio.edificioTropaCab;metal=20*Ciudades[id-1].edificio.edificioTropaCab;
					
					break;
			
			case 15: dinero=280*(Ciudades[id-1].edificio.edificioTropaCab-1);madera=20*(Ciudades[id-1].edificio.edificioTropaCab-1);ladrillos=40*(Ciudades[id-1].edificio.edificioTropaCab-1);metal=40*(Ciudades[id-1].edificio.edificioTropaCab-1);
					
					break;
			
			case 16: dinero=420*(Ciudades[id-1].edificio.edificioTropaCab-2);madera=40*(Ciudades[id-1].edificio.edificioTropaCab-2);ladrillos=80*(Ciudades[id-1].edificio.edificioTropaCab-2);metal=80*(Ciudades[id-1].edificio.edificioTropaCab-2);
					
					break;
					
			default: break;
		}
		
	restarMateriales(dinero,madera,ladrillos,metal);	
		
}


function restarMateriales(din,mad,lad,met){
	
	
	var tempD=Dinero-din;
	var tempMad=numMadera-mad;
	var tempL=numLadrillos-lad;
	var tempMet=numMetal-met;
	if(tempD<0||tempMad<0||tempL<0||tempMet<0){
		okConstruccionOrTropa=false;
	}else{
		okConstruccionOrTropa=true;
		Dinero=tempD;
		numMadera=tempMad;
		numLadrillos=tempL;
		numMetal=tempMet;
	}
	
}


function devolverRecursos(id,tipo){
	var dinero=0;
	var madera=0;
	var ladrillos=0;
	var metal=0;
	switch (tipo) {
		
			case 1:	dinero=200*Ciudades[id-1].edificio.edificioDinero;madera=200*Ciudades[id-1].edificio.edificioDinero;ladrillos=200*Ciudades[id-1].edificio.edificioDinero;metal=200*Ciudades[id-1].edificio.edificioDinero;
							
					break;
					
			case 2:	dinero=200*Ciudades[id-1].edificio.edificioRecursoMad;madera=200*Ciudades[id-1].edificio.edificioRecursoMad;ladrillos=100*Ciudades[id-1].edificio.edificioRecursoMad;metal=100*Ciudades[id-1].edificio.edificioRecursoMad;
					break;
					
			case 3: dinero=200*Ciudades[id-1].edificio.edificioRecursoLad;madera=100*Ciudades[id-1].edificio.edificioRecursoLad;ladrillos=200*Ciudades[id-1].edificio.edificioRecursoLad;metal=100*Ciudades[id-1].edificio.edificioRecursoLad;
			
					break;
			
			case 4: dinero=200*Ciudades[id-1].edificio.edificioRecursoMet;madera=100*Ciudades[id-1].edificio.edificioRecursoMet;ladrillos=100*Ciudades[id-1].edificio.edificioRecursoMet;metal=200*Ciudades[id-1].edificio.edificioRecursoMet;
					break;
					
			case 5: dinero=200*Ciudades[id-1].edificio.edificioTropaInf;madera=200*Ciudades[id-1].edificio.edificioTropaInf;ladrillos=200*Ciudades[id-1].edificio.edificioTropaInf;metal=100*Ciudades[id-1].edificio.edificioTropaInf;
					
					break;
					
			case 6: dinero=200*Ciudades[id-1].edificio.edificioTropaArq;madera=200*Ciudades[id-1].edificio.edificioTropaArq;ladrillos=100*Ciudades[id-1].edificio.edificioTropaArq;metal=200*Ciudades[id-1].edificio.edificioTropaArq;
					
					break;
			
			case 7: dinero=200*Ciudades[id-1].edificio.edificioTropaCab;madera=100*Ciudades[id-1].edificio.edificioTropaCab;ladrillos=200*Ciudades[id-1].edificio.edificioTropaCab;metal=200*Ciudades[id-1].edificio.edificioTropaCab;
					
					break;
			
			
			case 8:	dinero=100*Ciudades[id-1].tropa.nivelEdiAlInDeRecInf;madera=20*Ciudades[id-1].tropa.nivelEdiAlInDeRecInf;ladrillos=20*Ciudades[id-1].tropa.nivelEdiAlInDeRecInf;metal=10*Ciudades[id-1].tropa.nivelEdiAlInDeRecInf;
				
			
					break;
					
			case 9:	dinero=200*(Ciudades[id-1].tropa.nivelEdiAlInDeRecInf-1);madera=40*(Ciudades[id-1].tropa.nivelEdiAlInDeRecInf-1);ladrillos=40*(Ciudades[id-1].tropa.nivelEdiAlInDeRecInf-1);metal=20*(Ciudades[id-1].tropa.nivelEdiAlInDeRecInf-1);
					break;
					
			case 10: dinero=300*(Ciudades[id-1].tropa.nivelEdiAlInDeRecInf-2);madera=60*(Ciudades[id-1].tropa.nivelEdiAlInDeRecInf-2);ladrillos=60*(Ciudades[id-1].tropa.nivelEdiAlInDeRecInf-2);metal=30*(Ciudades[id-1].tropa.nivelEdiAlInDeRecInf-2);
			
					break;
			
			case 11: dinero=120*Ciudades[id-1].tropa.nivelEdiAlInDeRecArq;madera=20*Ciudades[id-1].tropa.nivelEdiAlInDeRecArq;ladrillos=10*Ciudades[id-1].tropa.nivelEdiAlInDeRecArq;metal=20*Ciudades[id-1].tropa.nivelEdiAlInDeRecArq;
					break;
					
			case 12: dinero=240*(Ciudades[id-1].tropa.nivelEdiAlInDeRecArq-1);madera=40*(Ciudades[id-1].tropa.nivelEdiAlInDeRecArq-1);ladrillos=20*(Ciudades[id-1].tropa.nivelEdiAlInDeRecArq-1);metal=40*(Ciudades[id-1].tropa.nivelEdiAlInDeRecArq-1);
					
					break;
					
			case 13: dinero=360*(Ciudades[id-1].tropa.nivelEdiAlInDeRecArq-2);madera=60*(Ciudades[id-1].tropa.nivelEdiAlInDeRecArq-2);ladrillos=30*(Ciudades[id-1].tropa.nivelEdiAlInDeRecArq-2);metal=60*(Ciudades[id-1].tropa.nivelEdiAlInDeRecArq-2);
					
					break;
			
			case 14: dinero=140*Ciudades[id-1].tropa.nivelEdiAlInDeRecCab;madera=10*Ciudades[id-1].tropa.nivelEdiAlInDeRecCab;ladrillos=20*Ciudades[id-1].tropa.nivelEdiAlInDeRecCab;metal=20*Ciudades[id-1].tropa.nivelEdiAlInDeRecCab;
					
					break;
			
			case 15: dinero=280*(Ciudades[id-1].tropa.nivelEdiAlInDeRecCab-1);madera=20*(Ciudades[id-1].tropa.nivelEdiAlInDeRecCab-1);ladrillos=40*(Ciudades[id-1].tropa.nivelEdiAlInDeRecCab-1);metal=40*(Ciudades[id-1].tropa.nivelEdiAlInDeRecCab-1);
					
					break;
			
			case 16: dinero=420*(Ciudades[id-1].tropa.nivelEdiAlInDeRecCab-2);madera=40*(Ciudades[id-1].tropa.nivelEdiAlInDeRecCab-2);ladrillos=80*(Ciudades[id-1].tropa.nivelEdiAlInDeRecCab-2);metal=80*(Ciudades[id-1].tropa.nivelEdiAlInDeRecCab-2);
					
					break;
					
			default: break;
		}
		
	var tempD=Dinero+dinero;
	var tempMad=numMadera+madera;
	var tempL=numLadrillos+ladrillos;
	var tempMet=numMetal+metal;
	
	Dinero=tempD;
	numMadera=tempMad;
	numLadrillos=tempL;
	numMetal=tempMet;
}


function produccionRecursos(){
	var tiempoP=0;
	
	for(let p=0;p<10;p++){
		
			
		if(Ciudades[p].pertenencia==1){
			//
			if(Ciudades[p].produccion.tiempoTerminarPro==0){
				var today3=new Date();//tiempo del juego
				Ciudades[p].produccion.tiempoTerminarPro=today3.getTime()+Ciudades[p].produccion.tiempoProduccion*1000;
			}else{
				if(Ciudades[p].produccion.tiempoPausadoPro==0){
					tiempoP=Ciudades[p].produccion.tiempoTerminarPro-time;
					if(tiempoP<=0){
						Dinero+=(Ciudades[p].produccion.prodDinero*Ciudades[p].edificio.edificioDinero);
						numMadera+=(Ciudades[p].produccion.prodRecursoMad*Ciudades[p].edificio.edificioRecursoMad);
						numLadrillos+=(Ciudades[p].produccion.prodRecursoLad*Ciudades[p].edificio.edificioRecursoLad);
						numMetal+=(Ciudades[p].produccion.prodRecursoMet*Ciudades[p].edificio.edificioRecursoMet);
						Ciudades[p].produccion.tiempoTerminarPro=0;
					}
				}else{
					var today31=new Date();//tiempo del juego
					Ciudades[p].produccion.tiempoTerminarPro=Ciudades[p].produccion.tiempoPausadoPro+today31.getTime();
					
				}
				
			}
			
		}
		
	}
	
		
}


function construirFinal(){
	var tiempoC=0;
	
	for(let cf=0;cf<10;cf++){
		
		if(Ciudades[cf].pertenencia==1){
			
			if(Ciudades[cf].edificio.tiempoTerminarC!=0){
			
				if(Ciudades[cf].edificio.tiempoPausadoCons==0){
					tiempoC=Ciudades[cf].edificio.tiempoTerminarC-time;
			
					if(tiempoC<=0){
						switch (Ciudades[cf].edificio.edificioAConstruir) {
							case 1:	Ciudades[cf].edificio.edificioDinero+=1;							
									break;
									
							case 2:	Ciudades[cf].edificio.edificioRecursoMad+=1;
									break;
									
							case 3: Ciudades[cf].edificio.edificioRecursoLad+=1;						
									break;
							
							case 4: Ciudades[cf].edificio.edificioRecursoMet+=1;
									break;
									
							case 5: Ciudades[cf].edificio.edificioTropaInf+=1;								
									break;
									
							case 6: Ciudades[cf].edificio.edificioTropaArq+=1;								
									break;
							
							case 7: Ciudades[cf].edificio.edificioTropaCab+=1;								
									break;
							
							default: break;
						}
						
						Ciudades[cf].edificio.tiempoTerminarC=0;
						Ciudades[cf].edificio.hayColaConst=false;
						//$("#Cancelar").hide();
						
						
					}
				}else{
					var today51=new Date();//tiempo del juego
					Ciudades[cf].edificio.tiempoTerminarC=Ciudades[cf].edificio.tiempoPausadoCons+today51.getTime();
				}
				
			}
			
		}
		
		
	}
	
	
}


function reclutarFinal(){
	var tiempoR=0;
	
	for(let rf=0;rf<10;rf++){
		
		if(Ciudades[rf].pertenencia==1){
			
			if(Ciudades[rf].tropa.tiempoTerminarT!=0){
				if(Ciudades[rf].tropa.tiempoPausadoRec==0){
					tiempoR=Ciudades[rf].tropa.tiempoTerminarT-time;
			
					if(tiempoR<=0){
						switch (Ciudades[rf].tropa.tropaAAlistar) {
							case 8:	tropasInf1+=(Ciudades[rf].tropa.tropasMinimo*Ciudades[rf].tropa.nivelEdiAlInDeRecInf);										
									break;
									
							case 9:	if(Ciudades[rf].tropa.nivelEdiAlInDeRecInf==2){
										tropasInf2+=Ciudades[rf].tropa.tropasMinimo;
									}else{
										tropasInf2+=(Ciudades[rf].tropa.tropasMinimo*2);
									}					
									break;
									
							case 10: tropasInf3+=Ciudades[rf].tropa.tropasMinimo;								
									break;
							case 11: tropasArq1+=(Ciudades[rf].tropa.tropasMinimo*Ciudades[rf].tropa.nivelEdiAlInDeRecArq);									
									break;
							case 12: if(Ciudades[rf].tropa.nivelEdiAlInDeRecArq==2){
										tropasArq2+=Ciudades[rf].tropa.tropasMinimo;
									}else{
										tropasArq2+=(Ciudades[rf].tropa.tropasMinimo*2);
									}							
									break;								
							case 13: tropasArq3+=Ciudades[rf].tropa.tropasMinimo;							
									break;
							
							case 14: tropasCab1+=(Ciudades[rf].tropa.tropasMinimo*Ciudades[rf].tropa.nivelEdiAlInDeRecCab);	
									break;
									
							case 15: if(Ciudades[rf].tropa.nivelEdiAlInDeRecCab==2){
										tropasCab2+=Ciudades[rf].tropa.tropasMinimo;
									}else{
										tropasCab2+=(Ciudades[rf].tropa.tropasMinimo*2);
									}							
									break;
									
							case 16: tropasCab3+=Ciudades[rf].tropa.tropasMinimo;								
									break;
							
							
							
							default: break;
						}
						numTropas=tropasInf1+tropasArq1+tropasCab1+tropasInf2+tropasInf3+tropasArq2+tropasCab2+tropasArq3+tropasCab3;
						Ciudades[rf].tropa.tiempoTerminarT=0;
						Ciudades[rf].tropa.hayColaTropa=false;
						//$("#Cancelar").hide();
						
						
					}
				}else{
					var today61=new Date();//tiempo del juego
					Ciudades[rf].tropa.tiempoTerminarT=Ciudades[rf].tropa.tiempoPausadoRec+today61.getTime();
				}
				
			}
			
		}
		
		
	}
	
	
}



function dibujarEspada(X,Y){
	//var tam=40;
	//x e y son coordenadas
	var temporal3=0;
	var contador=0;
	//var temporalCiudad=0;
	for(let a3 = 0; a3<10; a3++){
		if(Ciudades[a3].pertenencia==1){
			temporal3=Ciudades[a3].id;
		}
		
	}
	//console.log(X-camara.posX);
	//console.log(Px1[1]);
	//console.log(Y-camara.posY+mapay_inicial);
	//console.log(Py1[1]);
	//console.log(temporal3);

	
	if((X-camara.posX>=Ciudades[1].posX&&X-camara.posX<=Ciudades[1].posX+40&&Y-camara.posY+mapay_inicial>=Ciudades[1].posY&&Y-camara.posY+mapay_inicial<=Ciudades[1].posY+40&&temporal3==1)){
		//contextoJ1.drawImage(imgSword,Px1[1],Py1[1],512,512);
		//console.log("holis");
		espada=true;
		espadaX=X;
        espadaY=Y;
	}else{
		contador+=1;
	}
	if((X-camara.posX>=Ciudades[2].posX&&X-camara.posX<=Ciudades[2].posX+40&&Y-camara.posY+mapay_inicial>=Ciudades[2].posY&&Y-camara.posY+mapay_inicial<=Ciudades[2].posY+40&&temporal3==2)){
		//contextoJ1.drawImage(imgSword,Px1[1],Py1[1],512,512);
		//console.log("holis");
		espada=true;
		espadaX=X;
        espadaY=Y;
	}else{
		contador+=1;
	}
	if((X-camara.posX>=Ciudades[3].posX&&X-camara.posX<=Ciudades[3].posX+40&&Y-camara.posY+mapay_inicial>=Ciudades[3].posY&&Y-camara.posY+mapay_inicial<=Ciudades[3].posY+40&&temporal3==3)){
		//contextoJ1.drawImage(imgSword,Px1[1],Py1[1],512,512);
		//console.log("holis");
		espada=true;
		espadaX=X;
        espadaY=Y;
	}else{
		contador+=1;
	}
	if((X-camara.posX>=Ciudades[4].posX&&X-camara.posX<=Ciudades[4].posX+40&&Y-camara.posY+mapay_inicial>=Ciudades[4].posY&&Y-camara.posY+mapay_inicial<=Ciudades[4].posY+40&&temporal3==4)){
		//contextoJ1.drawImage(imgSword,Px1[1],Py1[1],512,512);
		//console.log("holis");
		espada=true;
		espadaX=X;
        espadaY=Y;
	}else{
		contador+=1;
	}
	if((X-camara.posX>=Ciudades[5].posX&&X-camara.posX<=Ciudades[5].posX+40&&Y-camara.posY+mapay_inicial>=Ciudades[5].posY&&Y-camara.posY+mapay_inicial<=Ciudades[5].posY+40&&temporal3==5)){
		//contextoJ1.drawImage(imgSword,Px1[1],Py1[1],512,512);
		//console.log("holis");
		espada=true;
		espadaX=X;
        espadaY=Y;
	}else{
		contador+=1;
	}
	if((X-camara.posX>=Ciudades[6].posX&&X-camara.posX<=Ciudades[6].posX+40&&Y-camara.posY+mapay_inicial>=Ciudades[6].posY&&Y-camara.posY+mapay_inicial<=Ciudades[6].posY+40&&temporal3==6)){
		//contextoJ1.drawImage(imgSword,Px1[1],Py1[1],512,512);
		//console.log("holis");
		espada=true;
		espadaX=X;
        espadaY=Y;
	}else{
		contador+=1;
	}if((X-camara.posX>=Ciudades[7].posX&&X-camara.posX<=Ciudades[7].posX+40&&Y-camara.posY+mapay_inicial>=Ciudades[7].posY&&Y-camara.posY+mapay_inicial<=Ciudades[7].posY+40&&temporal3==7)){
		//contextoJ1.drawImage(imgSword,Px1[1],Py1[1],512,512);
		//console.log("holis");
		espada=true;
		espadaX=X;
        espadaY=Y;
	}else{
		contador+=1;
	}
	if((X-camara.posX>=Ciudades[8].posX&&X-camara.posX<=Ciudades[8].posX+40&&Y-camara.posY+mapay_inicial>=Ciudades[8].posY&&Y-camara.posY+mapay_inicial<=Ciudades[8].posY+40&&temporal3==8)){
		//contextoJ1.drawImage(imgSword,Px1[1],Py1[1],512,512);
		//console.log("holis");
		espada=true;
		espadaX=X;
        espadaY=Y;
	}else{
		contador+=1;
	}
	if((X-camara.posX>=Ciudades[9].posX&&X-camara.posX<=Ciudades[9].posX+40&&Y-camara.posY+mapay_inicial>=Ciudades[9].posY&&Y-camara.posY+mapay_inicial<=Ciudades[9].posY+40&&temporal3==9)){
		//contextoJ1.drawImage(imgSword,Px1[1],Py1[1],512,512);
		//console.log("holis");
		espada=true;
		espadaX=X;
        espadaY=Y;
	}else{
		contador+=1;
	}
	
	if(contador==9){
		espada=false;
	}
	
	
	
}




//funciones para batalla y de batalla

function generarAtaque(id){
	var temporal=0;
	//var temporalCiudad=0;
	for(let a1 = 0; a1<10; a1++){
		if(Ciudades[a1].pertenencia==1){
			temporal=Ciudades[a1].id;
		}
		
	}
	
	for(let a = 0; a<10; a++){
		if(id==(temporal+1)){
			$("#Atacar").show();
			puedoAtacar=true;
			//puedoAtacar=true;
			//console.log("atacar");
		}else{
			$("#Atacar").hide();
			puedoAtacar=false;
			//console.log("no se puede atacar");
		}
		
	}
	
}


function dibujarCampoBatalla(){
	
	var temporal2=0;
	//var temporalCiudad=0;
	for(let a10 = 0; a10<10; a10++){
		if(Ciudades[a10].pertenencia==1){
			temporal2=Ciudades[a10].id;
		}
		
	}
	
	
	contextoBatalla.beginPath();		
	contextoBatalla.fillStyle = "black";
	contextoBatalla.font="20pt Verdana";
	
	//contextoBatalla.drawImage(imgbatalla1,camara.posX,camara.posY,1024,1024);//dibuja el campo de batalla
	switch (temporal2) {
			
			case 1:	contextoBatalla.drawImage(imgbatalla1,0,0,1024,1024);
			contextoBatalla.drawImage(imgCiudad,875,300,128,128);
			contextoBatalla.drawImage(imgCiudad2,25,300,128,128);
			contextoBatalla.fillText(""+Ciudades[0].nombre,875,450);
			contextoBatalla.fillText(""+Ciudades[1].nombre,25,450);
			contextoBatalla.font="12pt Verdana";
			contextoBatalla.fillText("Resistencia:"+Ciudades[0].puntosDeVida,875,475);
			contextoBatalla.fillText("Resistencia:"+Ciudades[1].puntosDeVida,25,475);
			break;
			case 2:	contextoBatalla.drawImage(imgbatalla2,0,0,1024,1024);
			contextoBatalla.drawImage(imgCiudad,875,300,128,128);
			contextoBatalla.drawImage(imgCiudad2,25,300,128,128);
			contextoBatalla.fillText(""+Ciudades[1].nombre,875,450);
			contextoBatalla.fillText(""+Ciudades[2].nombre,25,450);
			contextoBatalla.font="12pt Verdana";
			contextoBatalla.fillText("Resistencia:"+Ciudades[1].puntosDeVida,875,475);
			contextoBatalla.fillText("Resistencia:"+Ciudades[2].puntosDeVida,25,475);
			break;
			case 3:	contextoBatalla.drawImage(imgbatalla3,0,0,1024,1024);
			contextoBatalla.drawImage(imgCiudad,875,300,128,128);
			contextoBatalla.drawImage(imgCiudad2,25,300,128,128);
			contextoBatalla.fillText(""+Ciudades[2].nombre,875,450);
			contextoBatalla.fillText(""+Ciudades[3].nombre,25,450);
			contextoBatalla.font="12pt Verdana";
			contextoBatalla.fillText("Resistencia:"+Ciudades[2].puntosDeVida,875,475);
			contextoBatalla.fillText("Resistencia:"+Ciudades[3].puntosDeVida,25,475);
			break;
			case 4:	contextoBatalla.drawImage(imgbatalla4,0,0,1024,1024);
			contextoBatalla.drawImage(imgCiudad,875,300,128,128);
			contextoBatalla.drawImage(imgCiudad2,25,300,128,128);
			contextoBatalla.fillText(""+Ciudades[3].nombre,875,450);
			contextoBatalla.fillText(""+Ciudades[4].nombre,25,450);
			contextoBatalla.font="12pt Verdana";
			contextoBatalla.fillText("Resistencia:"+Ciudades[3].puntosDeVida,875,475);
			contextoBatalla.fillText("Resistencia:"+Ciudades[4].puntosDeVida,25,475);
			break;
			case 5:	contextoBatalla.drawImage(imgbatalla5,0,0,1024,1024);
			contextoBatalla.drawImage(imgCiudad,875,300,128,128);
			contextoBatalla.drawImage(imgCiudad2,25,300,128,128);
			contextoBatalla.fillText(""+Ciudades[4].nombre,875,450);
			contextoBatalla.fillText(""+Ciudades[5].nombre,25,450);
			contextoBatalla.font="12pt Verdana";
			contextoBatalla.fillText("Resistencia:"+Ciudades[4].puntosDeVida,875,475);
			contextoBatalla.fillText("Resistencia:"+Ciudades[5].puntosDeVida,25,475);
			break;
			case 6:	contextoBatalla.drawImage(imgbatalla6,0,0,1024,1024);
			contextoBatalla.drawImage(imgCiudad,875,300,128,128);
			contextoBatalla.drawImage(imgCiudad3,25,300,128,128);
			contextoBatalla.fillText(""+Ciudades[5].nombre,875,450);
			contextoBatalla.fillText(""+Ciudades[6].nombre,25,450);
			contextoBatalla.font="12pt Verdana";
			contextoBatalla.fillText("Resistencia:"+Ciudades[5].puntosDeVida,875,475);
			contextoBatalla.fillText("Resistencia:"+Ciudades[6].puntosDeVida,25,475);
			break;
			case 7:	contextoBatalla.drawImage(imgbatalla7,0,0,1024,1024);
			contextoBatalla.drawImage(imgCiudad,875,300,128,128);
			contextoBatalla.drawImage(imgCiudad3,25,300,128,128);
			contextoBatalla.fillText(""+Ciudades[6].nombre,875,450);
			contextoBatalla.fillText(""+Ciudades[7].nombre,25,450);
			contextoBatalla.font="12pt Verdana";
			contextoBatalla.fillText("Resistencia:"+Ciudades[6].puntosDeVida,875,475);
			contextoBatalla.fillText("Resistencia:"+Ciudades[7].puntosDeVida,25,475);
			break;
			case 8:	contextoBatalla.drawImage(imgbatalla8,0,0,1024,1024);
			contextoBatalla.drawImage(imgCiudad,875,300,128,128);
			contextoBatalla.drawImage(imgCiudad3,25,300,128,128);
			contextoBatalla.fillText(""+Ciudades[7].nombre,875,450);
			contextoBatalla.fillText(""+Ciudades[8].nombre,25,450);
			contextoBatalla.font="12pt Verdana";
			contextoBatalla.fillText("Resistencia:"+Ciudades[7].puntosDeVida,875,475);
			contextoBatalla.fillText("Resistencia:"+Ciudades[8].puntosDeVida,25,475);
			break;
			case 9:	contextoBatalla.drawImage(imgbatalla9,0,0,1024,1024);
			contextoBatalla.drawImage(imgCiudad,875,300,128,128);
			contextoBatalla.drawImage(imgCiudad4,25,300,128,128);
			contextoBatalla.fillText(""+Ciudades[8].nombre,875,450);
			contextoBatalla.fillText(""+Ciudades[9].nombre,25,450);
			contextoBatalla.font="12pt Verdana";
			contextoBatalla.fillText("Resistencia:"+Ciudades[8].puntosDeVida,875,475);
			contextoBatalla.fillText("Resistencia:"+Ciudades[9].puntosDeVida,25,475);
			break;
			
			default: break;
		}
	
	//contextoBatalla.beginPath();		
	//contextoBatalla.fillStyle = "black";
	contextoBatalla.fillRect(200, 170, 625,2);// para separar
	contextoBatalla.fillRect(200, 300, 625,2);// para separar
	contextoBatalla.fillRect(200, 430, 625,2);// para separar
	contextoBatalla.fillRect(200, 560, 625,2);// para separar
	contextoBatalla.fill();
	contextoBatalla.closePath();
	
}


function alertaBatalla(){
	
	var tiempoFalta=0;// tiempo que falta para ataque
	contextoJ1.drawImage(imgAlerta,75,250,128,128);
	
	if(iniciarTiempo==true){
		if(tiempoPausado==0){
			var today4=new Date();//tiempo del juego
			tiempoRestante=today4.getTime()+(tiempoAtaque*1000);
			iniciarTiempo=false;
		}else{
			var today4=new Date();//tiempo del juego
			tiempoRestante=tiempoPausado+today4.getTime();
			iniciarTiempo=false;
		}
		
	}
	
	tiempoFalta=tiempoRestante-time;
	
	if(tiempoFalta<0){
		tiempoFalta=0;
		
		//aqui va para activar batalla defensiva
		alertaGeneraAtaque();
	}
	
	if(enLienzoMapa==true){
	
		contextoJ1.beginPath();
		contextoJ1.font="17pt Verdana";
		contextoJ1.fillStyle = "red";
		if(tiempoFalta/1000<=60&&contPeligro==0){
			
			contPeligro+=1;
		}else{
			contextoJ1.fillText("ALERTA",105,295);
			contPeligro=0;
		}
		contextoJ1.fillText(tiempoFalta/1000,90,325);
		contextoJ1.fill();
		contextoJ1.closePath();	
	}
	if(enLienzoCiudad==true){
		contextoCiudad.drawImage(imgAlerta,65,250,128,100);
		contextoCiudad.beginPath();
		contextoCiudad.font="17pt Verdana";
		contextoCiudad.fillStyle = "red";
		if(tiempoFalta/1000<=60&&contPeligro==0){
			
			contPeligro+=1;
		}else{
			contextoCiudad.fillText("ALERTA",95,295);
			contPeligro=0;
		}
		contextoCiudad.fillText(tiempoFalta/1000,80,325);
		contextoCiudad.fill();
		contextoCiudad.closePath();	
	}
	
	
}


function dibujarCarrilTropas(){
	
	contextoBatalla.beginPath();		
	contextoBatalla.fillStyle = "red";

	contextoBatalla.fillRect(120, 600, 800,2);// para separar
	contextoBatalla.fillRect(120, 600, 2,100);// para separar
	contextoBatalla.fillRect(918, 600, 2,100);// para separar
	contextoBatalla.fillRect(120, 700, 800,2);// para separar
	contextoBatalla.fill();
	contextoBatalla.fillStyle = "black";
	contextoBatalla.font="18pt Verdana";
	contextoBatalla.fillText("EJERCITO",450,595);
	contextoBatalla.fill();
	
	if(tropasInf1>0){
		contextoBatalla.drawImage(imgTInf1,138,618,64,64);
		contextoBatalla.fillStyle = "black";
		contextoBatalla.font="12pt Verdana";
		if(tropasInf1>=20){
			contextoBatalla.fillText("20",180,675);
		}else{
			contextoBatalla.fillText(""+tropasInf1,180,675);
		}
		
		contextoBatalla.fillText(""+tropasInf1,160,698);
		contextoBatalla.fill();
	}else{
		contextoBatalla.fillStyle = "grey";
		contextoBatalla.fillRect(138, 618, 64,64);// para separar
		contextoBatalla.fill();
	}
	
	if(tropasInf2>0){
		contextoBatalla.drawImage(imgTInf2,218,618,64,64);
		contextoBatalla.fillStyle = "black";
		contextoBatalla.font="12pt Verdana";
		if(tropasInf2>=20){
			contextoBatalla.fillText("20",260,675);
		}else{
			contextoBatalla.fillText(""+tropasInf2,260,675);
		}
		
		contextoBatalla.fillText(""+tropasInf2,240,698);
		contextoBatalla.fill();
	}else{
		contextoBatalla.fillStyle = "grey";
		contextoBatalla.fillRect(218, 618, 64,64);// para separar
		contextoBatalla.fill();
	}
	
	if(tropasInf3>0){
		contextoBatalla.drawImage(imgTInf3,298,618,64,64);
		contextoBatalla.fillStyle = "black";
		contextoBatalla.font="12pt Verdana";
		if(tropasInf3>=20){
			contextoBatalla.fillText("20",340,675);
		}else{
			contextoBatalla.fillText(""+tropasInf3,340,675);
		}
		
		contextoBatalla.fillText(""+tropasInf3,320,698);
		contextoBatalla.fill();
		
	}else{
		contextoBatalla.fillStyle = "grey";
		contextoBatalla.fillRect(298, 618, 64,64);// para separar
		contextoBatalla.fill();
	}
	
	
	if(tropasArq1>0){
		contextoBatalla.drawImage(imgTArq1,398,618,64,64);
		contextoBatalla.fillStyle = "black";
		contextoBatalla.font="12pt Verdana";
		if(tropasArq1>=20){
			contextoBatalla.fillText("20",440,675);
		}else{
			contextoBatalla.fillText(""+tropasArq1,440,675);
		}
		
		contextoBatalla.fillText(""+tropasArq1,420,698);
		contextoBatalla.fill();
		
	}else{
		contextoBatalla.fillStyle = "grey";
		contextoBatalla.fillRect(398, 618, 64,64);// para separar
		contextoBatalla.fill();
	}
	
	if(tropasArq2>0){
		contextoBatalla.drawImage(imgTArq2,478,618,64,64);
		contextoBatalla.fillStyle = "black";
		contextoBatalla.font="12pt Verdana";
		if(tropasArq2>=20){
			contextoBatalla.fillText("20",520,675);
		}else{
			contextoBatalla.fillText(""+tropasArq2,520,675);
		}
		
		contextoBatalla.fillText(""+tropasArq2,500,698);
		contextoBatalla.fill();
		
	}else{
		contextoBatalla.fillStyle = "grey";
		contextoBatalla.fillRect(478, 618, 64,64);// para separar
		contextoBatalla.fill();
	}
	
	
	if(tropasArq3>0){
		contextoBatalla.drawImage(imgTArq3,558,618,64,64);
		contextoBatalla.fillStyle = "black";
		contextoBatalla.font="12pt Verdana";
		if(tropasArq3>=20){
			contextoBatalla.fillText("20",600,675);
		}else{
			contextoBatalla.fillText(""+tropasArq3,600,675);
		}
		
		contextoBatalla.fillText(""+tropasArq3,580,698);
		contextoBatalla.fill();
		
	}else{
		contextoBatalla.fillStyle = "grey";
		contextoBatalla.fillRect(558, 618, 64,64);// para separar
		contextoBatalla.fill();
	}
	
	
	
	if(tropasCab1>0){
		contextoBatalla.drawImage(imgTCab1,658,618,64,64);
		contextoBatalla.fillStyle = "black";
		contextoBatalla.font="12pt Verdana";
		if(tropasCab1>=20){
			contextoBatalla.fillText("20",660,675);
		}else{
			contextoBatalla.fillText(""+tropasCab1,660,675);
		}
		
		contextoBatalla.fillText(""+tropasCab1,680,698);
		contextoBatalla.fill();
		
	}else{
		contextoBatalla.fillStyle = "grey";
		contextoBatalla.fillRect(658, 618, 64,64);// para separar
		contextoBatalla.fill();
	}
	
	if(tropasCab2>0){
		contextoBatalla.drawImage(imgTCab2,738,618,64,64);
		contextoBatalla.fillStyle = "black";
		contextoBatalla.font="12pt Verdana";
		if(tropasCab2>=20){
			contextoBatalla.fillText("20",740,675);
		}else{
			contextoBatalla.fillText(""+tropasCab2,740,675);
		}
		
		contextoBatalla.fillText(""+tropasCab2,760,698);
		contextoBatalla.fill();
		
	}else{
		contextoBatalla.fillStyle = "grey";
		contextoBatalla.fillRect(738, 618, 64,64);// para separar
		contextoBatalla.fill();
	}
	
	
	if(tropasCab3>0){
		contextoBatalla.drawImage(imgTCab3,818,618,64,64);
		contextoBatalla.fillStyle = "black";
		contextoBatalla.font="12pt Verdana";
		if(tropasCab3>=20){
			contextoBatalla.fillText("20",820,675);
		}else{
			contextoBatalla.fillText(""+tropasCab3,820,675);
		}
		
		contextoBatalla.fillText(""+tropasCab3,840,698);
		contextoBatalla.fill();
		
	}else{
		contextoBatalla.fillStyle = "grey";
		contextoBatalla.fillRect(818, 618, 64,64);// para separar
		contextoBatalla.fill();
	}
	
	
	
	
	contextoBatalla.closePath();
}


function areaSalidaBatalla(){
	
	contextoBatalla.beginPath();		
	contextoBatalla.fillStyle = "black";
	contextoBatalla.font="15pt Verdana";
	for(let s=0;s<3;s++){
		//mi lado	
		contextoBatalla.fillRect(725, 195+(s*130), 2,20);// para separar
		contextoBatalla.fillRect(725, 225+(s*130), 2,20);// para separar
		contextoBatalla.fillRect(725, 255+(s*130), 2,20);// para separar
		contextoBatalla.fillText("SALIDA",740,240+(s*130));
			
		contextoBatalla.fillRect(825, 195+(s*130), 2,20);// para separar
		contextoBatalla.fillRect(825, 225+(s*130), 2,20);// para separar
		contextoBatalla.fillRect(825, 255+(s*130), 2,20);// para separar
		
		contextoBatalla.fillRect(735, 185+(s*130), 20,2);// para separar
		contextoBatalla.fillRect(765, 185+(s*130), 20,2);// para separar
		contextoBatalla.fillRect(795, 185+(s*130), 20,2);// para separar
		
		contextoBatalla.fillRect(735, 285+(s*130), 20,2);// para separar
		contextoBatalla.fillRect(765, 285+(s*130), 20,2);// para separar
		contextoBatalla.fillRect(795, 285+(s*130), 20,2);// para separar
		
		
		
		//lado enemigo
		contextoBatalla.fillRect(200, 195+(s*130), 2,20);// para separar
		contextoBatalla.fillRect(200, 225+(s*130), 2,20);// para separar
		contextoBatalla.fillRect(200, 255+(s*130), 2,20);// para separar
		contextoBatalla.fillText("ENEMIGO",203,240+(s*130));
		
		contextoBatalla.fillRect(300, 195+(s*130), 2,20);// para separar
		contextoBatalla.fillRect(300, 225+(s*130), 2,20);// para separar
		contextoBatalla.fillRect(300, 255+(s*130), 2,20);// para separar
		
		contextoBatalla.fillRect(210, 185+(s*130), 20,2);// para separar
		contextoBatalla.fillRect(240, 185+(s*130), 20,2);// para separar
		contextoBatalla.fillRect(270, 185+(s*130), 20,2);// para separar
		
		contextoBatalla.fillRect(210, 285+(s*130), 20,2);// para separar
		contextoBatalla.fillRect(240, 285+(s*130), 20,2);// para separar
		contextoBatalla.fillRect(270, 285+(s*130), 20,2);// para separar
		
		
		//zona ataque
		contextoBatalla.fillStyle = "red";
		contextoBatalla.fillRect(305, 185+(s*130), 415,2);// para separar
		contextoBatalla.fillRect(305, 285+(s*130), 415,2);// para separar
		contextoBatalla.fillRect(305, 185+(s*130), 2,100);// para separar
		contextoBatalla.fillRect(718, 185+(s*130), 2,100);// para separar
		contextoBatalla.fillText("ZONA DE GUERRA",425,240+(s*130));
		contextoBatalla.fill();
		contextoBatalla.fillStyle = "black";
	}
	
	
	
	contextoBatalla.fill();
	contextoBatalla.closePath();
}


function crearTropasEnemigas(){
	var temporalID=0;
	//var temporalCiudad=0;
	for(let C1 = 0; C1<10; C1++){
		if(Ciudades[C1].pertenencia==1){
			temporalID=Ciudades[C1].id;
		}
		
	}
	var soldadosTotal=0;
	for (let e2=0;e2<9;e2++){
		soldadosTotal+=ejercitoEnemigo[e2];
	}
	if(soldadosTotal!=Ciudades[temporalID].tropa.cantidadTropas){
		//console.log(ejercitoEnemigo[0]);
		switch (temporalID) {
			
			case 1:ejercitoEnemigo[0]=Ciudades[temporalID].tropa.cantidadTropas*0.4;
				   ejercitoEnemigo[3]=Ciudades[temporalID].tropa.cantidadTropas*0.4;
				   ejercitoEnemigo[6]=Ciudades[temporalID].tropa.cantidadTropas*0.2;			
			       break;
				   
			case 2:ejercitoEnemigo[0]=Ciudades[temporalID].tropa.cantidadTropas*0.4;
				   ejercitoEnemigo[3]=Ciudades[temporalID].tropa.cantidadTropas*0.4;
				   ejercitoEnemigo[6]=Ciudades[temporalID].tropa.cantidadTropas*0.2;
				   break;
				   
			case 3:ejercitoEnemigo[0]=Ciudades[temporalID].tropa.cantidadTropas*0.4;
				   ejercitoEnemigo[3]=Ciudades[temporalID].tropa.cantidadTropas*0.2;
				   ejercitoEnemigo[6]=Ciudades[temporalID].tropa.cantidadTropas*0.4;
				   break;
			
			case 4:ejercitoEnemigo[0]=Ciudades[temporalID].tropa.cantidadTropas*0.4;
				   ejercitoEnemigo[3]=Ciudades[temporalID].tropa.cantidadTropas*0.4;
				   ejercitoEnemigo[6]=Ciudades[temporalID].tropa.cantidadTropas*0.2;
				   break;
			
			case 5:ejercitoEnemigo[0]=Ciudades[temporalID].tropa.cantidadTropas*0.4;
				   ejercitoEnemigo[3]=Ciudades[temporalID].tropa.cantidadTropas*0.2;
				   ejercitoEnemigo[6]=Ciudades[temporalID].tropa.cantidadTropas*0.4;
				   break;
			
			
			
			
			
			case 6:ejercitoEnemigo[1]=Ciudades[temporalID].tropa.cantidadTropas*0.4;
				   ejercitoEnemigo[4]=Ciudades[temporalID].tropa.cantidadTropas*0.4;
				   ejercitoEnemigo[7]=Ciudades[temporalID].tropa.cantidadTropas*0.2;
				   break;				   
				   
			case 7:ejercitoEnemigo[1]=Ciudades[temporalID].tropa.cantidadTropas*0.4;
				   ejercitoEnemigo[4]=Ciudades[temporalID].tropa.cantidadTropas*0.2;
				   ejercitoEnemigo[7]=Ciudades[temporalID].tropa.cantidadTropas*0.4;
				   break;
			
			case 8:ejercitoEnemigo[1]=Ciudades[temporalID].tropa.cantidadTropas*0.2;
				   ejercitoEnemigo[4]=Ciudades[temporalID].tropa.cantidadTropas*0.4;
				   ejercitoEnemigo[7]=Ciudades[temporalID].tropa.cantidadTropas*0.4;
				   break;
			
			
			
			
			
			case 9:ejercitoEnemigo[2]=Ciudades[temporalID].tropa.cantidadTropas*0.2;
				   ejercitoEnemigo[5]=Ciudades[temporalID].tropa.cantidadTropas*0.2;
				   ejercitoEnemigo[8]=Ciudades[temporalID].tropa.cantidadTropas*0.6;
				   break;
			
			default: break;
		}

	}
}


function porcentajeFuerzaBruta(){
	
	var fuerzaBrutaYo=0;	
	var fuerzaBrutaEnemigo=0;
	
	fuerzaBrutaYo=tropasInf1*fuerzaTropasInf1+tropasInf2*fuerzaTropasInf2+tropasInf3*fuerzaTropasInf3+tropasArq1*fuerzaTropasArq1+tropasArq2*fuerzaTropasArq2+tropasArq3*fuerzaTropasArq3+tropasCab1*fuerzaTropasCab1+tropasCab2*fuerzaTropasCab2+tropasCab3*fuerzaTropasCab3;			  
	
	fuerzaBrutaEnemigo=ejercitoEnemigo[0]*fuerzaTropasInf1+ejercitoEnemigo[1]*fuerzaTropasInf2+ejercitoEnemigo[2]*fuerzaTropasInf3+ejercitoEnemigo[3]*fuerzaTropasArq1+ejercitoEnemigo[4]*fuerzaTropasArq2+ejercitoEnemigo[5]*fuerzaTropasArq3+ejercitoEnemigo[6]*fuerzaTropasCab1+ejercitoEnemigo[7]*fuerzaTropasCab2+ejercitoEnemigo[8]*fuerzaTropasCab3;
	
	var totalBruto=fuerzaBrutaYo+fuerzaBrutaEnemigo;
	
	miFuerzaBruta=(fuerzaBrutaYo/totalBruto)*100;
	enemigoFuerzaBruta=(fuerzaBrutaEnemigo/totalBruto)*100;
	//console.log(ejercitoEnemigo[0]);
	//console.log(ejercitoEnemigo[3]);
	//console.log(ejercitoEnemigo[6]);
	//console.log(fuerzaBrutaYo);
	//console.log(fuerzaBrutaEnemigo);
	
}


function generarCuadroPreBatalla(){
	
	var temC=0;
	//var temporalCiudad=0;
	for(let b = 0; b<10; b++){
		if(Ciudades[b].pertenencia==1){
			temC=Ciudades[b].id;
		}
		
	}
	
	contextoBatalla.beginPath();
	contextoBatalla.drawImage(fondoBatalla,200,170,625,390);
	//contextoBatalla.fillStyle = "white";
	contextoBatalla.font="20pt Verdana";
	
	//contextoBatalla.fillRect(200, 170, 625,390);// para separar
	contextoBatalla.fill();
	
	contextoBatalla.fillStyle = "black";
	
	switch (temC) {
			
			case 1:	
			contextoBatalla.drawImage(imgCiudad,700,300,64,64);
			contextoBatalla.drawImage(imgCiudad2,250,300,64,64);
			contextoBatalla.font="12pt Verdana";
			contextoBatalla.fillText(""+Ciudades[0].nombre,700,380);
			contextoBatalla.fillText(""+Ciudades[1].nombre,250,380);
			contextoBatalla.font="15pt Verdana";
			contextoBatalla.fillText("Tropas:"+Ciudades[1].tropa.cantidadTropas,250,420);
			contextoBatalla.fillText("Tropas:"+numTropas,700,420);
			
			contextoBatalla.fillText("Probabilidad",450,315);
			contextoBatalla.font="25pt Verdana";
			contextoBatalla.fillText(""+Math.trunc(miFuerzaBruta)+"%",490,365);
			contextoBatalla.font="15pt Verdana";
			contextoBatalla.fillText("Victoria",475,415);
			if(batallaDefensiva==true){
				contextoBatalla.fillText("Te atacan",465,465);
				contextoBatalla.fillText("DEBES LUCHAR",445,515);
			}
			
			break;
			case 2:	
			contextoBatalla.drawImage(imgCiudad,700,300,64,64);
			contextoBatalla.drawImage(imgCiudad2,250,300,64,64);
			contextoBatalla.font="12pt Verdana";
			contextoBatalla.fillText(""+Ciudades[1].nombre,700,380);
			contextoBatalla.fillText(""+Ciudades[2].nombre,250,380);
			contextoBatalla.font="15pt Verdana";
			contextoBatalla.fillText("Tropas:"+Ciudades[2].tropa.cantidadTropas,250,420);
			contextoBatalla.fillText("Tropas:"+numTropas,700,420);
			
			contextoBatalla.fillText("Probabilidad",450,315);
			contextoBatalla.fillText(""+Math.trunc(miFuerzaBruta)+"%",490,365);
			contextoBatalla.fillText("Victoria",475,415);
			if(batallaDefensiva==true){
				contextoBatalla.fillText("Te atacan",465,465);
				contextoBatalla.fillText("DEBES LUCHAR",445,515);
			}
			
			break;
			case 3:	contextoBatalla.drawImage(imgCiudad,700,300,64,64);
			contextoBatalla.drawImage(imgCiudad2,250,300,64,64);
			contextoBatalla.font="12pt Verdana";
			contextoBatalla.fillText(""+Ciudades[2].nombre,700,380);
			contextoBatalla.fillText(""+Ciudades[3].nombre,250,380);
			contextoBatalla.font="15pt Verdana";
			contextoBatalla.fillText("Tropas:"+Ciudades[3].tropa.cantidadTropas,250,420);
			contextoBatalla.fillText("Tropas:"+numTropas,700,420);
			
			contextoBatalla.fillText("Probabilidad",450,315);
			contextoBatalla.fillText(""+Math.trunc(miFuerzaBruta)+"%",490,365);
			contextoBatalla.fillText("Victoria",475,415);
			if(batallaDefensiva==true){
				contextoBatalla.fillText("Te atacan",465,465);
				contextoBatalla.fillText("DEBES LUCHAR",445,515);
			}
			break;
			case 4:	contextoBatalla.drawImage(imgCiudad,700,300,64,64);
			contextoBatalla.drawImage(imgCiudad2,250,300,64,64);
			contextoBatalla.font="12pt Verdana";
			contextoBatalla.fillText(""+Ciudades[3].nombre,700,380);
			contextoBatalla.fillText(""+Ciudades[4].nombre,250,380);
			contextoBatalla.font="15pt Verdana";
			contextoBatalla.fillText("Tropas:"+Ciudades[4].tropa.cantidadTropas,250,420);
			contextoBatalla.fillText("Tropas:"+numTropas,700,420);
			
			contextoBatalla.fillText("Probabilidad",450,315);
			contextoBatalla.fillText(""+Math.trunc(miFuerzaBruta)+"%",490,365);
			contextoBatalla.fillText("Victoria",475,415);
			if(batallaDefensiva==true){
				contextoBatalla.fillText("Te atacan",465,465);
				contextoBatalla.fillText("DEBES LUCHAR",445,515);
			}
			break;
			case 5:contextoBatalla.drawImage(imgCiudad,700,300,64,64);
			contextoBatalla.drawImage(imgCiudad2,250,300,64,64);
			contextoBatalla.font="12pt Verdana";
			contextoBatalla.fillText(""+Ciudades[4].nombre,700,380);
			contextoBatalla.fillText(""+Ciudades[5].nombre,250,380);
			contextoBatalla.font="15pt Verdana";
			contextoBatalla.fillText("Tropas:"+Ciudades[5].tropa.cantidadTropas,250,420);
			contextoBatalla.fillText("Tropas:"+numTropas,700,420);
			
			contextoBatalla.fillText("Probabilidad",450,315);
			contextoBatalla.fillText(""+Math.trunc(miFuerzaBruta)+"%",490,365);
			contextoBatalla.fillText("Victoria",475,415);
			if(batallaDefensiva==true){
				contextoBatalla.fillText("Te atacan",465,465);
				contextoBatalla.fillText("DEBES LUCHAR",445,515);
			}
			break;
			case 6:	contextoBatalla.drawImage(imgCiudad,700,300,64,64);
			contextoBatalla.drawImage(imgCiudad2,250,300,64,64);
			contextoBatalla.font="12pt Verdana";
			contextoBatalla.fillText(""+Ciudades[5].nombre,700,380);
			contextoBatalla.fillText(""+Ciudades[6].nombre,250,380);
			contextoBatalla.font="15pt Verdana";
			contextoBatalla.fillText("Tropas:"+Ciudades[6].tropa.cantidadTropas,250,420);
			contextoBatalla.fillText("Tropas:"+numTropas,700,420);
			
			contextoBatalla.fillText("Probabilidad",450,315);
			contextoBatalla.fillText(""+Math.trunc(miFuerzaBruta)+"%",490,365);
			contextoBatalla.fillText("Victoria",475,415);
			if(batallaDefensiva==true){
				contextoBatalla.fillText("Te atacan",465,465);
				contextoBatalla.fillText("DEBES LUCHAR",445,515);
			}
			break;
			case 7:	contextoBatalla.drawImage(imgCiudad,700,300,64,64);
			contextoBatalla.drawImage(imgCiudad2,250,300,64,64);
			contextoBatalla.font="12pt Verdana";
			contextoBatalla.fillText(""+Ciudades[6].nombre,700,380);
			contextoBatalla.fillText(""+Ciudades[7].nombre,250,380);
			contextoBatalla.font="15pt Verdana";
			contextoBatalla.fillText("Tropas:"+Ciudades[7].tropa.cantidadTropas,250,420);
			contextoBatalla.fillText("Tropas:"+numTropas,700,420);
			
			contextoBatalla.fillText("Probabilidad",450,315);
			contextoBatalla.fillText(""+Math.trunc(miFuerzaBruta)+"%",490,365);
			contextoBatalla.fillText("Victoria",475,415);
			if(batallaDefensiva==true){
				contextoBatalla.fillText("Te atacan",465,465);
				contextoBatalla.fillText("DEBES LUCHAR",445,515);
			}
			break;
			case 8:	contextoBatalla.drawImage(imgCiudad,700,300,64,64);
			contextoBatalla.drawImage(imgCiudad2,250,300,64,64);
			contextoBatalla.font="12pt Verdana";
			contextoBatalla.fillText(""+Ciudades[7].nombre,700,380);
			contextoBatalla.fillText(""+Ciudades[8].nombre,250,380);
			contextoBatalla.font="15pt Verdana";
			contextoBatalla.fillText("Tropas:"+Ciudades[8].tropa.cantidadTropas,250,420);
			contextoBatalla.fillText("Tropas:"+numTropas,700,420);
			
			contextoBatalla.fillText("Probabilidad",450,315);
			contextoBatalla.fillText(""+Math.trunc(miFuerzaBruta)+"%",490,365);
			contextoBatalla.fillText("Victoria",475,415);
			if(batallaDefensiva==true){
				contextoBatalla.fillText("Te atacan",465,465);
				contextoBatalla.fillText("DEBES LUCHAR",445,515);
			}
			break;
			case 9:	contextoBatalla.drawImage(imgCiudad,700,300,64,64);
			contextoBatalla.drawImage(imgCiudad2,250,300,64,64);
			contextoBatalla.font="12pt Verdana";
			contextoBatalla.fillText(""+Ciudades[8].nombre,700,380);
			contextoBatalla.fillText(""+Ciudades[9].nombre,250,380);
			contextoBatalla.font="15pt Verdana";
			contextoBatalla.fillText("Tropas:"+Ciudades[9].tropa.cantidadTropas,250,420);
			contextoBatalla.fillText("Tropas:"+numTropas,700,420);
			
			contextoBatalla.fillText("Probabilidad",450,315);
			contextoBatalla.fillText(""+Math.trunc(miFuerzaBruta)+"%",490,365);
			contextoBatalla.fillText("Victoria",475,415);
			if(batallaDefensiva==true){
				contextoBatalla.fillText("Te atacan",465,465);
				contextoBatalla.fillText("DEBES LUCHAR",445,515);
			}
			break;
			
			default: break;
		}
	
	contextoBatalla.closePath();
	
	
}


function perderAbandonarBatalla(){
	var temID=0;
	//var temporalCiudad=0;
	for(let C10 = 0; C10<10; C10++){
		if(Ciudades[C10].pertenencia==1){
			temID=Ciudades[C10].id;
		}
		
	}
	if(abandono==false){
		if (batallaDefensiva==false){
			switch (temID) {
				
				case 1:	
					Dinero-=Math.trunc(Dinero*0.2);
					numMadera-=Math.trunc(numMadera*0.2);
					numLadrillos-=Math.trunc(numLadrillos*0.2);
					numMetal-=Math.trunc(numMetal*0.2);
					numCorazon-=1;
					ganancia=20;
				break;
				case 2:
					Dinero-=Math.trunc(Dinero*0.2);
					numMadera-=Math.trunc(numMadera*0.2);
					numLadrillos-=Math.trunc(numLadrillos*0.2);
					numMetal-=Math.trunc(numMetal*0.2);	
					numCorazon-=1;	
					ganancia=20;					
				break;
				case 3:	
					Dinero-=Math.trunc(Dinero*0.2);
					numMadera-=Math.trunc(numMadera*0.2);
					numLadrillos-=Math.trunc(numLadrillos*0.2);
					numMetal-=Math.trunc(numMetal*0.2);
					numCorazon-=1;
					ganancia=20;
				break;
				case 4:	
					Dinero-=Math.trunc(Dinero*0.2);
					numMadera-=Math.trunc(numMadera*0.2);
					numLadrillos-=Math.trunc(numLadrillos*0.2);
					numMetal-=Math.trunc(numMetal*0.2);
					numCorazon-=1;
					ganancia=20;
				break;
				case 5:
					Dinero-=Math.trunc(Dinero*0.2);
					numMadera-=Math.trunc(numMadera*0.2);
					numLadrillos-=Math.trunc(numLadrillos*0.2);
					numMetal-=Math.trunc(numMetal*0.2);
					numCorazon-=1;
					ganancia=20;
				break;
				case 6:	
					Dinero-=Math.trunc(Dinero*0.4);
					numMadera-=Math.trunc(numMadera*0.4);
					numLadrillos-=Math.trunc(numLadrillos*0.4);
					numMetal-=Math.trunc(numMetal*0.4);
					numCorazon-=1;
					ganancia=40;
				break;
				case 7:	
					Dinero-=Math.trunc(Dinero*0.4);
					numMadera-=Math.trunc(numMadera*0.4);
					numLadrillos-=Math.trunc(numLadrillos*0.4);
					numMetal-=Math.trunc(numMetal*0.4);
					numCorazon-=1;
					ganancia=40;
				break;
				case 8:
					Dinero-=Math.trunc(Dinero*0.4);
					numMadera-=Math.trunc(numMadera*0.4);
					numLadrillos-=Math.trunc(numLadrillos*0.4);
					numMetal-=Math.trunc(numMetal*0.4);
					numCorazon-=1;
					ganancia=40;
				break;
				case 9:	
					Dinero-=Math.trunc(Dinero*0.6);
					numMadera-=Math.trunc(numMadera*0.6);
					numLadrillos-=Math.trunc(numLadrillos*0.6);
					numMetal-=Math.trunc(numMetal*0.6);
					numCorazon-=1;
					ganancia=60;
				break;
				
				default: break;
			}
			
		}else{
			switch (temID) {
				
				case 1:	
					Dinero-=Math.trunc(Dinero*0.2);
					numMadera-=Math.trunc(numMadera*0.2);
					numLadrillos-=Math.trunc(numLadrillos*0.2);
					numMetal-=Math.trunc(numMetal*0.2);
					numCorazon=0;
					Ciudades[0].pertenencia=0;
					CiudadJugador=0;
					//Ciudades[0].tiempoTerminarPro=0;
					//console.log(Ciudades[0].pertenencia);
					ganancia=20;
				break;
				case 2:
					Dinero-=Math.trunc(Dinero*0.2);
					numMadera-=Math.trunc(numMadera*0.2);
					numLadrillos-=Math.trunc(numLadrillos*0.2);
					numMetal-=Math.trunc(numMetal*0.2);	
					numCorazon-=1;	
					Ciudades[1].pertenencia=0;	
					ganancia=20;					
				break;
				case 3:	
					Dinero-=Math.trunc(Dinero*0.2);
					numMadera-=Math.trunc(numMadera*0.2);
					numLadrillos-=Math.trunc(numLadrillos*0.2);
					numMetal-=Math.trunc(numMetal*0.2);
					numCorazon-=1;
					Ciudades[2].pertenencia=0;
					ganancia=20;
				break;
				case 4:	
					Dinero-=Math.trunc(Dinero*0.2);
					numMadera-=Math.trunc(numMadera*0.2);
					numLadrillos-=Math.trunc(numLadrillos*0.2);
					numMetal-=Math.trunc(numMetal*0.2);
					numCorazon-=1;
					Ciudades[3].pertenencia=0;
					ganancia=20;
				break;
				case 5:
					Dinero-=Math.trunc(Dinero*0.2);
					numMadera-=Math.trunc(numMadera*0.2);
					numLadrillos-=Math.trunc(numLadrillos*0.2);
					numMetal-=Math.trunc(numMetal*0.2);
					numCorazon-=1;
					Ciudades[4].pertenencia=0;
					ganancia=20;
				break;
				case 6:	
					Dinero-=Math.trunc(Dinero*0.4);
					numMadera-=Math.trunc(numMadera*0.4);
					numLadrillos-=Math.trunc(numLadrillos*0.4);
					numMetal-=Math.trunc(numMetal*0.4);
					numCorazon-=1;
					Ciudades[5].pertenencia=0;
					ganancia=40;
				break;
				case 7:	
					Dinero-=Math.trunc(Dinero*0.4);
					numMadera-=Math.trunc(numMadera*0.4);
					numLadrillos-=Math.trunc(numLadrillos*0.4);
					numMetal-=Math.trunc(numMetal*0.4);
					numCorazon-=1;
					Ciudades[6].pertenencia=0;
					ganancia=40;
				break;
				case 8:
					Dinero-=Math.trunc(Dinero*0.4);
					numMadera-=Math.trunc(numMadera*0.4);
					numLadrillos-=Math.trunc(numLadrillos*0.4);
					numMetal-=Math.trunc(numMetal*0.4);
					numCorazon-=1;
					Ciudades[7].pertenencia=0;
					ganancia=40;
				break;
				case 9:	
					Dinero-=Math.trunc(Dinero*0.6);
					numMadera-=Math.trunc(numMadera*0.6);
					numLadrillos-=Math.trunc(numLadrillos*0.6);
					numMetal-=Math.trunc(numMetal*0.6);
					numCorazon-=1;
					Ciudades[8].pertenencia=0;
					ganancia=60;
				break;
				
				default: break;
			}
		}
	}
}


//pelea
//X e Y son coordenadas
function tropaSeleccionarEnBatalla(X,Y){
	var contTemp=0;
	if(X>=138&&X<=202&&Y>=618&&Y<=682&&tropasInf1>0){
		//138,618,64,64
		tropaSeleccionB=1;
	}else{
		contTemp+=1;
	}
	
	if(X>=218&&X<=282&&Y>=618&&Y<=682&&tropasInf2>0){
		//218,618,64,64
		tropaSeleccionB=2;
	}else{
		contTemp+=1;
	}
	
	if(X>=298&&X<=362&&Y>=618&&Y<=682&&tropasInf3>0){
		//298,618,64,64
		tropaSeleccionB=3;
	}else{
		contTemp+=1;
	}
	
	if(X>=398&&X<=462&&Y>=618&&Y<=682&&tropasArq1>0){
		//398,618,64,64
		tropaSeleccionB=4;
	}else{
		contTemp+=1;
	}
	
	if(X>=478&&X<=542&&Y>=618&&Y<=682&&tropasArq2>0){
		//478,618,64,64
		tropaSeleccionB=5;
	}else{
		contTemp+=1;
	}
	
	if(X>=558&&X<=622&&Y>=618&&Y<=682&&tropasArq3>0){
		//558,618,64,64
		tropaSeleccionB=6;
	}else{
		contTemp+=1;
	}
	
	if(X>=658&&X<=722&&Y>=618&&Y<=682&&tropasCab1>0){
		//658,618,64,64
		tropaSeleccionB=7;
	}else{
		contTemp+=1;
	}
	
	if(X>=738&&X<=802&&Y>=618&&Y<=682&&tropasCab2>0){
		//738,618,64,64
		tropaSeleccionB=8;
	}else{
		contTemp+=1;
	}
	
	if(X>=818&&X<=882&&Y>=618&&Y<=682&&tropasCab3>0){
		//818,618,64,64
		tropaSeleccionB=9;
	}else{
		contTemp+=1;
	}
	
	if(contTemp==9){
		tropaSeleccionB=0;
	}
	
}


function puntoSalidaTropaSel(X,Y){
	var contTemp2=0;
	if(tropaSeleccionB!=0){
		//console.log("holis");
		if(X>=725&&X<=825&&Y>=185&&Y<=285){
			
			posTropaSelec=1;
			for(let b=0;b<tropaX.length;b++){
				if(tropaX[b]==0&&tropaY[b]==0&&tropaNumSoldado[b]==0){
					tropaX[b]=725;
					tropaY[b]=185;
					tipoSoldado[b]=tropaSeleccionB;
					//console.log("holis");
					//console.log(tropaY[b]);
					switch (tropaSeleccionB) {
						
						case 1:	if(tropasInf1>=20){
							tropaNumSoldado[b]=20;
							tropasInf1-=20;
						}else{
							tropaNumSoldado[b]=tropasInf1;
							tropasInf1=0;
						}
						break;
						case 2:	if(tropasInf2>=20){
							tropaNumSoldado[b]=20;
							tropasInf2-=20;
						}else{
							tropaNumSoldado[b]=tropasInf2;
							tropasInf2=0;
						}
						break;
						case 3:	if(tropasInf3>=20){
							tropaNumSoldado[b]=20;
							tropasInf3-=20;
						}else{
							tropaNumSoldado[b]=tropasInf3;
							tropasInf3=0;
						}
						break;
						case 4:	if(tropasArq1>=20){
							tropaNumSoldado[b]=20;
							tropasArq1-=20;
						}else{
							tropaNumSoldado[b]=tropasArq1;
							tropasArq1=0;
						}
						break;
						case 5:	if(tropasArq2>=20){
							tropaNumSoldado[b]=20;
							tropasArq2-=20;
						}else{
							tropaNumSoldado[b]=tropasArq2;
							tropasArq2=0;
						}
						break;
						case 6:	if(tropasArq3>=20){
							tropaNumSoldado[b]=20;
							tropasArq3-=20;
						}else{
							tropaNumSoldado[b]=tropasArq3;
							tropasArq3=0;
						}
						break;
						case 7:	if(tropasCab1>=20){
							tropaNumSoldado[b]=20;
							tropasCab1-=20;
						}else{
							tropaNumSoldado[b]=tropasCab1;
							tropasCab1=0;
						}
						break;
						case 8:	if(tropasCab2>=20){
							tropaNumSoldado[b]=20;
							tropasCab2-=20;
						}else{
							tropaNumSoldado[b]=tropasCab2;
							tropasCab2=0;
						}
						break;
						case 9:	if(tropasCab3>=20){
							tropaNumSoldado[b]=20;
							tropasCab3-=20;
						}else{
							tropaNumSoldado[b]=tropasCab3;
							tropasCab3=0;
						}
						break;
						
						default: break;
					}
				}else{
					if(b+1==tropaX.length){
						var existeAlguien=false;
						for(let cr=0;cr<tropaX.length;cr++){
							if(tropaX[cr]>625&&tropaX[cr]<=825&&tropaY[cr]>=185&&tropaY[cr]<=285){
								existeAlguien=true;
								if(tropaNumSoldado[cr]==0){
									existeAlguien=false;
								}
							}
						}
						if(existeAlguien==false){
							tropaX[b+1]=0;
							tropaY[b+1]=0;
							tropaNumSoldado[b+1]=0;
							tipoSoldado[b+1]=0;
						}
						
						//console.log(tropaX.length);
					}
					
				}
			}
		}else{
			contTemp2+=1;
		}
		
		if(X>=725&&X<=825&&Y>=315&&Y<=415){
			
			posTropaSelec=2;
			for(let b=0;b<tropaX.length;b++){
				if(tropaX[b]==0&&tropaY[b]==0&&tropaNumSoldado[b]==0){
					tropaX[b]=725;
					tropaY[b]=315;
					tipoSoldado[b]=tropaSeleccionB;
					switch (tropaSeleccionB) {
						
						case 1:	if(tropasInf1>=20){
							tropaNumSoldado[b]=20;
							tropasInf1-=20;
						}else{
							tropaNumSoldado[b]=tropasInf1;
							tropasInf1=0;
						}
						break;
						case 2:	if(tropasInf2>=20){
							tropaNumSoldado[b]=20;
							tropasInf2-=20;
						}else{
							tropaNumSoldado[b]=tropasInf2;
							tropasInf2=0;
						}
						break;
						case 3:	if(tropasInf3>=20){
							tropaNumSoldado[b]=20;
							tropasInf3-=20;
						}else{
							tropaNumSoldado[b]=tropasInf3;
							tropasInf3=0;
						}
						break;
						case 4:	if(tropasArq1>=20){
							tropaNumSoldado[b]=20;
							tropasArq1-=20;
						}else{
							tropaNumSoldado[b]=tropasArq1;
							tropasArq1=0;
						}
						break;
						case 5:	if(tropasArq2>=20){
							tropaNumSoldado[b]=20;
							tropasArq2-=20;
						}else{
							tropaNumSoldado[b]=tropasArq2;
							tropasArq2=0;
						}
						break;
						case 6:	if(tropasArq3>=20){
							tropaNumSoldado[b]=20;
							tropasArq3-=20;
						}else{
							tropaNumSoldado[b]=tropasArq3;
							tropasArq3=0;
						}
						break;
						case 7:	if(tropasCab1>=20){
							tropaNumSoldado[b]=20;
							tropasCab1-=20;
						}else{
							tropaNumSoldado[b]=tropasCab1;
							tropasCab1=0;
						}
						break;
						case 8:	if(tropasCab2>=20){
							tropaNumSoldado[b]=20;
							tropasCab2-=20;
						}else{
							tropaNumSoldado[b]=tropasCab2;
							tropasCab2=0;
						}
						break;
						case 9:	if(tropasCab3>=20){
							tropaNumSoldado[b]=20;
							tropasCab3-=20;
						}else{
							tropaNumSoldado[b]=tropasCab3;
							tropasCab3=0;
						}
						break;
						
						default: break;
					}
				}else{
					if(b+1==tropaX.length){
						var existeAlguien=false;
						for(let cr=0;cr<tropaX.length;cr++){
							if(tropaX[cr]>625&&tropaX[cr]<=825&&tropaY[cr]>=315&&tropaY[cr]<=415){
								existeAlguien=true;
								if(tropaNumSoldado[cr]==0){
									existeAlguien=false;
								}
							}
						}
						if(existeAlguien==false){
							tropaX[b+1]=0;
							tropaY[b+1]=0;
							tropaNumSoldado[b+1]=0;
							tipoSoldado[b+1]=0;
						}
						
						//console.log(tropaX.length);
					}
				}
			}
		}else{
			contTemp2+=1;
		}
		
		if(X>=725&&X<=825&&Y>=445&&Y<=545){
			
			posTropaSelec=3;
			for(let b=0;b<tropaX.length;b++){
				if(tropaX[b]==0&&tropaY[b]==0&&tropaNumSoldado[b]==0){
					tropaX[b]=725;
					tropaY[b]=445;
					tipoSoldado[b]=tropaSeleccionB;
					switch (tropaSeleccionB) {
						
						case 1:	if(tropasInf1>=20){
							tropaNumSoldado[b]=20;
							tropasInf1-=20;
						}else{
							tropaNumSoldado[b]=tropasInf1;
							tropasInf1=0;
						}
						break;
						case 2:	if(tropasInf2>=20){
							tropaNumSoldado[b]=20;
							tropasInf2-=20;
						}else{
							tropaNumSoldado[b]=tropasInf2;
							tropasInf2=0;
						}
						break;
						case 3:	if(tropasInf3>=20){
							tropaNumSoldado[b]=20;
							tropasInf3-=20;
						}else{
							tropaNumSoldado[b]=tropasInf3;
							tropasInf3=0;
						}
						break;
						case 4:	if(tropasArq1>=20){
							tropaNumSoldado[b]=20;
							tropasArq1-=20;
						}else{
							tropaNumSoldado[b]=tropasArq1;
							tropasArq1=0;
						}
						break;
						case 5:	if(tropasArq2>=20){
							tropaNumSoldado[b]=20;
							tropasArq2-=20;
						}else{
							tropaNumSoldado[b]=tropasArq2;
							tropasArq2=0;
						}
						break;
						case 6:	if(tropasArq3>=20){
							tropaNumSoldado[b]=20;
							tropasArq3-=20;
						}else{
							tropaNumSoldado[b]=tropasArq3;
							tropasArq3=0;
						}
						break;
						case 7:	if(tropasCab1>=20){
							tropaNumSoldado[b]=20;
							tropasCab1-=20;
						}else{
							tropaNumSoldado[b]=tropasCab1;
							tropasCab1=0;
						}
						break;
						case 8:	if(tropasCab2>=20){
							tropaNumSoldado[b]=20;
							tropasCab2-=20;
						}else{
							tropaNumSoldado[b]=tropasCab2;
							tropasCab2=0;
						}
						break;
						case 9:	if(tropasCab3>=20){
							tropaNumSoldado[b]=20;
							tropasCab3-=20;
						}else{
							tropaNumSoldado[b]=tropasCab3;
							tropasCab3=0;
						}
						break;
						
						default: break;
					}
				}else{
					
					if(b+1==tropaX.length){
						var existeAlguien=false;
						for(let cr=0;cr<tropaX.length;cr++){
							if(tropaX[cr]>625&&tropaX[cr]<=825&&tropaY[cr]>=445&&tropaY[cr]<=545){
								existeAlguien=true;
								if(tropaNumSoldado[cr]==0){
									existeAlguien=false;
								}
							}
						}
						if(existeAlguien==false){
							tropaX[b+1]=0;
							tropaY[b+1]=0;
							tropaNumSoldado[b+1]=0;
							tipoSoldado[b+1]=0;
						}
						
						//console.log(tropaX.length);
					}
				}
			}
		}else{
			contTemp2+=1;
		}
		if(contTemp2==3){
			posTropaSelec=0;
		}
	}
	
	
	
}


function dibujarEnLaBatalla(){
	contextoBatalla.beginPath();		
	contextoBatalla.strokeStyle = "green";
	
	
	switch (tropaSeleccionB) {
			
		case 1:	contextoBatalla.strokeRect(133, 613,74,74);
		break;	//138,618,64,64
		case 2:	contextoBatalla.strokeRect(213, 613,74,74);
		break;//218,618,64,64
		case 3:	contextoBatalla.strokeRect(293, 613,74,74);
		break;//298,618,64,64
		case 4:	contextoBatalla.strokeRect(393, 613,74,74);
		break;
		case 5:	contextoBatalla.strokeRect(473, 613,74,74);
		break;//478,618,64,64
		case 6: contextoBatalla.strokeRect(553, 613,74,74);
		break;//558,618,64,64
		case 7:	contextoBatalla.strokeRect(653, 613,74,74);
		break;
		case 8:	contextoBatalla.strokeRect(733, 613,74,74);
		break;	//738,618,64,64
		case 9:	contextoBatalla.strokeRect(813, 613,74,74);
		break;	//818,618,64,64
		
		default: break;
	}
	
	//contextoBatalla.fill();
	contextoBatalla.closePath();
	
	contextoBatalla.beginPath();		
	contextoBatalla.fillStyle = "black";
	contextoBatalla.font="14pt Verdana";
	contextoBatalla2.beginPath();		
	contextoBatalla2.fillStyle = "blue";
	for(let k=0;k<tropaX.length;k++){
		if(tropaNumSoldado[k]!=0){
			
			switch (tipoSoldado[k]) {
			
			case 1:	contextoBatalla.drawImage(imgTInf1,tropaX[k],tropaY[k],100,100);
				contextoBatalla2.fillRect(tropaX[k],tropaY[k],100,100);
				 
				if(tropasInf1>=20){
					contextoBatalla.fillText(""+tropaNumSoldado[k],tropaX[k]+65,tropaY[k]+80);
				}else{
					contextoBatalla.fillText(""+tropaNumSoldado[k],tropaX[k]+65,tropaY[k]+80);
				}
			
			break;
			case 2:	contextoBatalla.drawImage(imgTInf2,tropaX[k],tropaY[k],100,100);
				contextoBatalla2.fillRect(tropaX[k],tropaY[k],100,100);
				if(tropasInf2>=20){
					contextoBatalla.fillText(""+tropaNumSoldado[k],tropaX[k]+65,tropaY[k]+80);
				}else{
					contextoBatalla.fillText(""+tropaNumSoldado[k],tropaX[k]+65,tropaY[k]+80);
				}
			break;
			case 3:	contextoBatalla.drawImage(imgTInf3,tropaX[k],tropaY[k],100,100);
				contextoBatalla2.fillRect(tropaX[k],tropaY[k],100,100);
				if(tropasInf3>=20){
					contextoBatalla.fillText(""+tropaNumSoldado[k],tropaX[k]+65,tropaY[k]+80);
				}else{
					contextoBatalla.fillText(""+tropaNumSoldado[k],tropaX[k]+65,tropaY[k]+80);
				}
			break;
			case 4:	contextoBatalla.drawImage(imgTArq1,tropaX[k],tropaY[k],100,100);
				contextoBatalla2.fillRect(tropaX[k],tropaY[k],100,100);
				if(tropasArq1>=20){
					contextoBatalla.fillText(""+tropaNumSoldado[k],tropaX[k]+65,tropaY[k]+80);
				}else{
					contextoBatalla.fillText(""+tropaNumSoldado[k],tropaX[k]+65,tropaY[k]+80);
				}
		
			break;
			case 5:	contextoBatalla.drawImage(imgTArq2,tropaX[k],tropaY[k],100,100);
				contextoBatalla2.fillRect(tropaX[k],tropaY[k],100,100);
				if(tropasArq2>=20){
					contextoBatalla.fillText(""+tropaNumSoldado[k],tropaX[k]+65,tropaY[k]+80);
				}else{
					contextoBatalla.fillText(""+tropaNumSoldado[k],tropaX[k]+65,tropaY[k]+80);
				}
			break;
			case 6: contextoBatalla.drawImage(imgTArq3,tropaX[k],tropaY[k],100,100);
				contextoBatalla2.fillRect(tropaX[k],tropaY[k],100,100);
				if(tropasArq3>=20){
					contextoBatalla.fillText(""+tropaNumSoldado[k],tropaX[k]+65,tropaY[k]+80);
				}else{
					contextoBatalla.fillText(""+tropaNumSoldado[k],tropaX[k]+65,tropaY[k]+80);
				}
			break;
			case 7:	contextoBatalla.drawImage(imgTCab1,tropaX[k],tropaY[k],100,100);
				contextoBatalla2.fillRect(tropaX[k],tropaY[k],100,100);
				if(tropasCab1>=20){
					contextoBatalla.fillText(""+tropaNumSoldado[k],tropaX[k]+10,tropaY[k]+80);
				}else{
					contextoBatalla.fillText(""+tropaNumSoldado[k],tropaX[k]+10,tropaY[k]+80);
				}
			break;
			case 8:	contextoBatalla.drawImage(imgTCab2,tropaX[k],tropaY[k],100,100);
				contextoBatalla2.fillRect(tropaX[k],tropaY[k],100,100);
				if(tropasCab2>=20){
					contextoBatalla.fillText(""+tropaNumSoldado[k],tropaX[k]+10,tropaY[k]+80);
				}else{
					contextoBatalla.fillText(""+tropaNumSoldado[k],tropaX[k]+10,tropaY[k]+80);
				}
		
			break;
			case 9:	contextoBatalla.drawImage(imgTCab3,tropaX[k],tropaY[k],100,100);
				contextoBatalla2.fillRect(tropaX[k],tropaY[k],100,100);
				if(tropasCab3>=20){
					contextoBatalla.fillText(""+tropaNumSoldado[k],tropaX[k]+10,tropaY[k]+80);
				}else{
					contextoBatalla.fillText(""+tropaNumSoldado[k],tropaX[k]+10,tropaY[k]+80);
				}
			break;
			
			default: break;
			}
		}
		
	}
	contextoBatalla2.fill();
	contextoBatalla2.closePath();
	contextoBatalla.fill();
	contextoBatalla.closePath();
	
	
	
	
	
	
	
	
}


function movimientoEjercitoMio(){
	var hayAlguienAhi=false;
	
	for (let m=0;m<tropaX.length;m++){
		hayAlguienAhi=false;
		if((tropaX[m]!=0&&tropaY[m]!=0)||(tropaNumSoldado[m]!=0)){
			if(tropaX[m]>305){
				
				for(let m2=0;m2<tropaX.length;m2++){
					if(tropaX[m]-tropaX[m2]<=102&&tropaX[m]>tropaX[m2]&&tropaY[m2]==tropaY[m]&&tropaNumSoldado[m2]!=0&&m2!=m){
						hayAlguienAhi=true;
						//console.log(hayAlguienAhi);
					}
				}
				if(hayAlguienAhi==false){
					if(tipoSoldado[m]<=6){
						tropaX[m]-=1;
					}else{
						tropaX[m]-=2;
					}
				}
				
			}
			
			
		}
	}
	
	
	
	
	
}


function salidaTropasEnemigas(){
	if(creandoSalidaEnemiga==true){
		creandoSalidaEnemiga=false;
		var todayE=new Date();
		tiempoCreacionTropa=todayE.getTime()+(1*1000); 
	}
	var temporalID2=0;
	var tiempoQuefalta=0;
	//var temporalCiudad=0;
	for(let C12 = 0; C12<10; C12++){
		if(Ciudades[C12].pertenencia==1){
			temporalID2=Ciudades[C12].id;
		}
		
	}
	
	if(temporalID2<=5){
		if(tropaX.length>=1&&tropaX[0]!=0&&(ejercitoEnemigo[0]>0||ejercitoEnemigo[3]>0||ejercitoEnemigo[6]>0)){
			tiempoQuefalta=tiempoCreacionTropa-time;
			if(tiempoQuefalta<=0){
				creandoSalidaEnemiga=true;
				var hayAlguien=false;
				//console.log("holis");
				var aleatorioPos=Math.floor((Math.random() * 3) + 1);
				//console.log(aleatorioPos+"  aleatorio");
				for(let v3=0;v3<contadorEnemigo;v3++){
						
						if(tropaEnemigaX[v3]>=200&&tropaEnemigaX[v3]<=302&&tropaEnemigaY[v3]==185&&tropaEnemigaNumSoldado[v3]>0&&aleatorioPos==1){
							
							//hayAlguien=true;
							//console.log("holis");
							aleatorioPos=2;
						}
				}
				for(let v4=0;v4<contadorEnemigo;v4++){
						
						if(tropaEnemigaX[v4]>=200&&tropaEnemigaX[v4]<=302&&tropaEnemigaY[v4]==315&&tropaEnemigaNumSoldado[v4]>0&&aleatorioPos==2){
							
							//hayAlguien=true;
							//console.log("holis2");
							aleatorioPos=3;
						}
				}
				
				for(let v5=0;v5<contadorEnemigo;v5++){
						
						if(tropaEnemigaX[v5]>=200&&tropaEnemigaX[v5]<=302&&tropaEnemigaY[v5]==445&&tropaEnemigaNumSoldado[v5]>0&&aleatorioPos==3){
							
							hayAlguien=true;
							//console.log("holis3");
							aleatorioPos=0;
						}
				}
				if(hayAlguien==true){
					creandoSalidaEnemiga=false;
				}else{
						var aleatorioTipo=Math.floor((Math.random() * 3) + 1);
					//console.log(aleatorioPos);
					//console.log(aleatorioTipo);
					//console.log(tropaEnemigaX.length);
					switch (aleatorioPos) {
						
						case 1:	tropaEnemigaX[contadorEnemigo]=200;
								tropaEnemigaY[contadorEnemigo]=185;
								//console.log(tropaEnemigaY);
						break;
						case 2:	tropaEnemigaX[contadorEnemigo]=200;
								tropaEnemigaY[contadorEnemigo]=315;
								//console.log(tropaEnemigaY);
								
						break;
						case 3:	tropaEnemigaX[contadorEnemigo]=200;
								tropaEnemigaY[contadorEnemigo]=445;
								//console.log(tropaEnemigaY);
						
						break;
						
						
						default: break;
					}
					
					
					switch (aleatorioTipo) {
						
						case 1:	if(ejercitoEnemigo[0]>0){
									if(ejercitoEnemigo[0]>=20){
										tropaEnemigaNumSoldado[contadorEnemigo]=20;
										tipoEnemigaSoldado[contadorEnemigo]=1;
										ejercitoEnemigo[0]-=20;
									}else{
										tropaEnemigaNumSoldado[contadorEnemigo]=ejercitoEnemigo[0];
										tipoEnemigaSoldado[contadorEnemigo]=1;
										ejercitoEnemigo[0]=0;
									}
									
								}else{
									if(ejercitoEnemigo[3]>0){
										if(ejercitoEnemigo[3]>=20){
											tropaEnemigaNumSoldado[contadorEnemigo]=20;
											tipoEnemigaSoldado[contadorEnemigo]=4;
											ejercitoEnemigo[3]-=20;
										}else{
											tropaEnemigaNumSoldado[contadorEnemigo]=ejercitoEnemigo[3];
											tipoEnemigaSoldado[contadorEnemigo]=4;
											ejercitoEnemigo[3]=0;
										}
										
									}else{
										if(ejercitoEnemigo[6]>0){
											if(ejercitoEnemigo[6]>=20){
												tropaEnemigaNumSoldado[contadorEnemigo]=20;
												tipoEnemigaSoldado[contadorEnemigo]=7;
												ejercitoEnemigo[6]-=20;
											}else{
												tropaEnemigaNumSoldado[contadorEnemigo]=ejercitoEnemigo[6];
												tipoEnemigaSoldado[contadorEnemigo]=7;
												ejercitoEnemigo[6]=0;
											}
											
										}
									}
								}
						
						break;
						case 2:	if(ejercitoEnemigo[3]>0){
									if(ejercitoEnemigo[3]>=20){
										tropaEnemigaNumSoldado[contadorEnemigo]=20;
										tipoEnemigaSoldado[contadorEnemigo]=4;
										ejercitoEnemigo[3]-=20;
									}else{
										tropaEnemigaNumSoldado[contadorEnemigo]=ejercitoEnemigo[3];
										tipoEnemigaSoldado[contadorEnemigo]=4;
										ejercitoEnemigo[3]=0;
									}
									
								}else{
									if(ejercitoEnemigo[6]>0){
										if(ejercitoEnemigo[6]>=20){
											tropaEnemigaNumSoldado[contadorEnemigo]=20;
											tipoEnemigaSoldado[contadorEnemigo]=7;
											ejercitoEnemigo[6]-=20;
										}else{
											tropaEnemigaNumSoldado[contadorEnemigo]=ejercitoEnemigo[6];
											tipoEnemigaSoldado[contadorEnemigo]=7;
											ejercitoEnemigo[6]=0;
										}
										
									}else{
										if(ejercitoEnemigo[0]>0){
											if(ejercitoEnemigo[0]>=20){
												tropaEnemigaNumSoldado[contadorEnemigo]=20;
												tipoEnemigaSoldado[contadorEnemigo]=1;
												ejercitoEnemigo[0]-=20;
											}else{
												tropaEnemigaNumSoldado[contadorEnemigo]=ejercitoEnemigo[0];
												tipoEnemigaSoldado[contadorEnemigo]=1;
												ejercitoEnemigo[0]=0;
												
											}
											
										}
									}
								}
								
						break;
						case 3:	if(ejercitoEnemigo[6]>0){
									if(ejercitoEnemigo[6]>=20){
										tropaEnemigaNumSoldado[contadorEnemigo]=20;
										tipoEnemigaSoldado[contadorEnemigo]=7;
										ejercitoEnemigo[6]-=20;
									}else{
										tropaEnemigaNumSoldado[contadorEnemigo]=ejercitoEnemigo[6];
										tipoEnemigaSoldado[contadorEnemigo]=7;
										ejercitoEnemigo[6]=0;
									}
									
								}else{
									if(ejercitoEnemigo[0]>0){
										if(ejercitoEnemigo[0]>=20){
											tropaEnemigaNumSoldado[contadorEnemigo]=20;
											tipoEnemigaSoldado[contadorEnemigo]=1;
											ejercitoEnemigo[0]-=20;
										}else{
											tropaEnemigaNumSoldado[contadorEnemigo]=ejercitoEnemigo[0];
											tipoEnemigaSoldado[contadorEnemigo]=1;
											ejercitoEnemigo[0]=0;
										}
										
									}else{
										if(ejercitoEnemigo[3]>0){
											if(ejercitoEnemigo[3]>=20){
												tropaEnemigaNumSoldado[contadorEnemigo]=20;
												tipoEnemigaSoldado[contadorEnemigo]=4;
												ejercitoEnemigo[3]-=20;
											}else{
												tropaEnemigaNumSoldado[contadorEnemigo]=ejercitoEnemigo[3];
												tipoEnemigaSoldado[contadorEnemigo]=4;
												ejercitoEnemigo[3]=0;
											}
											
										}
									}
								}
						
						break;
						
						
						default: break;
					}
					
					
					//console.log(tropaEnemigaX[tropaEnemigaX.length]+ " x " + tropaEnemigaY[tropaEnemigaY.length] + " y " + tropaEnemigaNumSoldado[tropaEnemigaNumSoldado.length] + " num " + tipoEnemigaSoldado[tipoEnemigaSoldado.length] +"tipo")


					contadorEnemigo+=1;
				}
				
			
				
			}
		}else{
			creandoSalidaEnemiga=true;
		}
	}
	if(temporalID2>=6&&temporalID2<=8){
		//
		var reclutar = false;
		if(ejercitoEnemigo[1]>0||ejercitoEnemigo[4]>0||ejercitoEnemigo[7]>0){
			for(let v=0;v<1;v++){
				//var hayAlguien=false;
				if(tropaX[0]!=0&&contadorEnemigo==0){
					
					
					
						var aleatorioTipo=Math.floor((Math.random() * 3) + 1);
						tropaEnemigaX[contadorEnemigo]=200;
						tropaEnemigaY[contadorEnemigo]=tropaY[v];
						
						switch (aleatorioTipo) {
						
							case 1:	if(ejercitoEnemigo[1]>0){
										if(ejercitoEnemigo[1]>=20){
											tropaEnemigaNumSoldado[contadorEnemigo]=20;
											tipoEnemigaSoldado[contadorEnemigo]=2;
											ejercitoEnemigo[1]-=20;
										}else{
											tropaEnemigaNumSoldado[contadorEnemigo]=ejercitoEnemigo[1];
											tipoEnemigaSoldado[contadorEnemigo]=2;
											ejercitoEnemigo[1]=0;
										}
										
									}else{
										if(ejercitoEnemigo[4]>0){
											if(ejercitoEnemigo[4]>=20){
												tropaEnemigaNumSoldado[contadorEnemigo]=20;
												tipoEnemigaSoldado[contadorEnemigo]=5;
												ejercitoEnemigo[4]-=20;
											}else{
												tropaEnemigaNumSoldado[contadorEnemigo]=ejercitoEnemigo[4];
												tipoEnemigaSoldado[contadorEnemigo]=5;
												ejercitoEnemigo[4]=0;
											}
											
										}else{
											if(ejercitoEnemigo[7]>0){
												if(ejercitoEnemigo[7]>=20){
													tropaEnemigaNumSoldado[contadorEnemigo]=20;
													tipoEnemigaSoldado[contadorEnemigo]=8;
													ejercitoEnemigo[7]-=20;
												}else{
													tropaEnemigaNumSoldado[contadorEnemigo]=ejercitoEnemigo[7];
													tipoEnemigaSoldado[contadorEnemigo]=8;
													ejercitoEnemigo[7]=0;
												}
												
											}
										}
									}
							
							break;
							case 2:	if(ejercitoEnemigo[4]>0){
										if(ejercitoEnemigo[4]>=20){
											tropaEnemigaNumSoldado[contadorEnemigo]=20;
											tipoEnemigaSoldado[contadorEnemigo]=5;
											ejercitoEnemigo[4]-=20;
										}else{
											tropaEnemigaNumSoldado[contadorEnemigo]=ejercitoEnemigo[4];
											tipoEnemigaSoldado[contadorEnemigo]=5;
											ejercitoEnemigo[4]=0;
										}
										
									}else{
										if(ejercitoEnemigo[7]>0){
											if(ejercitoEnemigo[7]>=20){
												tropaEnemigaNumSoldado[contadorEnemigo]=20;
												tipoEnemigaSoldado[contadorEnemigo]=8;
												ejercitoEnemigo[7]-=20;
											}else{
												tropaEnemigaNumSoldado[contadorEnemigo]=ejercitoEnemigo[7];
												tipoEnemigaSoldado[contadorEnemigo]=8;
												ejercitoEnemigo[7]=0;
											}
											
										}else{
											if(ejercitoEnemigo[1]>0){
												if(ejercitoEnemigo[1]>=20){
													tropaEnemigaNumSoldado[contadorEnemigo]=20;
													tipoEnemigaSoldado[contadorEnemigo]=2;
													ejercitoEnemigo[1]-=20;
												}else{
													tropaEnemigaNumSoldado[contadorEnemigo]=ejercitoEnemigo[1];
													tipoEnemigaSoldado[contadorEnemigo]=2;
													ejercitoEnemigo[1]=0;
													
												}
												
											}
										}
									}
									
							break;
							case 3:	if(ejercitoEnemigo[7]>0){
										if(ejercitoEnemigo[7]>=20){
											tropaEnemigaNumSoldado[contadorEnemigo]=20;
											tipoEnemigaSoldado[contadorEnemigo]=8;
											ejercitoEnemigo[7]-=20;
										}else{
											tropaEnemigaNumSoldado[contadorEnemigo]=ejercitoEnemigo[7];
											tipoEnemigaSoldado[contadorEnemigo]=8;
											ejercitoEnemigo[7]=0;
										}
										
									}else{
										if(ejercitoEnemigo[1]>0){
											if(ejercitoEnemigo[1]>=20){
												tropaEnemigaNumSoldado[contadorEnemigo]=20;
												tipoEnemigaSoldado[contadorEnemigo]=2;
												ejercitoEnemigo[1]-=20;
											}else{
												tropaEnemigaNumSoldado[contadorEnemigo]=ejercitoEnemigo[1];
												tipoEnemigaSoldado[contadorEnemigo]=2;
												ejercitoEnemigo[1]=0;
											}
											
										}else{
											if(ejercitoEnemigo[4]>0){
												if(ejercitoEnemigo[4]>=20){
													tropaEnemigaNumSoldado[contadorEnemigo]=20;
													tipoEnemigaSoldado[contadorEnemigo]=5;
													ejercitoEnemigo[4]-=20;
												}else{
													tropaEnemigaNumSoldado[contadorEnemigo]=ejercitoEnemigo[4];
													tipoEnemigaSoldado[contadorEnemigo]=5;
													ejercitoEnemigo[4]=0;
												}
												
											}
										}
									}
							
							break;
							
							
							default: break;
						}
						
						contadorEnemigo+=1;
					
							
					
				}
					
				
			}
			if(contadorEnemigo>=1){
				tiempoQuefalta=tiempoCreacionTropa-time;
				if(tiempoQuefalta<=0){
					creandoSalidaEnemiga=true;
					var hayAlguien=false;
					//console.log("holis");
					var aleatorioPos=Math.floor((Math.random() * 3) + 1);
					//console.log(aleatorioPos+"  aleatorio");
					for(let v3=0;v3<contadorEnemigo;v3++){
							
							if(tropaEnemigaX[v3]>=200&&tropaEnemigaX[v3]<=302&&tropaEnemigaY[v3]==185&&tropaEnemigaNumSoldado[v3]>0&&aleatorioPos==1){
								
								//hayAlguien=true;
								//console.log("holis");
								aleatorioPos=2;
							}
					}
					for(let v4=0;v4<contadorEnemigo;v4++){
							
							if(tropaEnemigaX[v4]>=200&&tropaEnemigaX[v4]<=302&&tropaEnemigaY[v4]==315&&tropaEnemigaNumSoldado[v4]>0&&aleatorioPos==2){
								
								//hayAlguien=true;
								//console.log("holis2");
								aleatorioPos=3;
							}
					}
					
					for(let v5=0;v5<contadorEnemigo;v5++){
							
							if(tropaEnemigaX[v5]>=200&&tropaEnemigaX[v5]<=302&&tropaEnemigaY[v5]==445&&tropaEnemigaNumSoldado[v5]>0&&aleatorioPos==3){
								
								hayAlguien=true;
								//console.log("holis3");
								aleatorioPos=0;
							}
					}
					if(hayAlguien==true){
						creandoSalidaEnemiga=false;
					}else{
						var aleatorioTipo=Math.floor((Math.random() * 3) + 1);
						//console.log(aleatorioPos);
						//console.log(aleatorioTipo);
						//console.log(tropaEnemigaX.length);
						switch (aleatorioPos) {
							
							case 1:	tropaEnemigaX[contadorEnemigo]=200;
									tropaEnemigaY[contadorEnemigo]=185;
									//console.log(tropaEnemigaY);
							break;
							case 2:	tropaEnemigaX[contadorEnemigo]=200;
									tropaEnemigaY[contadorEnemigo]=315;
									//console.log(tropaEnemigaY);
									
							break;
							case 3:	tropaEnemigaX[contadorEnemigo]=200;
									tropaEnemigaY[contadorEnemigo]=445;
									//console.log(tropaEnemigaY);
							
							break;
							
							
							default: break;
						}
						
						switch (aleatorioTipo) {
							
								case 1:	if(ejercitoEnemigo[1]>0){
											if(ejercitoEnemigo[1]>=20){
												tropaEnemigaNumSoldado[contadorEnemigo]=20;
												tipoEnemigaSoldado[contadorEnemigo]=2;
												ejercitoEnemigo[1]-=20;
											}else{
												tropaEnemigaNumSoldado[contadorEnemigo]=ejercitoEnemigo[1];
												tipoEnemigaSoldado[contadorEnemigo]=2;
												ejercitoEnemigo[1]=0;
											}
											
										}else{
											if(ejercitoEnemigo[4]>0){
												if(ejercitoEnemigo[4]>=20){
													tropaEnemigaNumSoldado[contadorEnemigo]=20;
													tipoEnemigaSoldado[contadorEnemigo]=5;
													ejercitoEnemigo[4]-=20;
												}else{
													tropaEnemigaNumSoldado[contadorEnemigo]=ejercitoEnemigo[4];
													tipoEnemigaSoldado[contadorEnemigo]=5;
													ejercitoEnemigo[4]=0;
												}
												
											}else{
												if(ejercitoEnemigo[7]>0){
													if(ejercitoEnemigo[7]>=20){
														tropaEnemigaNumSoldado[contadorEnemigo]=20;
														tipoEnemigaSoldado[contadorEnemigo]=8;
														ejercitoEnemigo[7]-=20;
													}else{
														tropaEnemigaNumSoldado[contadorEnemigo]=ejercitoEnemigo[7];
														tipoEnemigaSoldado[contadorEnemigo]=8;
														ejercitoEnemigo[7]=0;
													}
													
												}
											}
										}
								
								break;
								case 2:	if(ejercitoEnemigo[4]>0){
											if(ejercitoEnemigo[4]>=20){
												tropaEnemigaNumSoldado[contadorEnemigo]=20;
												tipoEnemigaSoldado[contadorEnemigo]=5;
												ejercitoEnemigo[4]-=20;
											}else{
												tropaEnemigaNumSoldado[contadorEnemigo]=ejercitoEnemigo[4];
												tipoEnemigaSoldado[contadorEnemigo]=5;
												ejercitoEnemigo[4]=0;
											}
											
										}else{
											if(ejercitoEnemigo[7]>0){
												if(ejercitoEnemigo[7]>=20){
													tropaEnemigaNumSoldado[contadorEnemigo]=20;
													tipoEnemigaSoldado[contadorEnemigo]=8;
													ejercitoEnemigo[7]-=20;
												}else{
													tropaEnemigaNumSoldado[contadorEnemigo]=ejercitoEnemigo[7];
													tipoEnemigaSoldado[contadorEnemigo]=8;
													ejercitoEnemigo[7]=0;
												}
												
											}else{
												if(ejercitoEnemigo[1]>0){
													if(ejercitoEnemigo[1]>=20){
														tropaEnemigaNumSoldado[contadorEnemigo]=20;
														tipoEnemigaSoldado[contadorEnemigo]=2;
														ejercitoEnemigo[1]-=20;
													}else{
														tropaEnemigaNumSoldado[contadorEnemigo]=ejercitoEnemigo[1];
														tipoEnemigaSoldado[contadorEnemigo]=2;
														ejercitoEnemigo[1]=0;
														
													}
													
												}
											}
										}
										
								break;
								case 3:	if(ejercitoEnemigo[7]>0){
											if(ejercitoEnemigo[7]>=20){
												tropaEnemigaNumSoldado[contadorEnemigo]=20;
												tipoEnemigaSoldado[contadorEnemigo]=8;
												ejercitoEnemigo[7]-=20;
											}else{
												tropaEnemigaNumSoldado[contadorEnemigo]=ejercitoEnemigo[7];
												tipoEnemigaSoldado[contadorEnemigo]=8;
												ejercitoEnemigo[7]=0;
											}
											
										}else{
											if(ejercitoEnemigo[1]>0){
												if(ejercitoEnemigo[1]>=20){
													tropaEnemigaNumSoldado[contadorEnemigo]=20;
													tipoEnemigaSoldado[contadorEnemigo]=2;
													ejercitoEnemigo[1]-=20;
												}else{
													tropaEnemigaNumSoldado[contadorEnemigo]=ejercitoEnemigo[1];
													tipoEnemigaSoldado[contadorEnemigo]=2;
													ejercitoEnemigo[1]=0;
												}
												
											}else{
												if(ejercitoEnemigo[4]>0){
													if(ejercitoEnemigo[4]>=20){
														tropaEnemigaNumSoldado[contadorEnemigo]=20;
														tipoEnemigaSoldado[contadorEnemigo]=5;
														ejercitoEnemigo[4]-=20;
													}else{
														tropaEnemigaNumSoldado[contadorEnemigo]=ejercitoEnemigo[4];
														tipoEnemigaSoldado[contadorEnemigo]=5;
														ejercitoEnemigo[4]=0;
													}
													
												}
											}
										}
								
								break;
								
								
								default: break;
							}
						
						
						
						//console.log(tropaEnemigaX[tropaEnemigaX.length]+ " x " + tropaEnemigaY[tropaEnemigaY.length] + " y " + tropaEnemigaNumSoldado[tropaEnemigaNumSoldado.length] + " num " + tipoEnemigaSoldado[tipoEnemigaSoldado.length] +"tipo")


					contadorEnemigo+=1;
					}
				}
				
			
				
			}
		
		
		
		
		
		}
		
		
	}
	if(temporalID2==9){
		//aqui pone mismo lugar y tropa superior 
		var reclutar = false;
		if(ejercitoEnemigo[2]>0||ejercitoEnemigo[5]>0||ejercitoEnemigo[8]>0){
			for(let v=0;v<1;v++){
				//var hayAlguien=false;
				if(tropaX[0]!=0&&contadorEnemigo==0){
					
								
						tropaEnemigaX[contadorEnemigo]=200;
						tropaEnemigaY[contadorEnemigo]=tropaY[v];
						if(tipoSoldado[v]<=3){
							if(ejercitoEnemigo[5]>=20){
								tropaEnemigaNumSoldado[contadorEnemigo]=20;
								tipoEnemigaSoldado[contadorEnemigo]=6;
								ejercitoEnemigo[5]-=20;
							}else{
								tropaEnemigaNumSoldado[contadorEnemigo]=ejercitoEnemigo[5];
								tipoEnemigaSoldado[contadorEnemigo]=6;
								ejercitoEnemigo[5]=0;
							}
						}
						
						if(tipoSoldado[v]>3&&tipoSoldado[v]<=6){
							if(ejercitoEnemigo[8]>=20){
								tropaEnemigaNumSoldado[contadorEnemigo]=20;
								tipoEnemigaSoldado[contadorEnemigo]=9;
								ejercitoEnemigo[8]-=20;
							}else{
								tropaEnemigaNumSoldado[contadorEnemigo]=ejercitoEnemigo[8];
								tipoEnemigaSoldado[contadorEnemigo]=9;
								ejercitoEnemigo[8]=0;
							}
						}
						if(tipoSoldado[v]>6&&tipoSoldado[v]<=9){
							if(ejercitoEnemigo[2]>=20){
								tropaEnemigaNumSoldado[contadorEnemigo]=20;
								tipoEnemigaSoldado[contadorEnemigo]=3;
								ejercitoEnemigo[2]-=20;
							}else{
								tropaEnemigaNumSoldado[contadorEnemigo]=ejercitoEnemigo[2];
								tipoEnemigaSoldado[contadorEnemigo]=3;
								ejercitoEnemigo[2]=0;
							}
						}
												
					
						
						contadorEnemigo+=1;
											
					
				}
					
				
			}
			if(contadorEnemigo>=1){
				tiempoQuefalta=tiempoCreacionTropa-time;
				if(tiempoQuefalta<=0){
					creandoSalidaEnemiga=true;
					var hayAlguien=false;
					//console.log("holis");
					var aleatorioPos=Math.floor((Math.random() * 3) + 1);
					//console.log(aleatorioPos+"  aleatorio");
					for(let v3=0;v3<contadorEnemigo;v3++){
							
							if(tropaEnemigaX[v3]>=200&&tropaEnemigaX[v3]<=302&&tropaEnemigaY[v3]==185&&tropaEnemigaNumSoldado[v3]>0&&aleatorioPos==1){
								
								//hayAlguien=true;
								//console.log("holis");
								aleatorioPos=2;
							}
					}
					for(let v4=0;v4<contadorEnemigo;v4++){
							
							if(tropaEnemigaX[v4]>=200&&tropaEnemigaX[v4]<=302&&tropaEnemigaY[v4]==315&&tropaEnemigaNumSoldado[v4]>0&&aleatorioPos==2){
								
								//hayAlguien=true;
								//console.log("holis2");
								aleatorioPos=3;
							}
					}
					
					for(let v5=0;v5<contadorEnemigo;v5++){
							
							if(tropaEnemigaX[v5]>=200&&tropaEnemigaX[v5]<=302&&tropaEnemigaY[v5]==445&&tropaEnemigaNumSoldado[v5]>0&&aleatorioPos==3){
								
								hayAlguien=true;
								//console.log("holis3");
								aleatorioPos=0;
							}
					}
					if(hayAlguien==true){
						creandoSalidaEnemiga=false;
					}else{
						var aleatorioTipo=Math.floor((Math.random() * 3) + 1);
						//console.log(aleatorioPos);
						//console.log(aleatorioTipo);
						console.log(tropaEnemigaX.length);
						switch (aleatorioPos) {
							
							case 1:	tropaEnemigaX[contadorEnemigo]=200;
									tropaEnemigaY[contadorEnemigo]=185;
									//console.log(tropaEnemigaY);
							break;
							case 2:	tropaEnemigaX[contadorEnemigo]=200;
									tropaEnemigaY[contadorEnemigo]=315;
									//console.log(tropaEnemigaY);
									
							break;
							case 3:	tropaEnemigaX[contadorEnemigo]=200;
									tropaEnemigaY[contadorEnemigo]=445;
									//console.log(tropaEnemigaY);
							
							break;
							
							
							default: break;
						}
						
						switch (aleatorioTipo) {
							
								case 1:	if(ejercitoEnemigo[2]>0){
											if(ejercitoEnemigo[2]>=20){
												tropaEnemigaNumSoldado[contadorEnemigo]=20;
												tipoEnemigaSoldado[contadorEnemigo]=3;
												ejercitoEnemigo[2]-=20;
											}else{
												tropaEnemigaNumSoldado[contadorEnemigo]=ejercitoEnemigo[2];
												tipoEnemigaSoldado[contadorEnemigo]=3;
												ejercitoEnemigo[2]=0;
											}
											
										}else{
											if(ejercitoEnemigo[5]>0){
												if(ejercitoEnemigo[5]>=20){
													tropaEnemigaNumSoldado[contadorEnemigo]=20;
													tipoEnemigaSoldado[contadorEnemigo]=6;
													ejercitoEnemigo[5]-=20;
												}else{
													tropaEnemigaNumSoldado[contadorEnemigo]=ejercitoEnemigo[5];
													tipoEnemigaSoldado[contadorEnemigo]=6;
													ejercitoEnemigo[5]=0;
												}
												
											}else{
												if(ejercitoEnemigo[8]>0){
													if(ejercitoEnemigo[8]>=20){
														tropaEnemigaNumSoldado[contadorEnemigo]=20;
														tipoEnemigaSoldado[contadorEnemigo]=9;
														ejercitoEnemigo[8]-=20;
													}else{
														tropaEnemigaNumSoldado[contadorEnemigo]=ejercitoEnemigo[8];
														tipoEnemigaSoldado[contadorEnemigo]=9;
														ejercitoEnemigo[8]=0;
													}
													
												}
											}
										}
								
								break;
								case 2:	if(ejercitoEnemigo[5]>0){
											if(ejercitoEnemigo[5]>=20){
												tropaEnemigaNumSoldado[contadorEnemigo]=20;
												tipoEnemigaSoldado[contadorEnemigo]=6;
												ejercitoEnemigo[5]-=20;
											}else{
												tropaEnemigaNumSoldado[contadorEnemigo]=ejercitoEnemigo[5];
												tipoEnemigaSoldado[contadorEnemigo]=6;
												ejercitoEnemigo[5]=0;
											}
											
										}else{
											if(ejercitoEnemigo[8]>0){
												if(ejercitoEnemigo[8]>=20){
													tropaEnemigaNumSoldado[contadorEnemigo]=20;
													tipoEnemigaSoldado[contadorEnemigo]=9;
													ejercitoEnemigo[8]-=20;
												}else{
													tropaEnemigaNumSoldado[contadorEnemigo]=ejercitoEnemigo[8];
													tipoEnemigaSoldado[contadorEnemigo]=9;
													ejercitoEnemigo[8]=0;
												}
												
											}else{
												if(ejercitoEnemigo[2]>0){
													if(ejercitoEnemigo[2]>=20){
														tropaEnemigaNumSoldado[contadorEnemigo]=20;
														tipoEnemigaSoldado[contadorEnemigo]=3;
														ejercitoEnemigo[2]-=20;
													}else{
														tropaEnemigaNumSoldado[contadorEnemigo]=ejercitoEnemigo[2];
														tipoEnemigaSoldado[contadorEnemigo]=3;
														ejercitoEnemigo[2]=0;
														
													}
													
												}
											}
										}
										
								break;
								case 3:	if(ejercitoEnemigo[8]>0){
											if(ejercitoEnemigo[8]>=20){
												tropaEnemigaNumSoldado[contadorEnemigo]=20;
												tipoEnemigaSoldado[contadorEnemigo]=9;
												ejercitoEnemigo[8]-=20;
											}else{
												tropaEnemigaNumSoldado[contadorEnemigo]=ejercitoEnemigo[8];
												tipoEnemigaSoldado[contadorEnemigo]=9;
												ejercitoEnemigo[8]=0;
											}
											
										}else{
											if(ejercitoEnemigo[2]>0){
												if(ejercitoEnemigo[2]>=20){
													tropaEnemigaNumSoldado[contadorEnemigo]=20;
													tipoEnemigaSoldado[contadorEnemigo]=3;
													ejercitoEnemigo[2]-=20;
												}else{
													tropaEnemigaNumSoldado[contadorEnemigo]=ejercitoEnemigo[2];
													tipoEnemigaSoldado[contadorEnemigo]=3;
													ejercitoEnemigo[2]=0;
												}
												
											}else{
												if(ejercitoEnemigo[5]>0){
													if(ejercitoEnemigo[5]>=20){
														tropaEnemigaNumSoldado[contadorEnemigo]=20;
														tipoEnemigaSoldado[contadorEnemigo]=6;
														ejercitoEnemigo[5]-=20;
													}else{
														tropaEnemigaNumSoldado[contadorEnemigo]=ejercitoEnemigo[5];
														tipoEnemigaSoldado[contadorEnemigo]=6;
														ejercitoEnemigo[5]=0;
													}
													
												}
											}
										}
								
								break;
								
								
								default: break;
							}
						
						
						
						//console.log(tropaEnemigaX[tropaEnemigaX.length]+ " x " + tropaEnemigaY[tropaEnemigaY.length] + " y " + tropaEnemigaNumSoldado[tropaEnemigaNumSoldado.length] + " num " + tipoEnemigaSoldado[tipoEnemigaSoldado.length] +"tipo")


					contadorEnemigo+=1;
					}
				}
				
			
				
			}
		
		
		
		
		
		}
		
		
	}
	
	
}


function enemigosTropasdibujar(){
	
	
	contextoBatalla.beginPath();		
	contextoBatalla.fillStyle = "black";
	contextoBatalla.font="14pt Verdana";
	contextoBatalla2.beginPath();		
	contextoBatalla2.fillStyle = "red";
	for(let ke=0;ke<tropaEnemigaX.length;ke++){
		if(tropaEnemigaNumSoldado[ke]!=0){
			
			switch (tipoEnemigaSoldado[ke]) {
			
			case 1:	contextoBatalla.drawImage(imgTInf1,tropaEnemigaX[ke],tropaEnemigaY[ke],100,100);
				contextoBatalla2.fillRect(tropaEnemigaX[ke],tropaEnemigaY[ke],100,100);
				 
				contextoBatalla.fillText(""+tropaEnemigaNumSoldado[ke],tropaEnemigaX[ke]+65,tropaEnemigaY[ke]+80);
			
			break;
			case 2:	contextoBatalla.drawImage(imgTInf2,tropaEnemigaX[ke],tropaEnemigaY[ke],100,100);
				contextoBatalla2.fillRect(tropaEnemigaX[ke],tropaEnemigaY[ke],100,100);
				contextoBatalla.fillText(""+tropaEnemigaNumSoldado[ke],tropaEnemigaX[ke]+65,tropaEnemigaY[ke]+80);
			break;
			case 3:	contextoBatalla.drawImage(imgTInf3,tropaEnemigaX[ke],tropaEnemigaY[ke],100,100);
				contextoBatalla2.fillRect(tropaEnemigaX[ke],tropaEnemigaY[ke],100,100);
				contextoBatalla.fillText(""+tropaEnemigaNumSoldado[ke],tropaEnemigaX[ke]+65,tropaEnemigaY[ke]+80);
			break;
			case 4:	contextoBatalla.drawImage(imgTArq1,tropaEnemigaX[ke],tropaEnemigaY[ke],100,100);
				contextoBatalla2.fillRect(tropaEnemigaX[ke],tropaEnemigaY[ke],100,100);
				contextoBatalla.fillText(""+tropaEnemigaNumSoldado[ke],tropaEnemigaX[ke]+65,tropaEnemigaY[ke]+80);
		
			break;
			case 5:	contextoBatalla.drawImage(imgTArq2,tropaEnemigaX[ke],tropaEnemigaY[ke],100,100);
				contextoBatalla2.fillRect(tropaEnemigaX[ke],tropaEnemigaY[ke],100,100);
				contextoBatalla.fillText(""+tropaEnemigaNumSoldado[ke],tropaEnemigaX[ke]+65,tropaEnemigaY[ke]+80);
			break;
			case 6: contextoBatalla.drawImage(imgTArq3,tropaEnemigaX[ke],tropaEnemigaY[ke],100,100);
				contextoBatalla2.fillRect(tropaEnemigaX[ke],tropaEnemigaY[ke],100,100);
				contextoBatalla.fillText(""+tropaEnemigaNumSoldado[ke],tropaEnemigaX[ke]+65,tropaEnemigaY[ke]+80);
			break;
			case 7:	contextoBatalla.drawImage(imgTCab1,tropaEnemigaX[ke],tropaEnemigaY[ke],100,100);
				contextoBatalla2.fillRect(tropaEnemigaX[ke],tropaEnemigaY[ke],100,100);
				contextoBatalla.fillText(""+tropaEnemigaNumSoldado[ke],tropaEnemigaX[ke]+10,tropaEnemigaY[ke]+80);
			break;
			case 8:	contextoBatalla.drawImage(imgTCab2,tropaEnemigaX[ke],tropaEnemigaY[ke],100,100);
				contextoBatalla2.fillRect(tropaEnemigaX[ke],tropaEnemigaY[ke],100,100);
				contextoBatalla.fillText(""+tropaEnemigaNumSoldado[ke],tropaEnemigaX[ke]+10,tropaEnemigaY[ke]+80);
		
			break;
			case 9:	contextoBatalla.drawImage(imgTCab3,tropaEnemigaX[ke],tropaEnemigaY[ke],100,100);
				contextoBatalla2.fillRect(tropaEnemigaX[ke],tropaEnemigaY[ke],100,100);
				contextoBatalla.fillText(""+tropaEnemigaNumSoldado[ke],tropaEnemigaX[ke]+10,tropaEnemigaY[ke]+80);
			break;
			
			default: break;
			}
		}
		
	}
	contextoBatalla2.fill();
	contextoBatalla2.closePath();
	contextoBatalla.fill();
	contextoBatalla.closePath();
	
	
	
}


function movimientoEnemigoMalos(){
	
	var hayAlguienAhi2=false;
	
	for (let m=0;m<tropaEnemigaX.length;m++){
		hayAlguienAhi2=false;
		if((tropaEnemigaX[m]!=0&&tropaEnemigaY[m]!=0)||(tropaEnemigaNumSoldado[m]!=0)){
			if(tropaEnemigaX[m]<620){
				
				for(let m2=0;m2<tropaEnemigaX.length;m2++){
					if(tropaEnemigaX[m2]-tropaEnemigaX[m]<=102&&tropaEnemigaX[m]<tropaEnemigaX[m2]&&tropaEnemigaY[m2]==tropaEnemigaY[m]&&tropaEnemigaNumSoldado[m2]!=0&&m2!=m){
						hayAlguienAhi2=true;
						//console.log(hayAlguienAhi);
					}
				}
				if(hayAlguienAhi2==false){
					if(tipoEnemigaSoldado[m]<=6){
						tropaEnemigaX[m]+=1;
					}else{
						tropaEnemigaX[m]+=2;
					}
				}
				
			}
			
			
		}
	}
	
	
}


function choqueConElEnemigo(){
	
	
	tropaPeleaMia[0]=-1;
	tropaPeleaMia[1]=-1;
	tropaPeleaMia[2]=-1;
	tropaPeleaE[0]=-1;
	tropaPeleaE[1]=-1;
	tropaPeleaE[2]=-1;

	for(let pe=0;pe<tropaX.length;pe++){
		
		for(let pe2=0;pe2<contadorEnemigo;pe2++){
			
			if(tropaEnemigaX[pe2]+105>=tropaX[pe]&&tropaEnemigaY[pe2]==tropaY[pe]&&tropaNumSoldado[pe]>0&&tropaEnemigaNumSoldado[pe2]>0&&tropaX[pe]!=0){
				//console.log("hola");
				if(tropaY[pe]==185){
					tropaPeleaMia[0]=pe;
					tropaPeleaE[0]=pe2;
					//tropaEnemigaNumSoldado[tropaPeleaE[0]]=0;
					//console.log("holis");
					
				}else{
					if(tropaY[pe]==315){
						tropaPeleaMia[1]=pe;
						tropaPeleaE[1]=pe2;
						//tropaEnemigaNumSoldado[tropaPeleaE[1]]=0;
						//console.log("holis2");
					}else{
						if(tropaY[pe]==445){
							tropaPeleaMia[2]=pe;
							tropaPeleaE[2]=pe2;
							//tropaEnemigaNumSoldado[tropaPeleaE[2]]=0;
							//console.log("holis3");
						}
					}
				}
				
			}
			
		}
		
		
	}
	
	
}


function hayPeleaEntreTropas(){
	
	
	for(let f=0;f<tropaPeleaMia.length;f++){
		if(tropaPeleaMia[f]!=-1&&tropaPeleaE[f]!=-1){
			var fuerzaMia=0;
			var fuerzaEnemiga=0;
			
			
			switch (tipoSoldado[tropaPeleaMia[f]]) {
			
				case 1: switch (tipoEnemigaSoldado[tropaPeleaE[f]]) {
			
							case 1: fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*fuerzaTropasInf1;
							break;
							case 2:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*fuerzaTropasInf1;
							break;
							case 3:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*fuerzaTropasInf1;
							break;
							case 4:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasInf1-5);
							break;
							case 5:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasInf1-10);
							break;
							case 6:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasInf1-15);
							break;
							case 7:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasInf1+15);
							break;
							case 8:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasInf1+10);
							break;
							case 9:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasInf1+5);
							break;
							
							default: break;
						}
				
				break;
				case 2: switch (tipoEnemigaSoldado[tropaPeleaE[f]]) {
			
							case 1: fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*fuerzaTropasInf2;
							break;
							case 2:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*fuerzaTropasInf2;
							break;
							case 3:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*fuerzaTropasInf2;
							break;
							case 4:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasInf2-2);
							break;
							case 5:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasInf2-5);
							break;
							case 6:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasInf2-10);
							break;
							case 7:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasInf2+17);
							break;
							case 8:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasInf2+12);
							break;
							case 9:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasInf2+7);
							break;
							
							default: break;
						}	
			
				break;
				case 3:	switch (tipoEnemigaSoldado[tropaPeleaE[f]]) {
			
							case 1: fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*fuerzaTropasInf3;
							break;
							case 2:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*fuerzaTropasInf3;
							break;
							case 3:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*fuerzaTropasInf3;
							break;
							case 4:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasInf3-1);
							break;
							case 5:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasInf3-2);
							break;
							case 6:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasInf3-5);
							break;
							case 7:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasInf3+20);
							break;
							case 8:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasInf3+15);
							break;
							case 9:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasInf3+10);
							break;
							
							default: break;
						}	
				
				break;
				case 4:	switch (tipoEnemigaSoldado[tropaPeleaE[f]]) {
			
							case 1: fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasArq1+15);
							break;
							case 2:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasArq1+10);
							break;
							case 3:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasArq1+5);
							break;
							case 4:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasArq1);
							break;
							case 5:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasArq1);
							break;
							case 6:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasArq1);
							break;
							case 7:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasArq1-5);
							break;
							case 8:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasArq1-10);
							break;
							case 9:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasArq1-15);
							break;
							
							default: break;
						}	
				
				break; 
				case 5:	switch (tipoEnemigaSoldado[tropaPeleaE[f]]) {
			
							case 1:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasArq2+17);
							break;
							case 2:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasArq2+12);
							break;
							case 3:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasArq2+7);
							break;
							case 4: fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*fuerzaTropasArq2;
							break;
							case 5:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*fuerzaTropasArq2;
							break;
							case 6:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*fuerzaTropasArq2;
							break;
							case 7:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasArq2-2);
							break;
							case 8:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasArq2-5);
							break;
							case 9:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasArq2-10);
							break;
							
							
							
							default: break;
						}	
				
				
				break;
				case 6:	switch (tipoEnemigaSoldado[tropaPeleaE[f]]) {
				
							case 1:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasArq3+20);
							break;
							case 2:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasArq3+15);
							break;
							case 3:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasArq3+10);
							break;
							case 4: fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*fuerzaTropasArq3;
							break;
							case 5:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*fuerzaTropasArq3;
							break;
							case 6:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*fuerzaTropasArq3;
							break;
							case 7:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasArq3-1);
							break;
							case 8:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasArq3-2);
							break;
							case 9:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasArq3-5);
							break;
							
							
							default: break;
						}	
				
				break;
				case 7:	switch (tipoEnemigaSoldado[tropaPeleaE[f]]) {
			
							
							case 1:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasCab1-5);
							break;
							case 2:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasCab1-10);
							break;
							case 3:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasCab1-15);
							break;
							case 4:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasCab1+15);
							break;
							case 5:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasCab1+10);
							break;
							case 6:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasCab1+5);
							break;
							case 7: fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*fuerzaTropasCab1;
							break;
							case 8:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*fuerzaTropasCab1;
							break;
							case 9:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*fuerzaTropasCab1;
							break;
							
							default: break;
						}
				
				
				break;
				case 8:	switch (tipoEnemigaSoldado[tropaPeleaE[f]]) {
			
							
							case 1:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasCab2-2);
							break;
							case 2:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasCab2-5);
							break;
							case 3:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasCab2-10);
							break;
							case 4:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasCab2+17);
							break;
							case 5:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasCab2+12);
							break;
							case 6:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasCab2+7);
							break;
							case 7: fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*fuerzaTropasCab2;
							break;
							case 8:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*fuerzaTropasCab2;
							break;
							case 9:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*fuerzaTropasCab2;
							break;
							default: break;
						}	
			
				
				break;
				case 9:	switch (tipoEnemigaSoldado[tropaPeleaE[f]]) {
				
							
							
							case 1:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasCab3-1);
							break;
							case 2:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasCab3-2);
							break;
							case 3:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasCab3-5);
							break;
							case 4:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasCab3+20);
							break;
							case 5:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasCab3+15);
							break;
							case 6:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*(fuerzaTropasCab3+10);
							break;
							case 7: fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*fuerzaTropasCab3;
							break;
							case 8:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*fuerzaTropasCab3;
							break;
							case 9:	fuerzaMia=tropaNumSoldado[tropaPeleaMia[f]]*fuerzaTropasCab3;
							break;
							
							
							default: break;
						}	
				
				break;
				
				default: break;
			}
			
			
			switch (tipoEnemigaSoldado[tropaPeleaE[f]]) {
			
				case 1: switch (tipoSoldado[tropaPeleaMia[f]]) {
			
							case 1: fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*fuerzaTropasInf1;
							break;
							case 2:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*fuerzaTropasInf1;
							break;
							case 3:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*fuerzaTropasInf1;
							break;
							case 4:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasInf1-5);
							break;
							case 5:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasInf1-10);
							break;
							case 6:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasInf1-15);
							break;
							case 7:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasInf1+15);
							break;
							case 8:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasInf1+10);
							break;
							case 9:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasInf1+5);
							break;
							
							default: break;
						}
				
				break;
				case 2: switch (tipoSoldado[tropaPeleaMia[f]]) {
			
							case 1: fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*fuerzaTropasInf2;
							break;
							case 2:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*fuerzaTropasInf2;
							break;
							case 3:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*fuerzaTropasInf2;
							break;
							case 4:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasInf2-2);
							break;
							case 5:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasInf2-5);
							break;
							case 6:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasInf2-10);
							break;
							case 7:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasInf2+17);
							break;
							case 8:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasInf2+12);
							break;
							case 9:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasInf2+7);
							break;
							
							default: break;
						}	
			
				break;
				case 3:	switch (tipoSoldado[tropaPeleaMia[f]]) {
			
							case 1: fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*fuerzaTropasInf3;
							break;
							case 2:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*fuerzaTropasInf3;
							break;
							case 3:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*fuerzaTropasInf3;
							break;
							case 4:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasInf3-1);
							break;
							case 5:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasInf3-2);
							break;
							case 6:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasInf3-5);
							break;
							case 7:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasInf3+20);
							break;
							case 8:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasInf3+15);
							break;
							case 9:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasInf3+10);
							break;
							
							default: break;
						}	
				
				break;
				case 4:	switch (tipoSoldado[tropaPeleaMia[f]]) {
			
							case 1: fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasArq1+15);
							break;
							case 2:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasArq1+10);
							break;
							case 3:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasArq1+5);
							break;
							case 4:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasArq1);
							break;
							case 5:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasArq1);
							break;
							case 6:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasArq1);
							break;
							case 7:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasArq1-5);
							break;
							case 8:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasArq1-10);
							break;
							case 9:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasArq1-15);
							break;
							
							default: break;
						}	
				
				break; 
				case 5:	switch (tipoSoldado[tropaPeleaMia[f]]) {
			
							case 1:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasArq2+17);
							break;
							case 2:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasArq2+12);
							break;
							case 3:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasArq2+7);
							break;
							case 4: fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*fuerzaTropasArq2;
							break;
							case 5:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*fuerzaTropasArq2;
							break;
							case 6:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*fuerzaTropasArq2;
							break;
							case 7:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasArq2-2);
							break;
							case 8:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasArq2-5);
							break;
							case 9:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasArq2-10);
							break;
							
							
							
							default: break;
						}	
				
				
				break;
				case 6:	switch (tipoSoldado[tropaPeleaMia[f]]) {
				
							case 1:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasArq3+20);
							break;
							case 2:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasArq3+15);
							break;
							case 3:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasArq3+10);
							break;
							case 4: fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*fuerzaTropasArq3;
							break;
							case 5:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*fuerzaTropasArq3;
							break;
							case 6:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*fuerzaTropasArq3;
							break;
							case 7:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasArq3-1);
							break;
							case 8:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasArq3-2);
							break;
							case 9:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasArq3-5);
							break;
							
							
							default: break;
						}	
				
				break;
				case 7:	switch (tipoSoldado[tropaPeleaMia[f]]) {
			
							
							case 1:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasCab1-5);
							break;
							case 2:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasCab1-10);
							break;
							case 3:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasCab1-15);
							break;
							case 4:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasCab1+15);
							break;
							case 5:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasCab1+10);
							break;
							case 6:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasCab1+5);
							break;
							case 7: fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*fuerzaTropasCab1;
							break;
							case 8:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*fuerzaTropasCab1;
							break;
							case 9:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*fuerzaTropasCab1;
							break;
							
							default: break;
						}
				
				
				break;
				case 8:	switch (tipoSoldado[tropaPeleaMia[f]]) {
			
							
							case 1:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasCab2-2);
							break;
							case 2:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasCab2-5);
							break;
							case 3:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasCab2-10);
							break;
							case 4:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasCab2+17);
							break;
							case 5:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasCab2+12);
							break;
							case 6:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasCab2+7);
							break;
							case 7: fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*fuerzaTropasCab2;
							break;
							case 8:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*fuerzaTropasCab2;
							break;
							case 9:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*fuerzaTropasCab2;
							break;
							default: break;
						}	
			
				
				break;
				case 9:	switch (tipoSoldado[tropaPeleaMia[f]]) {
				
							
							
							case 1:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasCab3-1);
							break;
							case 2:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasCab3-2);
							break;
							case 3:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasCab3-5);
							break;
							case 4:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasCab3+20);
							break;
							case 5:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasCab3+15);
							break;
							case 6:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*(fuerzaTropasCab3+10);
							break;
							case 7: fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*fuerzaTropasCab3;
							break;
							case 8:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*fuerzaTropasCab3;
							break;
							case 9:	fuerzaEnemiga=tropaEnemigaNumSoldado[tropaPeleaE[f]]*fuerzaTropasCab3;
							break;
							
							
							default: break;
						}	
				
				break;
				
				default: break;
			}
			
			var fuerzaTotal=0;
			
			fuerzaTotal=fuerzaMia+fuerzaEnemiga;
			var porcentajeMio=Math.trunc((fuerzaMia/fuerzaTotal)*100);
			
			var porcentajeE=Math.trunc((fuerzaEnemiga/fuerzaTotal)*100);
			
			var randomicoPelea =(Math.random() * 100) + 1;
			//console.log(porcentajeMio);
			//console.log(porcentajeE);
			var yoGano=false;
			var enmigoGana=false;
			if(randomicoPelea<porcentajeE){
				enmigoGana=true;
			}else{
				yoGano=true;
			}
			var provicional=0;
			
			if(yoGano==true){
				tropaEnemigaNumSoldado[tropaPeleaE[f]]=0;
				provicional=tropaNumSoldado[tropaPeleaMia[f]];
				tropaNumSoldado[tropaPeleaMia[f]]=Math.trunc(tropaNumSoldado[tropaPeleaMia[f]]*(porcentajeMio/100));
				numContTropMio+=(provicional-tropaNumSoldado[tropaPeleaMia[f]]);
			}else{
				tropaNumSoldado[tropaPeleaMia[f]]=0;
				tropaEnemigaNumSoldado[tropaPeleaE[f]]=Math.trunc(tropaEnemigaNumSoldado[tropaPeleaE[f]]*(porcentajeE/100));
			}
			
		}
	}
	
	
}


function danoResistenciaCiudad(){
	//305 620
	//console.log(tropaX);
	//console.log(tropaEnemigaX);
	
	var temID2=0;
	//var temporalCiudad=0;
	for(let C120 = 0; C120<10; C120++){
		if(Ciudades[C120].pertenencia==1){
			temID2=Ciudades[C120].id;
		}
		
	}
	for(let mio=0;mio<tropaX.length;mio++){
		
		if(tropaX[mio]==305&&tropaNumSoldado[mio]!=0){
			if(tipoSoldado[mio]<=3){
				Ciudades[temID2].puntosDeVida-=2;
			}else{
				if(tipoSoldado[mio]>3&&tipoSoldado[mio]<=6){
					Ciudades[temID2].puntosDeVida-=3;
				}else{
					Ciudades[temID2].puntosDeVida-=1;
				}
			}
			
		}
	}
	
	for(let ene=0;ene<tropaEnemigaX.length;ene++){
		
		if(tropaEnemigaX[ene]==620&&tropaEnemigaNumSoldado[ene]!=0){
			if(tipoEnemigaSoldado[ene]<=3){
				Ciudades[temID2-1].puntosDeVida-=2;
			}else{
				if(tipoEnemigaSoldado[ene]>3&&tipoEnemigaSoldado[ene]<=6){
					Ciudades[temID2-1].puntosDeVida-=3;
				}else{
					Ciudades[temID2-1].puntosDeVida-=1;
				}
			}
			
		}
	}
	
	
	
}


function finDeBatalla(){
	
	
	var temID3=0;

	for(let C5 = 0; C5<10; C5++){
		if(Ciudades[C5].pertenencia==1){
			temID3=Ciudades[C5].id;
		}
		
	}
	
	var sinTropasEnemigo=false;
	var sinTropasYo=false;
	var contEE=0;
	var contMM=0;
	
	var contadorMioE=0;
	/*var totalENE=0;
	for (let e21=0;e21<9;e21++){
			totalENE+=ejercitoEnemigo[e21];
			
		}*/
	
	for(let C51 = 0; C51<tropaEnemigaX.length; C51++){
		if(tropaEnemigaNumSoldado[C51]<=0&&tropaEnemigaX[C51]!=0){
			contEE+=1;
		}
	}
	if(contEE==tropaEnemigaX.length){
		sinTropasEnemigo=true;
	}
	
    if(Ciudades[temID3].puntosDeVida<=0||sinTropasEnemigo==true){
		enemigoPierde=true;
		for(let C511 = 0; C511<tropaEnemigaX.length; C511++){
			tropaEnemigaNumSoldado[C511]==0;
		}
	}
	
	
	for(let C52 = 0; C52<tropaX.length; C52++){
		if(tropaNumSoldado[C52]<=0&&tropaX[C52]!=0){
			contMM+=1;
			
		}
	}
	
	if(contMM==tropaX.length&&numContTropMio==numTropas){
		sinTropasYo=true;
	}
	
    if((Ciudades[temID3-1].puntosDeVida<=0||sinTropasYo==true)&&enemigoPierde==false){
		yoPierdo=true;
		
	}
	
	if(enemigoPierde==true){
		//console.log("perdedor");
		siGanoBatalla();
	}
	
	if(yoPierdo==true){
		//console.log("yo he perdido");
		perderAbandonarBatalla();
		abandono=true;
		finBatalla=true;
	}
	
	
}


function siGanoBatalla(){
	
	var temID2=0;
	//var temporalCiudad=0;
	for(let C7 = 0; C7<10; C7++){
		if(Ciudades[C7].pertenencia==1){
			temID2=Ciudades[C7].id;
		}
		
	}
	
	
	if (batallaDefensiva==false&&finBatalla==false){
		finBatalla=true;
		switch (temID2) {
			
				case 1:	
					Dinero+=200;
					numMadera+=200;
					numLadrillos+=200;
					numMetal+=200;
					ganancia=200;
					
				break;
				case 2:
					Dinero+=300;
					numMadera+=300;
					numLadrillos+=300;
					numMetal+=300;
					ganancia=300;
									
				break;
				case 3:	
					Dinero+=330;
					numMadera+=330;
					numLadrillos+=330;
					numMetal+=330;
					ganancia=330;
					
				break;
				case 4:	
					Dinero+=360;
					numMadera+=360;
					numLadrillos+=360;
					numMetal+=360;
					ganancia=360;
					
				break;
				case 5:
					Dinero+=400;
					numMadera+=400;
					numLadrillos+=400;
					numMetal+=400;
					ganancia=400;
					
				break;
				case 6:	
					Dinero+=500;
					numMadera+=500;
					numLadrillos+=500;
					numMetal+=500;
					ganancia=500;
					
				break;
				case 7:	
					Dinero+=600;
					numMadera+=600;
					numLadrillos+=600;
					numMetal+=600;
					ganancia=600;
					
				break;
				case 8:
					Dinero+=700;
					numMadera+=700;
					numLadrillos+=700;
					numMetal+=700;
					ganancia=700;
					
				break;
				case 9:	
					Dinero+=1000;
					numMadera+=1000;
					numLadrillos+=1000;
					numMetal+=1000;
					ganancia=1000;
					
				break;
				
				default: break;
			}
			
	}else{
			if(batallaDefensiva==true&&finBatalla==false){
				Dinero+=100;
				numMadera+=100;
				numLadrillos+=100;
				numMetal+=100;
				ganancia=100;
				finBatalla=true;
			}
			
			
		}
		
		tropaPeleaMia[0]=-1;
		tropaPeleaMia[1]=-1;
		tropaPeleaMia[2]=-1;
		tropaPeleaE[0]=-1;
		tropaPeleaE[1]=-1;
		tropaPeleaE[2]=-1;
		
		for(let g0 = 0; g0<tropaX.length; g0++){
			if(tropaNumSoldado[g0]>0){
				switch (tipoSoldado[g0]) {
					
					case 1:	tropasInf1+=tropaNumSoldado[g0];break;
					case 2:	tropasInf2+=tropaNumSoldado[g0];break;
					case 3:	tropasInf3+=tropaNumSoldado[g0];break;
					case 4:	tropasArq1+=tropaNumSoldado[g0];break;
					case 5:	tropasArq2+=tropaNumSoldado[g0];break;
					case 6:	tropasArq3+=tropaNumSoldado[g0];break;
					case 7:	tropasCab1+=tropaNumSoldado[g0];break;
					case 8:	tropasCab2+=tropaNumSoldado[g0];break;
					case 9:	tropasCab3+=tropaNumSoldado[g0];break;
					
					default: break;
				}
			}
		}

		for(let g1 = 0; g1<tropaX.length-1; g1++){
			tropaX.pop();
			tropaY.pop();
			tropaNumSoldado.pop();
			tipoSoldado.pop();
		}
		tropaX[0]=0;
		tropaY[0]=0;
		tropaNumSoldado[0]=0;
		tipoSoldado[0]=0;
		
		for(let g2 = 0; g2<contadorEnemigo-1; g2++){
			tropaEnemigaX.pop();
			tropaEnemigaY.pop();
			tropaEnemigaNumSoldado.pop();
			tipoEnemigaSoldado.pop();
		}
		tropaEnemigaX[0]=0;
		tropaEnemigaY[0]=0;
		tropaEnemigaNumSoldado[0]=0;
		tipoEnemigaSoldado[0]=0;
		
		//dibujar en pantalla que gane y que
		
		
	contextoBatalla.beginPath();
	contextoBatalla.drawImage(fondoBatalla,200,170,625,390);
	//contextoBatalla.fillStyle = "white";
	contextoBatalla.font="25pt Verdana";
	
	//contextoBatalla.fillRect(200, 170, 625,390);// para separar
	contextoBatalla.fill();
	
	contextoBatalla.fillStyle = "black";
	

	
	contextoBatalla.fillText("VICTORIA TOTAL",350,315);
	contextoBatalla.font="25pt Verdana";
	if(batallaDefensiva==false){
			contextoBatalla.fillText("Has Conquistado: "+Ciudades[temID2].nombre,320,365);
	}else{
			contextoBatalla.font="20pt Verdana";
			
			contextoBatalla.fillText("Has defendido con exito a: "+Ciudades[temID2-1].nombre,310,365);
	}

	contextoBatalla.font="15pt Verdana";
	contextoBatalla.fillText("Has ganado "+ganancia+ " de Dinero y de cada recurso",300,415);
	contextoBatalla.closePath();
	$("#Abandonar").hide();
	$("#VictoriaBatalla").show();
	
	
	
	
	
}


function siPierdoBatalla(){
	
		var temID21=0;
		//var temporalCiudad=0;
		for(let C7 = 0; C7<10; C7++){
			if(Ciudades[C7].pertenencia==1){
				temID21=Ciudades[C7].id;
			}
			
		}
		
	
		tropaPeleaMia[0]=-1;
		tropaPeleaMia[1]=-1;
		tropaPeleaMia[2]=-1;
		tropaPeleaE[0]=-1;
		tropaPeleaE[1]=-1;
		tropaPeleaE[2]=-1;
		
		for(let g0 = 0; g0<tropaX.length; g0++){
			if(tropaNumSoldado[g0]>0){
				switch (tipoSoldado[g0]) {
					
					case 1:	tropasInf1+=tropaNumSoldado[g0];break;
					case 2:	tropasInf2+=tropaNumSoldado[g0];break;
					case 3:	tropasInf3+=tropaNumSoldado[g0];break;
					case 4:	tropasArq1+=tropaNumSoldado[g0];break;
					case 5:	tropasArq2+=tropaNumSoldado[g0];break;
					case 6:	tropasArq3+=tropaNumSoldado[g0];break;
					case 7:	tropasCab1+=tropaNumSoldado[g0];break;
					case 8:	tropasCab2+=tropaNumSoldado[g0];break;
					case 9:	tropasCab3+=tropaNumSoldado[g0];break;
					
					default: break;
				}
			}
		}

		for(let g1 = 0; g1<tropaX.length-1; g1++){
			tropaX.pop();
			tropaY.pop();
			tropaNumSoldado.pop();
			tipoSoldado.pop();
		}
		tropaX[0]=0;
		tropaY[0]=0;
		tropaNumSoldado[0]=0;
		tipoSoldado[0]=0;
		
		for(let g2 = 0; g2<contadorEnemigo-1; g2++){
			tropaEnemigaX.pop();
			tropaEnemigaY.pop();
			tropaEnemigaNumSoldado.pop();
			tipoEnemigaSoldado.pop();
		}
		tropaEnemigaX[0]=0;
		tropaEnemigaY[0]=0;
		tropaEnemigaNumSoldado[0]=0;
		tipoEnemigaSoldado[0]=0;
		
		//dibujar en pantalla que gane y que
		
		
		contextoBatalla.beginPath();
		contextoBatalla.drawImage(fondoBatalla,200,170,625,390);
		//contextoBatalla.fillStyle = "white";
		contextoBatalla.font="25pt Verdana";
		
		//contextoBatalla.fillRect(200, 170, 625,390);// para separar
		contextoBatalla.fill();
		
		contextoBatalla.fillStyle = "black";
		

		
		contextoBatalla.fillText("DERROTA TOTAL",350,315);
		contextoBatalla.font="25pt Verdana";
		if(batallaDefensiva==false){
				contextoBatalla.fillText("NO has Conquistado: "+Ciudades[temID21].nombre,320,365);
		}else{
				contextoBatalla.font="20pt Verdana";
				
				contextoBatalla.fillText("Has perdido esta ciudad: "+Ciudades[temID21].nombre,310,365);
		}

		contextoBatalla.font="15pt Verdana";
		contextoBatalla.fillText("Has perdido "+ganancia+ "% de Dinero y de cada recurso",300,415);
		contextoBatalla.closePath();
		$("#Abandonar").hide();
		$("#FailBatalla").show();
		
		
	
	
	
	
}
	
	

function alertaGeneraAtaque(){
	
	    enLienzoCiudad=false;
		enLienzoMapa=false;
		contextoJ1.clearRect(0,0,3000,3000);
        contextoJ2.clearRect(0,0,3000,3000);
        contextoT.clearRect(0,0,256,256);
		
		$("#lienzo1").hide();
		$("#lienzoCiudad").hide();
		$("#escenarioT").hide();
		$("#Ejercito").hide();
		$("#Atacar").hide();
		$("#Arriba").hide();
		$("#Derecha").hide();
		$("#Abajo").hide();
		$("#Izquierda").hide();
		activarBatalla=true;
		$("#Atacar").hide();
		$("#SimuladorBatalla").show();
		puedoAtacar=false;
		//$("#RegresarMapa").show();
		//$("#lienzoAtaque2").show();
		$("#lienzoAtaque").fadeIn(500);
	
		tiempoPausado=tiempoRestante-time;
		for (let ti=0;ti<10;ti++){
			Ciudades[ti].tiempoPausadoPro=Ciudades[ti].produccion.tiempoTerminarPro-time;
			Ciudades[ti].tiempoPausadoCons=Ciudades[ti].edificio.tiempoTerminarC-time;
			Ciudades[ti].tiempoPausadoRec=Ciudades[ti].tropa.tiempoTerminarT-time;
			
		}
		
		preBatalla=true;
		reclutarEnemigo=true;
		batallaDefensiva=true;
		$("#IniciarBatalla").show();
		numContTropMio=0;
	
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
		
		
		$("#lienzoCiudad").hide();
		$("#AtrasMapa").hide();
		$("#Informacion").hide();
		$("#Construccion").hide();
		$("#Reclutar").hide();
	
		
		
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
								
	
	
	
	
	
}


function simuladorBatalla(){
	
	var randomicoBatalla =(Math.random() * 100) + 1;
	
	
	var yoGano=false;
	var enmigoGana=false;
	if(randomicoBatalla<enemigoFuerzaBruta){
		enmigoGana=true;
	}else{
		yoGano=true;
	}
	
	if(yoGano==true){
		
	
		
		tropasInf1=Math.trunc(tropasInf1*(miFuerzaBruta/100));
		tropasInf2=Math.trunc(tropasInf2*(miFuerzaBruta/100));
		tropasInf3=Math.trunc(tropasInf3*(miFuerzaBruta/100));
		tropasArq1=Math.trunc(tropasArq1*(miFuerzaBruta/100));
		tropasArq2=Math.trunc(tropasArq2*(miFuerzaBruta/100));
		tropasArq3=Math.trunc(tropasArq3*(miFuerzaBruta/100));
		tropasCab1=Math.trunc(tropasCab1*(miFuerzaBruta/100));
		tropasCab2=Math.trunc(tropasCab2*(miFuerzaBruta/100));
		tropasCab3=Math.trunc(tropasCab3*(miFuerzaBruta/100));
		
		enemigoPierde=true;
		siGanoBatalla();
		
		
		
	}else{
		
		
		tropasInf1=Math.trunc(tropasInf1*(miFuerzaBruta/100));
		tropasInf2=Math.trunc(tropasInf2*(miFuerzaBruta/100));
		tropasInf3=Math.trunc(tropasInf3*(miFuerzaBruta/100));
		tropasArq1=Math.trunc(tropasArq1*(miFuerzaBruta/100));
		tropasArq2=Math.trunc(tropasArq2*(miFuerzaBruta/100));
		tropasArq3=Math.trunc(tropasArq3*(miFuerzaBruta/100));
		tropasCab1=Math.trunc(tropasCab1*(miFuerzaBruta/100));
		tropasCab2=Math.trunc(tropasCab2*(miFuerzaBruta/100));
		tropasCab3=Math.trunc(tropasCab3*(miFuerzaBruta/100));
		yoPierdo=true;
		perderAbandonarBatalla();
		abandono=true;
		finBatalla=true;
		
	}
	
	
}


function VictoriaJuego(){
	
	var temIDV=0;
		//var temporalCiudad=0;
		for(let V = 0; V<10; V++){
			if(Ciudades[V].pertenencia==1){
				temIDV=Ciudades[V].id;
			}
			
		}
	
	if(temIDV==10){
		//console.log("gano juego");
		$("#CondicionVictoria").show();
		if(enLienzoMapa==true){
			contextoJ1.drawImage(imgInCiudadPapiro,25,25,1024,800);//dibuja papiro en la ciudad
			
			contextoJ1.beginPath();
			contextoJ1.font="20pt Verdana";
			contextoJ1.fillStyle = "black";
			contextoJ1.fillText("Gran Faraon Felicitaciones has conquistado",200,200);
			contextoJ1.fillText("todas las ciudades enemigas que existen",200,250);
			contextoJ1.fillText("y has obtenido una victoria total y aplastante.",200,300);
			contextoJ1.fillText("Felicidades por ganar este nivel, al oprimir",200,400);
			contextoJ1.fillText("el boton Victoria Total regresaras a la seccion",200,450);
			contextoJ1.fillText("de seleccion de nivel, y podras iniciar desde",200,500);
			contextoJ1.fillText("cero un nuevo nivel, que puede ser este mismo,",200,550);
			contextoJ1.fillText("o uno mas facil u otro mas dificil, diviertete",200,600);
			contextoJ1.fillText("jugando todos los niveles y gracias por jugar.",200,650);
			
			contextoJ1.fill();
			contextoJ1.closePath();
			
		}
		
		$("#escenarioT").hide();
		
		if(Nivel==1&&finNivel==true){
			Nivel=2;
			
			
			$("#Login").hide();
			
			$("#Juego").fadeOut(500);
			$("#lienzo2").hide();
			$("#lienzoCiudad").hide();
			$("#Ejercito").hide();
			$("#Arriba").hide();
			$("#Derecha").hide();
			$("#Abajo").hide();
			$("#Izquierda").hide();
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
			if(Nivel==2&&finNivel==true){
				console.log("pasa nivel tres");
				Nivel=3;
			}else{
				if(Nivel==3&&finNivel==true){
					console.log("ganador del juego, final");
					Nivel=4;
				}
				
			}
		}
		
	}
}


function DerrotaTotalJuego(){
	
	var temIDV2=0;
		//var temporalCiudad=0;
		for(let V2 = 0; V2<10; V2++){
			if(Ciudades[V2].pertenencia==1){
				temIDV2=Ciudades[V2].id;
			}
			
		}
	
	
	if(enLienzoMapa==true&&(temIDV2==0||numCorazon==0)){
		$("#escenarioT").hide();
		$("#CondicionDerrota").show();
		contextoJ1.drawImage(imgInCiudadPapiro,25,25,1024,800);//dibuja papiro en la ciudad
		
		contextoJ1.beginPath();
		contextoJ1.font="20pt Verdana";
		contextoJ1.fillStyle = "black";
		contextoJ1.fillText("Gran Faraon has sido derrotado muchas veces",200,200);
		contextoJ1.fillText("o todas tus ciudades han sido conquistadas,",200,250);
		contextoJ1.fillText("esto ha sido una derrota total y aplastante.",200,300);
		contextoJ1.fillText("Mejor suerte para la proxima, al oprimir",200,400);
		contextoJ1.fillText("el boton Derrota Total regresaras a la seccion",200,450);
		contextoJ1.fillText("de seleccion de nivel, y podras iniciar desde",200,500);
		contextoJ1.fillText("cero un nuevo nivel, que puede ser este mismo,",200,550);
		contextoJ1.fillText("o uno mas facil, recuerda divertirte y disfrutar",200,600);
		contextoJ1.fillText("jugando todos los niveles y gracias por jugar.",200,650);
		
		contextoJ1.fill();
		contextoJ1.closePath();
			
	}
		
	
		
		
		
		
		
		
		
		
		
		
		
		
	
	
}










