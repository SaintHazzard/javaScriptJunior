// Inicializo variables

autos = [];
salir = false;

// Creo la clase vehiculo

class vehiculo {
  constructor(brand, year, model) {
    this.brand = brand;
    this.year = year;
    this.model = model;
  }
  addVehicle(brand, year, model) {}
  // getter and setter brand
  
}

// code for add and remove data
console.log(eleccion);
console.log(salir);
 while (!salir) {
  var eleccion = parseInt(prompt(`1. Add vehicle \n 2. Remove vehicle \n 3.Exit \n`));
  switch (eleccion) {
    case 1:
      var marca = prompt(`Brand of vehicle?`);
      var year = prompt(`Fabrication year?`);
      var model = prompt(`Model of vehicle?`);
      car = new vehiculo(marca, year, model);
      autos.push(car);

      break;
    case 2:
      break;

    case 3:
      salir = true;

    default:
      break;
  }
 }
 
 


console.log(salir);

// function newFunction() {
//   autos = new vehiculo(`toyota`, 2022, tsuru);
// }

const fruits = () => { if (true) { var fruit1 = 'apple'; const fruit2 = 'banana'; let fruit3 = 'kiwi'; } console.log(fruit); }

console.log(fruits);
fruits()

