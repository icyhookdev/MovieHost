const mongoose = require('mongoose');
const Joi = require('joi');

const Rental = mongoose.model('Rental', new mongoose.Schema({
  customer: {
    type: new mongoose.Schema({
      name:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
      },
      isGold:{
        type: Boolean,
        default: false
      },
      phone:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 10
      }
    })
  },
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie'
  }
}));

function validateRental(rental){
  const schema = {
    customer: Joi.number().min(0).required(),
    movieId: Joi.string().required()
  }

  return Joi.validate(rental, schema);
}

exports.Rental = Rental;
exports.validate = validateRental;