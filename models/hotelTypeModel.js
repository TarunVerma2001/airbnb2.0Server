const mongoose = require('mongoose');

const hotelTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'a hotel type must have a name!'],
  },
  image: {
    type: String,
    required: [true, 'a hotel type must have an image!'],
  },
});

const HotelType = mongoose.model('HotelType', hotelTypeSchema);
module.exports = HotelType;
