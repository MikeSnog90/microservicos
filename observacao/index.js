const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const observacoesPorLembreteId = {};

const { v4: uuidv4 } = require("uuid");

//----------------------------------------------------------------
//-----testar com postman-----------------------------------------

app.put("/lembretes/:id/observacao", (req, res) => {
  const idObs = uuidv4();
  // **** uuid = gerar um id automaticamente
  const { texto } = req.body;
  //req. params dá acesso à lista de parametros da URL lembrete
  const observacoesDoLembrete = observacoesPorLembreteId[req.params.id] || [];
  observacoesDoLembrete.push({ id: idObs, texto });
  observacoesPorLembreteId[req.params.id] = observacoesDoLembrete;
  res.status(201).send(observacoesDoLembrete);
});

app.get("/lembretes/:id/observacao", (req, res) => {
  res.send(observacoesPorLembreteId[req.params.id] || []);
});

app.listen(5000, () => {
  console.log("Observação. Porta 5000");
});
