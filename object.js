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


const saludo = "Hola mundo"


 // true
console.log(saludo.charAt());
saludo.includes("Mundo") // false
saludo.includes(" ") // true
saludo.includes("Hola", 1) // false
console.log(saludo.includes("mundo", -5)); // true


function hola(primero, segundo,tercero, ...rest) {
 console.log(primero, segundo); // 1 2
 console.log(tercero);
  console.log(rest); // [3,4,5,6]
}

hola(1, 2, 3, 4, 5,10,-2);
