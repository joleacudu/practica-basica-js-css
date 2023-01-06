//para seleccionar la section general de seleccionar la mascota para luego ocultarla junto con el boton y mostrar la section de ataque
const seleccionarMascota = document.querySelector('#seleccionar-mascota')

//btn para seleecionar un pokemos de la lista
const seleccionar = document.querySelector('#seleccionar');

//para seleccionar la section de los btn de ataques
const btnAtaques = document.querySelector('#seleccionar-ataque')
btnAtaques.style.display = 'none' // para ocultar la section 

//Section donde se visualizara el mapa que creamos
const sectionVerMapa = document.querySelector('#ver-mapa');
sectionVerMapa.style.display = 'none'
const canvasMapa = document.querySelector('#mapa')

//btn de seleccion de ataque 
const seleccionAtaque = document.querySelector('.seleccion-ataque')
let fuego 
let agua
let tierra 

//Interactuar con la informacion que se va seleccionando  y verla
const mascotaSeleccionada = document.querySelector('#mascota-propia')
const mascotaRival = document.querySelector('#mascota-rival')
const vidasPropia = document.querySelector('#vidas-propia')
vidasPropia.style.display = 'none'
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
const regresar = document.querySelector('#regresar');
sectionReiniciar.style.display = 'none' // para ocultar la section .
//btn para reinicar el juego
const reiniciar = document.querySelector('#reiniciar-btn');

//variables que se crean en el .js
let ataqueJugador = []
let ataqueJugadorSeleccionado
let ataqueEnemigo = []
let ataqueEnemigoSeleccionado
let ataquesMokepon
let vidaJugador = document.querySelector('#progresoVidaAliado').value = 3
let vidaEnemigo = document.querySelector('#progresoVidaRival').value =3
let pokemon //es el mokepon que seleccione el jugador
let opcionDeMokepones
const tarjetasInyectadas = document.querySelector('#tarjetasInyectadas')
let botones = []
let round = 1 //Para enumerar los rounds 
let intervalo //para actualizar el canvas y ver el movimiento del mokepon
let objetoMokeponSeleccionado 

//mascotas
let Hipodoge 
let Capipepo 
let Ratigueya
let Langostesvis 
let Tucapalma 
let Pydos 

let mokepones = [] //creo un array vacio para ir agregando los mokepones en el.

//variables para poder realizar el mapa
let lienzo = canvasMapa.getContext('2d')
let mapaBackground = new Image()
mapaBackground.src = './image/mokemap.webp'
let alturaMapaDeseado
let anchoMapaDeseado = window.innerWidth - 20
const anchoMaximoMapa = 800

if(anchoMapaDeseado > anchoMaximoMapa){
    anchoMapaDeseado = anchoMaximoMapa - 20
}

alturaMapaDeseado = anchoMapaDeseado * 600/800
mapa.width = anchoMapaDeseado
mapa.height = alturaMapaDeseado

let jugadorId = null

//clases 
class Mokepon{
    constructor(nombre, imagen, vida, fotoCabeza){
        this.nombre = nombre;
        this.imagen = imagen;
        this.vida = vida
        this.ataques = []
        this.ancho = 50
        this.alto = 50
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoCabeza
        this.velocidadX = 0
        this.velocidadY = 0
    }

    pintarMokepon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto)
    }
}

//Los mokepones con sus especificaciones, no confundir con los del html
let hipodoge = new Mokepon('Hipodoge', './image/mascotas/mokepons_mokepon_hipodoge_attack.png', 3, './image/cabezas/hipodogeCabeza.webp')
let capipepo = new Mokepon('Capipepo', './image/mascotas/mokepons_mokepon_capipepo_attack.png', 3, './image/cabezas/capipepoCabeza.webp')
let ratigueya = new Mokepon('Ratigueya', './image/mascotas/mokepons_mokepon_ratigueya_attack.png', 3, './image/cabezas/ratigueyaCabeza.webp')
let langostesvis = new Mokepon('Langostesvis', './image/mascotas/langos.png', 3, './image/cabezas/LangosCabezat.webp')
let tucapalma = new Mokepon('Tucapalma', './image/mascotas/tucapalma.png', 3, './image/cabezas/TucapalmaCabeza.webp')
let pydos = new Mokepon('Pydos', './image/mascotas/pydos.png', 3, './image/cabezas/PydosCabeza.webp')

hipodoge.ataques.push(
    {'nombre' : 'agua 💦', id: 'agua'},
    {'nombre' : 'agua 💦', id: 'agua'},
    {'nombre' : 'agua 💦', id: 'agua'},
    {'nombre' : 'tierra 🪨', id: 'tierra'},
    {'nombre' : 'fuego 🔥', id: 'fuego'},
    )
capipepo.ataques.push(
    {'nombre' : 'agua 💦', id: 'agua'},
    {'nombre' : 'tierra 🪨', id: 'tierra'},
    {'nombre' : 'tierra 🪨', id: 'tierra'},
    {'nombre' : 'tierra 🪨', id: 'tierra'},
    {'nombre' : 'fuego 🔥', id: 'fuego'},
    )
ratigueya.ataques.push(
    {'nombre' : 'agua 💦', id: 'agua'},
    {'nombre' : 'agua 💦', id: 'agua'},
    {'nombre' : 'tierra 🪨', id: 'tierra'},
    {'nombre' : 'tierra 🪨', id: 'tierra'},
    {'nombre' : 'fuego 🔥', id: 'fuego'},
    )
langostesvis.ataques.push(
    {'nombre' : 'agua 💦', id: 'agua'},
    {'nombre' : 'agua 💦', id: 'agua'},
    {'nombre' : 'agua 💦', id: 'agua'},
    {'nombre' : 'tierra 🪨', id: 'tierra'},
    {'nombre' : 'fuego 🔥', id: 'fuego'},
    )
tucapalma.ataques.push(
    {'nombre' : 'agua 💦', id: 'agua'},
    {'nombre' : 'agua 💦', id: 'agua'},
    {'nombre' : 'tierra 🪨', id: 'tierra'},
    {'nombre' : 'tierra 🪨', id: 'tierra'},
    {'nombre' : 'fuego 🔥', id: 'fuego'},
    )
pydos.ataques.push(
    {'nombre' : 'agua 💦', id: 'agua'},
    {'nombre' : 'fuego 🔥', id: 'fuego'},
    {'nombre' : 'fuego 🔥', id: 'fuego'},
    {'nombre' : 'fuego 🔥', id: 'fuego'},
    {'nombre' : 'tierra 🪨', id: 'tierra'},
    )

//mokepones enemigos    
let hipodogeEnemigo = new Mokepon('Hipodoge', './image/mascotas/mokepons_mokepon_hipodoge_attack.png', 3, './image/cabezas/hipodogeCabeza.webp')
let capipepoEnemigo = new Mokepon('Capipepo', './image/mascotas/mokepons_mokepon_capipepo_attack.png', 3, './image/cabezas/capipepoCabeza.webp')
let ratigueyaEnemigo = new Mokepon('Ratigueya', './image/mascotas/mokepons_mokepon_ratigueya_attack.png', 3, './image/cabezas/ratigueyaCabeza.webp')
let langostesvisEnemigo = new Mokepon('Langostesvis', './image/mascotas/langos.png', 3, './image/cabezas/LangosCabezat.webp')
let tucapalmaEnemigo = new Mokepon('Tucapalma', './image/mascotas/tucapalma.png', 3, './image/cabezas/TucapalmaCabeza.webp')
let pydosEnemigo = new Mokepon('Pydos', './image/mascotas/pydos.png', 3, './image/cabezas/PydosCabeza.webp')

hipodogeEnemigo.ataques.push(
    {'nombre' : 'agua 💦', id: 'agua'},
    {'nombre' : 'agua 💦', id: 'agua'},
    {'nombre' : 'agua 💦', id: 'agua'},
    {'nombre' : 'tierra 🪨', id: 'tierra'},
    {'nombre' : 'fuego 🔥', id: 'fuego'},
    )
capipepoEnemigo.ataques.push(
    {'nombre' : 'agua 💦', id: 'agua'},
    {'nombre' : 'tierra 🪨', id: 'tierra'},
    {'nombre' : 'tierra 🪨', id: 'tierra'},
    {'nombre' : 'tierra 🪨', id: 'tierra'},
    {'nombre' : 'fuego 🔥', id: 'fuego'},
    )
ratigueyaEnemigo.ataques.push(
    {'nombre' : 'agua 💦', id: 'agua'},
    {'nombre' : 'agua 💦', id: 'agua'},
    {'nombre' : 'tierra 🪨', id: 'tierra'},
    {'nombre' : 'tierra 🪨', id: 'tierra'},
    {'nombre' : 'fuego 🔥', id: 'fuego'},
    )
langostesvisEnemigo.ataques.push(
    {'nombre' : 'agua 💦', id: 'agua'},
    {'nombre' : 'agua 💦', id: 'agua'},
    {'nombre' : 'agua 💦', id: 'agua'},
    {'nombre' : 'tierra 🪨', id: 'tierra'},
    {'nombre' : 'fuego 🔥', id: 'fuego'},
    )
tucapalmaEnemigo.ataques.push(
    {'nombre' : 'agua 💦', id: 'agua'},
    {'nombre' : 'agua 💦', id: 'agua'},
    {'nombre' : 'tierra 🪨', id: 'tierra'},
    {'nombre' : 'tierra 🪨', id: 'tierra'},
    {'nombre' : 'fuego 🔥', id: 'fuego'},
    )
pydosEnemigo.ataques.push(
    {'nombre' : 'agua 💦', id: 'agua'},
    {'nombre' : 'fuego 🔥', id: 'fuego'},
    {'nombre' : 'fuego 🔥', id: 'fuego'},
    {'nombre' : 'fuego 🔥', id: 'fuego'},
    {'nombre' : 'tierra 🪨', id: 'tierra'},
    )
        
mokepones.push(hipodoge, capipepo, ratigueya, langostesvis, tucapalma, pydos)

mokepones.forEach((mokepon) => {
    // console.log(mokepon)
    opcionDeMokepones = `
        <div  class="tarjetas">
            <input type="radio" name="mascotas" id=${mokepon.nombre} class="nomostrar chkconlabel"/>
            <label for=${mokepon.nombre} class="resaltar">
                <p>${mokepon.nombre}</p>
                <img src=${mokepon.imagen} alt=${mokepon.nombre}>
            </label>
        </div>
    `
    tarjetasInyectadas.innerHTML += opcionDeMokepones
    //mascotas
    Hipodoge = document.querySelector('#Hipodoge');
    Capipepo = document.querySelector('#Capipepo');
    Ratigueya = document.querySelector('#Ratigueya');
    Langostesvis = document.querySelector('#Langostesvis');
    Tucapalma = document.querySelector('#Tucapalma');
    Pydos = document.querySelector('#Pydos');
})

//eventos que estan a la escucha para realizar la accion correspondiente
seleccionar.addEventListener('click', mascota);
reiniciar.addEventListener('click', recargarPagina)
regresar.addEventListener('click', recargarPagina)

//para cambiar el nombre de la mascota seleccionada en el html 
function mascota(){
    cargarMapa()

    if(Hipodoge.checked){
        pokemon = mascotaSeleccionada.innerText = Hipodoge.id;
    }else if(Capipepo.checked){
        pokemon = mascotaSeleccionada.innerText = Capipepo.id
    }else if(Ratigueya.checked){
        pokemon =  mascotaSeleccionada.innerText = Ratigueya.id
    }else if(Langostesvis.checked){
        pokemon = mascotaSeleccionada.innerText = Langostesvis.id
    }else if(Tucapalma.checked){
        pokemon = mascotaSeleccionada.innerText = Tucapalma.id
    }else if(Pydos.checked){
        pokemon = mascotaSeleccionada.innerText = Pydos.id
    }else{
        alert("Seleccione una mascota")
        return 
    }
    sectionVerMapa.style.display = 'grid'
    sectionReiniciar.style.display = 'grid'
    seleccionar.disabled = true
    seleccionarMascota.style.display = 'none'
    mensajesAtaque.style.display = 'grid'
    objetoMokeponSeleccionado = obtenerObjetoMokepon()
    pintarCanvas()
    extraerAtaques(pokemon)
    limpiar()
    mokeponEscogido(pokemon)
}

//Para seleccionar aleatoreamente una mascota para el rival
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
// function seleccionarMascotaRival(){
//     const mascotaAleatorio = aleatorio(0,mokepones.length-1)
//     mascotaRival.innerText = mokepones[mascotaAleatorio].nombre
//     document.querySelector('#contrincante').src = mokepones[mascotaAleatorio].imagen   
//     ataqueEnemigo = mokepones[mascotaAleatorio].ataques
//     secuenciaAtaques()
// }

//para seleccionar con la mascota que se choca en el mapa
function seleccionarMascotaRival(enemigo){
    // console.log(enemigo)
    mascotaRival.innerText =enemigo.nombre
    document.querySelector('#contrincante').src = enemigo.imagen   
    ataqueEnemigo = enemigo.ataques
    secuenciaAtaques()
}

//Para los ataques con los botones
// function ataqueFuego(){
//     ataqueJugador = "Fuego 🔥"
//     seleccionarAtaqueEnemigo() 
//     resultado()
//     seleccionObligatoria()
// }
// function ataqueAgua(){
//     ataqueJugador = "Agua 💦"
//     seleccionarAtaqueEnemigo()
//     resultado()
//     seleccionObligatoria()
// }
// function ataqueTierra(){
//     ataqueJugador = "Tierra 🪨"
//     seleccionarAtaqueEnemigo()
//     resultado()
//     seleccionObligatoria()
// }

//Para generar el ataque enemigo de manera aleatoria

function seleccionarAtaqueEnemigo(){
    let eliminarAtaquesEnemigo
    let ataqueAleatorio = aleatorio(0,ataqueEnemigo.length-1)
    
    eliminarAtaquesEnemigo = ataqueEnemigo.splice(ataqueAleatorio,1)
    console.log(eliminarAtaquesEnemigo[0].nombre) //siempre sera indice 0 porque no guardo los resultados anteriores
    
    // modificarlo para que tome el array de ataques del mokepon seleccionado, para luego ir eliminando cada ataque que se seleccione
    if(eliminarAtaquesEnemigo[0].nombre === "fuego 🔥"){
        ataqueEnemigoSeleccionado= "Fuego 🔥"
    }else if(eliminarAtaquesEnemigo[0].nombre === "agua 💦"){
        ataqueEnemigoSeleccionado = "Agua 💦"
    }else{
        ataqueEnemigoSeleccionado = "Tierra 🪨"
    }
    console.log(ataqueEnemigo)

    combates()
}

//para generar un mensaje dinamico
function dinamico(){
    let nuevoAtaqueMio = document.createElement('p')
    let nuevoAtaqueEnemigo = document.createElement('p')

    msjDinamico.innerText = ataques
    nuevoAtaqueMio.innerText = ataqueJugadorSeleccionado
    nuevoAtaqueEnemigo.innerText = ataqueEnemigoSeleccionado

    resultadoMio.appendChild(nuevoAtaqueMio)
    resultadoEnemigo.appendChild(nuevoAtaqueEnemigo)
    
}

//para determinar quien gana con cada combinacion de ataques
function combates(){
    if(ataqueEnemigoSeleccionado == ataqueJugadorSeleccionado){
        ataques = `Round ${round}: Empate`
        round++;
    } else if((ataqueEnemigoSeleccionado == "Fuego 🔥" && ataqueJugadorSeleccionado == "Agua 💦") || (ataqueEnemigoSeleccionado == "Tierra 🪨" && ataqueJugadorSeleccionado == "Fuego 🔥") || (ataqueEnemigoSeleccionado == "Agua 💦" && ataqueJugadorSeleccionado == "Tierra 🪨")){
        vidaEnemigo--
        ataques = `Round ${round}: Ganaste`
        round++;
        vidasRival.innerText = vidaEnemigo //no se muestra
        document.querySelector('#progresoVidaRival').value = vidaEnemigo
    }else{
        vidaJugador--
        ataques = `Round ${round}: Perdiste`
        round++;
        vidasPropia.innerText = vidaJugador //no se muestra
        document.querySelector('#progresoVidaAliado').value = vidaJugador
    }
    dinamico()
}

//para saber quien gano y reiniciar el juego
function resultado(){
    if(vidaEnemigo == 0 || (vidaJugador > vidaEnemigo && ataqueEnemigo.length == 0)){
        msjDinamico.innerText = 'Felicitaciones Ganaste 😎.'
        fuego.disabled = true
        agua.disabled = true
        tierra.disabled = true
    }else if(vidaJugador == 0 || (vidaJugador < vidaEnemigo && ataqueEnemigo.length == 0)){
        msjDinamico.innerText = 'Perdiste, intentalo nuevamente 😫.'
        fuego.disabled = true
        agua.disabled = true
        tierra.disabled = true
    }else if(vidaJugador == vidaEnemigo && ataqueEnemigo.length == 0){
        msjDinamico.innerText = 'La batalla termino empatada 😯!!!'
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

//retorna el objeto completo del mokepon seleccionado
function obtenerObjetoMokepon(){
    for (let i = 0; i < mokepones.length; i++) {
        if (pokemon === mokepones[i].nombre) {
            return mokepones[i]
        }
    }
}

//para extraer los ataques que tiene el mokepon
function extraerAtaques(pokemon){
    let ataques 
    let imagen
    for (let i = 0; i < mokepones.length; i++) {
        if (pokemon === mokepones[i].nombre) {
            imagen = mokepones[i].imagen
            ataques = mokepones[i].ataques
            document.querySelector('#aliado').src = imagen
        }
    }
    mostarAtaques(ataques)
}

//para mostrar los {ataques} que tiene cada [mokepon]
function mostarAtaques(ataques){
    ataques.forEach((ataque) => {
        ataquesMokepon = `
            <button id="${ataque.id}" class="btn-ataque BAtaque">${ataque.nombre}</button>
        `
        seleccionAtaque.innerHTML += ataquesMokepon
    })
    
    fuego = document.querySelector('#fuego');
    agua = document.querySelector('#agua');
    tierra = document.querySelector('#tierra');
    
    botones = document.querySelectorAll('.BAtaque')
    
    // fuego.addEventListener('click', ataqueFuego)
    // agua.addEventListener('click', ataqueAgua)
    // tierra.addEventListener('click', ataqueTierra)
}

function secuenciaAtaques(){
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if(e.target.textContent === "agua 💦"){
                ataqueJugador.push('Agua 💦')
                ataqueJugadorSeleccionado = 'Agua 💦'
                boton.style.display = 'none'
            }else if(e.target.textContent === "fuego 🔥"){
                ataqueJugador.push('Fuego 🔥')
                ataqueJugadorSeleccionado = "Fuego 🔥"
                boton.style.display = 'none'
            }else {
                ataqueJugador.push('Tierra 🪨')
                ataqueJugadorSeleccionado ='Tierra 🪨'
                boton.style.display = 'none'
            }
            seleccionarAtaqueEnemigo() 
            resultado()
            seleccionObligatoria()
        })
    })
}

//function para pintar el canvas
function pintarCanvas(){
    objetoMokeponSeleccionado.x += objetoMokeponSeleccionado.velocidadX
    objetoMokeponSeleccionado.y += objetoMokeponSeleccionado.velocidadY
    lienzo.clearRect(0,0,mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height,
    )
    objetoMokeponSeleccionado.pintarMokepon()
    hipodogeEnemigo.pintarMokepon()
    capipepoEnemigo.pintarMokepon()
    ratigueyaEnemigo.pintarMokepon()
    langostesvisEnemigo.pintarMokepon()
    tucapalmaEnemigo.pintarMokepon()
    pydosEnemigo.pintarMokepon()

    enviarPosicionBackEnd(objetoMokeponSeleccionado.x, objetoMokeponSeleccionado.y)

    if(objetoMokeponSeleccionado.velocidadX !== 0 || objetoMokeponSeleccionado.velocidadY !== 0){
        revisarColision(hipodogeEnemigo)
        revisarColision(capipepoEnemigo)
        revisarColision(ratigueyaEnemigo)
        revisarColision(langostesvisEnemigo)
        revisarColision(tucapalmaEnemigo)
        revisarColision(pydosEnemigo)
    }
}

//para mover al mokepon por el mapa
function cargarMapa(){
    intervalo = setInterval(pintarCanvas, 50)
    window.addEventListener('keydown', teclado)
    window.addEventListener('keyup', detenerMovimiento)
}
function moverMokeponArriba(){
    objetoMokeponSeleccionado.velocidadY = -5
}
function moverMokeponDerecha(){
    objetoMokeponSeleccionado.velocidadX = 5
}
function moverMokeponAbajo(){
    objetoMokeponSeleccionado.velocidadY = 5
}
function moverMokeponIzquierda(){
    objetoMokeponSeleccionado.velocidadX = -5
}
function detenerMovimiento(){
    objetoMokeponSeleccionado.velocidadX = 0
    objetoMokeponSeleccionado.velocidadY = 0
}
function teclado(event){
    switch (event.key) {
        case 'ArrowUp':
            moverMokeponArriba()
            break;
        case 'ArrowRight':
            moverMokeponDerecha()
            break;
        case 'ArrowDown':
            moverMokeponAbajo()
            break;
        case 'ArrowLeft':
            moverMokeponIzquierda()
            break;
        default:
            console.log("Se presiono una tecla invalida. Tecla: " + event.key)
            break;
    }
}

//para realizar la colision de las imagenes
function revisarColision(enemigo){
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota= objetoMokeponSeleccionado.y
    const abajoMascota = objetoMokeponSeleccionado.y + objetoMokeponSeleccionado.alto
    const derechaMascota = objetoMokeponSeleccionado.x + objetoMokeponSeleccionado.ancho
    const izquierdaMascota = objetoMokeponSeleccionado.x

    if(abajoMascota < arribaEnemigo || arribaMascota > abajoEnemigo || derechaMascota < izquierdaEnemigo || izquierdaMascota > derechaEnemigo){
        return
    }
    detenerMovimiento()
    btnAtaques.style.display = 'grid'
    sectionVerMapa.style.display = 'none'
    seleccionarMascotaRival(enemigo)
}

//Para invocar el servicio de Node.js
function unirseAlJuego(){
    fetch('http://127.0.0.1:5000/unirse')
        .then(function(res){
            // console.log(res)
            if(res.ok){
                res.text()
                    .then(function(respuesta){
                        console.log(respuesta)
                        jugadorId = respuesta
                    })
            }
        })
}

function mokeponEscogido(pokemon){
    fetch(`http://127.0.0.1:5000/mokepon/${jugadorId}`,{
        method: 'post',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            mokepon: pokemon
        })
    })
}

function enviarPosicionBackEnd(x, y){
    fetch(`http://127.0.0.1:5000/mokepon/${jugadorId}/coordenadas`,{
        method : 'post',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            x,
            y
        })
    })
}

unirseAlJuego()