const numbers = [45, 44, 54, 98, 12, 35, 72, 81];
function maxNumber() {
  let bigNumber = 0;
  numbers.forEach(function (value, index) {
    if (value > bigNumber) {
      bigNumber = value;
      indexPosition = index;
    }
  });
  console.log(`El numero mas grande es ${bigNumber} y esta en la posicion ${indexPosition}`);
}



let numbers2 = [45, 44, 54, 98, 12, 35, 72, 81];
let MAXIMO = Math.max(...numbers2);
console.log(MAXIMO);
console.log(typeof MAXIMO);

