//Esta biblioteca contiene la definición de algoritmos, objetos y encapsulamiento adecuados para su uso en la aplicación "La Guerra de Sistemas"

class Game{
	constructor(cantidadPalo = 11){
		this.empate = false;
		this.terminado = false;
		this.cartaA = 0;
		this.cartaB = 0;
		this.montoEmpate = [];
		this.cantidadPalo = cantidadPalo;
	}
	terminarJuego(string){
		console.log(string);
		this.terminado = true;
		this.empate = false;
		//this.cartasJugadas = []; // NO IMPLEMENTO ESTO PORQUE ME PARECE OVERKILL.
		this.montoEmpate = [];
	}
	haTerminado(){ return this.terminado; }
	
	tomarValor(carta){ return (carta < 48) ? carta % this.cantidadPalo : 12; } 
	
	hacerJugada(playerA, playerB){
		//STATEMENTS PARA JUGADA
		var cartaA = playerA.jugarCarta();
		var cartaB = playerB.jugarCarta();
		
		//IMPLEMENTAR LA BASURA INTERACTIVA CON LA PÁGINA
		//debería implementar algo como valorCartaA.getValue(), pero fue.
		var valorCartaA = this.tomarValor(cartaA);
		var valorCartaB = this.tomarValor(cartaB);
		
		console.log("El jugador A juega la carta: ", cartaA, "de valor", valorCartaA, ". Le quedan:", playerA.mazoPrincipal.length);
		console.log("El jugador B juega la carta: ", cartaB, "de valor", valorCartaB, ". Le quedan:", playerB.mazoPrincipal.length);
		
		this.empate = (valorCartaA == valorCartaB) ? true: false;
		if(!this.hayEmpate()){ 
			if(valorCartaA > valorCartaB){ 
			//COLOCAR LAS CARTAS EN UN MAZO SECUNDARIO.
				playerA.ganarCarta(cartaA); 
				playerA.ganarCarta(cartaB);
				console.log(playerA.mazoPrincipal.length);
			}
			else 			   { 
				playerB.ganarCarta(cartaB); 
				playerB.ganarCarta(cartaA); 
			}
		}
		else { this.montoEmpate.unshift(cartaA, cartaB); }
	}
	hayEmpate(){ return this.empate;}
	
	resolverEmpate(playerA, playerB){
		if(!playerA.puedeEmpatar()){ return this.terminarJuego("Has Perdido!"); }
		if(!playerB.puedeEmpatar()){ return this.terminarJuego("Has Ganado!"); }
		
		var cartaDorsoA = playerA.jugarCarta();
		var cartaDorsoB = playerB.jugarCarta();
		
		var cartaA = playerA.jugarCarta();
		var cartaB = playerB.jugarCarta();
		var valorCartaA = this.tomarValor(cartaA);
		var valorCartaB = this.tomarValor(cartaB);
		
		console.log("El jugador A juega la carta: ", cartaA, "de valor", valorCartaA, ". Le quedan:", playerA.mazoPrincipal.length);
		console.log("El jugador B juega la carta: ", cartaB, "de valor", valorCartaB, ". Le quedan:", playerB.mazoPrincipal.length);
		
		this.empate = (valorCartaA == valorCartaB) ? true : false;
		if(!this.empate){
			if(valorCartaA > valorCartaB){ 
				//PRIMER FORMA PARA APILAR EL MONTO EMPATE
				while(this.montoEmpate.length > 0){ playerA.ganarCarta(this.montoEmpate.shift()); }
				/*
				//SEGUNDA FORMA PARA APILAR EL MONTO EMPATE
				for x in montoEmpate{
					playerA.ganarCarta(x);
				}
				montoEmpate = [];
				//PROBABLEMENTE ESTA FORMA SEA MAS RÁPIDA, DEBIDO A QUE NO HAGO MOVIEMIENTOS EN DOS ARRAYS, PERO CREO QUE PUEDE CONSUMIR MAS MEMORIA. AUNQUE PUEDE QUE HAGA PARIR MAS TARDE AL GARBAGE COLLECTOR :P
				*/
				playerA.ganarCarta(cartaA);
				playerA.ganarCarta(cartaB);
			}
			else{
				
				while(this.montoEmpate.length > 0){ playerB.ganarCarta(this.montoEmpate.shift()); }
				
				playerB.ganarCarta(cartaB);
				playerB.ganarCarta(cartaA);
			}
		}
		else{ this.montoEmpate.unshift(cartaA, cartaB, cartaDorsoA, cartaDorsoB); } //ESTE SI QUE ANDA, ES UNSHIFT Y PUEDE TOMAR MUCHOS ELEMENTOS COMO PARAMETRO
	} 
}