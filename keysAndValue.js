// var user = {
//     name : "John",
//     profession : "👨‍⚕️",
//     salary  : 10000
// }
// ; // ["name", "profession", "salary"]
// ; // ["John", "👨‍⚕️", 10000]
// Object.entries(user);
// console.log(Object.entries(user).forEach(([key, value]) => {
// console.log(`${key} = ${value}`);
// }))
class vehiculo {
  constructor(model, anio, marca, composicion) {
    this.model = model;
    this.anio = anio;
    this.marca = marca;
    this.composicion = composicion;
  }
}

const prototipoAddCar = {
  addCar: function(car) {
    if (!this.cars) {
      this.cars = [car];
    } else {
      this.cars.push(car);
    }
  },
  obtenerPrecioTotal: function () {
    return this.cars.reduce((total, p) => total + p.precio, 0);
  }
}



const carrito = Object.create(prototipoAddCar);
carrito.addCar({ model: `Hilux`, anio: 2013, marca: `toyota` });
carrito.addCar({ model: `Tusuru`, anio: 2013, marca: `toyota` });
carrito.addCar({ model: `Captiva`, anio: 2022, marca: `toyota` });
carrito.addCar({ model: `Hilux`, anio: 2013, marca: `toyota` });

console.log(carrito);
console.log(cars[1]);