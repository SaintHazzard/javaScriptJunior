// para el caso de arrays y objetos, un console.table() luce mejor que un clásico console.log() (chequen qué otros métodos se pueden utilizar, está genial!)
// var colores = [“rojo”, “azul”, “verde”, “amarillo”];
// Reverse, metodo que establece que el array invierte los elementos
// colores.reverse();
// ["amarillo", "verde", "azul", "rojo", "anaranjado"]
// Sort, metodo para ordenar alfabeticamente los array con datos de tipo String
// colores.sort();
// ["amarillo", "anaranjado", "azul", "rojo", "verde"]
// Slice, método que puede contener uno o dos argumentos, que indiquen el inicio y parada de posiciones, pues devuelve los elementos contenidos en el array, de acuerdo a los argumentos indicados, por ejemplo si a colores, le agregamos colores.slice(1,3); obtendremos los que se encuentran en la posición 1, 2
// colores =  ["amarillo", "anaranjado", "azul", "rojo", "verde"]
// colores.slice(1,3);
// ["anaranjado", "azul"]
// Si solo se indica un argumento se tomará como inicio ese argumento y como final la última posición, entonces si usamos:

// colores.slice(2);
// ["azul", "rojo", "verde"]


var colores =  ["1", "2", "3", "4", "5"]
// console.log(colores.splice(0, 2));

let sobrantes = colores.slice(0)
console.log(sobrantes);
sobrantes.splice(5,0,`foo`)

console.log(sobrantes);

console.log(colores);