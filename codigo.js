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
    { name: `Charizard`, tipo: [`fuego`] },
    { name: `Hipoge`, tipo: [`agua`] },
    { name: `Geoude`, tipo: [`tierra`] },
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
         element.tipo.forEach((value) => {
          if (value == movsElements[0]) {
           buttonWater.classList.toggle(`button-moveon`)
           inputCheck.forEach((check) => check.classList.toggle(`hidden`))
          }
          if (value == movsElements[1]) {
           buttonFire.classList.toggle(`button-moveon`);
           inputCheck.forEach((check) => check.classList.toggle(`hidden`));
          }
          if (value == movsElements[2]) {
           buttonSand.classList.toggle(`button-moveon`);
           inputCheck.forEach((check) => {if (buttonSand.classList.contains(``)) {
            
           }});
          }
         }) 
        }
       });
      }
    });
  });
 
  console.log(mokemons);
}

window.addEventListener(`load`, startPlay);
