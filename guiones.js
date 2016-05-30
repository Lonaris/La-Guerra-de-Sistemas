//Esta biblioteca contiene la definición de algoritmos, objetos y encapsulamiento adecuados para su uso en la aplicación "La Guerra de Sistemas"

class Game{
	constructor(){
		this.empate = false;
		this.terminado = false;
		this.cartaA = 0;
		this.cartaB = 0;
		this.montoEmpate = [];
	}
	terminarJuego(string){ 
		console.log(string);
		this.terminado = true; 
	}
	haTerminado(){ return terminado; }
	
	hacerJugada(playerA, playerB){
		//STATEMENTS PARA JUGADA
		cartaA = playerA.jugarCarta();
		cartaB = playerB.jugarCarta();
		
		this.empate = (cartaA == cartaB) ?: true, false;
		if(!this.empate){ 
			if(cartaA > cartaB){ playerA.recibirCarta(cartaA, cartaB); }
			else 			   { playerB.recibirCarta(cartaB, cartaA); }
		}
		else { this.montoEmpate.unshift(cartaA, cartaB); }
	}
	hayEmpate(){ return this.empate;}
	
	resolverEmpate(playerA, playerB){
		cartaA1 = playerA.jugarCarta();
		cartaA2 = playerA.jugarCarta();
		cartaB1 = playerB.jugarCarta();
		cartaB2 = playerB.jugarCarta();
		
		this.empate = (cartaA2 == cartaB2) ?: true, false;
		if(!this.empate){
			if(carta2 > cartaB){ playerA.recibirCarta(montoEmpate, cartaA1, cartaA2, cartaB1, cartaB2); } //PROBABLEMENTE NO ANDE PORQUE UNSHIFTEÁS UN ARRAY DENTRO DE UN ARRAY DE ENTEROS!
			else 			   { playerB.recibirCarta(montoEmpate, cartaB1, cartaB2, cartaA1, cartaA2); }
		}
		else{ this.montoEmpate.unshift(cartaA1, cartaA2, cartaB1, cartaB2); }
	}
}

class Player{
	constructor(nombre){
		this.nombre = nombre;
		this.mazo = []	
	}
	recibirCarta(carta){ this.mazo.unshift(carta); }
	jugarCarta(){ return this.mazo.shift(); }
	puedeEmpatar(){ return (this.mazo.length > 1) ?: true, false; }
	haPerdido(){ return (this.mazo.length > 0) ?: false, true; }
	darNombre(){ return this.nombre;}
}


class Deck{
	constructor(cantidad){
		//TEST
		for x in cantidad{
			this.cartas[x] = x;
		}
	}
	mezclar(){
		//RANDOMIZAR Y TEST
		for x in cartas{
			this.cartasEnOrden.push(cartas[x]);
		}
	}
	repartir(playerA, playerB)(
		mezclar();
		while(cartas){
			PlayerA.recibirCarta(this.cartasEnOrden.pop());
			PlayerB.recibirCarta(this.cartasEnOrden.pop());
		}
	)
}
