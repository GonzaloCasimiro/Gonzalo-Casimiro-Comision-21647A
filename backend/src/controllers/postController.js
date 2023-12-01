
const postModel = require('../models/postModel');

// VER POSTEOS
const viewPost = async (req, res) => {
    try {
        const postList = await postModel.find().populate('createdBy');
        return res.json(postList);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno',
            error: error
        });
    }
};

// CREAR POSTEOS
const createPost = async (req, res) => {
    try {
        
        const createdBy = req.user.id;

        const { title, image, description } = req.body;

        // Crear el nuevo post
        const newPost = new postModel({
            title,
            image,
            description,
            createdBy, 
        });

        // Guardar 
        await newPost.save();

        return res.status(201).json({ mensaje: 'Posteo creado con éxito' });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno al crear el posteo',
            error: error.message,
        });
    }
};

module.exports = { viewPost, createPost };