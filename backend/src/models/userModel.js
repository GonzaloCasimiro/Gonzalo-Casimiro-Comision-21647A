const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },
  // correo electrónico  tipo String, única  requerida
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // Contraseña  tipo String y requerida
  password: {
    type: String,
    required: true,
  },
  // Avatar  tipo String (URL)
  avatar: {
    type: String,
    required:true,
  },
});


const User = mongoose.model('user', userSchema);

module.exports = User;