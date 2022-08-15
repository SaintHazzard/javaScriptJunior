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
       }
       else if (value == movsElements[1]) {
        buttonFire.classList.toggle(`button-moveon`);
        inputCheck.forEach((check) => check.classList.add(`hidden`));
       }
       else if (value == movsElements[2]) {
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

 function movWeaknes() {
  return Math.floor(Math.random() * (1 - 0 + 1) + 0);
 }
 function movStrong() {
  return Math.floor(Math.random() * (2 - 0 + 1) + 0);
 }

 // BUTTON ATTACK FUEGO
 buttonFire.addEventListener(`click`, () => {
  const elegidoAlly = setAllyPet();
  

  let foundPlayer = mokemons.findIndex((element) => element.name == elegidoAlly);
  let foundEnemy = mokemons.find((element) => element.name == elegido);

  // Fuego vs tierra
  let attackFuego = mokemons[foundPlayer].tipo.find((element) => element == movsElements[1])
  console.log(attackFuego);
  if ( attackFuego &&
   foundEnemy.tipo.find((element) => element == movsElements[2])
  ) {
   let attackUser = movStrong();
   let attackEnemy = movWeaknes();
   console.log(attackUser);
   console.log(attackEnemy);
   if (attackUser > attackEnemy) {
    enemyLifes--;
    console.log(`El ataque ha sido muy efectivo`);
   }
   if (attackUser < attackEnemy) {
    userLifes--;
    console.log(`Has recibido un golpe`);
   }
   if (attackEnemy == attackUser) {
    console.log(`Tu ataque ha fallado`);
   }
   lifeUser.innerHTML = userLifes;
   lifeEnemy.innerHTML = enemyLifes;
  
  }
 
  //Fuego vs fuego
  else if (
   mokemons[foundPlayer].tipo.find((element) => element == movsElements[1]) &&
   foundEnemy.tipo.find((element) => element == movsElements[1])
  ) {
   let attackUser = movWeaknes();
   let attackEnemy = movWeaknes();
   console.log(attackUser);
   console.log(attackEnemy);
   if (attackUser > attackEnemy) {
    enemyLifes--;
    console.log(`El ataque ha sido muy efectivo`);
   }
   if (attackUser < attackEnemy) {
    userLifes--;
    console.log(`Has recibido un golpe`);
   }
   if (attackEnemy == attackUser) {
    console.log(`Tu ataque ha fallado`);
   }
   lifeUser.innerHTML = userLifes;
   lifeEnemy.innerHTML = enemyLifes;
  }
  // Fuego vs Agua
  else if (
   mokemons[foundPlayer].tipo.find((element) => element == movsElements[1]) &&
   foundEnemy.tipo.find((element) => element == movsElements[0])
  ) {
   let attackUser = movWeaknes();
   let attackEnemy = movStrong();
   console.log(attackUser);
   console.log(attackEnemy);
   if (attackUser > attackEnemy) {
    enemyLifes--;
    console.log(`El ataque ha sido muy efectivo`);
   }
   if (attackUser < attackEnemy) {
    userLifes--;
    console.log(`Has recibido un golpe`);
   }
   if (attackEnemy == attackUser) {
    console.log(`Tu ataque ha fallado`);
   }
   lifeUser.innerHTML = userLifes;
   lifeEnemy.innerHTML = enemyLifes;
  }
  const leftLifePLayer = setAllyLifes();
  const leftLifeEnemies = setEnemieLifes();
  console.log(leftLifeEnemies);
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

  let foundPlayer = mokemons.findIndex((element) => element.name == elegidoAlly);
  let foundEnemy = mokemons.find((element) => element.name == elegido);

  // Agua vs Fuego

  if (
   mokemons[foundPlayer].tipo.find((element) => element == movsElements[0]) &&
   foundEnemy.tipo.find((element) => element == movsElements[1])
  ) {
   let attackUser = movStrong();
   let attackEnemy = movWeaknes();
   console.log(attackUser);
   console.log(attackEnemy);
   if (attackUser > attackEnemy) {
    enemyLifes--;
    console.log(`El ataque ha sido muy efectivo`);
   }
   if (attackUser < attackEnemy) {
    userLifes--;
    console.log(`Has recibido un golpe`);
   }
   if (attackEnemy == attackUser) {
    console.log(`Tu ataque ha fallado`);
   }
   lifeUser.innerHTML = userLifes;
   lifeEnemy.innerHTML = enemyLifes;
  }
  // Agua vs agua
  else if (
   mokemons[foundPlayer].tipo.find((element) => element == movsElements[0]) &&
   foundEnemy.tipo.find((element) => element == movsElements[0])
  ) {
   let attackUser = movWeaknes();
   let attackEnemy = movWeaknes();
   console.log(attackUser);
   console.log(attackEnemy);
   if (attackUser > attackEnemy) {
    enemyLifes--;
    console.log(`El ataque ha sido muy efectivo`);
   }
   else if (attackUser < attackEnemy) {
    userLifes--;
    console.log(`Has recibido un golpe`);
   }
   else if (attackEnemy == attackUser) {
    console.log(`Tu ataque ha fallado`);
   }
   lifeUser.innerHTML = userLifes;
   lifeEnemy.innerHTML = enemyLifes;
  }
  // Agua vs Tierra
  else if (
   mokemons[foundPlayer].tipo.find((element) => element == movsElements[0]) &&
   foundEnemy.tipo.find((element) => element == movsElements[2])
  ) {
   let attackUser = movWeaknes();
   let attackEnemy = movStrong();
   console.log(attackUser);
   console.log(attackEnemy);
   if (attackUser > attackEnemy) {
    enemyLifes--;
    console.log(`El ataque ha sido muy efectivo`);
   }
   if (attackUser < attackEnemy) {
    userLifes--;
    console.log(`Has recibido un golpe`);
   }
   if (attackEnemy == attackUser) {
    console.log(`Tu ataque ha fallado`);
   }
   lifeUser.innerHTML = userLifes;
   lifeEnemy.innerHTML = enemyLifes;
  }
  const leftLifePLayer = setAllyLifes();
  const leftLifeEnemies = setEnemieLifes();
  console.log(leftLifeEnemies);
  if (leftLifeEnemies <= 0) {
   alert(`Enemigo derrotado`);
  }
  if (leftLifePLayer <= 0) {
   alert(`Has sido derrotado`);
  }
 });

 buttonSand.addEventListener(`click`, () => {
  const elegidoAlly = setAllyPet();

  let foundPlayer = mokemons.findIndex((element) => element.name == elegidoAlly);
  let foundEnemy = mokemons.find((element) => element.name == elegido);

  // Tierra vs Agua

  if (
   mokemons[foundPlayer].tipo.find((element) => element == movsElements[2]) &&
   foundEnemy.tipo.find((element) => element == movsElements[0])
  ) {
   let attackUser = movStrong();
   let attackEnemy = movWeaknes();
   console.log(attackUser);
   console.log(attackEnemy);
   if (attackUser > attackEnemy) {
    enemyLifes--;
    console.log(`El ataque ha sido muy efectivo`);
   }
   if (attackUser < attackEnemy) {
    userLifes--;
    console.log(`Has recibido un golpe`);
   }
   if (attackEnemy == attackUser) {
    console.log(`Tu ataque ha fallado`);
   }
   lifeUser.innerHTML = userLifes;
   lifeEnemy.innerHTML = enemyLifes;
  }
  //Tierra vs Tierra
  if (
   mokemons[foundPlayer].tipo.find((element) => element == movsElements[2]) &&
   foundEnemy.tipo.find((element) => element == movsElements[2])
  ) {
   let attackUser = movWeaknes();
   let attackEnemy = movWeaknes();
   console.log(attackUser);
   console.log(attackEnemy);
   if (attackUser > attackEnemy) {
    enemyLifes--;
    console.log(`El ataque ha sido muy efectivo`);
   }
   if (attackUser < attackEnemy) {
    userLifes--;
    console.log(`Has recibido un golpe`);
   }
   if (attackEnemy == attackUser) {
    console.log(`Tu ataque ha fallado`);
   }
   lifeUser.innerHTML = userLifes;
   lifeEnemy.innerHTML = enemyLifes;
  }
  // Tierra vs fuego
  if (
   mokemons[foundPlayer].tipo.find((element) => element == movsElements[2]) &&
   foundEnemy.tipo.find((element) => element == movsElements[1])
  ) {
   let attackUser = movWeaknes();
   let attackEnemy = movStrong();
   console.log(attackUser);
   console.log(attackEnemy);
   if (attackUser > attackEnemy) {
    enemyLifes--;
    console.log(`El ataque ha sido muy efectivo`);
   }
   if (attackUser < attackEnemy) {
    userLifes--;
    console.log(`Has recibido un golpe`);
   }
   if (attackEnemy == attackUser) {
    console.log(`Tu ataque ha fallado`);
   }
   lifeUser.innerHTML = userLifes;
   lifeEnemy.innerHTML = enemyLifes;
  }
  const leftLifePLayer = setAllyLifes();
  const leftLifeEnemies = setEnemieLifes();
  console.log(leftLifeEnemies);
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

 // let eledido = inputCheck[randomPet].id;
 let eledido = `Tucapalma`;
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
