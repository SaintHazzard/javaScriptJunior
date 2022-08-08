class Message {
  #show(val) {
    console.log(val);
 }
 get add() {
  return this.#show
 } 
 
}

const message = new Message();
message.add(`Hola, probando ejecutar una clase`)
