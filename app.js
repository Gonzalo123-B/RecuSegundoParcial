// Imports
const express = require('express');
const cors = require('cors');
const helmet = require('helmet')
const morgan = require('morgan')
const path = require('path');

// acceder a las variables de entorno '.env'
require("dotenv").config();
// require ejs
require("ejs");

const app = express();

// Middlewares
// TODO: Implementar middlewares

app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use(require('./routes/reserva.routes'));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404

// Starting the server
app.listen(45635, () => console.log('Server on port xxxx'));