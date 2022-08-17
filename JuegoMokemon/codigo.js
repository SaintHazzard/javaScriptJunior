// add value in index.html
function addValue() {
 let inputCheck = document.querySelectorAll(`.select`);
 inputCheck.forEach((Element) => {
  let addValue = Element.getAttribute(`id`);
  Element.setAttribute(`value`, addValue.toLocaleLowerCase());
 });
}
const mokemons = [
 ///////////// Botones y elementos
 { name: "Charizard", tipo: ["fuego", `fuego`] },
 { name: `Hipoge`, tipo: [`agua`, `agua`] },
 { name: `Geoude`, tipo: [`tierra`, `tierra`] },
 { name: `Pydos`, tipo: [`tierra`, `fuego`] },
 { name: `Tucapalma`, tipo: [`agua`, `tierra`] },
 { name: `Langostelvis`, tipo: [`agua`, `fuego`] },
];

function startPlay() {
  ///////////// Botones y elementos
  const mokemons = [
    ///////////// Botones y elementos
    { name: "Charizard", tipo: ["fuego", `fuego`] },
    { name: `Hipoge`, tipo: [`agua`, `agua`] },
    { name: `Geoude`, tipo: [`tierra`, `tierra`] },
    { name: `Pydos`, tipo: [`tierra`, `fuego`] },
    { name: `Tucapalma`, tipo: [`agua`, `tierra`] },
    { name: `Langostelvis`, tipo: [`agua`, `fuego`] },
  ];

  const inputCheck = document.querySelectorAll(`.select`);
  const movsElements = [`agua`, `fuego`, `tierra`];
  const namePet = document.getElementById(`mascotajugador`);
  const namePetEnemy = document.getElementById(`mascotaenemigo`);
  const divMovs = document.getElementById(`select-mov`);
  const buttonFire = document.getElementById(`button-fire`);
  const buttonWater = document.getElementById(`button-water`);
  const buttonSand = document.getElementById(`button-sand`);
  const elegidoEnemie = enemyPet();

  const panelMascotas = document.getElementById(`select-pet`);
  const selectPetPlayer = document.getElementById(`button-select-pet`);
  const containerImgAlly = document.getElementById(`imgAlly`);
  const containerImgEnemie = document.getElementById(`imgEnemie`);

  function allyPet() {}

  selectPetPlayer.addEventListener(`click`, () => {
    inputCheck.forEach((element) => {
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
                containerImgAlly.src = `/JuegoMokemon/${mokemonForFight.name}.png`;
              }
              if (elegidoEnemie) {
                containerImgEnemie.src = `/JuegoMokemon/${elegidoEnemie.name}.png`;
              }
              element.tipo.forEach((value) => {
                if (value == movsElements[0]) {
                  buttonWater.classList.add(`button-moveon`);
                  inputCheck.forEach((check) => check.classList.add(`hidden`));
                } else if (value == movsElements[1]) {
                  buttonFire.classList.add(`button-moveon`);
                  inputCheck.forEach((check) => check.classList.add(`hidden`));
                } else if (value == movsElements[2]) {
                  buttonSand.classList.add(`button-moveon`);
                  inputCheck.forEach((check) => check.classList.add(`hidden`));
                }
              });
            }
          }
        });
      }
    });
  });

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
  console.log(movStrong());
  console.log(movWeaknes());

  // BOTON ATAQUE AGUA
  // BOTON ATAQUE AGUA
  // BOTON ATAQUE AGUA
  buttonWater.addEventListener(`click`, () => {
    const elegidoAlly = setAllyPet();
    document.getElementById(`menssageally`).classList.remove(`hidden`);
    document.getElementById(`menssageenemie`).classList.remove(`hidden`);

    let foundPlayer = mokemons.find((element) => element.name == elegidoAlly);

    let ataqueFuerte = movStrong();
    let ataqueDebil = movWeaknes();
    let tipoAgua = foundPlayer.tipo.find((element) => element == movsElements[0]);
    let tipoFuego = elegidoEnemie.tipo.find((element) => element == movsElements[1]);
    let tipoTierra = elegidoEnemie.tipo.find((element) => element == movsElements[2]);
    debugger;
    if (tipoAgua && tipoTierra) {
      if (ataqueDebil > ataqueFuerte) {
        enemyLifes--;
        crearMensajeAlly();
      } else {
        userLifes--;
        crearMensajeEnemie();
      }
      lifeEnemy.innerHTML = enemyLifes;
      lifeUser.innerHTML = userLifes;
    } else if (tipoAgua && tipoFuego) {
      if (ataqueFuerte >= ataqueDebil) {
        enemyLifes--;
        crearMensajeAlly();
      } else {
        userLifes--;
        crearMensajeEnemie();
      }
      lifeEnemy.innerHTML = enemyLifes;
      lifeUser.innerHTML = userLifes;
    } else if (tipoAgua && tipoAgua) {
      if (movStrong() >= movStrong()) {
        enemyLifes--;
      } else {
        userLifes--;
      }
      lifeEnemy.innerHTML = enemyLifes;
      lifeUser.innerHTML = userLifes;
      crearMensajeAlly();
      crearMensajeEnemie();
    }

    function crearMensajeAlly() {
      let parrafo = document.createElement(`p`);
      let menssage = document.getElementById(`menssageally`);
      parrafo.innerHTML = `Atacaste con ${tipoAgua} el enemigo con ${
        tipoTierra || tipoFuego || tipoAgua
      }`;
      menssage.appendChild(parrafo);
    }
    function crearMensajeEnemie() {
      let parrafo = document.createElement(`p`);
      let menssage = document.getElementById(`menssageenemie`);
      parrafo.innerHTML = `Atacaste con ${tipoAgua} el enemigo con ${tipoTierra || tipoAgua}`;
      menssage.appendChild(parrafo);
    }

    const leftLifePLayer = setAllyLifes();
    const leftLifeEnemies = setEnemieLifes();
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
  });

  //// BOTON ATAQUE FUEGO

  //// BOTON ATAQUE FUEGO
  //// BOTON ATAQUE FUEGO

  buttonFire.addEventListener(`click`, () => {
    const elegidoAlly = setAllyPet();
    document.getElementById(`menssageally`).classList.remove(`hidden`);
    document.getElementById(`menssageenemie`).classList.remove(`hidden`);

    let foundPlayer = mokemons.find((element) => element.name == elegidoAlly);

    let ataqueFuerte = movStrong();
    let ataqueDebil = movWeaknes();
    let tipoAgua = elegidoEnemie.tipo.find((element) => element == movsElements[0]);
    let tipoFuego = foundPlayer.tipo.find((element) => element == movsElements[1]);
    let tipoTierra = elegidoEnemie.tipo.find((element) => element == movsElements[2]);
    debugger;
    if (tipoFuego && tipoAgua) {
      if (ataqueDebil > ataqueFuerte) {
        enemyLifes--;
        crearMensajeAlly();
      } else {
        userLifes--;
        crearMensajeEnemie();
      }
      lifeEnemy.innerHTML = enemyLifes;
      lifeUser.innerHTML = userLifes;
    } else if (tipoFuego && tipoTierra) {
      if (ataqueFuerte >= ataqueDebil) {
        enemyLifes--;
        crearMensajeAlly();
      } else {
        userLifes--;
        crearMensajeEnemie();
      }
      lifeEnemy.innerHTML = enemyLifes;
      lifeUser.innerHTML = userLifes;
    } else if (tipoFuego && tipoFuego) {
      if (movStrong() >= movStrong()) {
        enemyLifes--;
      } else {
        userLifes--;
      }
      lifeEnemy.innerHTML = enemyLifes;
      lifeUser.innerHTML = userLifes;
      crearMensajeAlly();
      crearMensajeEnemie();
    }

    function crearMensajeAlly() {
      let parrafo = document.createElement(`p`);
      let menssage = document.getElementById(`menssageally`);
      parrafo.innerHTML = `Atacaste con ${foundPlayer.tipo[movWeaknes()]} el enemigo con ${
        tipoAgua || tipoFuego || tipoAgua
      }`;
      menssage.appendChild(parrafo);
    }
    function crearMensajeEnemie() {
      let parrafo = document.createElement(`p`);
      let menssage = document.getElementById(`menssageenemie`);
      parrafo.innerHTML = `Atacaste con ${foundPlayer.tipo[movWeaknes()]} el enemigo con ${
        elegidoEnemie.tipo[movWeaknes()]
      }`;
      menssage.appendChild(parrafo);
    }

    const leftLifePLayer = setAllyLifes();
    const leftLifeEnemies = setEnemieLifes();
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
  });
 
 buttonSand.addEventListener(`click`, () => {
   const elegidoAlly = setAllyPet();
   document.getElementById(`menssageally`).classList.remove(`hidden`);
   document.getElementById(`menssageenemie`).classList.remove(`hidden`);

   let foundPlayer = mokemons.find((element) => element.name == elegidoAlly);

   let ataqueFuerte = movStrong();
   let ataqueDebil = movWeaknes();
   let tipoAgua = elegidoEnemie.tipo.find((element) => element == movsElements[0]);
   let tipoFuego = elegidoEnemie.tipo.find((element) => element == movsElements[1]);
   let tipoTierra = foundPlayer.tipo.find((element) => element == movsElements[2]);
   debugger;
   if (tipoTierra && tipoFuego) {
     if (ataqueDebil > ataqueFuerte) {
       enemyLifes--;
       crearMensajeAlly();
     } else {
       userLifes--;
       crearMensajeEnemie();
     }
     lifeEnemy.innerHTML = enemyLifes;
     lifeUser.innerHTML = userLifes;
   } else if (tipoTierra && tipoAgua) {
     if (ataqueFuerte >= ataqueDebil) {
       enemyLifes--;
       crearMensajeAlly();
     } else {
       userLifes--;
       crearMensajeEnemie();
     }
     lifeEnemy.innerHTML = enemyLifes;
     lifeUser.innerHTML = userLifes;
   } else if (tipoTierra && tipoTierra) {
     if (movStrong() >= movStrong()) {
       enemyLifes--;
     } else {
       userLifes--;
     }
     lifeEnemy.innerHTML = enemyLifes;
     lifeUser.innerHTML = userLifes;
     crearMensajeAlly();
     crearMensajeEnemie();
   }

   function crearMensajeAlly() {
     let parrafo = document.createElement(`p`);
     let menssage = document.getElementById(`menssageally`);
     parrafo.innerHTML = `Atacaste con ${foundPlayer.tipo[movWeaknes()]} el enemigo con ${
       elegidoEnemie.tipo[movWeaknes()]
     }`;
     menssage.appendChild(parrafo);
   }
   function crearMensajeEnemie() {
     let parrafo = document.createElement(`p`);
     let menssage = document.getElementById(`menssageenemie`);
     parrafo.innerHTML = `Atacaste con ${foundPlayer.tipo[movWeaknes()]} el enemigo con ${
       elegidoEnemie.tipo[movWeaknes()]
     }`;
     menssage.appendChild(parrafo);
   }

   const leftLifePLayer = setAllyLifes();
   const leftLifeEnemies = setEnemieLifes();
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
 });
}

////// BOTON ATAQUE ARENA
////// BOTON ATAQUE ARENA
////// BOTON ATAQUE ARENA
////// BOTON ATAQUE ARENA
////// BOTON ATAQUE ARENA
////// BOTON ATAQUE ARENA

// funcion para elegir mascota enemiga de manera aleatoria
function enemyPet() {
 let inputCheck = document.querySelectorAll(`.select`);
 let randomPet = Math.floor(Math.random() * (5 - 0 + 1) + 0);

 let eledido = mokemons[randomPet];
 // let eledido = `Hipoge`;
 // let eledido = `Charizard`;
 // let eledido = `Geoude`;
 // let eledido = `Pydos`;
 // let eledido = `Tucapalma`;

 // let eledido = `Langostelvis`;
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

// ANADIR BLOQUE

// acction de ataque

window.addEventListener(`load`, startPlay);

function restart() {
 let refresh = document.getElementById(`button-restart`);
 location.reload();
}

// if (
//   (mokemonForFight.tipo =
//     movsElements[0] && mokemonEnemieForFight.tipo.find((element) => element == movsElements[0]))
// ) {
//   console.log(`entra 0 0`);
//   if (ataqueFuerte > ataqueFuerte) {
//     console.log(`Golpeas`);
//   }
// }
// if (
//   (mokemonForFight.tipo =
//     movsElements[0] && mokemonEnemieForFight.tipo.find((element) => element == movsElements[1]))
// ) {
//   console.log(`entra 0 1`);
//   if (ataqueFuerte >= ataqueDebil) {
//     console.log(`Golpeas`);
//   }
// }
// if ((mokemonForFight.tipo = movsElements[0] && mokemonEnemieForFight.tipo == movsElements[2])) {
//   console.log(`entra 0 2`);
//   if (ataqueDebil < ataqueFuerte) {
//     console.log(`Te golpean`);
//   }
// }
