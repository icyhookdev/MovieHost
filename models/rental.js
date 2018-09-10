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
    }),
    required: true
  },
  movie: {
    type: new mongoose.Schema({
      title: {
        type: String,
        trim: true,
        required: true,
        minlength: 5,
        maxlength: 50
      },
      dailyRentalRate: {
        type: Number,
        required: true,
        min: 0,
        max: 50
      }
    }),
    required: true
  },
  dateOut: {
    type: Date,
    required: true,
    default: Date.now
  },
  dateReturned: {
    type: Date,
  },
  rentalFee: {
    type: number,
    min: 0
  }
}));

function validateRental(rental){
  const schema = {
    customerId: Joi.string().required(),
    movieId: Joi.string().required()
  }

  return Joi.validate(rental, schema);
}

exports.Rental = Rental;
exports.validate = validateRental;