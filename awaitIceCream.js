// Async Await
const prepareIceCream = (money) => {
  return new Promise((resolve, reject) => {
    if (money >= 500) {
      console.log("We are preparing your Ice cream...");
      setTimeout(() => {
        resolve("Here you are a Chocolate Ice cream");
      }, 3000); //3. Si el dinero que ingresaste es mayor o igual a 500, entonces te preparamos el helado. El proceso toma 6 segundos.
    } else {
      reject("Sorry! You do not have enough money :("); //3. Si el dinero es menor a 500, lo sentimos, no te alcanza
    }
  });
};

const buyIceCream = async (money) => {
  try {
    console.log("Welcome to Ice Cream World!");
    const result = await prepareIceCream(money); //2. Esperas aquí mientras envíamos el dinero, lo verifican y te preparan el helado
    console.log(result); //4. Imprimimos tu pedido! si todo salió bien.
    console.log("Thanks for your purchase!");
  } catch (e) {
    console.log(e); //4. Te decimos que no salió bien el proceso porque tu dinero no es suficiente.
  }
};

buyIceCream(600); //1. llamas a la funcion comprar helado e Ingresas el dinero


 const promise = new Promise((resolve, reject) => {
   const number = Math.floor(Math.random() * 10);

   setTimeout(() => (number > 5 ? resolve(number) : reject(new Error("Menor a 5"))), 1000);
 });

 promise.then((number) => console.log(number)).catch((error) => console.error(error));




