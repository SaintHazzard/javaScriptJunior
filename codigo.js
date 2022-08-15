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
    { name: 'Charizard', tipo: ['fuego'] },
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
                inputCheck.forEach((check) => check.classList.toggle(`hidden`));
              }
              if (value == movsElements[1]) {
                buttonFire.classList.toggle(`button-moveon`);
                inputCheck.forEach((check) => check.classList.toggle(`hidden`));
              }
              if (value == movsElements[2]) {
                buttonSand.classList.toggle(`button-moveon`);
                inputCheck.forEach((check) => check.classList.toggle(`hidden`));
              }
            });
          }
        });
      }
    });
   } )

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
 
 

 buttonFire.addEventListener(`click`, () => {
  const elegidoAlly = setAllyPet();

   let foundPlayer1 = mokemons.find((element) => element.name == elegidoAlly);
   let foundPlayer = mokemons.findIndex((element) => element.name == elegidoAlly);
   let foundEnemy = mokemons.find((element) => element.name == elegido);
   
   console.log(foundPlayer1);
   console.log(elegidoAlly);
   console.log(elegido);
   console.log(foundPlayer);
  console.log(foundEnemy);
  console.log(mokemons[foundPlayer]);
 
  
  

  
  
  
    if (mokemons[foundPlayer].tipo == movsElements[1] && foundEnemy.tipo == movsElements[2]) { 
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
    } else {
     
   }
   if (foundPlayer.tipo === movsElements[1] && foundEnemy.tipo === movsElements[0]) {
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
   }if ((foundPlayer.tipo = movsElements[1] && foundEnemy.tipo == movsElements[1])) {
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
 });
 




 // boton ataque de agua
  buttonWater.addEventListener(`click`, () => {
    let foundPlayer = mokemons.find(element1 => element1.name == namePet);
    let foundEnemy = mokemons.find(element => element.name == elegido);
    if (foundPlayer.tipo == movsElements[0] && foundEnemy.tipo == movsElements[1]) {
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
  });
 
  buttonSand.addEventListener(`click`, () => {
    
    if (foundPlayer.tipo == movsElements[2] && foundEnemy.tipo == movsElements[0]) {
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
  });
}

// funcion para elegir mascota enemiga de manera aleatoria
function enemyPet() {
  let inputCheck = document.querySelectorAll(`.select`);
  let randomPet = Math.floor(Math.random() * (5 - 0 + 1) + 0);

  let eledido = inputCheck[randomPet].id;
  return eledido;
}

// funcion para elegir mascota del jugador

function setAllyPet() {
 const test = document.getElementById(`mascotajugador`).outerText;
 const test1 = document.getElementById(`mascotajugador`).textContent;
 return test
}


 

// acction de ataque

window.addEventListener(`load`, startPlay);

function restart() {
  let refresh = document.getElementById(`button-restart`);
  refresh.addEventListener(`click`, (_) => {
    location.reload();
  });
}
