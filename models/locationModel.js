const mongoose = require('mongoose');
const locationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A Location must have a name!'],
    },
    image: {
      type: String,
      default: 'London.jpg',
      required: [true, 'A Location must have an Image!'],
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

//virtual-populate

locationSchema.virtual('hotel', {
  ref: 'Hotel',
  foreignField: 'location',
  localField: '_id',
});

const Location = mongoose.model('Location', locationSchema);
module.exports = Location;
