function addValue() {
  let inputCheck = document.querySelectorAll(`.select`);
  inputCheck.forEach((Element) => {
    let addValue = Element.getAttribute(`id`);
    Element.setAttribute(`value`, addValue.toLocaleLowerCase());
  });
}

function startPlay() {
  const movsElements = [`agua`, `fuego`, `tierra`];
 const buttonFire = document.getElementById(`button-fire`);
 const buttonWater = document.getElementById(`button-water`);
 const buttonSand = document.getElementById(`button-sand`);
  const mokemons = [
    { name: `Charizard`, tipo: `fuego` },
    { name: `Hipoge`, tipo: `agua` },
    { name: `Geoude`, tipo: `tierra` },
    { name: `Pydos`, tipo: [`tierra`, `fuego`] },
    { name: `Tucapalma`, tipo: [`agua`, `tierra`] },
    { name: `Langostelvis`, tipo: [`agua`, `fuego`] },];
  const inputCheck = document.querySelectorAll(`.select`);
  const selectPetPlayer = document.getElementById(`button-select-pet`);
  selectPetPlayer.addEventListener(`click`, () => {
   inputCheck.forEach((element) => {
     let selectedMokemon = element.id;
      if (element.checked) {
       mokemons.forEach((element) => {
        if (element.name == selectedMokemon) {
          console.log(element.tipo);
           if (element.tipo == movsElements[1]) {
            buttonFire.classList.toggle(`button-moveoff`);
            buttonWater.classList.toggle(`button-moveon`);
            buttonSand.classList.toggle(`button-moveon`);
         }
         if (element.tipo == `agua`) {
           buttonFire.classList.toggle(`button-moveon`);
           buttonWater.classList.toggle(`button-moveoff`);
           buttonSand.classList.toggle(`button-moveon`);
         }
         if (element.tipo == `tierra`) {
           buttonSand.classList.toggle(`button-moveoff`);
         }
         }
       });
      }
    });
  });
 
  console.log(mokemons);
}

window.addEventListener(`load`, startPlay);
