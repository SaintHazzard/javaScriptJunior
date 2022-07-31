// `${Object.entries(composicion).forEach(([key, value])=> {console.log(key,value);})}`
class vehiculo  {
    constructor(model,anio,marca,composicion) {
    this.model = model;
    this.anio = anio;
    this.marca = marca;
    this.composicion = composicion;
  }
}

class comp  {
  constructor(plastico, metal, policarbonato) {
    this.plastico = plastico;
    this.metal = metal;
    this.policarbonato = policarbonato;
    
  }
  
}

let composicion = new comp (`10%`, `80%`,`10%`)

console.log(composicion);

let car = new vehiculo(`Hilux`, `2013`, `toyota`, composicion )


// const car = new vehiculo({ //Objeto posicion 0 creado toyota
//   model: `Hilux`,  
//   Marca: `Toyota`,
//   anio: `2013`,
//   composicion: {
//     plastico: `10%`,
//     metal: `80%`,
//     policarbonato: `10%`,
//   }
// })


console.log();
console.log(car);


const prototipoAddCar = {
  addCar: (car) => {
    if(!this.car){
     this.cars = [car]
    } else {
     this.cars.push(car);
    }
  },
  obtenerPrecioTotal: function(){
    return this.cars.reduce((total, p) => total + p.precio, 0);
  }
}

// const prototipoCarrito = {
//   agregarProducto(producto){/*código*/},
//   obtenerPrecioTotal(){/*código*/}
// }

const carrito = Object.create(prototipoAddCar);






// segundo.anio = 2022;
// segundo.model = `Tsusuru`;
// segundo.marca = `toyota`;

