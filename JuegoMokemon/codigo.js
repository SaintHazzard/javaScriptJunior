window.addEventListener(`load`, startGame);
///////////// Botones y elementos
const mokemons = [
  {
    name: "Charizard",
    tipo: [`Fuego`],
    ataques: [
      { name: `Fire 🔥`, id: `button-fire`, function: `Fire` },
      { name: `Fire 🔥`, id: `button-fire`, function: `Fire` },
    ],
  },
  {
    name: `Hipoge`,
    tipo: [`Agua`],
    ataques: [
      { name: `Water 💧`, id: `button-water`, function: `Water` },
      { name: `Water 💧`, id: `button-water`, function: `Water` },
    ],
  },
  {
    name: `Geoude`,
    tipo: [`Tierra`],
    ataques: [
      { name: `Sand 🌿`, id: `button-sand`, function: `Sand` },
      { name: `Sand 🌿`, id: `button-sand`, function: `Sand` },
    ],
  },
  {
    name: `Pydos`,
    tipo: [`Tierra`, `Fuego`],
    ataques: [
      { name: `Sand 🌿`, id: `button-sand`, function: `Sand` },
      { name: `Fire 🔥`, id: `button-fire`, function: `Fire` },
    ],
  },
  {
    name: `Tucapalma`,
    tipo: [`Agua`, `Tierra`],
    ataques: [
      { name: `Water 💧`, id: `button-water`, function: `Water` },
      { name: `Sand 🌿`, id: `button-sand`, function: `Sand` },
    ],
  },
  {
    name: `Langostelvis`,
    tipo: [`Agua`, `Fuego`],
    ataques: [
      { name: `Water 💧`, id: `button-water`, function: `Water` },
      { name: `Fire 🔥`, id: `button-fire`, function: `Fire` },
    ],
  },
];

window.addEventListener(`load`, startGame);

const movsElements = [`Agua`, `Fuego`, `Tierra`];
const namePet = document.getElementById(`mascotajugador`);
const namePetEnemy = document.getElementById(`mascotaenemigo`);
const divMovs = document.getElementById(`select-mov`);

const elegidoEnemie = enemyPet();
const refresh = document.getElementById(`button-restart`);
const panelMascotas = document.getElementById(`select-pet`);
const subPanelMascotas = document.getElementById(`panel-mascotas`);
const selectPetPlayer = document.getElementById(`button-select-pet`);
const containerImgAlly = document.getElementById(`imgAlly`);
const containerImgEnemie = document.getElementById(`imgEnemie`);
const containersImg = document.querySelectorAll(`.containerImgPet`);
const panelAtaques = document.getElementById(`panel-ataques`);
let child=subPanelMascotas.childNodes
console.log(child);


let opcionDeMokemon;

// let inputCheck = startGame();
// console.log(inputCheck);
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
console.log(mokemons);

///////////// SELECION DE MASCOTA
///////////// SELECION DE MASCOTA
function startGame() {
 mokemons.forEach((element) => {
  
   let addPanelMastocas = document.getElementById(`panel-mascotas`);
   let addPet = document.createElement("li"); // is a node
   opcionDeMokemon = `
      
         <label for="${element.name}" class="select"><img src="${element.name}.png" alt="${
     element.name
   }" class="containerImgPet" >
         <input type="radio" class="select1" name="select-pet" id="${element.name}" />
          <p for="${element.name}" class="select"
            >${element.name} ➡ ${element.tipo}
            
          </p>
        
          
        
  `;

   addPet.innerHTML = opcionDeMokemon;
   addPanelMastocas.appendChild(addPet);
   // addPanelMastocas.appendChild(opcionDeMokemon)
  
  
 })
 let inputCheck = document.querySelectorAll(`.select1`);
    return inputCheck
}
  
function selecionaMascota() {
 
 
 startGame().forEach((element) => {
  let inputCheck = document.querySelectorAll(`.select1`)
  
  
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
               // buttonWater.classList.add(`button-moveon`);
               // inputCheck.forEach((check) => check.classList.add(`hidden`));
             } else if (value == movsElements[1]) {
               // buttonFire.classList.add(`button-moveon`);
               // inputCheck.forEach((check) => check.classList.add(`hidden`));
             } else if (value == movsElements[2]) {
               // buttonSand.classList.add(`button-moveon`);
               // inputCheck.forEach((check) => check.classList.add(`hidden`));
             }
           });
         }
       }
     });
    extraerAtaques(selectedMokemon);
   } 
 });
 
}

selectPetPlayer.addEventListener(`click`, selecionaMascota);
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
// buttonWater.addEventListener(`click`, ataqueAgua );
// BOTON ATAQUE AGUA
// BOTON ATAQUE AGUA

//// BOTON ATAQUE FUEGO
//// BOTON ATAQUE FUEGO
// buttonFire.addEventListener(`click`, ataqueFuego);
//// BOTON ATAQUE FUEGO
//// BOTON ATAQUE FUEGO

////// BOTON ATAQUE ARENA
////// BOTON ATAQUE ARENA
// buttonSand.addEventListener(`click`, ataqueTierra);
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
 let buttonFire = document.getElementById(`button-fire`);
 let buttonWater = document.getElementById(`button-water`);
 let buttonSand = document.getElementById(`button-sand`);
 let disableButtons = document.querySelectorAll(`.button-moveon`);
  const leftLifePLayer = setAllyLifes();
  const leftLifeEnemies = setEnemieLifes(); 
  console.log(leftLifeEnemies);
  if (leftLifeEnemies <= 0) {
    document.getElementById(`aviso`).innerText = `GANASTE`;
   document.getElementById(`button-restart`).classList.remove(`hidden`);
   disableButtons.forEach((element) => {
    element.disabled = true
   })
    
  }
  if (leftLifePLayer <= 0) {
    document.getElementById(`aviso`).innerText = `PERDISTE`;
    document.getElementById(`button-restart`).classList.remove(`hidden`);
    disableButtons.forEach((element) => {
      element.disabled = true;
    });
  }
}

// funcion para elegir mascota enemiga de manera aleatoria
function enemyPet() {
  let randomPet = Math.floor(Math.random() * (5 - 0 + 1) + 0);

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

function extraerAtaques(selectedMokemon) {
 let ataques
 
 for (let i = 0; i < mokemons.length; i++) {
   if (selectedMokemon === mokemons[i].name) {
     ataques = mokemons[i].ataques;
   }
 }
 
 mostrarAtaques(ataques)
 
}

function mostrarAtaques(ataques) {
 
 ataques.forEach((ataque) => {
  btnGeneratorAtaque = ` 
  <button id="${ataque.id}" class="button-moveon" onclick="ataque${ataque.function}()">${ataque.name}</button>
 `;
  panelAtaques.innerHTML += btnGeneratorAtaque
  
 })
 
 
 
 
}

// add value in index.html
function addValue() {
  let inputCheck = document.querySelectorAll(`.select1`);
  inputCheck.forEach((Element) => {
    let addValue = Element.getAttribute(`id`);
    Element.setAttribute(`value`, addValue);
  });
}


function ataqueWater() {
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
}

function ataqueFire() {
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
}

function ataqueSand() {
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
}