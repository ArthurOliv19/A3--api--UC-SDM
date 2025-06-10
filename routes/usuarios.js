const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/Usuario');

// Endpoints de usuários
router.get('/', usuariosController.listarUsuarios);
router.get('/:id', usuariosController.buscarUsuarioPorId);
router.post('/', usuariosController.criarUsuario);
router.put('/:id', usuariosController.atualizarUsuario);
router.patch('/:id', usuariosController.atualizarParcialUsuario);
router.delete('/:id', usuariosController.deletarUsuario);

module.exports = router;