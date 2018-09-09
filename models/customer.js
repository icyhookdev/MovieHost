const mongoose = require('mongoose');

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

module.exports = Customer;
