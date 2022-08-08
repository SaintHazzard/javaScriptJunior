function miFunction() {
 return "a"

}

var miFuncion = function (a,b) {
 return a * b
 
}



const fruits = () => { if (true) { var fruit1 = 'apple'; const fruit2 = 'banana'; let fruit3 = 'kiwi'; } }

const helloPromise = () => {
 return new Promise((resolve, reject) => {
  if (false) {
   resolve(`Hey`)
  } else {
reject(`ups!!`)
  }
 })
}

helloPromise()
 .then(response => console.log(response))
 .then(()=>console.log(`hola`))
 .catch(error => console.log(error))


import { showProps } from `./codigo1`
 
console.log(showProps);