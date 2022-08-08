var frutas = {
 manzana: `roja`,
 pera: `verde`,
 naranja: `naranja`
}

var frutas1 = [
 `manzana`, `pera`, `naranja`
]


var myComputer = new Object();


myComputer.model = `MSI`
myComputer.procesor = `I7`
myComputer.color = `Black`
myComputer.lenguaje = `English`



console.log(myComputer);
console.log(frutas);
console.log(frutas1.length);

console.log(myComputer.constructor.name.match(myComputer.valueOf));

console.log(Object.keys(myComputer));


frutas1.push(`Uvas`)

console.log(frutas1);
 
