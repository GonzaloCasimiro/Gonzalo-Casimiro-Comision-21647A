const express = require('express');
const postController = require('../controllers/postController');
const router = express.Router();

// Ruta para ver los posteos
router.get('/posts', postController.viewPost);

// Ruta para crear un nuevo posteo
router.post('/posts', postController.createPost);

module.exports = router;