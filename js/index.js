//para seleccionar la section general de seleccionar la mascota para luego ocultarla junto con el boton y mostrar la section de ataque
const seleccionarMascota = document.querySelector('#seleccionar-mascota')

//btn para seleecionar un pokemos de la lista
const seleccionar = document.querySelector('#seleccionar');

//para seleccionar la section de los btn de ataques
const btnAtaques = document.querySelector('#seleccionar-ataque')
btnAtaques.style.display = 'none' // para ocultar la section 

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

//mascotas
let Hipodoge 
let Capipepo 
let Ratigueya
let Langostesvis 
let Tucapalma 
let Pydos 

let mokepones = [] //creo un array vacio para ir agregando los mokepones en el.

//clases 
class Mokepon{
    constructor(nombre, imagen, vida){
        this.nombre = nombre;
        this.imagen = imagen;
        this.vida = vida
        this.ataques = []
    }
}

Hipodoge = new Mokepon('Hipodoge', './image/mascotas/mokepons_mokepon_hipodoge_attack.png', 3)
Capipepo = new Mokepon('Capipepo', './image/mascotas/mokepons_mokepon_capipepo_attack.png', 3)
Ratigueya = new Mokepon('Ratigueya', './image/mascotas/mokepons_mokepon_ratigueya_attack.png', 3)
Langostesvis = new Mokepon('Langostesvis', './image/mascotas/langos.png', 3)
Tucapalma = new Mokepon('Tucapalma', './image/mascotas/tucapalma.png', 3)
Pydos = new Mokepon('Pydos', './image/mascotas/pydos.png', 3)

Hipodoge.ataques.push(
    {'nombre' : 'agua 💦', id: 'agua'},
    {'nombre' : 'agua 💦', id: 'agua'},
    {'nombre' : 'agua 💦', id: 'agua'},
    {'nombre' : 'tierra 🪨', id: 'tierra'},
    {'nombre' : 'fuego 🔥', id: 'fuego'},
    )
Capipepo.ataques.push(
    {'nombre' : 'agua 💦', id: 'agua'},
    {'nombre' : 'tierra 🪨', id: 'tierra'},
    {'nombre' : 'tierra 🪨', id: 'tierra'},
    {'nombre' : 'tierra 🪨', id: 'tierra'},
    {'nombre' : 'fuego 🔥', id: 'fuego'},
    )
Ratigueya.ataques.push(
    {'nombre' : 'agua 💦', id: 'agua'},
    {'nombre' : 'agua 💦', id: 'agua'},
    {'nombre' : 'tierra 🪨', id: 'tierra'},
    {'nombre' : 'tierra 🪨', id: 'tierra'},
    {'nombre' : 'fuego 🔥', id: 'fuego'},
    )
Langostesvis.ataques.push(
    {'nombre' : 'agua 💦', id: 'agua'},
    {'nombre' : 'agua 💦', id: 'agua'},
    {'nombre' : 'agua 💦', id: 'agua'},
    {'nombre' : 'tierra 🪨', id: 'tierra'},
    {'nombre' : 'fuego 🔥', id: 'fuego'},
    )
Tucapalma.ataques.push(
    {'nombre' : 'agua 💦', id: 'agua'},
    {'nombre' : 'agua 💦', id: 'agua'},
    {'nombre' : 'tierra 🪨', id: 'tierra'},
    {'nombre' : 'tierra 🪨', id: 'tierra'},
    {'nombre' : 'fuego 🔥', id: 'fuego'},
    )
Pydos.ataques.push(
    {'nombre' : 'agua 💦', id: 'agua'},
    {'nombre' : 'fuego 🔥', id: 'fuego'},
    {'nombre' : 'fuego 🔥', id: 'fuego'},
    {'nombre' : 'fuego 🔥', id: 'fuego'},
    {'nombre' : 'tierra 🪨', id: 'tierra'},
    )
        
mokepones.push(Hipodoge, Capipepo, Ratigueya, Langostesvis, Tucapalma, Pydos)

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

//para cambiar el nombre de la mascota seleccionada en el html 
function mascota(){
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
    btnAtaques.style.display = 'grid'
    sectionReiniciar.style.display = 'grid'
    seleccionar.disabled = true
    seleccionarMascota.style.display = 'none'
    mensajesAtaque.style.display = 'grid'
    extraerAtaques(pokemon)
    seleccionarMascotaRival()
    limpiar()
}

//Para seleccionar aleatoreamente una mascota para el rival
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function seleccionarMascotaRival(){
    const mascotaAleatorio = aleatorio(0,mokepones.length-1)
    mascotaRival.innerText = mokepones[mascotaAleatorio].nombre
    document.querySelector('#contrincante').src = mokepones[mascotaAleatorio].imagen   
    ataqueEnemigo = mokepones[mascotaAleatorio].ataques
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