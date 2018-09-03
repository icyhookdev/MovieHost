const mongoose = require('mongoose');
const express = require('express');
const genres = require('./routes/genres');
const customers = require('./routes/customers');
const app = express();

mongoose.connect('mongodb://localhost:27017/vidly', { useNewUrlParser: true })
  .then(() => console.log('Connected to mongoDB...'))
  .catch((err) => console.log(err.message));

app.use(express.json());

app.use('/api/genres', genres);
app.use('/api/customers', customers);

app.listen(3000, () => console.log('Listening on port 3000...'));