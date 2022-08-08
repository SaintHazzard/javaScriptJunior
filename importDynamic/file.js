export function hello() {
 console.log(`Hello World exportado desde file.js y llamado con index.js al index.html`);
}


// Declarando variable global
let variable = "No me puedes reasignar"

// Reasignando variable global
variable = variable + ", lero lero" // Esto puede hacerse sin ningún problema

// Tratando de redeclarar variable
let variable = "Claro que sí puedo"
console.log(variable)