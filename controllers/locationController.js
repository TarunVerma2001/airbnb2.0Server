const Location = require('./../models/locationModel');
const AppError = require('./../utils/appError');

exports.getAllLocations = async (req, res, next) => {
  try {
    const locations = await Location.find();

    res.status(200).json({
      success: true,
      results: locations.length,
      data: locations,
    });
  } catch (err) {
    next(err);
  }
};

exports.getLocation = async (req, res, next) => {
  try {
    const location = await Location.findById(req.params.id);

    if (!location) {
      return next(new AppError('No Location found with this Id!', 404));
    }

    res.status(200).json({
      success: true,
      data: location,
    });
  } catch (err) {
    next(err);
  }
};

exports.createLocation = async (req, res, next) => {
  try {
    const location = await Location.create({
      name: req.body.name,
      location: req.body.location,
      zip: req.body.zip,
    });

    res.status(201).json({
      success: true,
      data: location,
    });
  } catch (err) {
    next(err);
  }
};

exports.updateLocation = async (req, res, next) => {
  try {
    const location = await Location.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!location) {
      return next(new AppError('No Location found with this Id!', 404));
    }

    res.status(200).json({
      success: true,
      data: location,
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteLocation = async (req, res, next) => {
  try {
    await Location.findByIdAndDelete(req.params.id);

    res.status(204).json({
      success: true,
      data: null,
    });
  } catch (err) {
    next(err);
  }
};
