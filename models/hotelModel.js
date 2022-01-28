const mongoose = require('mongoose');
const Location = require('./../models/locationModel');
const HotelType = require('./../models/hotelTypeModel');

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A hotel must have a name!'],
    },
    location: {
      type: mongoose.Schema.ObjectId,
      ref: Location,
      required: [true, 'A hotel must have a location!'],
    },
    hotelType: {
      type: [mongoose.Schema.ObjectId],
      ref: HotelType,
      required: [true, 'A hotel must have a type!'],
    },
    startingPrice: {
      type: Number,
      required: [true, 'A hotel must have a starting price!'],
    },
    endingPrice: {
      type: Number,
      required: [true, 'A hotel must have a ending price!'],
    },
    capacity: {
      type: Number,
      required: [true, 'A hotel must have a capacity!'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestams: true,
  }
);

const Hotel = mongoose.model('Hotel', hotelSchema);
module.exports = Hotel;
