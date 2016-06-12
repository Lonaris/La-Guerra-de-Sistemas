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
		this.cartasJugadas = [];
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
				playerA.recibirCarta(cartaA); 
				playerA.recibirCarta(cartaB);
				console.log(playerA.mazoPrincipal.length);
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
				while(montoEmpate.length > 0){ playerA.ganarCarta(montoEmpate.shift()); }
				/*
				//SEGUNDA FORMA PARA APILAR EL MONTO EMPATE
				for x in montoEmpate{
					playerA.recibirCarta(x);
				}
				montoEmpate = [];
				//PROBABLEMENTE ESTA FORMA SEA MAS RÁPIDA, DEBIDO A QUE NO HAGO MOVIEMIENTOS EN DOS ARRAYS, PERO CREO QUE PUEDE CONSUMIR MAS MEMORIA.
				*/
				playerA.ganarCarta(cartaA);
				playerA.ganarCarta(cartaB);
			}
			else{
				
				while(montoEmpate.length > 0){ playerB.ganarCarta(montoEmpate.shift()); }
				
				playerB.ganarCarta(cartaB);
				playerB.ganarCarta(cartaA);
			}
		}
		else{ this.montoEmpate.unshift(cartaA, cartaB); } //ESTE SI QUE ANDA, ES UNSHIFT Y PUEDE TOMAR MUCHOS ELEMENTOS COMO PARAMETRO
	}
}

class Player{
	constructor(nombre = 'noname'){
		this.nombre = nombre;
		this.mazoPrincipal = [];
		this.mazoRevancha = [];
	}
	recibirCarta(carta){ this.mazoPrincipal.push(carta); }
	ganarCarta(carta) { this.mazoRevancha.push(carta); }
	jugarCarta(){ return this.mazoPrincipal.shift(); }
	puedeEmpatar(){ return (this.mazoPrincipal.length + this.mazoRevancha.length > 1) ? true : false; }
	haPerdido(){ return (this.mazoPrincipal.length + this.mazoRevancha.length > 0) ? false : true; }
	tomarRevancha(){ this.mazoPrincipal = this.mazoRevancha; }
	darNombre(){ return this.nombre;}
}


class Deck{
	constructor(cantidad = 50){
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
