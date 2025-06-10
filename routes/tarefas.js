const express = require('express');
const router = express.Router();
const tarefasController = require('../controllers/Tarefa');

router.get('/', tarefasController.listarTarefas);
router.post('/', tarefasController.criarTarefa);
router.patch('/:id', tarefasController.atualizarTituloTarefa);
router.get('/usuario/:id', tarefasController.listarTarefasPorUsuario);

module.exports = router;
