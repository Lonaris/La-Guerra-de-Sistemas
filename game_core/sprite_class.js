//This file is created with the purpose of testing single objects, methods and general stuff in an isolated enviroment so you don't fuck up everything while learning the events for DOM model. Thanks in advance to everyone who didn't believe in me, that fueled me with the determination to put all of you to shame.

class Sprite{
	constructor(xSize = 0, ySize = 0, xPosition = 0, yPosition = 0, state = 'none', zPosition = 0){
		this.xSize = xSize;
		this.ySize = ySize;
		this.xPosition = xPosition;
		this.yPosition = yPosition;
		// this.rotationPosition = rotationPosition; //AGREGAR rotationPosition Y rotationValue en próximas versiones si queres agregarle rotación a los sprites.
		// this.rotationValue = rotationValue;
		this.state = state;
		this.zPosition = zPosition;
	}
	
	constructor(htmlObject){
		this.xSize = htmlObject.style.width;
		this.ySize = htmlObject.style.height;
		this.xPosition = htmlObject.style.left;
		this.yPosition = htmlObject.style.top;
		// this.rotationPosition = htmlObject.style.;
		// this.rotationValue = htmlObject.style.;
		this.state = htmlObject.style.display;
		this.zPosition = htmlObject.style.zIndex;
		
	}
	
}