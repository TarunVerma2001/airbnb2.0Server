const Hotel = require('./../models/hotelModel');
const AppError = require('./../utils/appError');

exports.getAllHotels = async (req, res, next) => {
  try {
    const hotels = await Hotel.find();

    res.status(200).json({
      success: true,
      results: hotels.length,
      data: hotels,
    });
  } catch (err) {
    next(err);
  }
};

exports.getHotel = async (req, res, next) => {
  try {
    const hotel = await Location.findById(req.params.id);

    if (!hotel) {
      return next(new AppError('No Hotel found with this Id!', 404));
    }

    res.status(200).json({
      success: true,
      data: hotel,
    });
  } catch (err) {
    next(err);
  }
};

exports.createHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.create({
      name: req.body.name,
      location: req.body.location,
      startingPrice: req.body.startingPrice,
      capacity: req.body.capacity,
    });

    res.status(201).json({
      success: true,
      data: hotel,
    });
  } catch (err) {
    next(err);
  }
};

exports.updateHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!hotel) {
      return next(new AppError('No Hotel found with this Id!', 404));
    }

    res.status(200).json({
      success: true,
      data: hotel,
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);

    res.status(204).json({
      success: true,
      data: null,
    });
  } catch (err) {
    next(err);
  }
};
