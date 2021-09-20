const bodyParser = require("body-parser");
const express = require("express");

const app = express();
app.use(bodyParser.json());

const lembretes = {};
contador = 0;

//----------------------------------------------------------------
//-----testar com postman-----------------------------------------

// O get está recebendo os dados enviados
app.get("/lembretes", (req, res) => {
  res.send(lembretes);
});

// O put é insert, quero inserir algo em um lugar,
// no caso, vou inserir um lembrete
app.put("/lembretes", (req, res) => {
  contador++;
  const { texto } = req.body; // body vem em formato json
  lembretes[contador] = { contador, texto };

  // aqui é onde é mostrado o lembrete
  res.status(201).send(lembretes[contador]);
});

// escutando os eventos da porta 4000
app.listen(4000, () => {
  console.log("Lenbrete. Porta 4000");
});
