const express = require(`express`)

const app = express()

const jugadores = []

class Jugador{
 constructor(id) {
  this.id = id
 }
}

app.get("/unirse", (req, res) => {
 const id = `${Math.random()}`
 let brrr = `brrrrr`
 const jugador = new Jugador(id)
 jugadores.push(jugador)

res.setHeader(`Access-Control-Allow-Origin`, `*`);

 res.send(id)
 res.send(brrr)
})

app.listen(8080, () => {
 console.log(`Servidor funcionandoc`);
})