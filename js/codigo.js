
 //funcion de aleatorio
 function aleatorio(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}

function eleccion(jugada){
     let resultado=""
    if(jugada==1){
        resultado="PIEDRA 🥌🥌🥌"
    }else if (jugada==2) {
        resultado="PAPEL 🗳️🗳️🗳️"
    }else  if (jugada==3) {
        resultado="TIGERAS ✂️✂️✂️"
    } else {
        alert("no elegiste bien")
    } return resultado
}

let jugador = 1
let pc = 0
let triunfos = 0
let perdidas = 0

while (triunfos<3 && perdidas <3) {
            
    pc=aleatorio(1,3)

    // 1.PIEDRA   2.PAPEL   3.TIJERAS
    jugador = prompt ("1.PIEDRA   2.PAPEL  3.TIJERAS")
                
    //Eleccion del jugador y pc
    alert("PC elige: "+ eleccion(pc))
    alert("Tu eliges: "+ eleccion(jugador))


    //combate
    if (pc == jugador){
        alert("EMPATE")
    } else if (jugador== 1 && pc==3 ||jugador==2 && pc==1 || jugador==3 && pc==2) {
        alert("GANASTE")
    triunfos=triunfos+1
    } else {
        alert("PERDISTE")
        perdidas=perdidas+1
    }
}

alert("Ganaste "+triunfos+ " veces. Perdiste "+perdidas+" veces")
    
    
    
