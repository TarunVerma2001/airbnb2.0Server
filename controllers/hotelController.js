const Hotel = require('./../models/hotelModel');
const AppError = require('./../utils/appError');
const APIFeatures = require('./../utils/apiFeatures');

exports.getAllHotels = async (req, res, next) => {
  try {
    // const hotels = await Hotel.find().populate({path: "location"});

    const features = new APIFeatures(Hotel.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const hotels = await features.query;

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
    const hotel = await Hotel.findById(req.params.id).populate({path: "location hotelType", select:"name"});

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
      endingPrice: req.body.endingPrice,
      capacity: req.body.capacity,
      hotelType: req.body.hotelType,
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
