function addValue() {
 let inputCheck = document.querySelectorAll(`.select`);
 inputCheck.forEach(Element => {
  let addValue =Element.getAttribute(`id`)
  Element.setAttribute(`value`, addValue );
 })
 // let idAdd=inputCheck.getAttribute(`id`);
 // inputCheck.setAttribute(`value`, idAdd );
 console.log(inputCheck);
}

// function selectPetPlayer() {

 
// }


// let selectpet = document.getElementById(`button-select-pet`)

// selectpet.addEventListener(`click`, selectPetPlayer())