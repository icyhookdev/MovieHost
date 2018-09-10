const Joi = require('joi');
Joi.objectId =  require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const express = require('express');
const genres = require('./routes/genres');
const customers = require('./routes/customers');
const movies = require('./routes/movies');
const rentals = require('./routes/rentals');
const app = express();

mongoose.connect('mongodb://localhost:27017/vidly', { useNewUrlParser: true })
  .then(() => console.log('Connected to mongoDB...'))
  .catch((err) => console.log(err.message));

app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);
app.use('/api/movies', movies );
app.use('/api/rentals', rentals);

app.listen(3000, () => console.log('Listening on port 3000...'));