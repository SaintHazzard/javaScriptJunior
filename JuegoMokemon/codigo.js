///////////// Botones y elementos
const mokemons = [
  { name: "Charizard", tipo: [ `fuego`,`fuego`] },
  { name: `Hipoge`, tipo: [`agua`, `agua`] },
  { name: `Geoude`, tipo: [`tierra`, `tierra`] },
  { name: `Pydos`, tipo: [`tierra`, `fuego`] },
  { name: `Tucapalma`, tipo: [`agua`, `tierra`] },
  { name: `Langostelvis`, tipo: [`agua`, `fuego`] },
];


const movsElements = [`agua`, `fuego`, `tierra`];
const namePet = document.getElementById(`mascotajugador`);
const namePetEnemy = document.getElementById(`mascotaenemigo`);
const divMovs = document.getElementById(`select-mov`);
const buttonFire = document.getElementById(`button-fire`);
const buttonWater = document.getElementById(`button-water`);
const buttonSand = document.getElementById(`button-sand`);
const elegidoEnemie = enemyPet();
const refresh = document.getElementById(`button-restart`);
const panelMascotas = document.getElementById(`select-pet`);
const selectPetPlayer = document.getElementById(`button-select-pet`);
const containerImgAlly = document.getElementById(`imgAlly`);
const containerImgEnemie = document.getElementById(`imgEnemie`);
const containersImg = document.querySelectorAll(`.containerImgPet`);
const addPanelMastocas = document.getElementById(`panel-mascotas`);


// const inputCheckNodes = inputCheck.childNodes;

// console.log(inputCheckNodes);
let opcionDeMokemon;

// CLASES
class Mokemon {
  constructor(name, tipo) {
    console.log(`clase principal`);
    this.name = name;
    this.tipo = tipo;
  }
}
class Mokemon1 {
  constructor(name, tipo) {
    console.log(`clase principal1`);
    this.name = name;
    this.tipo = tipo;
    this.ataques = [];
  }
}

/// CON EXTEND MokemonSex hereda todo lo de la clase Mokemon
// class MokemonSex extends Mokemon {
//  constructor(name, tipo, sexo) {
//   super(name,tipo)
//   this.sexo = sexo;
//  }
//  agregarSexo(sexo) {
//   this.sexo.push(sexo)
//  }
// }
// let blaziken = new MokemonSex(`Blaziken`, [`Fuego`, `Lucha`], `Macho`);

// let pikachu = new Mokemon1(`Pikachu`, [`electrico`]);
// let blaziken = new Mokemon1(`Blaziken`, [`fuego`, `lucha`]);

// mokemons.push(pikachu, blaziken);
// pikachu.ataques.push(
//   {
//     name: `⚡`,
//     id: `button-electric`,
//   },
//   {
//     name: `⚡`,
//     id: `button-electric`,
//   }
// );


///////////// SELECION DE MASCOTA
///////////// SELECION DE MASCOTA


function startGame() {
 
 mokemons.forEach((element) => {
  let addPet = document.createElement("li"); // is a node
  addPet.setAttribute(`id`,`test`)
   opcionDeMokemon = `
      
         <label for="${element.name}"><img src="${element.name}.png" alt="${
     element.name
   }" class="containerImgPet" ></label>
         <input type="radio" class="select1" name="select-pet" id="${element.name}" />
          <label for="${element.name}" class="select"
            >${element.name} ➡ ${element.tipo}
            
          </label>
  `;
// var parent = document.getElementById("parent"); Como usar childnodes, genera un arreglo dinamico a diferencia de querySelectorAll
// var child_nodes = parent.childNodes;
   addPet.innerHTML = opcionDeMokemon;
   addPanelMastocas.appendChild(addPet);
   // addPanelMastocas.appendChild(opcionDeMokemon)
 });
const inputCheck = document.querySelectorAll(`.select1`);
 return inputCheck;
} 

function seleccionaMokemon() {
 
 startGame().forEach((element) => {
  if (element.checked) {
    let selectedMokemon = element.id;
    mokemons.forEach((element) => {
      if (selectedMokemon == element.name) {
        let mokemonForFight = element;
        panelMascotas.classList.toggle(`hidden`);
        namePetEnemy.innerHTML = elegidoEnemie.name;
        if (mokemonForFight) {
          namePet.innerHTML = element.name;
          divMovs.classList.toggle(`hidden`);
          if (selectedMokemon) {
            containerImgAlly.src = `${mokemonForFight.name}.png`;
          }
          if (elegidoEnemie) {
            containerImgEnemie.src = `${elegidoEnemie.name}.png`;
          }
          element.tipo.forEach((value) => {
            if (value == movsElements[0]) {
              buttonWater.classList.add(`button-moveon`);           // Muestra el boton agua
              startGame().forEach((check) => check.classList.add(`hidden`)); // Esconde las tarjetas de los otros pokemones al seleccionar
            } else if (value == movsElements[1]) {
              buttonFire.classList.add(`button-moveon`);            // Muestra el boton fuego
              startGame().forEach((check) => check.classList.add(`hidden`)); // Esconde las tarjetas de los otros pokemones al seleccionar
            } else if (value == movsElements[2]) {
              buttonSand.classList.add(`button-moveon`); // Muestra el boton tierra
              startGame().forEach((check) => check.classList.add(`hidden`)); // Esconde las tarjetas de los otros pokemones al seleccionar
            } 
          });
        }
      }
    });
  }
});
 
}

selectPetPlayer.addEventListener(`click`, seleccionaMokemon);
///////////// SELECION DE MASCOTA
///////////// SELECION DE MASCOTA

let enemyLifes = 3;
let userLifes = 3;
let lifeUser = document.getElementById(`vidasjugador`);
let lifeEnemy = document.getElementById(`vidasenemigo`);

let msj = document.getElementById(`menssage`);

function movWeaknes() {
  return Math.floor(Math.random() * (1 - 0 + 1) + 0);
}
function movStrong() {
  return Math.floor(Math.random() * (3 - 0 + 1) + 0);
}

function mostrarRegistroCombate() {
  document.getElementById(`menssageally`).classList.remove(`hidden`);
  document.getElementById(`menssageenemie`).classList.remove(`hidden`);
}

// BOTON ATAQUE AGUA
// BOTON ATAQUE AGUA
buttonWater.addEventListener(`click`, () => {
  const elegidoAlly = setAllyPet();
  mostrarRegistroCombate();

  let foundPlayer = mokemons.find((element) => element.name == elegidoAlly);
  let valueButton = 0;
  let ataqueFuerte = movStrong();
  let ataqueDebil = movWeaknes();
  let tipoAgua = foundPlayer.tipo.find((element) => element == movsElements[0]);
  let tipoFuego = elegidoEnemie.tipo.find((element) => element == movsElements[1]);
  let tipoTierra = elegidoEnemie.tipo.find((element) => element == movsElements[2]);

  if (tipoAgua && tipoTierra) {
    if (ataqueDebil > ataqueFuerte) {
      enemyLifes--;
      crearMensajeAlly(valueButton);
    } else {
      userLifes--;
      crearMensajeEnemie(valueButton);
    }
    lifeEnemy.innerHTML = enemyLifes;
    lifeUser.innerHTML = userLifes;
  } else if (tipoAgua && tipoFuego) {
    if (ataqueFuerte >= ataqueDebil) {
      enemyLifes--;
      crearMensajeAlly(valueButton);
    } else {
      userLifes--;
      crearMensajeEnemie(valueButton);
    }
    lifeEnemy.innerHTML = enemyLifes;
    lifeUser.innerHTML = userLifes;
  } else if (tipoAgua && tipoAgua) {
    if (movStrong() >= movStrong()) {
      enemyLifes--;
      crearMensajeAlly(valueButton);
    } else {
      userLifes--;
      crearMensajeEnemie(valueButton);
    }
    lifeEnemy.innerHTML = enemyLifes;
    lifeUser.innerHTML = userLifes;
  }

  endBattle();
});
// BOTON ATAQUE AGUA
// BOTON ATAQUE AGUA

//// BOTON ATAQUE FUEGO
//// BOTON ATAQUE FUEGO
buttonFire.addEventListener(`click`, () => {
  const elegidoAlly = setAllyPet();
  mostrarRegistroCombate();
  let valueButton = 1;
  let foundPlayer = mokemons.find((element) => element.name == elegidoAlly);

  let ataqueFuerte = movStrong();
  let ataqueDebil = movWeaknes();
  let tipoAgua = elegidoEnemie.tipo.find((element) => element == movsElements[0]);
  let tipoFuego = foundPlayer.tipo.find((element) => element == movsElements[1]);
  let tipoTierra = elegidoEnemie.tipo.find((element) => element == movsElements[2]);

  if (tipoFuego && tipoAgua) {
    if (ataqueDebil > ataqueFuerte) {
      enemyLifes--;
      crearMensajeAlly(valueButton);
    } else {
      userLifes--;
      crearMensajeEnemie(valueButton);
    }
    lifeEnemy.innerHTML = enemyLifes;
    lifeUser.innerHTML = userLifes;
  } else if (tipoFuego && tipoTierra) {
    if (ataqueFuerte >= ataqueDebil) {
      enemyLifes--;
      crearMensajeAlly(valueButton);
    } else {
      userLifes--;
      crearMensajeEnemie(valueButton);
    }
    lifeEnemy.innerHTML = enemyLifes;
    lifeUser.innerHTML = userLifes;
  } else if (tipoFuego && tipoFuego) {
    if (movStrong() >= movStrong()) {
      enemyLifes--;
      crearMensajeAlly(valueButton);
    } else {
      userLifes--;
      crearMensajeEnemie(valueButton);
    }
    lifeEnemy.innerHTML = enemyLifes;
    lifeUser.innerHTML = userLifes;
  }
  endBattle();
});
//// BOTON ATAQUE FUEGO
//// BOTON ATAQUE FUEGO

////// BOTON ATAQUE ARENA
////// BOTON ATAQUE ARENA
buttonSand.addEventListener(`click`, () => {
  const elegidoAlly = setAllyPet();
  mostrarRegistroCombate();
  let valueButton = 2;

  let foundPlayer = mokemons.find((element) => element.name == elegidoAlly);

  let ataqueFuerte = movStrong();
  let ataqueDebil = movWeaknes();
  let tipoAgua = elegidoEnemie.tipo.find((element) => element == movsElements[0]);
  let tipoFuego = elegidoEnemie.tipo.find((element) => element == movsElements[1]);
  let tipoTierra = foundPlayer.tipo.find((element) => element == movsElements[2]);

  if (tipoTierra && tipoFuego) {
    if (ataqueDebil > ataqueFuerte) {
      enemyLifes--;
      crearMensajeAlly(valueButton);
    } else {
      userLifes--;
      crearMensajeEnemie(valueButton);
    }
    lifeEnemy.innerHTML = enemyLifes;
    lifeUser.innerHTML = userLifes;
  } else if (tipoTierra && tipoAgua) {
    if (ataqueFuerte >= ataqueDebil) {
      enemyLifes--;
      crearMensajeAlly(valueButton);
    } else {
      userLifes--;
      crearMensajeEnemie(valueButton);
    }
    lifeEnemy.innerHTML = enemyLifes;
    lifeUser.innerHTML = userLifes;
  } else if (tipoTierra && tipoTierra) {
    if (movStrong() >= movStrong()) {
      enemyLifes--;
      crearMensajeAlly(valueButton);
    } else {
      userLifes--;
      crearMensajeEnemie(valueButton);
    }
    lifeEnemy.innerHTML = enemyLifes;
    lifeUser.innerHTML = userLifes;
  }
  endBattle();
});
////// BOTON ATAQUE ARENA
////// BOTON ATAQUE ARENA

function crearMensajeAlly(valueButton) {
  let parrafo = document.createElement(`p`);
  let menssage = document.getElementById(`menssageally`);
  parrafo.innerHTML = `Atacaste con ${movsElements[valueButton]} el enemigo con ${
    elegidoEnemie.tipo[movWeaknes()]
  }`;
  menssage.appendChild(parrafo);
}
function crearMensajeEnemie(valueButton) {
  let parrafo = document.createElement(`p`);
  let menssage = document.getElementById(`menssageenemie`);
  parrafo.innerHTML = `Atacaste con ${movsElements[valueButton]} el enemigo con ${
    elegidoEnemie.tipo[movWeaknes()]
  }`;
  menssage.appendChild(parrafo);
}

function endBattle() {
  const leftLifePLayer = setAllyLifes();
  const leftLifeEnemies = setEnemieLifes();
  console.log(leftLifeEnemies);
  if (leftLifeEnemies <= 0) {
    document.getElementById(`aviso`).innerText = `GANASTE`;
    document.getElementById(`button-restart`).classList.remove(`hidden`);
    buttonFire.disabled = true;
    buttonWater.disabled = true;
    buttonSand.disabled = true;
  }
  if (leftLifePLayer <= 0) {
    document.getElementById(`aviso`).innerText = `PERDISTE`;
    document.getElementById(`button-restart`).classList.remove(`hidden`);
    buttonFire.disabled = true;
    buttonWater.disabled = true;
    buttonSand.disabled = true;
  }
}

// funcion para elegir mascota enemiga de manera aleatoria
function enemyPet() {
  let randomPet = Math.floor(Math.random() * (mokemons.length - 0 + 1) + 0);

  let eledido = mokemons[randomPet];
  return eledido;
}

// funcion para elegir mascota del jugador

function setAllyPet() {
  const test = document.getElementById(`mascotajugador`).outerText;
  return test;
}
function setAllyLifes() {
  const test = document.getElementById(`vidasjugador`).outerText;
  return test;
}
function setEnemieLifes() {
  const test = document.getElementById(`vidasenemigo`).outerText;
  return test;
}

window.addEventListener(`load`, startGame);


function restart() {
  location.reload();
}

// add value in index.html
function addValue() {
  let inputCheck = document.querySelectorAll(`.select1`);
  inputCheck.forEach((Element) => {
    let addValue = Element.getAttribute(`id`);
    Element.setAttribute(`value`, addValue);
  });
}
