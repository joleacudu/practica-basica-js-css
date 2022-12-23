//btn para seleecionar un pokemos de la lista
const seleccionar = document.querySelector('#seleccionar');

//para seleccionar la section de los btn de ataques
const btnAtaques = document.querySelector('#seleccionar-ataque')
btnAtaques.style.display = 'none' // para ocultar la section 

//btn de seleccion de ataque
const fuego = document.querySelector('#fuego');
const agua = document.querySelector('#agua');
const tierra = document.querySelector('#tierra');

//mascotas
const Hipodoge = document.querySelector('#Hipodoge');
const Capipepo = document.querySelector('#Capipepo');
const Ratigueya = document.querySelector('#Ratigueya');
const Langostesvis = document.querySelector('#Langostesvis');
const Tucapalma = document.querySelector('#Tucapalma');
const Pydos = document.querySelector('#Pydos');

//Interactuar con la informacion que se va seleccionando  y verla
const mascotaSeleccionada = document.querySelector('#mascota-propia')
const mascotaRival = document.querySelector('#mascota-rival')
const vidasPropia = document.querySelector('#vidas-propia')
.style.display = 'none'
const vidasRival = document.querySelector('#vidas-rival')
vidasRival.style.display = 'none'
const msjDinamico = document.querySelector('#resultado-batalla')
msjDinamico.style.display = 'grid'
const resultadoMio = document.querySelector('#resultado-mio')
resultadoMio.style.display = 'grid'
const resultadoEnemigo = document.querySelector('#resultado-enemigo')
resultadoEnemigo.style.display = 'grid'

//setcion de los mensajes dinamicos al seleccionar un ataque
const mensajesAtaque = document.querySelector('#batalla');
mensajesAtaque.style.display = 'none'

//section de reiniciar
const sectionReiniciar = document.querySelector('#reiniciar');
sectionReiniciar.style.display = 'none' // para ocultar la section .
//btn para reinicar el juego
const reiniciar = document.querySelector('#reiniciar-btn');

//variables que se crean en el .js
let ataqueJugador
let ataqueEnemigo
let vidaJugador = document.querySelector('#progresoVidaAliado').value = 3
let vidaEnemigo = document.querySelector('#progresoVidaRival').value =3
let pokemon 
let pokemonRival 
let ataques 

//eventos que estan a la escucha para realizar la accion correspondiente
seleccionar.addEventListener('click', mascota);
fuego.addEventListener('click', ataqueFuego)
agua.addEventListener('click', ataqueAgua)
tierra.addEventListener('click', ataqueTierra)
reiniciar.addEventListener('click', recargarPagina)

//para cambiar el nombre de la mascota seleccionada en el html 
function mascota(){
    if(Hipodoge.checked){
        pokemon = mascotaSeleccionada.innerText = "Hipodoge";
        document.querySelector('#aliado').src = './image/mokepons_mokepon_hipodoge_attack.png'
    }else if(Capipepo.checked){
        pokemon = mascotaSeleccionada.innerText = "Capipepo"
        document.querySelector('#aliado').src = './image/mokepons_mokepon_capipepo_attack.png'
    }else if(Ratigueya.checked){
        pokemon =  mascotaSeleccionada.innerText = "Ratigueya"
        document.querySelector('#aliado').src = './image/mokepons_mokepon_ratigueya_attack.png'
    }else if(Langostesvis.checked){
        pokemon = mascotaSeleccionada.innerText = "Langostesvis"
        document.querySelector('#aliado').src = './image/langos.png'
    }else if(Tucapalma.checked){
        pokemon = mascotaSeleccionada.innerText = "Tucapalma"
        document.querySelector('#aliado').src = './image/tucapalma.png'
    }else if(Pydos.checked){
        pokemon = mascotaSeleccionada.innerText = "Pydos"
        document.querySelector('#aliado').src = './image/pydos.png'
    }else{
        alert("Seleccione una mascota")
        return 
    }
    btnAtaques.style.display = 'flex'
    sectionReiniciar.style.display = 'flex'
    seleccionarMascotaRival()
    limpiar()
    seleccionar.disabled = true
}

//Para seleccionar aleatoreamente una mascota para el rival
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function seleccionarMascotaRival(){
    const mascotaAleatorio = aleatorio(1,6)
    if(!(pokemon == "" || pokemon == null || pokemon == undefined)){
        if(mascotaAleatorio == 1){
            pokemonRival=mascotaRival.innerText = "Hipodoge"
            document.querySelector('#contrincante').src = './image/mokepons_mokepon_hipodoge_attack.png'
        }else if(mascotaAleatorio == 2){
            pokemonRival=mascotaRival.innerText = "Capipepo"
            document.querySelector('#contrincante').src = './image/mokepons_mokepon_capipepo_attack.png'
        }else if(mascotaAleatorio == 3){
            pokemonRival=mascotaRival.innerText = "Ratigueya"
            document.querySelector('#contrincante').src = './image/mokepons_mokepon_ratigueya_attack.png'
        }else if(mascotaAleatorio == 4){
            pokemonRival=mascotaRival.innerText = "Langostesvis"
            document.querySelector('#contrincante').src = './image/langos.png'
        }else if(mascotaAleatorio == 5){
            pokemonRival=mascotaRival.innerText = "Tucapalma"
            document.querySelector('#contrincante').src = './image/tucapalma.png'
        }else{
            pokemonRival=mascotaRival.innerText = "Pydos"
            document.querySelector('#contrincante').src = './image/pydos.png'
        }
    }
}

//Para los ataques con los botones
function ataqueFuego(){
    ataqueJugador = "Fuego 🔥"
    seleccionarAtaqueEnemigo() 
    resultado()
    seleccionObligatoria()
    mensajesAtaque.style.display = 'grid'
}
function ataqueAgua(){
    ataqueJugador = "Agua 💦"
    seleccionarAtaqueEnemigo()
    resultado()
    seleccionObligatoria()
    mensajesAtaque.style.display = 'grid'
}
function ataqueTierra(){
    ataqueJugador = "Tierra 🪨"
    seleccionarAtaqueEnemigo()
    resultado()
    seleccionObligatoria()
    mensajesAtaque.style.display = 'grid'
}

//Para generar el ataque enemigo de manera aleatoria
function seleccionarAtaqueEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    
    if(ataqueAleatorio == 1){
        ataqueEnemigo = "Fuego 🔥"
    }else if(ataqueAleatorio == 2){
        ataqueEnemigo = "Agua 💦"
    }else{
        ataqueEnemigo = "Tierra 🪨"
    }
    combates()
}

//para generar un mensaje dinamico
function dinamico(){
    let nuevoAtaqueMio = document.createElement('p')
    let nuevoAtaqueEnemigo = document.createElement('p')

    msjDinamico.innerText = ataques
    nuevoAtaqueMio.innerText = ataqueJugador
    nuevoAtaqueEnemigo.innerText = ataqueEnemigo

    resultadoMio.appendChild(nuevoAtaqueMio)
    resultadoEnemigo.appendChild(nuevoAtaqueEnemigo)
    
}

//para determinar quien gana con cada combinacion de ataques
function combates(){
    if(ataqueEnemigo == ataqueJugador){
        ataques = "Empate"
    } else if((ataqueEnemigo == "Fuego 🔥" && ataqueJugador == "Agua 💦") || (ataqueEnemigo == "Tierra 🪨" && ataqueJugador == "Fuego 🔥") || (ataqueEnemigo == "Agua 💦" && ataqueJugador == "Tierra 🪨")){
        vidaEnemigo--
        ataques = "Ganaste"
        vidasRival.innerText = vidaEnemigo //no se muestra
        document.querySelector('#progresoVidaRival').value = vidaEnemigo
    }else{
        vidaJugador--
        ataques = "Perdiste"
        vidasPropia.innerText = vidaJugador //no se muestra
        document.querySelector('#progresoVidaAliado').value = vidaJugador
    }
    dinamico()
}

//para saber quien gano y reiniciar el juego
function resultado(){
    if(vidaEnemigo == 0){
        msjDinamico.innerText = 'Felicitaciones Ganaste 😎.'
        fuego.disabled = true
        agua.disabled = true
        tierra.disabled = true
    }else if(vidaJugador == 0){
        msjDinamico.innerText = 'Perdiste, intentalo nuevamente 😯.'
        fuego.disabled = true
        agua.disabled = true
        tierra.disabled = true
    }
}

//obligar a seleccionar un pokemon
function seleccionObligatoria(){
    if(pokemon == "" || pokemon == null || pokemon == undefined){
        alert("Seleccione una mascota", limpiar()) 
    }
}

//para limpiar el campo de los mensajes dinamicos 
function limpiar(){
    vidasPropia.innerText = vidaJugador = 3 // para cada vez que reiniciemos queden con el valor 3
    vidasRival.innerText = vidaEnemigo = 3 // para cada vez que reiniciemos queden con el valor 3
    msjDinamico.innerText = "" // para limpiar el campo cada vez que reiniciemos
}

//cargo nuevamente la pagina
function recargarPagina(){
    location.reload()
}





