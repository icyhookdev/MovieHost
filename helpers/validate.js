const Joi = require('joi');

function validateCustomers(customer){
  const schema = {
    name: Joi.string().min(10).required(),
    phone: Joi.string().min(5).required(),
    isGold: Joi.boolean()
  }

  return Joi.validate(customer, schema);
}

module.exports = validateCustomers;