const { Rental, validate } = require('../models/rental');
const { Movie } = require('../models/movie');
const express = require('mongoose');
const router = express.Router();

router.get('/', async (req, res) => {
  const rentals = await Rental.find();
  res.send(rentals);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if(error)
    return res.status(400).send(error.details[0].message);

  const movie = await findById(req.body.movieId);
  if(!movie)
    return res.status(400).send('Invalid Movie');

  let rental = new Rental({
    count: req.body.count
  });

});