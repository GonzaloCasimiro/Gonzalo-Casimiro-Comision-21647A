const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    // Referencia al modelo de usuario
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user', // Asegúrate de que coincida con el nombre del modelo de usuario
        required: true,
    },
});

const Post = mongoose.model('post', postSchema);
module.exports = Post;

