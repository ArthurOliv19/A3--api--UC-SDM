const express = require('express');
const router = express.Router();
const statusController = require('../controllers/Status');

router.get('/', statusController.listarStatus);
router.post('/', statusController.criarStatus);

module.exports = router;
