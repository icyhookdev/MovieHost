const mongoose = require('mongoose');
const Joi = require('joi');

const customerSchema = new mongoose.Schema({
  isGold: {
    type: Boolean,
    default: false,
    required: true
  },
  name: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 25
  },
  phone: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 10
  }
});

const Customer = mongoose.model('customer', customerSchema);

function vaidateCustomers(customer){
  const schema = {
    name: Joi.string().min(10).required(),
    phone: Joi.string().min(5).required(),
    isGold: Joi.boolean()
  }

  return Joi.validate(customer, schema);
}

module.exports = Customer;