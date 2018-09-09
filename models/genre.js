const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
  name:{
    type: String,
    maxlength: 25,
    minlength: 5,
    required: true
  }
});

const Genre = mongoose.model('Genre', genreSchema);

module.exports = Genre;
