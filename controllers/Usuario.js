const db = require('../banco');

exports.listarUsuarios = (req, res) => {
  db.query('SELECT * FROM usuarios', (err, results) => {
    if (err) throw err;
    res.json({
      mensagem: 'Aqui estão todos os usuários cadastrados',
      dados: results
    });
  });
};

exports.buscarUsuarioPorId = (req, res) => {
  db.query('SELECT * FROM usuarios WHERE id = ?', [req.params.id], (err, results) => {
    if (err) throw err;
    res.json({
      mensagem: 'Aqui está o usuário que você pediu',
      dados: results[0]
    });
  });
};

exports.criarUsuario = (req, res) => {
  db.query('INSERT INTO usuarios (nome) VALUES (?)', [req.body.nome], (err, result) => {
    if (err) throw err;
    res.json({
      mensagem: 'Usuário cadastrado com sucesso!',
      id: result.insertId
    });
  });
};

exports.atualizarUsuario = (req, res) => {
  db.query('UPDATE usuarios SET nome = ? WHERE id = ?', [req.body.nome, req.params.id], () => {
    res.json({ mensagem: 'Usuário atualizado com sucesso!' });
  });
};

exports.atualizarParcialUsuario = (req, res) => {
  db.query('UPDATE usuarios SET nome = ? WHERE id = ?', [req.body.nome, req.params.id], () => {
    res.json({ mensagem: 'Nome do usuário alterado com sucesso!' });
  });
};

exports.deletarUsuario = (req, res) => {
  db.query('DELETE FROM usuarios WHERE id = ?', [req.params.id], () => {
    res.json({ mensagem: 'Usuário removido com sucesso!' });
  });
};