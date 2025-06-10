const db = require('../banco');

exports.listarStatus = (req, res) => {
  db.query('SELECT * FROM status', (err, results) => {
    if (err) throw err;
    res.json({
      mensagem: 'Aqui estão todos os status disponíveis',
      dados: results
    });
  });
};

exports.criarStatus = (req, res) => {
  db.query('INSERT INTO status (nome) VALUES (?)', [req.body.nome], (err, result) => {
    if (err) throw err;
    res.json({
      mensagem: 'Novo status adicionado com sucesso!',
      id: result.insertId
    });
  });
};
