
function addValue() {
 let inputCheck = document.querySelectorAll(`.select`);
  inputCheck.forEach((Element) => {
    let addValue = Element.getAttribute(`id`);
    Element.setAttribute(`value`, addValue.toLocaleLowerCase());
  });
}


function startPlay() {
 const movsElements = [`agua`, `fuego`, `tierra`]
 
 const mokemons = { Charizard: [`fuego` || movsElements[1], `dragon `], Hipoge: `agua`, Geoude: `tierra`, Pydos: [`tierra`, `fuego`], Tucapalma: [`agua`, `tierra`], Langostelvis: [`agua`, `fuego`] }
 const inputCheck = document.querySelectorAll(`.select`);
  const selectPetPlayer = document.getElementById(`button-select-pet`);
 selectPetPlayer.addEventListener(`click`, () => {
  inputCheck.forEach((element) => {
   if (element.checked) {
    let selectedMokemon = element.id;
    console.log(`You selected to ${mokemons.element.id}`);
    
   }
  })
 });
 console.log(mokemons);
}

window.addEventListener(`load`, startPlay);

