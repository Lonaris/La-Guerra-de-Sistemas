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
	haTerminado(){ return this.terminado; }
	
	hacerJugada(playerA, playerB){
		//STATEMENTS PARA JUGADA
		var cartaA = playerA.jugarCarta();
		console.log("El jugador A juega la carta: ", cartaA, ". Le quedan:", playerA.mazo.length);
		var cartaB = playerB.jugarCarta();
		console.log("El jugador B juega la carta: ", cartaB, ". Le quedan:", playerB.mazo.length);
		
		
		this.empate = (cartaA == cartaB) ? true: false;
		if(!this.hayEmpate()){ 
			if(cartaA > cartaB){ 
				playerA.recibirCarta(cartaA); 
				playerA.recibirCarta(cartaB);
				console.log(playerA.mazo.length);
			}
			else 			   { 
				playerB.recibirCarta(cartaB); 
				playerB.recibirCarta(cartaA); 
			}
		}
		else { this.montoEmpate.unshift(cartaA, cartaB); }
	}
	hayEmpate(){ return this.empate;}
	
	resolverEmpate(playerA, playerB){
		if(!playerA.puedeEmpatar()){ return this.terminarJuego("Has Perdido!"); }
		if(!playerB.puedeEmpatar()){ return this.terminarJuego("Has Ganado!"); }
		
		this.montoEmpate.unshift(playerA.jugarCarta());
		this.montoEmpate.unshift(playerB.jugarCarta());
		
		cartaA = playerA.jugarCarta();
		cartaB = playerB.jugarCarta();
		
		this.empate = (cartaA == cartaB) ? true : false;
		if(!this.empate){
			if(carta2 > cartaB){ 
				//PRIMER FORMA PARA APILAR EL MONTO EMPATE
				while(montoEmpate.length > 0){ playerA.recibirCarta(montoEmpate.shift()); }
				/*
				//SEGUNDA FORMA PARA APILAR EL MONTO EMPATE
				for x in montoEmpate{
					playerA.recibirCarta(x);
				}
				montoEmpate = [];
				//PROBABLEMENTE ESTA FORMA SEA MAS RÁPIDA, DEBIDO A QUE NO HAGO MOVIEMIENTOS EN DOS ARRAYS, PERO CREO QUE PUEDE CONSUMIR MAS MEMORIA.
				*/
				playerA.recibirCarta(cartaA);
				playerA.recibirCarta(cartaB);
			}
			else{
				
				while(montoEmpate.length > 0){ playerB.recibirCarta(montoEmpate.shift()); }
				
				playerB.recibirCarta(cartaB);
				playerB.recibirCarta(cartaA);
			}
		}
		else{ this.montoEmpate.unshift(cartaA, cartaB); } //ESTE SI QUE ANDA, ES UNSHIFT Y PUEDE TOMAR MUCHOS ELEMENTOS COMO PARAMETRO
	}
}

class Player{
	constructor(nombre){
		this.nombre = nombre;
		this.mazo = []
	}
	recibirCarta(carta){ this.mazo.push(carta); }
	jugarCarta(){ return this.mazo.shift(); }
	puedeEmpatar(){ return (this.mazo.length > 1) ? true : false; }
	haPerdido(){ return (this.mazo.length > 0) ? false : true; }
	darNombre(){ return this.nombre;}
}


class Deck{
	constructor(cantidad = 48){
		//TEST
		this.cantidad = cantidad;
		this.cartasEnOrden = [];
		this.cartasDesordenadas = [];
		this.cartas = [];
		var i;
		for (i = 0; i < cantidad; i ++) {
			this.cartas.push(i);
			this.cartasDesordenadas.push(i);
		}
//		console.log(this.cartasDesordenadas);
	}
	mezclar(){
		//RANDOMIZAR! Y TEST
		
		while (this.cartasDesordenadas.length > 0){
//			console.log("Cantidad de cartas en CartasDesordenadas : ", this.cartasDesordenadas.length);
			var index = Math.floor((Math.random() * 10000) % (this.cartasDesordenadas.length));	
//			console.log("Indice aleatorio : ", index);
			
			this.cartasEnOrden.push(this.cartasDesordenadas.splice(index, 1).pop());
		}
//		console.log(this.cartasEnOrden);
	}
	/*
	mezclar(cartasDesordenadas){
		for (x in cartasDesordenadas){
			cartasEnOrden = randomizar //RANDOMIZAR!
		}
		return cartasEnOrden;
	}
	*/
	
	repartir(playerA, playerB){
		this.mezclar(); //MEZCLAR TIENE QUE LLAMARSE SI O SI, DE LO CONTRARIO cartasEnOrden es null, el pop() puede tirar error y el while puede no entrar nunca.
		while(this.cartasEnOrden.length > 0){
			playerA.recibirCarta(this.cartasEnOrden.pop());
			playerB.recibirCarta(this.cartasEnOrden.pop());
		}
	}
}
