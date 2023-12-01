require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const JWT_KEY = process.env.JWT_KEY;

// CREAR USUARIO
const userCreate = async (req, res) => {
  try {
    console.log('datos recibidos', req.body);
    const { name, email, password, avatar } = req.body;

    // creo usuario
    const newUser = new User({
      name,
      email,
      password,
      avatar,
    });

    // guardo el nuevo usuario en la db
    await newUser.save();
    res.status(201).json({ mensaje: 'usuario creado con éxito' });
  } catch (error) {
    console.error('error al crear usuario', error);
    res.status(500).json({
      mensaje: 'error al crear usuario',
      error: error.message,
    });
  }
};

// ELIMINAR USUARIO
const userDelete = async (req, res) => {
  try {
    const { userId } = req.params;

    // Buscar y eliminar el usuario por su ID
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    res.status(200).json({ mensaje: 'Usuario eliminado con éxito' });
  } catch (error) {
    console.error('Error al eliminar usuario', error);
    res.status(500).json({
      mensaje: 'Error al eliminar usuario',
      error: error.message,
    });
  }
};
// AUTENTICAR USUARIO


const userAuthenticate = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    const userData = {
      id: user._id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
    };

    // No usamos jsonwebtoken por ahora
    res.json({ userData });
  } catch (error) {
    console.error('Error al autenticar usuario', error);
    res.status(500).json({
      mensaje: 'Error al autenticar usuario',
      error: error.message,
    });
  }
};

module.exports = { userCreate, userDelete, userAuthenticate };
