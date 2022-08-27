const express = require(`express`);
const cors = require(`cors`);

const app = express();

app.use(cors());
app.use(express.json());

const jugadores = [];

class Jugador {
  constructor(id) {
    this.id = id;
  }
  asignarMokepon(mokepon) {
    this.mokepon = mokepon;
  }
}

class Mokepon {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

app.get("/unirse", (req, res) => {
  const id = `${Math.random()}`;
  const jugador = new Jugador(id);
  jugadores.push(jugador);

  res.setHeader(`Access-Control-Allow-Origin`, `*`);

  res.send(id);
});

app.post(`/mokepon/:jugadorId`, (req, res) => {
  const jugadorId = req.params.jugadorId || ``;
  console.log(jugadorId);
  const nombre = req.body.mokepon || `no entra`;
  const mokepon = new Mokepon(nombre);

  const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id);
  if (jugadorIndex >= 0) {
    jugadores[jugadorIndex].asignarMokepon(mokepon);
  }

  console.log(jugadores);
  console.log(jugadorId);
  res.end();
});

app.post(`/mokepon/:jugadorId/posicion`, (res, req) => {
 const jugadorId = req.params.jugadorId
 const x = req.body.x
 const y = req.body.y
});

app.listen(8080, () => {
  console.log(`Servidor funcionando`);
});
