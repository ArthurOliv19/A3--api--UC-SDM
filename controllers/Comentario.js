const db = require('../banco');

exports.listarComentarios = (req, res) => {
  db.query('SELECT * FROM comentarios', (err, results) => {
    if (err) throw err;
    res.json({
      mensagem: 'Todos os comentários feitos nas tarefas',
      dados: results
    });
  });
};

exports.listarComentariosPorTarefa = (req, res) => {
  db.query('SELECT * FROM comentarios WHERE tarefa_id = ?', [req.params.id], (err, results) => {
    if (err) throw err;
    res.json({
      mensagem: 'Esses são os comentários da tarefa escolhida',
      dados: results
    });
  });
};

exports.criarComentario = (req, res) => {
  const { texto, usuario_id, tarefa_id } = req.body;
  db.query(
    'INSERT INTO comentarios (texto, usuario_id, tarefa_id) VALUES (?, ?, ?)',
    [texto, usuario_id, tarefa_id],
    (err, result) => {
      if (err) throw err;
      res.json({
        mensagem: 'Comentário adicionado com sucesso!',
        id: result.insertId
      });
    }
  );
};
