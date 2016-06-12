//Este archivo contiene la aplicaci�n de la biblioteca 'core_game.js' para la resoluci�n de la l�gica en "La Guerra de Sistemas"
//Esta biblioteca contiene la definici�n de algoritmos, objetos y encapsulamiento adecuados para su uso en la aplicaci�n "La Guerra de Sistemas"


//========================================================

var baraja = new Deck(50); //Este objeto contendr� las cartas sin repartir ni mezclar, se debe componer con una matriz que indique el desplazamiento adecuado en el archivo /images/48cartas.png
var jugadorUno = new Player; //Este objeto contiene las cartas repartidas del jugador uno
var jugadorDos = new Player; //Este objeto contiene las cartas repartidas del jugador dos
var juego = new Game(11); //Este objeto contiene las reglas del juego

//baraja.inicializarCartas(); //La baraja debe ser Const, as� no muevo los datos dentro de ella.
baraja.repartir(jugadorUno, jugadorDos); //La baraja debe ser Const, pasar los jugadores por referencia.

console.log(jugadorUno == jugadorDos ? true : false);



function play(){	
	if(juego.hayEmpate()){ juego.resolverEmpate(jugadorUno, jugadorDos); console.log("Hubo empate");}
	else{ juego.hacerJugada(jugadorUno, jugadorDos); console.log("Se hace una jugada");}
	
	//mostrarResultado(); //Handle para hacer los cambios visualmente, ac� hay php y html todo junto?
	if (jugadorUno.haPerdido()){ juego.terminarJuego("Has Perdido!"); }
	if (jugadorDos.haPerdido()){ juego.terminarJuego("Has Ganado!"); }
}

function surrender(){
	confirm("Seguro?");
}