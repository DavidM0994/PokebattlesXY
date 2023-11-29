let ataqueMascota
let ataqueEnemigo

let vidasMascota = 3
let vidasEnemigo = 3

function iniciarJuego(){
    let containerSectionAtaque = document.getElementById('containerSectionAtaque')
    containerSectionAtaque.style.display = 'none'
    let containerSectionResultado = document.getElementById('containerSectionResultado')
    containerSectionResultado.style.display ='none'

    let btnSeleccionarMascota = document.getElementById('btnSeleccionarMascota')//boton para seleccionar mascota
    btnSeleccionarMascota.addEventListener('click', seleccionaTuMascota)

    let btnFuego = document.getElementById('btnFuego')//botones de ataque
    btnFuego.addEventListener('click', ataqueFuego)
    let btnAgua = document.getElementById('btnAgua')
    btnAgua.addEventListener('click', ataqueAgua)
    let btnTierra = document.getElementById('btnTierra')
    btnTierra.addEventListener('click', ataqueTierra)

    let btnReiniciar = document.getElementById('btnReiniciar')//boton para reiniciar juego
    btnReiniciar.addEventListener('click', reiniciarJuego)
}
function seleccionaTuMascota(){
    let containerSectionMascota = document.getElementById('containerSectionMascota')
    containerSectionMascota.style.display = 'none'
    let containerSectionAtaque = document.getElementById('containerSectionAtaque')
    containerSectionAtaque.style.display = 'block'

    let hipodoge = document.getElementById('hipodoge')
    let capipego = document.getElementById('capipego')
    let ratigueya = document.getElementById('ratigueya')
    let langostel = document.getElementById('langostel')
    let tucapalma = document.getElementById('tucapalma')
    let pydos = document.getElementById('pydos')
    let nombreMascota = document.getElementById('nombreMascota')
    let imgMascota = document.getElementById('imgMascota')
    let nombreMascota2 = document.getElementById('nombreMascota2')
    let imgMascota2 = document.getElementById('imgMascota2')

    if(hipodoge.checked) nombreMascota.innerHTML = 'Hipodoge', imgMascota.src= '../mascotas/hipodoge.png', nombreMascota2.innerHTML = 'Hipodoge', imgMascota2.src= '../mascotas/hipodoge.png' //con checked nos trae un true si esta mascado
    else if(capipego.checked) nombreMascota.innerHTML = 'Capipego', imgMascota.src= '../mascotas/capipepo.png', nombreMascota2.innerHTML = 'Capipego', imgMascota2.src= '../mascotas/capipepo.png'
    else if(ratigueya.checked) nombreMascota.innerHTML = 'Ratigueya', imgMascota.src= '../mascotas/ratigueya.png', nombreMascota2.innerHTML = 'Ratigueya', imgMascota2.src= '../mascotas/ratigueya.png'
    else if(langostel.checked) nombreMascota.innerHTML = 'Langostel', imgMascota.src= '../mascotas/langostelvis.png', nombreMascota2.innerHTML = 'Langostel', imgMascota2.src= '../mascotas/langostelvis.png'
    else if(tucapalma.checked) nombreMascota.innerHTML = 'Tucapalma', imgMascota.src= '../mascotas/tucapalma.png', nombreMascota2.innerHTML = 'Tucapalma', imgMascota2.src= '../mascotas/tucapalma.png'
    else if(pydos.checked) nombreMascota.innerHTML = 'Pydos', imgMascota.src= '../mascotas/pydos.png', nombreMascota2.innerHTML = 'Pydos', imgMascota2.src= '../mascotas/pydos.png'
    mascotaEnemigo()
}
function mascotaEnemigo(){
    let mascotaAleatorioEnemigo = aleatorio(1, 6)
    let nombreMascotaEnemigo = document.getElementById('nombreMascotaEnemigo')
    let imgMascotaEnemigo = document.getElementById('imgMascotaEnemigo')
    let nombreMascotaEnemigo2 = document.getElementById('nombreMascotaEnemigo2')
    let imgMascotaEnemigo2 = document.getElementById('imgMascotaEnemigo2')

    if(mascotaAleatorioEnemigo == 1) nombreMascotaEnemigo.innerHTML = 'Hipodoge', imgMascotaEnemigo.src= '../mascotas/hipodoge.png', nombreMascotaEnemigo2.innerHTML = 'Hipodoge', imgMascotaEnemigo2.src= '../mascotas/hipodoge.png'
    else if(mascotaAleatorioEnemigo == 2) nombreMascotaEnemigo.innerHTML = 'Capipego', imgMascotaEnemigo.src= '../mascotas/capipepo.png', nombreMascotaEnemigo2.innerHTML = 'Capipego', imgMascotaEnemigo2.src= '../mascotas/capipepo.png'
    else if(mascotaAleatorioEnemigo == 3) nombreMascotaEnemigo.innerHTML = 'Ratigueya', imgMascotaEnemigo.src= '../mascotas/ratigueya.png', nombreMascotaEnemigo2.innerHTML = 'Ratigueya', imgMascotaEnemigo2.src= '../mascotas/ratigueya.png'
    else if(mascotaAleatorioEnemigo == 4) nombreMascotaEnemigo.innerHTML = 'Langostel', imgMascotaEnemigo.src= '../mascotas/langostelvis.png', nombreMascotaEnemigo2.innerHTML = 'Langostel', imgMascotaEnemigo2.src= '../mascotas/langostelvis.png'
    else if(mascotaAleatorioEnemigo == 5) nombreMascotaEnemigo.innerHTML = 'Tucapalma', imgMascotaEnemigo.src= '../mascotas/tucapalma.png', nombreMascotaEnemigo2.innerHTML = 'Tucapalma', imgMascotaEnemigo2.src= '../mascotas/tucapalma.png'
    else if(mascotaAleatorioEnemigo == 6) nombreMascotaEnemigo.innerHTML = 'Pydos', imgMascotaEnemigo.src= '../mascotas/pydos.png', nombreMascotaEnemigo2.innerHTML = 'Pydos', imgMascotaEnemigo2.src= '../mascotas/pydos.png'
}
function ataqueFuego(){
    ataqueMascota = `🔥`
    seleccionAtaqueEnemigo()   
}
function ataqueAgua(){
    ataqueMascota = `💧`
    seleccionAtaqueEnemigo() 
}
function ataqueTierra(){
    ataqueMascota = `🪨`
    seleccionAtaqueEnemigo() 
}
function seleccionAtaqueEnemigo(){
    let ataqueAleatorioEnemigo = aleatorio(1, 3)
    if(ataqueAleatorioEnemigo == 1) ataqueEnemigo = `🔥`
    else if(ataqueAleatorioEnemigo == 2) ataqueEnemigo = `💧`
    else ataqueEnemigo = `🪨` 
    partida()
}
function partida(){
    let contenedorVidasMascota = document.getElementById('contenedorVidasMascota')
    let contenedorVidasEnemigo = document.getElementById('contenedorVidasEnemigo')
    let contenedorVidasMascota2 = document.getElementById('contenedorVidasMascota2')
    let contenedorVidasEnemigo2 = document.getElementById('contenedorVidasEnemigo2')
    let contenedorMensajePartida = document.getElementById('contenedorMensajePartida')

    if(ataqueMascota != ataqueEnemigo){
        if((ataqueMascota == `🔥` && ataqueEnemigo == `🪨`) || (ataqueMascota == `💧` && ataqueEnemigo == `🔥`) || (ataqueMascota == `🪨` && ataqueEnemigo == `💧`)){
            contenedorMensajePartida.innerHTML = '¡Partida Ganada!'
            vidasEnemigo --
            contenedorVidasEnemigo.innerHTML = vidasEnemigo
            contenedorVidasEnemigo2.innerHTML = vidasEnemigo
        }
        else{
            contenedorMensajePartida.innerHTML = '¡Partida Perdida!'
            vidasMascota --
            contenedorVidasMascota.innerHTML = vidasMascota
            contenedorVidasMascota2.innerHTML = vidasMascota
        }
    }
    else{
        contenedorMensajePartida.innerHTML = '¡Empate!'
    }
    imprimiendoAtaques()
}
function imprimiendoAtaques(){
    let contenedorAtaqueMascota = document.getElementById('contenedorAtaqueMascota')
    let contenedorAtaqueEnemigo = document.getElementById('contenedorAtaqueEnemigo')

    contenedorAtaqueMascota.innerHTML = ataqueMascota
    contenedorAtaqueEnemigo.innerHTML = ataqueEnemigo
    finJuego()
}
function finJuego(){
    let contenedorMensajeFinJuego = document.getElementById('contenedorMensajeFinJuego')
    if(vidasMascota == 0){
        contenedorMensajeFinJuego.innerHTML = '¡PERDISTE!'
        let containerSectionAtaque = document.getElementById('containerSectionAtaque')
        containerSectionAtaque.style.display = 'none'
        let containerSectionResultado = document.getElementById('containerSectionResultado')
        containerSectionResultado.style.display ='block'
        bloquearBtns()
    }
    else if(vidasEnemigo == 0){
        contenedorMensajeFinJuego.innerHTML = '¡GANASTE!'
        let containerSectionAtaque = document.getElementById('containerSectionAtaque')
        containerSectionAtaque.style.display = 'none'
        let containerSectionResultado = document.getElementById('containerSectionResultado')
        containerSectionResultado.style.display ='block'
        bloquearBtns()
    }
}
function bloquearBtns(){//cuando haya un ganador se bloquean los btns y cambian especificaciones
    let btnFuego = document.getElementById('btnFuego')
    btnFuego.disabled = true
    btnFuego.style.opacity = '.5'
    btnFuego.style.transform = 'none'

    let btnAgua = document.getElementById('btnAgua')
    btnAgua.disabled = true
    btnAgua.style.opacity = '.5'
    btnAgua.style.transform = 'none'
    let btnTierra = document.getElementById('btnTierra')
    btnTierra.disabled = true
    btnTierra.style.opacity = '.5'
    btnTierra.style.transform = 'none'
}
function reiniciarJuego(){
    location.reload()//funcion para reiniciar toda la pagina
}
function aleatorio (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
window.addEventListener('load', iniciarJuego)