const express = require('express');
const cors = require('cors');
const  app = express();

// settings
app.set('port', process.env.PORT || 4000);

// middlewars
app.use(cors());
app.use(express.json());

// routes
app.use('/api/pelicula', require('./routes/pelicula'))
app.use('/api/salas', require('./routes/sala'))

module.exports = app;
