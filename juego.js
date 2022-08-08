const elecciones = [`Piedra`, `Papel`, `tijera`];

function juego() {
  let elecuser = parseInt(prompt(`Elija opcion \n 1. Piedra \n 2.Papel \n 3.Tijera`));
  let elecmachine = Math.floor(Math.random() * (4 - 1) + 1);
  console.log(elecmachine);
  console.log(elecuser);
  if (
    (elecuser === 1 && elecmachine === 3) ||
    (elecuser === 2 && elecmachine === 1) ||
    (elecuser === 3 && elecmachine === 2)
  ) {
    console.log(`User wins with ${elecciones[elecuser - 1]}`);
  } else if (elecuser === elecmachine) {
    console.log(`Draw`);
  } else {
    console.log(`Machine wins with ${elecciones[elecmachine - 1]}`);
  }
}
