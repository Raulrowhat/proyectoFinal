// Cargamos el lienzo donde vamos a dibujar
var lienzoPersonaje = document.getElementById("lienzoPersonaje");
var contexto1 = lienzoPersonaje.getContext("2d");

var enEleccionNivel=false;//para entrar a elegir nivel


// Cargamos el lienzo donde vamos a dibujar
var lienzo1 = document.getElementById("lienzo1");
var contextoJ1 = lienzo1.getContext("2d");

// Cargamos el lienzo donde oculto donde vamos a dibujar
var lienzo2 = document.getElementById("lienzo2");
var contextoJ2 = lienzo2.getContext("2d");




// Cargamos el lienzo  de objetos, gui, info del jugador
var contextoT = document.getElementById("escenarioT").getContext("2d");

// Cargamos el lienzo  de  dentro de la ciudad
var contextoCiudad = document.getElementById("lienzoCiudad").getContext("2d")



var temporizador; // Control del bucle principal.
var temporizador2; // Control del bucle principal.
var alturaVentana, anchuraVentana; // variables para hacer ventana auto ajustable.

//imagenes a usar

var cImg=false;//contador de imagenes a usar
var contImg=0;
var numImg=47;

/*
//imagen fondo de pantalla
var fondoPantalla= new Image();
fondoPantalla.src="img/fondoPantalla.jpg";

fondoPantalla.onload=function () {
    //cImg=true;
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  //console.log("image is loaded");
}
//fin imagen fondo de pantalla

*/


//bandera para iniciar el juego
var Iniciar_el_Juego=false;

//aqui juego final nuevo
//todo mapa
var mapa= new Image();
mapa.src="img/mapa1_1.png";
var mapay_inicial=300;//ubicacion inicial, ver primera ciudad
mapa.onload=function () {
    //cImg=true;
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  console.log("image is loaded");
}

//variables para ciudades en el mapa
/*
var Px1= new Array();
var Py1= new Array();
var Py2= new Array();
var Px2= new Array();

UbicaionCiudades();
*/

// variables zonas visibles

var ZonaX1= new Array();
var ZonaY1= new Array();
var ZonaX2= new Array();
var ZonaY2= new Array();

UbicaionZonasNoGrises();

var CiudadJugador=1;//para saber cuantas ciudades tiene el jugador en su control
var enLienzoMapa=false; //para saber en que lienzo estoy

/////todo mapa final


// Todo gui/objetos que ve en jugador en el canvas 1
var imgCorazon = new Image();
imgCorazon.src = "img/corazon.png";
imgCorazon.onload=function () {
    //cImg=true;
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  //console.log("image is loaded");
}
var numCorazon=3;

var imgDinero = new Image();
imgDinero.src = "img/moneda2.png";
imgDinero.onload=function () {
    //cImg=true;
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  //console.log("image is loaded");
}
var Dinero=500;

var imgTropas = new Image();
imgTropas.src = "img/soldado.png";
imgTropas.onload=function () {
    //cImg=true;
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  //console.log("image is loaded");
}
var numTropas=100;


var imgNivel = new Image();
imgNivel.src = "img/nivel.png";
imgNivel.onload=function () {
    //cImg=true;
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  //console.log("image is loaded");
}
var Nivel=1;


var imgMadera = new Image();
imgMadera.src = "img/wood1.png";
imgMadera.onload=function () {
    //cImg=true;
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  //console.log("image is loaded");
}
var numMadera=500;

var imgLadrillo = new Image();
imgLadrillo.src = "img/ladrillos1.png";
imgLadrillo.onload=function () {
    //cImg=true;
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  //console.log("image is loaded");
}
var numLadrillos=500;

var imgMetal = new Image();
imgMetal.src = "img/metal1.png";
imgMetal.onload=function () {
    //cImg=true;
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  //console.log("image is loaded");
}
var numMetal=500;
var Recursos=numMadera+numLadrillos+numMetal;

var imgPapiro = new Image();
imgPapiro.src = "img/papiro.png";
imgPapiro.onload=function () {
    //cImg=true;
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  //console.log("image is loaded");
}



// Todo gui/objetos que ve en jugador en el canvas 1 final



//Ciudades todo
var imgCiudad = new Image();
imgCiudad.src = "img/ciudad.png";
imgCiudad.onload=function () {
    
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  
}
var imgCiudad2 = new Image();
imgCiudad2.src = "img/ciudad2.png";
imgCiudad2.onload=function () {
    
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  
}
var imgCiudad3 = new Image();
imgCiudad3.src = "img/ciudad3.png";
imgCiudad3.onload=function () {
    
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  
}
var imgCiudad4 = new Image();
imgCiudad4.src = "img/ciudad4.png";
imgCiudad4.onload=function () {
    
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  
}


var Ciudades= new Array();
for(let c=0;c<10;c++){
	Ciudades[c]=new Ciudad();
	//Ciudades[c].existo();
	Ciudades[c].id=c+1;
	if(c<=0){
		Ciudades[c].pertenencia=1;
	}
	Ciudades[c].ubicacionEnElMapa(c);
	Ciudades[c].nombreCiudad(c);
	//console.log(Ciudades[c].nombre);
}

var enLienzoCiudad=false; //para saber en que lienzo estoy


var imgInCiudad1 = new Image();
imgInCiudad1.src = "img/InCiudad1.jpg";
imgInCiudad1.onload=function () {
    
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  
}
var imgInCiudad2 = new Image();
imgInCiudad2.src = "img/InCiudad2.jpg";
imgInCiudad2.onload=function () {
    
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  
}
var imgInCiudad3 = new Image();
imgInCiudad3.src = "img/InCiudad3.jpg";
imgInCiudad3.onload=function () {
    
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  
}
var imgInCiudad4 = new Image();
imgInCiudad4.src = "img/InCiudad4.jpg";
imgInCiudad4.onload=function () {
    
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  
}

var enLienzoCiudadID=0;//saber en que ciudad estoy en el lienzo ciudad

var imgInCiudadPapiro = new Image();
imgInCiudadPapiro.src = "img/papiro2.png";
imgInCiudadPapiro.onload=function () {
    
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  
}
var mostrarPapiro=false;

var opcionPapiro=0;//para saber si estamos en info, construir o reclutar en el papiro
//imagenes edificios
var imgEdifDin = new Image();
imgEdifDin.src = "img/marketF.png";
imgEdifDin.onload=function () {
    
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  
}

var imgEdifMad = new Image();
imgEdifMad.src = "img/maderaMine.png";
imgEdifMad.onload=function () {
    
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  
}

var imgEdifLad = new Image();
imgEdifLad.src = "img/ladrillosMine.png";
imgEdifLad.onload=function () {
    
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  
}

var imgEdifMet = new Image();
imgEdifMet.src = "img/metalMine.png";
imgEdifMet.onload=function () {
    
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  
}

var imgEdifTInf = new Image();
imgEdifTInf.src = "img/infanteriaRec.png";
imgEdifTInf.onload=function () {
    
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  
}

var imgEdifTArq = new Image();
imgEdifTArq.src = "img/arqueriaRec.png";
imgEdifTArq.onload=function () {
    
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  
}

var imgEdifTCab = new Image();
imgEdifTCab.src = "img/caballeriaRec.png";
imgEdifTCab.onload=function () {
    
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  
}


//imagenes tropas
var imgTInf1 = new Image();
imgTInf1.src = "img/inf1.jpg";
imgTInf1.onload=function () {
    
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  
}

var imgTInf2 = new Image();
imgTInf2.src = "img/inf2.jpg";
imgTInf2.onload=function () {
    
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  
}

var imgTInf3 = new Image();
imgTInf3.src = "img/inf3.jpg";
imgTInf3.onload=function () {
    
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  
}

var imgTArq1 = new Image();
imgTArq1.src = "img/arq1.jpg";
imgTArq1.onload=function () {
    
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  
}

var imgTArq2 = new Image();
imgTArq2.src = "img/arq2.jpg";
imgTArq2.onload=function () {
    
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  
}

var imgTArq3 = new Image();
imgTArq3.src = "img/arq3.jpg";
imgTArq3.onload=function () {
    
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  
}

var imgTCab1 = new Image();
imgTCab1.src = "img/cab1.jpg";
imgTCab1.onload=function () {
    
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  
}

var imgTCab2 = new Image();
imgTCab2.src = "img/cab2.jpg";
imgTCab2.onload=function () {
    
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  
}

var imgTCab3 = new Image();
imgTCab3.src = "img/cab3.jpg";
imgTCab3.onload=function () {
    
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  
}

var temporalExplicacion= false;//mostrar la info temporalmente mousemove
var infoExplicacion=false;//mostrar la info con click
var infoExpX=0;//x de donde esta el mouese o el click en el papiro de informacion, const o reclutar
var infoExpY=0;//y de donde esta el mouese o el click en el papiro de informacion, const o reclutar
var activoPorClickInfo=false;//para saber si activo la info por un click


var imgInCiudadPapiro2 = new Image();
imgInCiudadPapiro2.src = "img/papiro3.png";
imgInCiudadPapiro2.onload=function () {
    
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  
}

// Ciudades todo Fin


//todo edificios y construir
var segundoClick=0;//para mandar a construir
//var contadorClick=0;// para saber numero de click
var contadorClick=new Array();
for(let co=0;co<16;co++){
	contadorClick[co]=0;
}
var okConstruccionOrTropa=false;//dar ok para construir o para saber si puedo reclutar tropas
//var hayColaConst=false;//para saber si ya se esta construyendo un edificio
//var saberEdifTropa=0;// para saber que edificio o tropa hacer desde el boton construir o alistar

//todo edificios y construir fin



//todo tropas y reclutar
var tropasInf1=40;
var tropasInf2=0;//infanteria
var tropasInf3=0;

var tropasArq1=40;
var tropasArq2=0;//arqueria
var tropasArq3=0;

var tropasCab1=20;
var tropasCab2=0;//caballeria
var tropasCab3=0;

numTropas=tropasInf1+tropasArq1+tropasCab1+tropasInf2+tropasInf3+tropasArq2+tropasCab2+tropasArq3+tropasCab3;

var fuerzaTropasInf1=50;
var fuerzaTropasInf2=100;//infanteria porcentaje de fuerza para combate
var fuerzaTropasInf3=150;

var fuerzaTropasArq1=40;
var fuerzaTropasArq2=80;//arqueria porcentaje de fuerza para combate
var fuerzaTropasArq3=125;

var fuerzaTropasCab1=75;
var fuerzaTropasCab2=125;//caballeria porcentaje de fuerza para combate
var fuerzaTropasCab3=200;

var miFuerzaBruta=0;//fuerza bruta de pelea mia
var enemigoFuerzaBruta=0;//fuerza bruta de pelea enemigo
var ejercitoEnemigo=new Array();
for (let e1=0;e1<9;e1++){
	ejercitoEnemigo[e1]=0;
}
var contadorNoJuega=0;//si jugador no coloca tropas dar permiso a Ia a que si

//var okReclutar=false;// para saber si puedo reclutar tropas


var mostarInventarioTropas=false;// mostrar inventario de las tropas en el mapa

//todo tropas y reclutar fin

//atacar batalla
var activarBatalla=false;// para activar el lienzo batalla
var idCiudadAtacada=0;//ciudad que ataco o recibe el ataque
var idCiudadDesdeAtaque=0;//ciudad desde donde viene el ataque

var batallaDefensiva=false;//para saber si ataco o me atacan


var tropaSeleccionB=0;//seleccionar tropa en la batalla
var posTropaSelec=0;//posicion a colocar de la tropa seleccionada

var tropaX= new Array();//coordenada x tropa en el campo de batalla
var tropaY= new Array();//coordenada y tropa en el campo de batalla
var tropaNumSoldado= new Array();//numero de soldados en el campo de batalla
var tipoSoldado= new Array();//tipo de tropa en el campo de batalla
tropaX[0]=0;
tropaY[0]=0;
tropaNumSoldado[0]=0;
tipoSoldado[0]=0;

var tropaEnemigaX= new Array();//coordenada x tropa en el campo de batalla enemigos
var tropaEnemigaY= new Array();//coordenada y tropa en el campo de batalla enemigos
var tropaEnemigaNumSoldado= new Array();//numero de soldados en el campo de batalla enemigos
var tipoEnemigaSoldado= new Array();//tipo de tropa en el campo de batalla enemigos
tropaEnemigaX[0]=0;
tropaEnemigaY[0]=0;
tropaEnemigaNumSoldado[0]=0;
tipoEnemigaSoldado[0]=0;
var tiempoCreacionTropa=0;//intervalo de tiempo para que de salida a tropa enemiga
var creandoSalidaEnemiga=true;//darle estar al tiempo de salida enemiga
var contadorEnemigo=0;//contar tamaño array de tropas enemigas


var tropaPeleaMia= new Array();// guardo indice de mi tropa que choca con el enemigo para que peleen
var tropaPeleaE= new Array();// guardo indice de enemigo que choca con mi tropa para que peleen
tropaPeleaMia[0]=-1;
tropaPeleaMia[1]=-1;
tropaPeleaMia[2]=-1;
tropaPeleaE[0]=-1;
tropaPeleaE[1]=-1;
tropaPeleaE[2]=-1;

var finBatalla=false;//para saber que termino la batalla;
var ganancia=0;//lo que gane al ganar la batalla;
var yoPierdo=false;//para saber si pierdo yo
var enemigoPierde=false;//para saber si pierde enemigo
var abandono=false;//saber si abandone
var numContTropMio=0;//saber tropass muertas en batalla


//var puedoAtacar=false;//para ocultar opcion de ataque luego de hacer otro click

// Cargamos el lienzo  de batallas
var contextoBatalla = document.getElementById("lienzoAtaque").getContext("2d");
var contextoBatalla2 = document.getElementById("lienzoAtaque2").getContext("2d");

var imgbatalla1 = new Image();
imgbatalla1.src = "img/batalla1.jpg";
imgbatalla1.onload=function () {
    
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  
}

var imgbatalla2 = new Image();
imgbatalla2.src = "img/batalla2.png";
imgbatalla2.onload=function () {
    
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  
}

var imgbatalla3 = new Image();
imgbatalla3.src = "img/batalla3.png";
imgbatalla3.onload=function () {
    
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  
}

var imgbatalla4 = new Image();
imgbatalla4.src = "img/batalla4.png";
imgbatalla4.onload=function () {
    
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  
}

var imgbatalla5 = new Image();
imgbatalla5.src = "img/batalla5.png";
imgbatalla5.onload=function () {
    
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  
}

var imgbatalla6 = new Image();
imgbatalla6.src = "img/batalla6.png";
imgbatalla6.onload=function () {
    
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  
}

var imgbatalla7 = new Image();
imgbatalla7.src = "img/batalla7.jpg";
imgbatalla7.onload=function () {
    
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  
}

var imgbatalla8 = new Image();
imgbatalla8.src = "img/batalla8.png";
imgbatalla8.onload=function () {
    
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  
}

var imgbatalla9 = new Image();
imgbatalla9.src = "img/batalla9.png";
imgbatalla9.onload=function () {
    
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  
}


var preBatalla=false;// para activar lo de pre batalla y mostrar pre batalla
var juegoBatalla=false;// para activar el juego de batalla y mostrarlo
var reclutarEnemigo=false; //para reclutar tropas enemigas una sola vez

var fondoBatalla = new Image();
fondoBatalla.src = "img/fondobatalla1.png";
fondoBatalla.onload=function () {
    
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  
}


//atacar batalla fin

//imagen de alerta para atacar ciudad
var imgAlerta = new Image();
imgAlerta.src = "img/alerta.png";
imgAlerta.onload=function () {
    
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  
}

var tiempoAtaque=300;//segundos para hacer un ataque
var iniciarTiempo=true;// para iniciar el tiempo
var tiempoRestante=0;//segundos que faltan para hacer un ataque
var tiempoPausado=0;// tiempo al entrar en batalla y no pelear
var contPeligro=0;// para que titile el mensaje alerta

//imagen de espada para atacar ciudad
var imgSword = new Image();
imgSword.src = "img/sword.png";
//image.crossOrigin = 'Anonymous';
imgSword.onload=function () {
    
    contImg+=1;
    if(contImg==numImg){
        cImg=true;
    }
  
}
var espada=false;//dibujar espada
var espadaX=0;//coordenada X espada
var espadaY=0;//coordenada Y espada
var puedoAtacar=false;//dibujar espada para atacar

//var time=new Date();//tiempo del juego
var time=0;//tiempo del juego

//console.log(time.getTime()/1000);

//inicializar camara.
var camara = new Camara();
camara.posX = 0;
camara.posY = 0;

//inicializar camara fin



//final juego
var finNivel = false;

//final juego fin


// tutorial
var inTutorial=false;

var contadorPasos=0;

var contextoTutorial = document.getElementById("lienzoTutorial1").getContext("2d");
var contextoTutorial2 = document.getElementById("lienzoTutorial2").getContext("2d");

var constTutorial=false;
var recTutorial=false;
var infTutorial=false;

var construirTutorial=false;
var reclutarTutorial=false;
var tipoConstruirTutorial=0;
var tipoReclutarTutorial=0;

var clickTutorial=0;

var clickTropaTutorial=0;
var dibujarTropaTutorial=false;




// tutorial fin  rgb(28, 134, 250);

// instrucciones
 var pasoIntrucciones =0;
//instrucciones fin


//base de datos
var db = openDatabase('PuntajesJuego', '1.0', 'MWS', 3 * 1024 * 1024);
//ALTER TABLE  `posiciones` ADD  `locura` INT( 7 ) NOT NULL ;
db.transaction(function (tx) { 
   
   tx.executeSql('CREATE TABLE IF NOT EXISTS Basicos (numCorazon,Dinero,Nivel,numMadera,numLadrillos,numMetal,tropasInf1,tropasInf2,tropasInf3,tropasArq1,tropasArq2,tropasArq3,tropasCab1,tropasCab2,tropasCab3)');
   
   tx.executeSql('INSERT INTO Basicos (numCorazon,Dinero,Nivel,numMadera,numLadrillos,numMetal,tropasInf1,tropasInf2,tropasInf3,tropasArq1,tropasArq2,tropasArq3,tropasCab1,tropasCab2,tropasCab3) VALUES('+3+','+500+','+1+','+500+','+500+','+500+','+40+','+0+','+0+','+40+','+0+','+0+','+20+','+0+','+0+')');    
   tx.executeSql('DELETE FROM Basicos WHERE  Basicos.rowid='+2+'');
   
   tx.executeSql('CREATE TABLE IF NOT EXISTS Edificios (ciudad1,edif11,edif12,edif13,edif14,edif15,edif16,edif17,ciudad2,edif21,edif22,edif23,edif24,edif25,edif26,edif27,ciudad3,edif31,edif32,edif33,edif34,edif35,edif36,edif37,ciudad4,edif41,edif42,edif43,edif44,edif45,edif46,edif47,ciudad5,edif51,edif52,edif53,edif54,edif55,edif56,edif57,ciudad6,edif61,edif62,edif63,edif64,edif65,edif66,edif67,ciudad7,edif71,edif72,edif73,edif74,edif75,edif76,edif77,ciudad8,edif81,edif82,edif83,edif84,edif85,edif86,edif87,ciudad9,edif91,edif92,edif93,edif94,edif95,edif96,edif97)');
   
   tx.executeSql('INSERT INTO Edificios (ciudad1,edif11,edif12,edif13,edif14,edif15,edif16,edif17,ciudad2,edif21,edif22,edif23,edif24,edif25,edif26,edif27,ciudad3,edif31,edif32,edif33,edif34,edif35,edif36,edif37,ciudad4,edif41,edif42,edif43,edif44,edif45,edif46,edif47,ciudad5,edif51,edif52,edif53,edif54,edif55,edif56,edif57,ciudad6,edif61,edif62,edif63,edif64,edif65,edif66,edif67,ciudad7,edif71,edif72,edif73,edif74,edif75,edif76,edif77,ciudad8,edif81,edif82,edif83,edif84,edif85,edif86,edif87,ciudad9,edif91,edif92,edif93,edif94,edif95,edif96,edif97) VALUES('+1+','+1+','+1+','+1+','+1+','+1+','+1+','+1+','+0+','+1+','+1+','+1+','+1+','+1+','+1+','+1+','+0+','+1+','+1+','+1+','+1+','+1+','+1+','+1+','+0+','+1+','+1+','+1+','+1+','+1+','+1+','+1+','+0+','+1+','+1+','+1+','+1+','+1+','+1+','+1+','+0+','+1+','+1+','+1+','+1+','+1+','+1+','+1+','+0+','+1+','+1+','+1+','+1+','+1+','+1+','+1+','+0+','+1+','+1+','+1+','+1+','+1+','+1+','+1+','+0+','+1+','+1+','+1+','+1+','+1+','+1+','+1+')');    
   tx.executeSql('DELETE FROM Edificios WHERE  Edificios.rowid='+2+'');
  
});









