const mongoose = require('mongoose');
const User = require('./../models/userModel');
const locationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A Location must have a name!'],
    },
    location: {
      // GeoJSON
      type: {
        type: String,
        default: 'Point',
        enum: ['Point'],
      },
      coordinates: [Number],
      state: String,
      country: String,
      description: String,
    },
    zip: {
      type: String,
      required: [true, 'A Location must have a zip code!'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestams: true,
  }
);

const Location = mongoose.model('Location', locationSchema);
module.exports = Location;
