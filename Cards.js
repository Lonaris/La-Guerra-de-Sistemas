var cartas = [];

cartas[0] = "bastos_12.jpg";
cartas[1] = "bastos_1.jpg";
cartas[2] = "bastos_2.jpg";
cartas[3] = "bastos_3.jpg";
cartas[4] = "bastos_4.jpg";
cartas[5] = "bastos_5.jpg";
cartas[6] = "bastos_6.jpg";
cartas[7] = "bastos_7.jpg";
cartas[8] = "bastos_8.jpg";
cartas[9] = "bastos_9.jpg";
cartas[10] = "bastos_10.jpg";
cartas[11] = "bastos_11.jpg";
cartas[12] = "copas_12.jpg";
cartas[13] = "copas_1.jpg";
cartas[14] = "copas_2.jpg";
cartas[15] = "copas_3.jpg";
cartas[16] = "copas_4.jpg";
cartas[17] = "copas_5.jpg";
cartas[18] = "copas_6.jpg";
cartas[19] = "copas_7.jpg";
cartas[20] = "copas_8.jpg";
cartas[21] = "copas_9.jpg";
cartas[22] = "copas_10.jpg";
cartas[23] = "copas_11.jpg";
cartas[24] = "espadas_12.jpg";
cartas[25] = "espadas_1.jpg";
cartas[26] = "espadas_2.jpg";
cartas[27] = "espadas_3.jpg";
cartas[28] = "espadas_4.jpg";
cartas[29] = "espadas_5.jpg";
cartas[30] = "espadas_6.jpg";
cartas[31] = "espadas_7.jpg";
cartas[32] = "espadas_8.jpg";
cartas[33] = "espadas_9.jpg";
cartas[34] = "espadas_10.jpg";
cartas[35] = "espadas_11.jpg";
cartas[36] = "oros_12.jpg";
cartas[37] = "oros_1.jpg";
cartas[38] = "oros_2.jpg";
cartas[39] = "oros_3.jpg";
cartas[40] = "oros_4.jpg";
cartas[41] = "oros_5.jpg";
cartas[42] = "oros_6.jpg";
cartas[43] = "oros_7.jpg";
cartas[44] = "oros_8.jpg";
cartas[45] = "oros_9.jpg";
cartas[46] = "oros_10.jpg";
cartas[47] = "oros_11.jpg";
cartas[48] = "reverso.png";
cartas[49] = "nada.png";

function changeSource(elem, cardNum){
    console.log(elem);
    var outStr = "images\\Cartas\\" + cartas[cardNum]; // STILL TESTING
    //FOR document.getElementById to work, you neede to place it into a function.
    var carta = document.getElementById(elem.id);
    //console.log("carta contiene: " + carta);
    carta.src=outStr;
    carta.width="160px;"
    //console.log(carta.src);
}
