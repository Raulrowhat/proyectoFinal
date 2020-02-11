function Tropas(){


		
		//tropas
			
		
		this.tropaAAlistar=0;//saber tropa que se recluta
		
		this.hayColaTropa=false;//para saber si ya se esta alistando tropas
		this.tiempoTropasInf=50;//segundos para reclutar tropas, 50 por cada 20 de inf
		this.tiempoTropasArq=75;//segundos para reclutar tropas, 75 por cada 20 de arq
		this.tiempoTropasCab=100;//segundos para reclutar tropas, 100 por cada 20 de cab
		this.tropasMinimo=20;//numero minimo de tropas
		//this.tropasMaximo=60;//numero maximo de tropas
		
		
		this.tiempoTerminarT=0;//tiempo que falta para tropa
		this.nivelEdiAlInDeRecInf=1;//nivel del Edificio Al Inicio De Reclutar inf
		this.nivelEdiAlInDeRecArq=1;//nivel del Edificio Al Inicio De Reclutar arq
		this.nivelEdiAlInDeRecCab=1;//nivel del Edificio Al Inicio De Reclutar cab
			
		
		this.tiempoPausadoRec=0;////tiempo de pausado de reclutar

		
		this.cantidadTropas=0;//tropas en la ciudades
		//tropas fin

}