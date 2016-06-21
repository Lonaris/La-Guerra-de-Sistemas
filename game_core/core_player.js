//Esta biblioteca contiene la definición del objeto Player para su uso en la aplicación "La Guerra de Sistemas"

class Player{
	constructor(nombre = 'anon'){
		this.nombre = nombre;
		this.mazoPrincipal = [];
		this.mazoRevancha = [];
		
		this.cardSprite = new Sprite();
	}
	recibirCarta(carta){ this.mazoPrincipal.push(carta); }
	ganarCarta(carta) { this.mazoRevancha.push(carta); }
	jugarCarta(){ 
		if(!this.haPerdido())
			if(this.mazoVacio()){ this.tomarRevancha(); }
			return this.mazoPrincipal.shift();
		
	}
	mazoVacio(){ return (this.mazoPrincipal.length < 1) ? true : false; }
	puedeEmpatar(){ return (this.mazoPrincipal.length + this.mazoRevancha.length > 1) ? true : false; }
	haPerdido(){ return (this.mazoPrincipal.length + this.mazoRevancha.length > 0) ? false : true; }
	tomarRevancha(){ this.mazoPrincipal = this.mazoRevancha; this.mazoRevancha = [];}
	darNombre(){ return this.nombre;}
}