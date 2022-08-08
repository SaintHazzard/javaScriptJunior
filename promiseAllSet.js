const promiseOne = new Promise((resolve, reject) => reject(`Reject`));
const promiseTwo = new Promise((resolve, reject) => resolve(`Resolve 1`));
const promiseThree = new Promise((resolve, reject) => resolve(`Resolve 2`));

//Se ejectuan todas las promesas, espera que todas se resuelvan
Promise.allSettled([promiseOne, promiseTwo, promiseThree]).then((response) =>
  console.log(response)
);

// Con all todas las promesas se tienen que aprobar si o si, si se rechaza alguna se rechaza todo
Promise.all([[promiseOne, promiseTwo, promiseThree]])
  .then((response1) => console.log(response1))
  .catch((error) => console.log(error));

// El primer valor que se resuelve es el primero en retornar
const promise1 = new Promise((resolve, reject) => {
  reject(`1`);
});
const promise2 = new Promise((resolve, reject) => {
  resolve(`3`);
});
const promise3 = new Promise((resolve, reject) => {
  resolve(`2`);
});

Promise.any([promise1, promise2, promise3]).then((response) => console.log(response));
