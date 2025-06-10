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
  const id = req.params.id;
  db.query('SELECT * FROM usuarios WHERE id = ?', [id], (err, resultados) => {
    if (err) return res.status(500).json({ erro: err.message });
    if (resultados.length === 0) return res.status(404).json({ mensagem: 'Usuário não encontrado' });
    res.json({
      mensagem: 'Aqui está o usuário que você pediu',
      dados: resultados[0]
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
  const id = req.params.id;
  const { nome } = req.body;
  db.query('UPDATE usuarios SET nome = ? WHERE id = ?', [nome, id], (err) => {
    if (err) return res.status(500).json({ erro: err.message });
    res.json({ mensagem: 'Usuário atualizado com sucesso!' });
  });
};


exports.atualizarParcialUsuario = (req, res) => {
  db.query('UPDATE usuarios SET nome = ? WHERE id = ?', [req.body.nome, req.params.id], (err) => {
    if (err) return res.status(500).json({ erro: err.message });
    res.json({ mensagem: 'Nome do usuário alterado com sucesso!' });
  });
};


exports.deletarUsuario = (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM usuarios WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json({ erro: err.message });
    res.json({ mensagem: 'Usuário removido com sucesso!' });
  });
};
