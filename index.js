const express = require('express');
const app = express();
const db = require('./banco');

app.use(express.json());

app.use('/usuarios', require('./routes/usuarios'));
app.use('/tarefas', require('./routes/tarefas'));
app.use('/status', require('./routes/status'));
app.use('/comentarios', require('./routes/comentarios'));

app.listen(3000, () => {
  console.log('API rodando em http://localhost:3000');
});
