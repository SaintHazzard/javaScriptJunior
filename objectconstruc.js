// Inicializo variables

const autos = [];
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
  get brand() {
    return this.brand;
  }
  set brand(newBrand) {
    this.brand = newBrand;
  }
  // getter and setter year
  get year() {
    return this.year;
  }
  set year(newYear) {
    this.year = newYear;
  }
  //getter and setter model
  get model() {
    return this.model;
  }
  set model(newModel) {
    this.model = newModel;
  }
}

// code for add and remove data
console.log(salir);

while (!salir) {
  var eleccion = parseInt(prompt(`1. Add vehicle \n 2. Remove vehicle \n 3.Exit \n`));
  switch (eleccion) {
    case 1:
      var brand = prompt(`Brand of vehicle?`);
      var year = prompt(`Fabrication year?`);
      var model = prompt(`Model of vehicle?`);
      autos.push(new vehiculo(brand, year, model));
      console.log(autos.length);

    
      console.table(autos);
      break;
    case 2:
      break;

    case 3:
      salir = true;

    default:
      break;
  }
}
console.log(autos);

console.log(salir);
<<<<<<< HEAD
=======

// function newFunction() {
//   autos = new vehiculo(`toyota`, 2022, tsuru);
// }
