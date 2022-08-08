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
  showInf() {
    console.log(`Year fabrication ${this.year}`);
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
