const jugador1 = {
    nombre: "jugador1",
    vidamaxima: 1000,
    vidaactual: 1000,
    dano: 200
};

const jugador2 = {
    nombre: "jugador2",
    vidamaxima: 1000,
    vidaactual: 1000,
    dano: 500
};

console.log("Empieza el combate");
console.log("La vida del jugador 1 es " + jugador1.vidaactual +"/"+jugador1.vidamaxima+" HP")
console.log("La vida del jugador 2 es " + jugador2.vidaactual+"/"+jugador2.vidamaxima+" HP")
do {
console.log("Ronda"+(0+1))
    console.log("El jugador 2 hace " + jugador2.dano + " de daño")
    jugador1.vidaactual = jugador1.vidaactual - jugador2.dano
    console.log("La vida del jugador 1 es " + jugador1.vidaactual +"/"+jugador1.vidamaxima+" HP")

    console.log("El jugador 1 hace " + jugador1.dano+ " de daño")
    jugador2.vidaactual = jugador2.vidaactual - jugador1.dano
    console.log("La vida del jugador 2 es " + jugador2.vidaactual+"/"+jugador2.vidamaxima+" HP")
} while (jugador1.vidaactual > 0 && jugador2.vidaactual > 0)


if(jugador1.vidaactual<=0){
    console.log("Se murio el jugador 1")
}else{
    console.log("Se murio el jugador 2")
}
