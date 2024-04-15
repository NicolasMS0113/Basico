let ataqueJugador
let ataqueEnemigo

function iniciarJuego(){
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)    

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener('click',ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener('click',ataqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener('click',ataqueTierra)
}


function seleccionarMascotaJugador(){
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
}

function aleatorio(min,max) {
      return Math.floor(Math.random()*(max-min+1)+min) 
}




window.addEventListener('load',iniciarJuego)