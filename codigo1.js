// let nombres = ["roberto", "pedro", "cofla"];
//
// for (let i = 0; i < 3; i++) {
//   let dinero = prompt(`Cuanto dinero tienes ${nombres[i]}?`);
//   dinero = valor[i];
// }
let valor = [];
let nombres = ["roberto", "pedro", "cofla"];
nombres.forEach((nombre, indice) => {
  dinero = prompt(`Cuanto dinero tienes ${nombre}?`);
  valor[indice] = dinero;
  console.log(valor[indice]);
  if (valor[indice] >= 0.6 && valor[indice] < 1) {
    alert(
      `${nombre} compra el helado de agua y sobra ${(valor[indice] - 0.6).toFixed(1)} centavos`
    );
  } else if (valor[indice] >= 1 && valor[indice] < 1.6) {
    alert(`${nombre} compra el helado de crema y sobra ${(valor[indice] - 1).toFixed(1)} centavos`);
  } else if (valor[indice] >= 1.6 && valor[indice] < 1.7) {
    alert(
      `${nombre} compra el helado de heladix y sobra ${(valor[indice] - 1.6).toFixed(1)} centavos`
    );
  } else if (valor[indice] >= 1.7 && valor[indice] < 1.8) {
    alert(
      `${nombre} compra el helado de heladovich y sobra ${(valor[indice] - 1.7).toFixed(
        1
      )} centavos`
    );
  } else if (valor[indice] >= 1.8 && valor[indice] < 2.9) {
    alert(
      `${nombre} compra el helado de helardo y sobra ${(valor[indice] - 1.8).toFixed(1)} centavos`
    );
  } else if (valor[indice] >= 2.9 && valor[indice] < 5.8) {
    alert(
      `${nombre} puedes comprar el pote de confites o el pote de 1/4 KG y sobra ${(
        valor[indice] - 2.9
      ).toFixed(1)} centavos`
    );
  } else if (valor[indice] >= 5.8) {
    alert(`${nombre} puedes comprar el pote de confites y el pote de 1/4 KG`);
  } else {
    alert(`No alcanza para ni mierda`);
  }
});


function showProps(obj, objName) {
 var result = ``;
 var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;
  for (var i in obj) {
    // obj.hasOwnProperty() se usa para filtrar propiedades de la cadena de prototipos del objeto
    if (obj.hasOwnProperty(i)) {
      result += `${objName}.${i} = ${obj[i]}\n`;
    }
  }
  return result;
}

export default showProps;

// nombres.forEach((nombre) => {

// });
