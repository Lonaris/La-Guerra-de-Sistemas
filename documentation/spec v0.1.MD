#LA GUERRA DE SISTEMAS![](https://raw.githubusercontent.com/Lonaris/La-Guerra-de-Sistemas/master/images/ISFT-50x50.png)
##ESPECIFICACIÓN FUNCIONAL
####Autor: Juan José Ramayo Cabeza
####*Última actualización: 17 de Junio de 2016*
###-ABIERTO AL PÚBLICO-
####ISFT N°179 Dr. Carlos Pellegrini
 
##INTRODUCCIÓN

La Guerra de Sistemas es un juego que corre sobre una aplicación cliente-servidor, el cual es a su vez un proyecto para la materia Espacio de Definición Institucional III.

Esta especificación está incompleta. Todo su contenido debe ser revisado múltiples veces antes de que esté finalizada. Los gráficos y layouts de las capturas mostradas acá simplemente están para remarcar la funcionalidad. La verdadera interfaz va a ser desarrollada a medida que pasa el tiempo con la ayuda de repetidas pruebas de usuarios externos al proyecto.

Este spec no elabora los algoritmos utilizados por el motor de cálculos, que serán hallados en algún otro documento. Sólo detalla lo que el usuario va a ver cuando interactúa con La Guerra de Sistemas.

##ESCENARIOS

Estos casos imaginarios van a ayudar a imaginarse historias de la vida real (esterotípicas) de cómo las personas usarían el juego. Vamos a ver dos escenarios:

###ESCENARIO 1: MARTINA

Martina es una adicta a facebook. Pero por desgracia, sus amigos no la soportan cuando les pide favores. Cosas como “Mamá rompió el lavarropas y necesito llevar todas mis tangas a tu casa porque me da vergüenza que lo vean los de la lavandería”. Sinceramente no la culpo, tiene una que dice “Triángulo de las Bermudas” en la poca superficie que tiene la parte de adelante. 

En esos casos, en lugar de resolverlo con “piedra, papel o tijera”, sus amigos les dicen para jugar La Guerra de Sistemas. Ahí es donde resuelven por azar todos sus vergonzosos dilemas. Martina se registra y puede comenzar a jugar. Lo único que debe hacer Martina es darle click a un botón y esperar a que su amigo haga lo mismo.
Para no hacer muy largas las partidas, los amigos de Martina le dicen que al mejor de 5 vaciadas de mazo el perdedor debe rendirse, si alguno de los dos gana antes, esta regla se omite.

###ESCENARIO 2: JULIÁN
Julián es un gamer experto. Él aprende el funcionamiento de los juegos que juega de forma interna y siempre intenta explotar errores de lógica de un juego, vulnerabilidades o incluso las mecánicas de éstos para aprovecharse de sus oponentes. 

Julián y Martina son amigos, por eso cuando Martina le pide un favor a Julián, él propone resolverlo mediante La Guerra de Sistemas, como es costumbre entre sus amigos. Sin embargo Julián es tramposo, no le gusta perder y mucho menos hacerle favores ridículos a Martina.


Cuando Julián juega a La Guerra de Sistemas siempre intenta encontrar una vulnerabilidad, refrescando la página de forma random para ver si sucede algo inesperado con los resultados,  tocando la interfaz para ver si afecta en algo, incluso intentando manipular los datos del juego desde una aplicación externa. Maldito tramposo.

##NO SON OBJETIVOS
Esta versión no va a soportar las siguientes características:

- Chat
- Cambio de contraseñas
- Historial de juegos

##FLUJO DE PROGRAMA
Este diagrama de flujo no está completo, tampoco refleja la totalidad de las operaciones que puede realizar un usuario que ingresa a la página. Aún así representa la imagen general de cómo funciona la aplicación.
 
##PANTALLA A PANTALLA
A continuación se detalla de forma breve la manera en que se debería comportar y mostrar cada pantalla.

###HOME PAGE
