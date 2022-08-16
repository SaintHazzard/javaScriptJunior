function addValue() {
 let inputCheck = document.querySelectorAll(`.select`);
 inputCheck.forEach((Element) => {
  let addValue = Element.getAttribute(`id`);
  Element.setAttribute(`value`, addValue.toLocaleLowerCase());
 });
}

function startPlay() {
 const inputCheck = document.querySelectorAll(`.select`);
 const movsElements = [`agua`, `fuego`, `tierra`];
 const namePet = document.getElementById(`mascotajugador`);
 const namePetEnemy = document.getElementById(`mascotaenemigo`);
 const divMovs = document.getElementById(`select-mov`);
 const buttonFire = document.getElementById(`button-fire`);
 const buttonWater = document.getElementById(`button-water`);
 const buttonSand = document.getElementById(`button-sand`);
 const elegido = enemyPet();

 const mokemons = [
  { name: "Charizard", tipo: ["fuego"] },
  { name: `Hipoge`, tipo: [`agua`] },
  { name: `Geoude`, tipo: [`tierra`] },
  { name: `Pydos`, tipo: [`tierra`, `fuego`] },
  { name: `Tucapalma`, tipo: [`agua`, `tierra`] },
  { name: `Langostelvis`, tipo: [`agua`, `fuego`] },
 ];

 const selectPetPlayer = document.getElementById(`button-select-pet`);
 selectPetPlayer.addEventListener(`click`, () => {
  inputCheck.forEach((element) => {
   let selectedMokemon = element.id;

   if (element.checked) {
    namePetEnemy.innerHTML = elegido;
    mokemons.forEach((element) => {
     if (element.name == selectedMokemon) {
      namePet.innerHTML = element.name;
      divMovs.classList.toggle(`hidden`);
      element.tipo.forEach((value) => {
       if (value == movsElements[0]) {
        buttonWater.classList.toggle(`button-moveon`);
        inputCheck.forEach((check) => check.classList.add(`hidden`));
       } else if (value == movsElements[1]) {
        buttonFire.classList.toggle(`button-moveon`);
        inputCheck.forEach((check) => check.classList.add(`hidden`));
       } else if (value == movsElements[2]) {
        buttonSand.classList.toggle(`button-moveon`);
        inputCheck.forEach((check) => check.classList.add(`hidden`));
       }
      });
     }
    });
   }
  });
 });

 // evento del boton de ataque
 let enemyLifes = 3;
 let userLifes = 3;
 let lifeUser = document.getElementById(`vidasjugador`);
 let lifeEnemy = document.getElementById(`vidasenemigo`);
 let ataquePlayer = document.createElement(`p`);
 let ataqueenemigo = document.getElementById(`ataqueplayer`);
 let msj = document.getElementById(`menssage`);

 function movWeaknes() {
  return Math.floor(Math.random() * 0 + 0);
 }
 function movStrong() {
  return Math.floor(Math.random() * (1 - 0 + 1) + 0);
 }

 // BUTTON ATTACK FUEGO
 buttonFire.addEventListener(`click`, () => {
  const elegidoAlly = setAllyPet();

  let foundPlayer = mokemons.find((element) => element.name == elegidoAlly);
  let foundEnemy = mokemons.find((element) => element.name == elegido);

  // Fuego vs tierra

  if (
   foundPlayer.tipo.find((element) => element == movsElements[1]) &&
   foundEnemy.tipo.find((element) => element == movsElements[2])
  ) {
   let attackUser = foundPlayer.tipo[movStrong()];
   let attackEnemy = foundEnemy.tipo[movStrong()];
   console.log(attackUser);
   console.log(attackEnemy);
   if (attackUser == movsElements[1] && attackEnemy == movsElements[2]) {
    enemyLifes--;
    ataquePlayer.innerHTML = `Atacaste con ${attackUser} y el mokemon enemigo con ${attackEnemy}. Ataque muy efectivo`;
   } else if (attackUser == undefined && attackEnemy == movsElements[2]) {
    enemyLifes--;
    ataquePlayer.innerHTML = `Atacaste con fuego pero fallaste y el mokemon enemigo con ${attackEnemy}. Has recibido un golpe`;
   } else if (attackUser == movsElements[1] && attackEnemy == undefined) {
    enemyLifes--;
    ataquePlayer.innerHTML = `Atacaste con ${attackUser} y el mokemon enemigo con tierra. Enemigo golpeado`;
   } else if (attackUser == undefined && attackEnemy == undefined) {
    enemyLifes--;
    ataquePlayer.innerHTML = `Atacaste con fuego y el mokemon enemigo con fuego. Enemgio golpeado`;
   } else if (attackUser == movsElements[1] && attackEnemy == movsElements[0]) {
    userLifes--;
    ataquePlayer.innerHTML = `Atacaste con fuego y el mokemon enemigo con agua. Has recibido un golpe`;
   } else if (attackUser == undefined && attackEnemy == movsElements[1]) {
    userLifes--;
    ataquePlayer.innerHTML = `Atacaste con fuego pero fallaste y el mokemon enemigo con fuego. Has recibido un golpe`;
   } else if (attackUser == undefined && attackEnemy == movsElements[0]) {
    userLifes--;
    ataquePlayer.innerHTML = `Te atacaron con agua -1 vida`;
   }

   lifeUser.innerHTML = userLifes;
   lifeEnemy.innerHTML = enemyLifes;
   console.log(`fuego vs tierra`);
  }

  //Fuego vs fuego
  else if (
   foundPlayer.tipo.find((element) => element == movsElements[1]) &&
   foundEnemy.tipo.find((element) => element == movsElements[1])
  ) {
   let attackUser = foundPlayer.tipo[movStrong()];
   let attackEnemy = foundEnemy.tipo[movStrong()];
   console.log(attackUser);
   console.log(attackEnemy);
   if (attackUser == movsElements[1] && attackEnemy == undefined) {
    enemyLifes--;
    ataquePlayer.innerHTML = `Atacaste con fuego y el mokemon enemigo con fuego. Golpeaste`;
   } else if (attackUser == undefined && attackEnemy == movsElements[1]) {
    userLifes--;
    ataquePlayer.innerHTML = `Atacaste con fuego pero fallaste y el mokemon enemigo con fuego. Has recibido un golpe`;
   } else if (
    (attackUser == undefined || attackUser == movsElements[1]) &&
    (attackEnemy == undefined || attackEnemy == movsElements[1])
   ) {
    enemyLifes--;
    ataquePlayer.innerHTML = `Atacaste con fuego y el mokemon enemigo con fuego y fallo. Golpeaste`;
   } else if (attackUser == undefined && attackEnemy == movsElements[0]) {
    userLifes--;
    ataquePlayer.innerHTML = `Te atacaron con agua -1 vida`;
   } else if (attackUser === movsElements[1] && attackEnemy === movsElements[0]) {
    userLifes--;
    ataquePlayer.innerHTML = `Te atacaron con agua -1 vida`;
   }

   lifeUser.innerHTML = userLifes;
   lifeEnemy.innerHTML = enemyLifes;
   console.log(`fuego vs fuego`);
  }
  // Fuego vs Agua
  else if (
   foundPlayer.tipo.find((element) => element == movsElements[1]) &&
   foundEnemy.tipo.find((element) => element == movsElements[0])
  ) {
   let attackUser = foundPlayer.tipo[movStrong()];
   let attackEnemy = foundEnemy.tipo[movStrong()];
   console.log(attackUser);
   console.log(attackEnemy);
   if (attackUser == movsElements[1] && attackEnemy == movsElements[0]) {
    userLifes--;
    ataquePlayer.innerHTML = `Atacaste con fuego y el mokemon enemigo con agua. Has recibido un golpe`;
   } else if (attackUser == undefined && attackEnemy == undefined) {
    userLifes--;
    ataquePlayer.innerHTML = `Atacaste con fuego y el mokemon enemigo con agua. Te golpearon`;
   } else if (attackUser == undefined && attackEnemy == movsElements[0]) {
    userLifes--;
    ataquePlayer.innerHTML = `Atacaste con fuego pero fallaste y el mokemon enemigo con agua. Has recibido un golpe fuego vs agua`;
   } else if (attackUser == movsElements[1] && attackEnemy == undefined) {
    enemyLifes--;
    ataquePlayer.innerHTML = `Atacaste con fuego y el mokemon enemigo con agua pero fallo. Lo golpeaste`;
   }
   lifeUser.innerHTML = userLifes;
   lifeEnemy.innerHTML = enemyLifes;
   console.log(`fuego vs agua`);
  }
  const leftLifePLayer = setAllyLifes();
  const leftLifeEnemies = setEnemieLifes();
  if (leftLifeEnemies <= 0) {
   alert(`Enemigo derrotado`);
  }
  if (leftLifePLayer <= 0) {
   alert(`Has sido derrotado`);
  }
 });

 // boton ataque de agua
 buttonWater.addEventListener(`click`, () => {
  const elegidoAlly = setAllyPet();

  let foundPlayer = mokemons.find((element) => element.name == elegidoAlly);
  let foundEnemy = mokemons.find((element) => element.name == elegido);

  // Fuego vs tierra

  if (
   foundPlayer.tipo.find((element) => element == movsElements[0]) &&
   foundEnemy.tipo.find((element) => element == movsElements[2])
  ) {
   let attackUser = foundPlayer.tipo[movStrong()];
   let attackEnemy = foundEnemy.tipo[movStrong()];
   console.log(attackUser);
   console.log(attackEnemy);
   if (attackUser == movsElements[0] && attackEnemy == movsElements[2]) {
    userLifes--;
    ataquePlayer.innerHTML = `Atacaste con ${attackUser} y el mokemon enemigo con ${attackEnemy}. Te golpean`;
   } else if (attackUser == undefined && attackEnemy == movsElements[2]) {
    userLifes--;
    ataquePlayer.innerHTML = `Atacaste con agua y el mokemon enemigo con ${attackEnemy}. ambos han recibido un golpe`;
   } else if (attackUser == movsElements[0] && attackEnemy == undefined) {
    enemyLifes--;
    ataquePlayer.innerHTML = `Atacaste con ${attackUser} y el mokemon enemigo con tierra. Enemigo golpeado`;
   } else if (attackUser == undefined && attackEnemy == undefined) {
    userLifes--;
    ataquePlayer.innerHTML = `Atacaste con fuego y el mokemon enemigo con fuego. Enemgio golpeado`;
   } else if (attackUser == movsElements[0] && attackEnemy == movsElements[0]) {
    userLifes--;
    enemyLifes--;
    ataquePlayer.innerHTML = `Atacaste con fuego y el mokemon enemigo con agua. Has recibido un golpe`;
   } else if (attackUser == undefined && attackEnemy == movsElements[2]) {
    userLifes--;
    ataquePlayer.innerHTML = `Atacaste con fuego pero fallaste y el mokemon enemigo con fuego. Has recibido un golpe`;
   } else if (attackUser == undefined && attackEnemy == movsElements[0]) {
    enemyLifes--;
    ataquePlayer.innerHTML = `Golpeaste con agua`;
   } else if (attackUser == undefined && attackEnemy == movsElements[1]) {
    enemyLifes--;
    userLifes--;
    ataquePlayer.innerHTML = `Atacas con agua y el enemigo con fuego. Ambos golpean`;
   } else if (attackUser == movsElements[0] && attackEnemy == movsElements[1]) {
    enemyLifes--;
    ataquePlayer.innerHTML = `Atacas con agua y el enemigo con fuego. Solo tu golpeas`;
   } else if (attackUser == undefined && attackEnemy == movsElements[1]) {
    ataquePlayer.innerHTML = `Atacas con agua y el enemigo con fuego. Solo tu golpeas`;
   }

   lifeUser.innerHTML = userLifes;
   lifeEnemy.innerHTML = enemyLifes;
   console.log(`agua vs tierra`);
  }

  //agua vs fuego
  else if (
   foundPlayer.tipo.find((element) => element == movsElements[0]) &&
   foundEnemy.tipo.find((element) => element == movsElements[1])
  ) {
   let attackUser = foundPlayer.tipo[movStrong()];
   let attackEnemy = foundEnemy.tipo[movStrong()];
   console.log(attackUser);
   console.log(attackEnemy);
   if (attackUser == movsElements[0] && attackEnemy == undefined) {
    enemyLifes--;
    ataquePlayer.innerHTML = `Atacaste con fuego y el mokemon enemigo con fuego. Golpeaste`;
   } else if (attackUser == undefined && attackEnemy == movsElements[1]) {
    enemyLifes--;
    ataquePlayer.innerHTML = `Atacaste con fuego pero fallaste y el mokemon enemigo con fuego. Has recibido un golpe`;
   } else if (
    (attackUser == undefined || attackUser == movsElements[0]) &&
    (attackEnemy == undefined || attackEnemy == movsElements[1])
   ) {
    enemyLifes--;
    ataquePlayer.innerHTML = `Atacaste con fuego y el mokemon enemigo con fuego y fallo. Golpeaste`;
   } else if (attackUser == undefined && attackEnemy == movsElements[0]) {
    userLifes--;
    ataquePlayer.innerHTML = `Te atacaron con agua -1 vida`;
   } else if (attackUser === movsElements[1] && attackEnemy === movsElements[0]) {
    userLifes--;
    ataquePlayer.innerHTML = `Te atacaron con agua -1 vida`;
   } else if (attackUser == undefined && attackEnemy == movsElements[1]) {
    enemyLifes--;
    ataquePlayer.innerHTML = `Golpeas con agua, el enemigo golpea con fuego. Le has dado`;
   }

   lifeUser.innerHTML = userLifes;
   lifeEnemy.innerHTML = enemyLifes;
   console.log(`agua vs fuego`);
  }
  // AGUA vs Agua
  else if (
   foundPlayer.tipo.find((element) => element == movsElements[0]) &&
   foundEnemy.tipo.find((element) => element == movsElements[0])
  ) {
   let attackUser = foundPlayer.tipo[movStrong()];
   let attackEnemy = foundEnemy.tipo[movStrong()];
   console.log(attackUser);
   console.log(attackEnemy);
   if (attackUser == movsElements[0] && attackEnemy == movsElements[0]) {
    userLifes--;
    enemyLifes--;
    ataquePlayer.innerHTML = `Atacaste con agua y el mokemon enemigo con agua. ambos golpearon`;
   } else if (attackUser == undefined && attackEnemy == undefined) {
    userLifes--;
    enemyLifes--;
    ataquePlayer.innerHTML = `Atacaste con agua y el mokemon enemigo con agua. Te golpearon`;
   } else if (attackUser == undefined && attackEnemy == movsElements[0]) {
    userLifes--;
    ataquePlayer.innerHTML = `Atacaste con fuego pero fallaste y el mokemon enemigo con agua. Has recibido un golpe fuego vs agua`;
   } else if (attackUser == movsElements[0] && attackEnemy == undefined) {
    enemyLifes--;
    ataquePlayer.innerHTML = `Atacaste con fuego y el mokemon enemigo con agua pero fallo. Lo golpeaste`;
   }
   lifeUser.innerHTML = userLifes;
   lifeEnemy.innerHTML = enemyLifes;
   console.log(`agua vs agua`);
  }
  const leftLifePLayer = setAllyLifes();
  const leftLifeEnemies = setEnemieLifes();
  if (leftLifeEnemies <= 0) {
   alert(`Enemigo derrotado`);
  }
  if (leftLifePLayer <= 0) {
   alert(`Has sido derrotado`);
  }
 });

 ////// BOTON ATAQUE ARENA
 ////// BOTON ATAQUE ARENA
 ////// BOTON ATAQUE ARENA
 ////// BOTON ATAQUE ARENA
 ////// BOTON ATAQUE ARENA
 ////// BOTON ATAQUE ARENA
 buttonSand.addEventListener(`click`, () => {
  const elegidoAlly = setAllyPet();

  let foundPlayer = mokemons.find((element) => element.name == elegidoAlly);
  let foundEnemy = mokemons.find((element) => element.name == elegido);

  // Tierra vs Agua

  if (
   foundPlayer.tipo.find((element) => element == movsElements[2]) &&
   foundEnemy.tipo.find((element) => element == movsElements[0])
  ) {
   let attackUser = foundPlayer.tipo[movStrong()];
   let attackEnemy = foundEnemy.tipo[movStrong()];
   console.log(attackUser);
   console.log(attackEnemy);
   // Tierra vs Agua gana por ventaja de elementp
   if (attackUser == movsElements[2] && attackEnemy == movsElements[0]) {
     enemyLifes--;
     ataquePlayer.innerHTML = `Atacaste con Tierra y el mokemon enemigo con agua. Golpeaste efectivamente`;
   }
   // Tierra vs enemigo agua falla
   else if (attackUser == movsElements[2] && attackEnemy == undefined) {
     enemyLifes--;
     ataquePlayer.innerHTML = `Atacaste con Tierra y el mokemon enemigo con agua. Golpeaste efectivamente`;
   }
   // tierra Fallo vs enemigo agua ataca
   else if (attackUser == undefined && attackEnemy == movsElements[0]) {
     userLifes--;
     ataquePlayer.innerHTML = `Atacaste con Tierra fallo y el mokemon enemigo con agua. Te golpean`;
   } else if (attackUser == undefined && attackEnemy == movsElements[1]) {
     userLifes--;
     ataquePlayer.innerHTML = `Atacaste con Tierra fallo y el mokemon enemigo con fuego. Te golpean`;
   }
   lifeUser.innerHTML = userLifes;
   lifeEnemy.innerHTML = enemyLifes;
   console.log(`Tierra vs agua`);
   
  }
  //Tierra vs fuego
  else if (
   foundPlayer.tipo.find((element) => element == movsElements[2]) &&
   foundEnemy.tipo.find((element) => element == movsElements[1])
  ) {
   let attackUser = foundPlayer.tipo[movStrong()];
   let attackEnemy = foundEnemy.tipo[movStrong()];
   console.log(attackUser);
   console.log(attackEnemy);
   if ((attackUser == movsElements[2]) & (attackEnemy == movsElements[2])) {
     enemyLifes--;
     userLifes--;
     ataquePlayer.innerHTML = `Atacaste con Tierra y el mokemon enemigo con Tierra. Ambos golpean`;
   }
   if (attackUser == movsElements[2] && attackEnemy == movsElements[1]) {
    userLifes--;
    ataquePlayer.innerHTML = `Atacaste con Tierra fallo y el mokemon enemigo con fuego. Te golpean`;
   }
   if (attackUser == movsElements[2] && attackEnemy == undefined) {
    enemyLifes--;
    ataquePlayer.innerHTML = `Atacaste con Tierra fallo y el mokemon enemigo con fuego. Te golpean`;
   }
   if (attackUser == undefined && attackEnemy == movsElements[1]) {
    userLifes--;
    ataquePlayer.innerHTML = `Atacaste con Tierra fallo y el mokemon enemigo con fuego. Te golpean`;
   }
   if (attackUser == undefined && attackEnemy == movsElements[2]) {
     userLifes--;
     ataquePlayer.innerHTML = `Atacaste con Tierra fallo y el mokemon enemigo con fuego. Te golpean`;
   }
   if (attackUser == undefined && attackEnemy == undefined) {
    userLifes--;
    ataquePlayer.innerHTML = `Atacaste con Tierra fallo y el mokemon enemigo con fuego. Te golpean`;
   }
   lifeUser.innerHTML = userLifes;
   lifeEnemy.innerHTML = enemyLifes;
   console.log(`Tierra vs fuego`);
  }
  else if (
   foundPlayer.tipo.find((element) => element == movsElements[2]) &&
   foundEnemy.tipo.find((element) => element == movsElements[2])
  ) {
   let attackUser = foundPlayer.tipo[movStrong()];
   let attackEnemy = foundEnemy.tipo[movStrong()];
   console.log(attackUser);
   console.log(attackEnemy);
   if (attackUser == movsElements[2] & attackEnemy==movsElements[2]) {
    enemyLifes--;
    userLifes--;
    ataquePlayer.innerHTML = `Atacaste con Tierra y el mokemon enemigo con Tierra. Ambos golpean`;
   }
   if ((attackUser == undefined) & (attackEnemy == undefined)) {
     enemyLifes--;
     userLifes--;
     ataquePlayer.innerHTML = `Atacaste con Tierra y el mokemon enemigo con Tierra. Ambos golpean`;
   }
   if ((attackUser == movsElements[2]) & (attackEnemy == undefined)) {
     enemyLifes--;
     ataquePlayer.innerHTML = `Atacaste con Tierra y el mokemon enemigo con Tierra pero falla. Golpeas`;
   }
   if ((attackUser == undefined) & (attackEnemy == movsElements[2])) {
     userLifes--;
     ataquePlayer.innerHTML = `Atacaste con Tierra pero fallas y el mokemon enemigo con Tierra. Te golpean`;
   }
   lifeUser.innerHTML = userLifes;
   lifeEnemy.innerHTML = enemyLifes;
   console.log(`Tierra vs Tierra`);
  }
  const leftLifePLayer = setAllyLifes();
  const leftLifeEnemies = setEnemieLifes();

  if (leftLifeEnemies <= 0) {
   alert(`Enemigo derrotado`);
  }
  if (leftLifePLayer <= 0) {
   alert(`Has sido derrotado`);
  }
 });
}

// funcion para elegir mascota enemiga de manera aleatoria
function enemyPet() {
 let inputCheck = document.querySelectorAll(`.select`);
 let randomPet = Math.floor(Math.random() * (5 - 0 + 1) + 0);

 let eledido = inputCheck[randomPet].id;
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

// acction de ataque

window.addEventListener(`load`, startPlay);

function restart() {
 let refresh = document.getElementById(`button-restart`);
 location.reload();
}
