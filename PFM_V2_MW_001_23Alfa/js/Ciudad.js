function Ciudad(){
	//Propiedades
		
		this.posX=0;//pos x de la ciudad
		this.posY=0;//pos y de la ciudad
		this.posZ=0;
		this.tamano=40;//tamaño ciudad
		
		
		this.nombre="";//nombre de la ciudad
		this.pertenencia=0; //si la ciudad es mia es 1 , sino es 0
		this.id=0;	// identificador de la ciudad
		
		this.edificioTropaInf=1;//nivel del edificio de tropas de infanteria
		this.edificioTropaArq=1;//nivel del edificio de tropas de arqueria
		this.edificioTropaCab=1;//nivel del edificio de tropas de caballeria
		
		
		this.edificioRecursoMad=1;//nivel del edificio de recursos de madera
		this.edificioRecursoLad=1;//nivel del edificio de recursos de ladrillos
		this.edificioRecursoMet=1;//nivel del edificio de recursos de metal
		
		this.edificioDinero=1;//nivel del edificio de recursos de dinero
		
		this.prodTropaInf=20;//produccion del edificio de tropas de infanteria
		this.prodTropaArq=20;//produccion del edificio de tropas de arqueria
		this.prodTropaCab=20;//produccion del edificio de tropas de caballeria
				
		this.prodRecursoMad=50;//produccion del edificio de recursos de madera
		this.prodRecursoLad=30;//produccion del edificio de recursos de ladrillos
		this.prodRecursoMet=25;//produccion del edificio de recursos de metal
		
		this.prodDinero=50;//produccion del edificio de recursos de dinero
		
		this.tiempoConstruir=100;//segundos para construir un edificio de nivel 1 a 2, doblar para 2 a 3
		this.nivelMaximo=3;//nivel maximo de edificios	
		this.edificioAConstruir=0;//saber edificio que se construye
		this.hayColaConst=false;//para saber si ya se esta construyendo un edificio
		this.tropaAAlistar=0;//saber tropa que se recluta
		
		this.hayColaTropa=false;//para saber si ya se esta alistando tropas
		this.tiempoTropasInf=50;//segundos para reclutar tropas, 50 por cada 20 de inf
		this.tiempoTropasArq=75;//segundos para reclutar tropas, 75 por cada 20 de arq
		this.tiempoTropasCab=100;//segundos para reclutar tropas, 100 por cada 20 de cab
		this.tropasMinimo=20;//numero minimo de tropas
		//this.tropasMaximo=60;//numero maximo de tropas
		this.tiempoTerminarC=0;//tiempo que falta para eduficio
		this.tiempoTerminarT=0;//tiempo que falta para tropa
		this.nivelEdiAlInDeRecInf=0;//nivel del Edificio Al Inicio De Reclutar inf
		this.nivelEdiAlInDeRecArq=0;//nivel del Edificio Al Inicio De Reclutar arq
		this.nivelEdiAlInDeRecCab=0;//nivel del Edificio Al Inicio De Reclutar cab
		
		this.tiempoProduccion=30;// tiempo de produccion de recursos
		this.tiempoTerminarPro=0;////tiempo que falta para produccion
		
		this.tiempoPausadoPro=0;// tiempo de pausado de construccion		
		this.tiempoPausadoCons=0;// tiempo de pausado de construccion
		this.tiempoPausadoRec=0;////tiempo de pausado de reclutar

		this.puntosDeVida=1500;//daño que puede recibir la ciudad antes de perder
		this.cantidadTropas=0;//tropas en la ciudades

		
	//Metodos
	this.existo = function(){
		//return("yo existo");
		console.log("yo existo");
	}
	
	
	this.ubicacionEnElMapa = function(ind){
		this.posX=Px1[ind];//pos x de la ciudad
		this.posY=Py1[ind];//pos y de la ciudad
	}
	
	this.nombreCiudad = function(ind){
		switch (ind) {
			case 0:	this.nombre="Heracleion";this.puntosDeVida=1500;this.cantidadTropas=numTropas;break;
			case 1:	this.nombre="Buto";this.puntosDeVida=2000; this.cantidadTropas=100;break;
			case 2:	this.nombre="Sile"; this.puntosDeVida=2500;this.cantidadTropas=200;break;
			case 3:	this.nombre="Letopis";this.puntosDeVida=2750;this.cantidadTropas=300;break;
			case 4:	this.nombre="Xios";this.puntosDeVida=3000;this.cantidadTropas=400;break;
			case 5:	this.nombre="Apis";this.puntosDeVida=3250;this.cantidadTropas=400;break;
			case 6:	this.nombre="Ptkheha";this.puntosDeVida=3500;this.cantidadTropas=500;break;
			case 7:	this.nombre="Rosetta";this.puntosDeVida=4000;this.cantidadTropas=600;break;
			case 8:	this.nombre="Raqote";this.puntosDeVida=4500;this.cantidadTropas=700;break;
			case 9:	this.nombre="Memphis";this.puntosDeVida=5000;this.cantidadTropas=1000;break;
			
			default: break;
		}
	}
	
	this.reestablecerPuntosVida=function(ind){
		switch (ind) {
			case 0:	this.puntosDeVida=1500;break;
			case 1:	this.puntosDeVida=2000;break;
			case 2:	this.puntosDeVida=2500;break;
			case 3:	this.puntosDeVida=2750;break;
			case 4:	this.puntosDeVida=3000;break;
			case 5:	this.puntosDeVida=3250;break;
			case 6:	this.puntosDeVida=3500;break;
			case 7:	this.puntosDeVida=4000;break;
			case 8:	this.puntosDeVida=4500;break;
			case 9:	this.puntosDeVida=5000;break;
			
			default: break;
		}
	}
		

	this.actualizarProduccion = function(){
		this.prodTropaInf=20*this.edificioTropaInf;//produccion del edificio de tropas de infanteria
		this.prodTropaArq=20*this.edificioTropaArq;//produccion del edificio de tropas de arqueria
		this.prodTropaCab=20*this.edificioRecursoMet;//produccion del edificio de tropas de caballeria
				
		this.prodRecursoMad=50*this.edificioRecursoMad;//produccion del edificio de recursos de madera
		this.prodRecursoLad=30*this.edificioRecursoLad;//produccion del edificio de recursos de ladrillos
		this.prodRecursoMet=25*this.edificioRecursoMet;//produccion del edificio de recursos de metal
		
		this.prodDinero=50*this.edificioDinero;//produccion del edificio de recursos de metal
	}
	

}