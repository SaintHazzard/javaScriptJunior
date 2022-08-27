
const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
const sectionReiniciar = document.getElementById("reiniciar");
const botonMascotaJugador = document.getElementById("boton-mascota");
const botonReiniciar = document.getElementById("boton-reiniciar");
sectionReiniciar.style.display = "none";

const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota");
const spanMascotaJugador = document.getElementById("mascota-jugador");

const spanMascotaEnemigo = document.getElementById("mascota-enemigo");

const spanVidasJugador = document.getElementById("vidas-jugador");
const spanVidasEnemigo = document.getElementById("vidas-enemigo");

const sectionMensajes = document.getElementById("resultado");
const ataquesDelJugador = document.getElementById("ataques-del-jugador");
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo");
const contenedorTarjetas = document.getElementById("contenedorTarjetas");
const contenedorAtaques = document.getElementById("contenedorAtaques");
const sectionVerMapa = document.getElementById(`ver-mapa`);
const mapa = document.getElementById(`mapa`);

let mokepones = [];
let ataqueJugador = [];
let ataqueEnemigo = [];
let opcionDeMokepones;
let inputHipodoge;
let inputCapipepo;
let inputRatigueya;
let mascotaJugador;
let mascotaJugadorObjeto;
let mascotaEnemigoObjeto;
let ataquesMokepon;
let ataquesMokeponEnemigo;
let botonFuego;
let botonAgua;
let botonTierra;
let botones = [];
let indexAtaqueJugador;
let indexAtaqueEnemigo;
let victoriasJugador = 0;
let victoriasEnemigo = 0;
let lienzo = mapa.getContext(`2d`);
let intervalo;
let vidasJugador = 3;
let vidasEnemigo = 3;
let mapaBackground = new Image();
mapaBackground.src = `/cursoBasico/programar/mokepon/assets/mokemap.png`;
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
const anchoMaximoDelMapa = 350
let jugadorId = null


if (anchoDelMapa > anchoMaximoDelMapa) {
 anchoDelMapa = anchoMaximoDelMapa - 20
}
alturaQueBuscamos = anchoDelMapa * 600 / 800

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

class Mokepon {
  constructor(nombre, foto, vida, fotoMapa) {
    this.nombre = nombre;
    this.foto = foto;
    this.vida = vida;
   this.ataques = [];
   this.ancho = 40;
   this.alto = 40;
    this.x = aleatorio(0,mapa.width - this.ancho)
    this.y = aleatorio(0, mapa.height - this.alto)
    
    this.mapaFoto = new Image();
    this.mapaFoto.src = fotoMapa;
    this.velocidadX = 0;
    this.velocidadY = 0;
 }
 pintarMokepon() {
  lienzo.drawImage(this.mapaFoto, this.x, this.y, this.ancho, this.alto);
 }
}

let hipodoge = new Mokepon(
  "Hipodoge",
  "./assets/mokepons_mokepon_hipodoge_attack.png",
  5,
  `/cursoBasico/programar/mokepon/assets/hipodoge.png`
);

let capipepo = new Mokepon(
  "Capipepo",
  "./assets/mokepons_mokepon_capipepo_attack.png",
  5,
  `/cursoBasico/programar/mokepon/assets/capipepo.png`
);

let ratigueya = new Mokepon(
  "Ratigueya",
  "./assets/mokepons_mokepon_ratigueya_attack.png",
  5,
  `/cursoBasico/programar/mokepon/assets/ratigueya.png`
);

let hipodogeEnemigo = new Mokepon(
  "Hipodoge",
  "./assets/mokepons_mokepon_hipodoge_attack.png",
  5,
  `/cursoBasico/programar/mokepon/assets/hipodoge.png`,
  
);

let capipepoEnemigo = new Mokepon(
  "Capipepo",
  "./assets/mokepons_mokepon_capipepo_attack.png",
  5,
  `/cursoBasico/programar/mokepon/assets/capipepo.png`,
  
);

let ratigueyaEnemigo = new Mokepon(
  "Ratigueya",
  "./assets/mokepons_mokepon_ratigueya_attack.png",
  5,
  `/cursoBasico/programar/mokepon/assets/ratigueya.png`,
  
);



hipodoge.ataques.push(
  { nombre: "💧", id: "boton-agua" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🌱", id: "boton-tierra" }
);

capipepo.ataques.push(
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🔥", id: "boton-fuego" }
);

ratigueya.ataques.push(
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🌱", id: "boton-tierra" }
);
hipodogeEnemigo.ataques.push(
  { nombre: "💧", id: "boton-agua" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🌱", id: "boton-tierra" }
);

capipepoEnemigo.ataques.push(
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🔥", id: "boton-fuego" }
);

ratigueyaEnemigo.ataques.push(
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🌱", id: "boton-tierra" }
);

mokepones.push(hipodoge, capipepo, ratigueya);

function iniciarJuego() {
  sectionSeleccionarAtaque.style.display = "none";
  sectionVerMapa.style.display = `none`;

  mokepones.forEach((mokepon) => {
    opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `;
    contenedorTarjetas.innerHTML += opcionDeMokepones;

    inputHipodoge = document.getElementById("Hipodoge");
    inputCapipepo = document.getElementById("Capipepo");
    inputRatigueya = document.getElementById("Ratigueya");
  });

  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

 botonReiniciar.addEventListener("click", reiniciarJuego);
 
 unirserAlJuego()
}



function seleccionarMascotaJugador() {
  sectionSeleccionarMascota.style.display = "none";

  // capturaTecla();

  // let imagenDeCapipepo = new Image()
  // imagenDeCapipepo.src = capipepo.foto
  // lienzo.fillRect(5,15,20,40)
  // lienzo.drawImage(
  //  imagenDeCapipepo,
  //  20,
  //  40,
  //  100,
  //  100,
  // )

  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = inputHipodoge.id;
    mascotaJugador = inputHipodoge.id;
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = inputCapipepo.id;
    mascotaJugador = inputCapipepo.id;
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = inputRatigueya.id;
    mascotaJugador = inputRatigueya.id;
  } else {
    alert("Selecciona una mascota");
  }
 seleccionarMokepon(mascotaJugador);
  
 
 sectionVerMapa.style.display = `flex`;
 extraerAtaques(mascotaJugador);
  iniciarMapa();
  
  
}

function extraerAtaques(mascotaJugador) {
  let ataques;
  for (let i = 0; i < mokepones.length; i++) {
    if (mascotaJugador === mokepones[i].nombre) {
      ataques = mokepones[i].ataques;
    }
  }
  mostrarAtaques(ataques);
}

function mostrarAtaques(ataques) {
  ataques.forEach((ataque) => {
    ataquesMokepon = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `;
    contenedorAtaques.innerHTML += ataquesMokepon;
  });

  botonFuego = document.getElementById("boton-fuego");
  botonAgua = document.getElementById("boton-agua");
  botonTierra = document.getElementById("boton-tierra");
  botones = document.querySelectorAll(".BAtaque");
}

function secuenciaAtaque() {
  botones.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      e.target.disabled = true;
      if (e.target.textContent === "🔥") {
        ataqueJugador.push("FUEGO");
        console.log(ataqueJugador);
        boton.style.background = "#112f58";
      } else if (e.target.textContent === "💧") {
        ataqueJugador.push("AGUA");
        console.log(ataqueJugador);
        boton.style.background = "#112f58";
      } else {
        ataqueJugador.push("TIERRA");
        console.log(ataqueJugador);
        boton.style.background = "#112f58";
      }
      ataqueAleatorioEnemigo();
    });
  });
}

function seleccionarMascotaEnemigo(enemigo) {
 

  spanMascotaEnemigo.innerHTML = enemigo.nombre
  ataquesMokeponEnemigo = enemigo.ataques
 secuenciaAtaque();
 return mascotaEnemigoObjeto
}

function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length - 1);

  if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
    ataqueEnemigo.push("FUEGO");
  } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
    ataqueEnemigo.push("AGUA");
  } else {
    ataqueEnemigo.push("TIERRA");
  }
  console.log(ataqueEnemigo);
  iniciarPelea();
}

function iniciarPelea() {
  if (ataqueJugador.length === 5) {
    combate();
  }
}

function indexAmbosOponente(jugador, enemigo) {
  indexAtaqueJugador = ataqueJugador[jugador];
  indexAtaqueEnemigo = ataqueEnemigo[enemigo];
}

function combate() {
  for (let index = 0; index < ataqueJugador.length; index++) {
    if (ataqueJugador[index] === ataqueEnemigo[index]) {
      indexAmbosOponente(index, index);
      crearMensaje("EMPATE");
    } else if (ataqueJugador[index] == `AGUA` && ataqueEnemigo[index] == `FUEGO`) {
      indexAmbosOponente(index, index);
      crearMensaje("GANASTE");
      victoriasJugador++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else if (ataqueJugador[index] == `FUEGO` && ataqueEnemigo[index] == `TIERRA`) {
      indexAmbosOponente(index, index);
      crearMensaje("GANASTE");
      victoriasJugador++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else if (ataqueJugador[index] == `TIERRA` && ataqueEnemigo[index] == `AGUA`) {
      indexAmbosOponente(index, index);
      crearMensaje("GANASTE");
      victoriasJugador++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else {
      indexAmbosOponente(index, index);
      crearMensaje("PERDISTE");
      victoriasEnemigo++;
      spanVidasEnemigo.innerHTML = victoriasEnemigo;
    }
  }

  revisarVictorias();
}

function revisarVictorias() {
  if (victoriasJugador > victoriasEnemigo) {
    crearMensajeFinal("FELICITACIONES! Ganaste :)");
  } else if (victoriasEnemigo > victoriasJugador) {
    crearMensajeFinal("Lo siento, perdiste :(");
  } else if (victoriasEnemigo == victoriasJugador) {
    crearMensajeFinal("TABLAS");
  }
}

function crearMensaje(resultado) {
  let nuevoAtaqueDelJugador = document.createElement("p");
  let nuevoAtaqueDelEnemigo = document.createElement("p");

  sectionMensajes.innerHTML = resultado;
  nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador;
  nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo;

  ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
  ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}

function crearMensajeFinal(resultadoFinal) {
  sectionMensajes.innerHTML = resultadoFinal;

  sectionReiniciar.style.display = "block";
}

function reiniciarJuego() {
  location.reload();
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function pintarCanvas() {
  

  mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX;
  mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY;
  lienzo.clearRect(0, 0, mapa.clientWidth, mapa.clientHeight);

  lienzo.drawImage(mapaBackground, 0, 0, mapa.width, mapa.height);
 mascotaJugadorObjeto.pintarMokepon()
enviarPosicion(mascotaJugadorObjeto.x , mascotaJugadorObjeto.y)

 hipodogeEnemigo.pintarMokepon();
 capipepoEnemigo.pintarMokepon();
 ratigueyaEnemigo.pintarMokepon();
 
 if (mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !== 0) {
  revisarColisiones(hipodogeEnemigo)
  revisarColisiones(capipepoEnemigo);
  revisarColisiones(ratigueyaEnemigo);
 }
 
}

function enviarPosicion(x, y) {
 fetch(`http://localhost:8080/mokepon/${jugadorId}/posicion`, {
   method: `post`,
   headers: {
     "Content-type": "application/json",
   },
   body: JSON.stringify({ x, y }),
 });
}

function moverDerecha() {
  mascotaJugadorObjeto.velocidadX = 10;
}
function moverIzquierda() {
  mascotaJugadorObjeto.velocidadX = -10;
}
function moverAbajo() {
  mascotaJugadorObjeto.velocidadY = 10;
}
function moverArriba() {
  mascotaJugadorObjeto.velocidadY = -10;
}

function detenerMovimiento() { 
  mascotaJugadorObjeto.velocidadX = 0;
  mascotaJugadorObjeto.velocidadY = 0;
}

function sePresionoUnaTecla(event) {
  switch (event.key) {
    case `ArrowUp`:
      moverArriba();
      break;
    case `ArrowDown`:
      moverAbajo();
      break;
    case `ArrowLeft`:
      moverIzquierda();
      break;
    case `ArrowRight`:
      moverDerecha();

    default:
      break;
  }
}

// function capturaTecla() {
//   document.addEventListener("keydown", (e) => {
//     if (e.key === "ArrowUp") {
//       capipepo.y -= 5;
//       pintarPersonaje();
//     } else if (e.key === "ArrowDown") {
//       capipepo.y += 5;
//       pintarPersonaje();
//     } else if (e.key === "ArrowLeft") {
//       capipepo.x -= 5;
//       pintarPersonaje();
//     } else if (e.key === "ArrowRight") {
//       capipepo.x += 5;
//       pintarPersonaje();
//     }
//   });
// }

function iniciarMapa() {
 mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador);
 
 
  
  intervalo = setInterval(pintarCanvas, 50);
  window.addEventListener(`keydown`, sePresionoUnaTecla);
  window.addEventListener(`keyup`, detenerMovimiento);
}

function obtenerObjetoMascota(mascotaJugador) {
  for (let i = 0; i < mokepones.length; i++) {
    if (mascotaJugador === mokepones[i].nombre) {
      return mokepones[i];
    }
  }
}



function revisarColisiones(enemigo) {
 const arribaEnemigo = enemigo.y
 const abajoEnemigo = enemigo.y + enemigo.alto;
 const derechaEnemigo = enemigo.x + enemigo.ancho
 const izquierdaEnemigo = enemigo.x;

 const arribaMascota = mascotaJugadorObjeto.y;
 const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto;
 const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho;
 const izquierdaMascota = mascotaJugadorObjeto.x;

 if (abajoMascota < arribaEnemigo || arribaMascota > abajoEnemigo || derechaMascota < izquierdaEnemigo || izquierdaMascota > derechaEnemigo) {
  return;
 } 
 detenerMovimiento()
 clearInterval(intervalo)
 console.log(`Se detecto colision`);
 sectionSeleccionarAtaque.style.display = "flex";
 sectionVerMapa.style.display = `none`
 seleccionarMascotaEnemigo(enemigo);
 
}

function unirserAlJuego() {
  fetch(`http://localhost:8080/unirse`).then(function (res) {
    console.log(res);
    if (res.ok) {
      res.text().then(function (respuesta) {
       jugadorId = respuesta;
       console.log(jugadorId);
      });
    }
  });
}

function seleccionarMokepon(mascotaJugador) {
 fetch(`http://localhost:8080/mokepon/${jugadorId}`, {
  method: `post`,
  headers: {
   "Content-Type": "application/json"
  }, body: JSON.stringify({
   mokepon: mascotaJugador
  })
 }
 
 )
}
   

window.addEventListener("load", iniciarJuego);