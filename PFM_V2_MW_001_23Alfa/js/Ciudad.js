function Ciudad(){
	//Propiedades
		
		this.posX=0;//pos x de la ciudad
		this.posY=0;//pos y de la ciudad
		this.posZ=0;
		this.tamano=40;//tamaño ciudad
		
		
		this.nombre="";//nombre de la ciudad
		this.pertenencia=0; //si la ciudad es mia es 1 , sino es 0
		this.id=0;	// identificador de la ciudad
		this.puntosDeVida=1500;//daño que puede recibir la ciudad antes de perder
		
		
		this.edificio= new Edificios();
		this.produccion= new Produccion();
		this.tropa= new Tropas();
		
		/*
		//edificios
		this.edificioTropaInf=1;//nivel del edificio de tropas de infanteria
		this.edificioTropaArq=1;//nivel del edificio de tropas de arqueria
		this.edificioTropaCab=1;//nivel del edificio de tropas de caballeria
		
		
		this.edificioRecursoMad=1;//nivel del edificio de recursos de madera
		this.edificioRecursoLad=1;//nivel del edificio de recursos de ladrillos
		this.edificioRecursoMet=1;//nivel del edificio de recursos de metal
		
		this.edificioDinero=1;//nivel del edificio de recursos de dinero
		
		
		
		this.tiempoConstruir=100;//segundos para construir un edificio de nivel 1 a 2, doblar para 2 a 3
		this.nivelMaximo=3;//nivel maximo de edificios	
		this.edificioAConstruir=0;//saber edificio que se construye
		this.hayColaConst=false;//para saber si ya se esta construyendo un edificio
		
		this.tiempoTerminarC=0;//tiempo que falta para eduficio
		
		
		this.tiempoPausadoCons=0;// tiempo de pausado de construccion
		//edificios fin
		
		
		//produccion
		
		this.prodRecursoMad=50;//produccion del edificio de recursos de madera
		this.prodRecursoLad=30;//produccion del edificio de recursos de ladrillos
		this.prodRecursoMet=25;//produccion del edificio de recursos de metal
		
		this.prodDinero=50;//produccion del edificio de recursos de dinero
		
		this.prodTropaInf=20;//produccion del edificio de tropas de infanteria
		this.prodTropaArq=20;//produccion del edificio de tropas de arqueria
		this.prodTropaCab=20;//produccion del edificio de tropas de caballeria
		
		
		this.tiempoProduccion=30;// tiempo de produccion de recursos
		this.tiempoTerminarPro=0;////tiempo que falta para produccion
		this.tiempoPausadoPro=0;// tiempo de pausado de produccion		
		// produccion fin
		
		
		
		
		//tropas
			
		
		this.tropaAAlistar=0;//saber tropa que se recluta
		
		this.hayColaTropa=false;//para saber si ya se esta alistando tropas
		this.tiempoTropasInf=50;//segundos para reclutar tropas, 50 por cada 20 de inf
		this.tiempoTropasArq=75;//segundos para reclutar tropas, 75 por cada 20 de arq
		this.tiempoTropasCab=100;//segundos para reclutar tropas, 100 por cada 20 de cab
		this.tropasMinimo=20;//numero minimo de tropas
		//this.tropasMaximo=60;//numero maximo de tropas
		
		
		this.tiempoTerminarT=0;//tiempo que falta para tropa
		this.nivelEdiAlInDeRecInf=0;//nivel del Edificio Al Inicio De Reclutar inf
		this.nivelEdiAlInDeRecArq=0;//nivel del Edificio Al Inicio De Reclutar arq
		this.nivelEdiAlInDeRecCab=0;//nivel del Edificio Al Inicio De Reclutar cab
			
		
		this.tiempoPausadoRec=0;////tiempo de pausado de reclutar

		
		this.cantidadTropas=0;//tropas en la ciudades
		//tropas fin
		
*/
		
	//Metodos
	this.existo = function(){
		//return("yo existo");
		console.log("yo existo");
	}
	
	
	this.ubicacionEnElMapa = function(ind){
		var Px1= new Array();
		var Py1= new Array();
		//var Py2= new Array();
	    //var Px2= new Array();
		
		//var tamTempCiudad=40; //tamaño ciudades
		Px1[0]=989;	Py1[0]=959;	//Px2[0]=tamTempCiudad; Py2[0]=tamTempCiudad;
		Px1[1]=729;	Py1[1]=890;	//Px2[1]=tamTempCiudad; Py2[1]=tamTempCiudad;
		Px1[2]=239;	Py1[2]=829;	//Px2[2]=tamTempCiudad; Py2[2]=tamTempCiudad;
		Px1[3]=464;	Py1[3]=672;	//Px2[3]=tamTempCiudad; Py2[3]=tamTempCiudad;
		Px1[4]=721;	Py1[4]=615;	//Px2[4]=tamTempCiudad; Py2[4]=tamTempCiudad;
		Px1[5]=826;	Py1[5]=479;	//Px2[5]=tamTempCiudad; Py2[5]=tamTempCiudad;
		Px1[6]=527;	Py1[6]=372;	//Px2[6]=tamTempCiudad; Py2[6]=tamTempCiudad;
		Px1[7]=258;	Py1[7]=180;	//Px2[7]=tamTempCiudad; Py2[7]=tamTempCiudad;
		Px1[8]=597;	Py1[8]=126;	//Px2[8]=tamTempCiudad; Py2[8]=tamTempCiudad;
		Px1[9]=936;	Py1[9]=109;	//Px2[9]=tamTempCiudad; Py2[9]=tamTempCiudad;
			
		
		this.posX=Px1[ind];//pos x de la ciudad
		this.posY=Py1[ind];//pos y de la ciudad
	}
	
	this.nombreCiudad = function(ind){
		switch (ind) {
			case 0:	this.nombre="Heracleion";this.puntosDeVida=1500;this.tropa.cantidadTropas=numTropas;break;
			case 1:	this.nombre="Buto";this.puntosDeVida=2000; this.tropa.cantidadTropas=100;break;
			case 2:	this.nombre="Sile"; this.puntosDeVida=2500;this.tropa.cantidadTropas=200;break;
			case 3:	this.nombre="Letopis";this.puntosDeVida=2750;this.tropa.cantidadTropas=300;break;
			case 4:	this.nombre="Xios";this.puntosDeVida=3000;this.tropa.cantidadTropas=400;break;
			case 5:	this.nombre="Apis";this.puntosDeVida=3250;this.tropa.cantidadTropas=400;break;
			case 6:	this.nombre="Ptkheha";this.puntosDeVida=3500;this.tropa.cantidadTropas=500;break;
			case 7:	this.nombre="Rosetta";this.puntosDeVida=4000;this.tropa.cantidadTropas=600;break;
			case 8:	this.nombre="Raqote";this.puntosDeVida=4500;this.tropa.cantidadTropas=700;break;
			case 9:	this.nombre="Memphis";this.puntosDeVida=5000;this.tropa.cantidadTropas=1000;break;
			
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
		this.produccion.prodTropaInf=20*this.edificio.edificioTropaInf;//produccion del edificio de tropas de infanteria
		this.produccion.prodTropaArq=20*this.edificio.edificioTropaArq;//produccion del edificio de tropas de arqueria
		this.produccion.prodTropaCab=20*this.edificio.edificioRecursoMet;//produccion del edificio de tropas de caballeria
				
		this.produccion.prodRecursoMad=50*this.edificio.edificioRecursoMad;//produccion del edificio de recursos de madera
		this.produccion.prodRecursoLad=30*this.edificio.edificioRecursoLad;//produccion del edificio de recursos de ladrillos
		this.produccion.prodRecursoMet=25*this.edificio.edificioRecursoMet;//produccion del edificio de recursos de metal
		
		this.produccion.prodDinero=50*this.edificio.edificioDinero;//produccion del edificio de recursos de metal
	}
	

}