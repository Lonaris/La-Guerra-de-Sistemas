//Esta biblioteca contiene la definición del objeto Mazo para su uso en la aplicación "La Guerra de Sistemas"

class Deck{
	constructor(cantidad = 50){
		//TEST
		this.cantidad = cantidad;
		this.cartasEnOrden = [];
		this.cartasDesordenadas = [];
		this.cartas = []; //SUPONGO QUE VOY A USAR ESTO PARA HACER LA MATRIZ DE DESPLAZAMIENTO DE DISPLAY.
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
