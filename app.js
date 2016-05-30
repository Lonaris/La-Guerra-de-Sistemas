//Este archivo contiene la aplicación de la biblioteca 'guiones' para la resolución de la lógica en "La Guerra de Sistemas"


var baraja = new Deck; //Este objeto contendrá las cartas sin repartir ni mezclar, se debe componer con una matriz que indique el desplazamiento adecuado en el archivo /images/48cartas.png
var jugadorUno = new Player; //Este objeto contiene las cartas repartidas del jugador uno
var jugadorDos = new Player; //Este objeto contiene las cartas repartidas del jugador dos
var juego = new Game; //Este objeto contiene las reglas del juego

baraja.inicializarCartas(); //La baraja debe ser Const, así no muevo los datos dentro de ella.
baraja.repartir(jugadorUno, jugadorDos); //La baraja debe ser Const, pasar los jugadores por referencia.


while (!juego.haTerminado()){
	if(juego.hayEmpate()){
		
	}
	else{ juego.hacerJugada(jugadorUno, jugadorDos); }
	mostrarResultado();
	
	
	if (jugadorUno.haPerdido){ juego.terminarJuego("Has Perdido!"); }
	if (jugadorDos.haPerdido){ juego.terminarJuego("Has Ganado!"); }
}