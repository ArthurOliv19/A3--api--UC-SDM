const express = require('express');
const router = express.Router();
const comentariosController = require('../controllers/Comentario');

router.get('/', comentariosController.listarComentarios);
router.get('/tarefa/:id', comentariosController.listarComentariosPorTarefa);
router.post('/', comentariosController.criarComentario);

module.exports = router;
