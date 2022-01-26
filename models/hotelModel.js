const mongoose = require('mongoose');
const Location = require('./../models/locationModel');

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A hotel must have a name!'],
  },
  location: {
    type: mongoose.Schema.objectId,
    ref: Location,
    required: [true, 'A hotel must have a location!'],
  },
  startingPrice: {
    type: String,
    required: [true, 'A hotel must have a starting price!'],
  },
  capacity: {
    type: Number,
    required: [true, 'A hotel must have a capacity!'],
  },
});

const Hotel = mongoose.model('Hotel', hotelSchema);
module.exports = Hotel;
