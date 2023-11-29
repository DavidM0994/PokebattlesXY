function iniciarJuego(){
    let btnSeleccionarMascota = document.getElementById('btnSeleccionarMascota')//boton para seleccionar mascota
    btnSeleccionarMascota.addEventListener('click', seleccionaTuMascota)
}
function seleccionaTuMascota(){
    // let containerSectionAtaque = document.getElementById('containerSectionAtaque')
    // containerSectionAtaque.style.display = 'none'

    let hipodoge = document.getElementById('hipodoge')
    let capipego = document.getElementById('capipego')
    let ratigueya = document.getElementById('ratigueya')
    let langostel = document.getElementById('langostel')
    let tucapalma = document.getElementById('tucapalma')
    let pydos = document.getElementById('pydos')
    let nombreMascota = document.getElementById('nombreMascota')
    let imgMascota = document.getElementById('imgMascota')

    if(hipodoge.checked) nombreMascota.innerHTML = 'Hipodoge', imgMascota.src= '../mascotas/hipodoge.png' //con checked nos trae un true si esta mascado
    else if(capipego.checked) nombreMascota.innerHTML = 'Capipego', imgMascota.src= '../mascotas/capipepo.png'
    else if(ratigueya.checked) nombreMascota.innerHTML = 'Ratigueya', imgMascota.src= '../mascotas/ratigueya.png'
    else if(langostel.checked) nombreMascota.innerHTML = 'Langostel', imgMascota.src= '../mascotas/langostelvis.png'
    else if(tucapalma.checked) nombreMascota.innerHTML = 'Tucapalma', imgMascota.src= '../mascotas/tucapalma.png'
    else if(pydos.checked) nombreMascota.innerHTML = 'Pydos', imgMascota.src= '../mascotas/pydos.png'
    mascotaEnemigo()
}
function mascotaEnemigo(){
    let mascotaAleatorioEnemigo = aleatorio(1, 6)
    let nombreMascotaEnemigo = document.getElementById('nombreMascotaEnemigo')
    let imgMascotaEnemigo = document.getElementById('imgMascotaEnemigo')

    if(mascotaAleatorioEnemigo == 1) nombreMascotaEnemigo.innerHTML = 'Hipodoge', imgMascotaEnemigo.src= '../mascotas/hipodoge.png'
    else if(mascotaAleatorioEnemigo == 2) nombreMascotaEnemigo.innerHTML = 'Capipego', imgMascotaEnemigo.src= '../mascotas/capipepo.png'
    else if(mascotaAleatorioEnemigo == 3) nombreMascotaEnemigo.innerHTML = 'Ratigueya', imgMascotaEnemigo.src= '../mascotas/ratigueya.png'
    else if(mascotaAleatorioEnemigo == 4) nombreMascotaEnemigo.innerHTML = 'Langostel', imgMascotaEnemigo.src= '../mascotas/langostelvis.png'
    else if(mascotaAleatorioEnemigo == 5) nombreMascotaEnemigo.innerHTML = 'Tucapalma', imgMascotaEnemigo.src= '../mascotas/tucapalma.png'
    else if(mascotaAleatorioEnemigo == 6) nombreMascotaEnemigo.innerHTML = 'Pydos', imgMascotaEnemigo.src= '../mascotas/pydos.png'
}
function aleatorio (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
window.addEventListener('load', iniciarJuego)