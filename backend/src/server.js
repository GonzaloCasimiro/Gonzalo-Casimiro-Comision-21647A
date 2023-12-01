require('dotenv').config();
const userRoutes = require('./routes/userRoutes');
const connectMongoose = require('./config/mongooseConfig');
const express = require('express');
const bodyParser = require('body-parser');
const jsonWebToken=require('jsonwebtoken');
const postRoutes = require('./routes/postRoutes');
const JWT_KEY=process.env.JWT_KEY;

const app = express();
const port = 3000;
// Configuración de body-parser
app.use(bodyParser.json());

// Rutas
app.use('/', userRoutes);
app.use('/', postRoutes);
// Conexión a MongoDB
connectMongoose();

// Iniciar el servidor
app.listen(port, () => {
  console.log(process.env.JWT_KEY);
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});