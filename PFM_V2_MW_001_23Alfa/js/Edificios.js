function Edificios(){


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

}