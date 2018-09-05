const mongoose = require('mongoose');
const Joi = require('joi');


const genreSchema = new mongoose.Schema({
  name:{
    type: String,
    maxlength: 25,
    minlength: 5,
    required: true
  }
});

const Genre = mongoose.model('Genre', genreSchema);

function validateRoutes(genre){
  const schema = {
    name: Joi.string().min(4).required()
  }
  return Joi.validate(genre, schema);
}

exports.Genre = Genre;
exports.validate = validateRoutes;