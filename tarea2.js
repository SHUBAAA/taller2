const jugador1={
    nombre: "jugador1",
    vidamaxima:1000,
    vidaactual:1000,
    dano:500
};

const jugador2={
    nombre: "jugador2",
    vidamaxima:1000,
    vidaactual:1000,
    dano:200
};

console.log("Empieza el combate");



do{
    jugador1.vidaactual=jugador1.vidaactual-jugador2.dano
   console.log("la vida del jugador 1 es "+ jugador1.vidaactual);


   jugador2.vidaactual=jugador2.vidaactual-jugador1.dano
   console.log("la vida del jugador 2 es "+jugador2.vidaactual)
}while(jugador1.vidaactual>0&& jugador2.vidaactual>0)
