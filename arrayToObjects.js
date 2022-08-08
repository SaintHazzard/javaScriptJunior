let entries = [[`name`, `Oscar`],[`Age`, `25`]]


console.log(typeof entries);
console.log(Object.fromEntries(entries));


let mySymbol = `My Symbol, se utilizan a menudo para añadir claves de propiedades únicas a un objeto que no sean iguales a las claves que cualquier otro código pueda añadir al objeto`;

let symbol = Symbol(mySymbol);

console.log(symbol.description);



const user = {} ?? `ta vacio`
console.log(user?.profile?.email);
if (user?.pet?.email) {
 console.log(`email`)
} else {
console.log(`fail this shit`);
}

console.log(user);

