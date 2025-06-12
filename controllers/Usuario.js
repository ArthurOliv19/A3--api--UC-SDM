const db = require('../banco');


exports.listarUsuarios = (req, res) => {
  db.query('SELECT * FROM usuarios', (err, results) => {
    if (err) return res.status(500).json({ erro: err.message });
    res.json({
      mensagem: 'Aqui estão todos os usuários cadastrados',
      dados: results
    });
  });
};


exports.buscarUsuarioPorId = (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM usuarios WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ erro: err.message });
    if (results.length === 0)
      return res.status(404).json({ mensagem: 'Usuário não encontrado' });
    res.json({
      mensagem: 'Aqui está o usuário que você pediu',
      dados: results[0]
    });
  });
};


exports.criarUsuario = (req, res) => {
  const { nome, sobrenome } = req.body;
  if (!nome || !sobrenome) {
    return res
      .status(400)
      .json({ mensagem: 'Nome e sobrenome são obrigatórios' });
  }

  db.query(
    'INSERT INTO usuarios (nome, sobrenome) VALUES (?, ?)',
    [nome, sobrenome],
    (err, result) => {
      if (err) return res.status(500).json({ erro: err.message });
      res.json({
        mensagem: 'Usuário cadastrado com sucesso!',
        id: result.insertId
      });
    }
  );
};


exports.atualizarUsuario = (req, res) => {
  const { nome, sobrenome } = req.body;
  if (!nome || !sobrenome) {
    return res
      .status(400)
      .json({ mensagem: 'Nome e sobrenome são obrigatórios !' });
  }

  db.query(
    'UPDATE usuarios SET nome = ?, sobrenome = ? WHERE id = ?',
    [nome, sobrenome, req.params.id],
    (err) => {
      if (err) return res.status(500).json({ erro: err.message });
      res.json({ mensagem: 'Usuário atualizado com sucesso ' });
    }
  );
};


exports.atualizarParcialUsuario = (req, res) => {
  const { nome, sobrenome } = req.body;
  const campos = [];
  const valores = [];

  if (nome) {
    campos.push('nome = ?');
    valores.push(nome);
  }
  if (sobrenome) {
    campos.push('sobrenome = ?');
    valores.push(sobrenome);
  }
  if (campos.length === 0) {
    return res
      .status(400)
      .json({ mensagem: 'Nenhum dado enviado para atualização.' });
  }

  valores.push(req.params.id);
  const sql = `UPDATE usuarios SET ${campos.join(', ')} WHERE id = ?`;

  db.query(sql, valores, (err) => {
    if (err) return res.status(500).json({ erro: err.message });
     res.json({ mensagem: 'Usuário atualizado com sucesso !' });
  });
};


exports.deletarUsuario = (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM usuarios WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json({ erro: err.message });
    res.json({ mensagem: 'Usuário removido com sucesso!' });
  });
};

