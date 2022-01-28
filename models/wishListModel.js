const mongoose = require('mongoose');
const Location = require('../models/locationModel');

const wishListSchema = new mongoose.Schema({
  location: {
    type: mongoose.Schema.ObjectId,
    ref: Location,
  },
});

const WishList = mongoose.model('WishList', wishListSchema);

module.exports = WishList;
