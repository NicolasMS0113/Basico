let ataqueJugador
let ataqueEnemigo
let vidasEnemigo = 3
let vidasJugador = 3

function iniciarJuego(){
    let sectionSeleccionarMascota= document.getElementById("seleccionar-ataque")
    sectionSeleccionarMascota.style.display ='none'

    let sectionReiniciar =document.getElementById("Reiniciar")
    sectionReiniciar.style.display="none"

    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)    

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener('click',ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener('click',ataqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener('click',ataqueTierra)

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener('click',reiniciarJuego)
}


function seleccionarMascotaJugador(){
    let sectionSeleccionarMascota= document.getElementById("seleccionar-ataque")
    sectionSeleccionarMascota.style.display ='block'

    let sectionReiniciar =document.getElementById("Reiniciar")
    sectionReiniciar.style.display="none"

    let sectionSeleccionarAtaque= document.getElementById("seleccionar-mascota")
    sectionSeleccionarAtaque.style.display ='none'
    
    
    let inputHipodoge = document.getElementById('Hipodoge')
    let inputCapipepo = document.getElementById('Capipepo')
    let inputRatigueya= document.getElementById('Ratigueya')
    let spanMascotaJugador = document.getElementById("mascota-jugador")


    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML= "Hipodoge"
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML= "Capipepo"
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML= "Ratigueya"
    } else {
        alert("seleccione una mascota")
    }

    seleccionarMascotaEnemigo()

}
function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo =document.getElementById("mascota-enemigo")
    if (mascotaAleatorio == 1){
        spanMascotaEnemigo.innerHTML="Ratigueya"
     } else if (mascotaAleatorio ==2 ){
         spanMascotaEnemigo.innerHTML="Capipepo"
     } else if (mascotaAleatorio ==3){
         spanMascotaEnemigo.innerHTML="Ratigueya"
     }

        
 }
function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo (){
    let ataqueAleatorio =aleatorio(1,3)
    if (ataqueAleatorio==1){
        ataqueEnemigo= "FUEGO"
    } else if (ataqueAleatorio==2){
        ataqueEnemigo= "AGUA"
    } else if (ataqueAleatorio==3){
        ataqueEnemigo= "TIERRA"
    }
    combate()
}

function aleatorio(min,max) {
      return Math.floor(Math.random()*(max-min+1)+min) 
}

function combate () {
    //combate
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")

    if (ataqueEnemigo == ataqueJugador){
        crearMensaje("EMPATE")
    } else if (ataqueJugador== "FUEGO" && ataqueEnemigo=="TIERRA" ||ataqueJugador=="AGUA" && ataqueEnemigo=="FUEGO" || ataqueJugador=="TIERRA" && ataqueEnemigo=="AGUA" ) {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo==0){
        crearMensajeFinal("Felicitaciones Ganaste")
    } else if (vidasJugador==0){
        crearMensajeFinal("Perdiste :(")
    }



}


function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById("Mensajes")//apuntamos la id de donde queremos que aparezca nuestro mensaje

    let parrafo = document.createElement('p')//creamos el elemento al cual llegara nuestro mensaje
    parrafo.innerHTML = "tu mascota ataco con " + ataqueJugador + ", la mascota del enemigo ataco con " + ataqueEnemigo + " - " + resultado // al "p" le insertamos el texto 

    sectionMensajes.appendChild(parrafo) // al id le decimos con appendchild que le vamos a insertar en este caso parrafo, que ya le insetamos el mensaje y se sabe que es de tipo "p"
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById("Mensajes")

    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo) 

    
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled=true
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled=true
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled=true

    let sectionReiniciar =document.getElementById("Reiniciar")
    sectionReiniciar.style.display="block"
}

function reiniciarJuego (){
    location.reload()
}


window.addEventListener('load',iniciarJuego)