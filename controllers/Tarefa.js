const db = require('../banco');

exports.listarTarefas = (req, res) => {
  db.query('SELECT * FROM tarefas', (err, results) => {
    if (err) throw err;
    res.json({
      mensagem: 'Essas são todas as tarefas cadastradas',
      dados: results
    });
  });
};

exports.criarTarefa = (req, res) => {
  const { titulo, usuario_id, status_id } = req.body;
  db.query('INSERT INTO tarefas (titulo, usuario_id, status_id) VALUES (?, ?, ?)', 
    [titulo, usuario_id, status_id], 
    (err, result) => {
      if (err) throw err;
      res.json({
        mensagem: 'Tarefa adicionada com sucesso!',
        id: result.insertId
      });
  });
};

exports.atualizarTituloTarefa = (req, res) => {
  db.query('UPDATE tarefas SET titulo = ? WHERE id = ?', 
    [req.body.titulo, req.params.id], 
    () => {
      res.json({ mensagem: 'Título da tarefa atualizado com sucesso!' });
  });
};

exports.listarTarefasPorUsuario = (req, res) => {
  db.query('SELECT * FROM tarefas WHERE usuario_id = ?', [req.params.id], (err, results) => {
    if (err) throw err;
    res.json({
      mensagem: 'Essas são as tarefas do usuário escolhido',
      dados: results
    });
  });
};
