const express = require('express');
const { userCreate, userDelete, userAuthenticate } = require('../controllers/userController');
const router = express.Router();

// Ruta para crear usuario
router.post('/users', userCreate);

// Ruta para eliminar usuario
router.delete('/users/:userId', userDelete);

// Ruta para autenticar usuario
router.post('/users/authenticate', userAuthenticate);

module.exports = router;