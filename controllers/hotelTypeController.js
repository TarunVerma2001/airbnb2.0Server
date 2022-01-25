const HotelType = require('./../models/hotelTypeModel');
const AppError = require('./../utils/appError');

exports.getAllHotelType = async (req, res, next) => {
  try {
    const types = await HotelType.find();

    res.status(200).json({
      success: true,
      results: types.length,
      data: types,
    });
  } catch (err) {
    next(err);
  }
};

exports.getHotelType = async (req, res, next) => {
  try {
    const type = await HotelType.findById(req.params.id);

    if (!type) {
      return next(new AppError('No Hotel Type found with this Id!', 404));
    }

    res.status(200).json({
      success: true,
      data: type,
    });
  } catch (err) {
    next(err);
  }
};

exports.createHotelType = async (req, res, next) => {
  try {
    const type = await HotelType.create({
      name: req.body.name,
      image: req.body.image,
    });

    res.status(201).json({
      success: true,
      data: type,
    });
  } catch (err) {
    next(err);
  }
};

exports.updateHotelType = async (req, res, next) => {
  try {
    const type = await HotelType.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!type) {
      return next(new AppError('No Hotel Type found with this Id!', 404));
    }

    res.status(200).json({
      success: true,
      data: type,
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteHotelType = async (req, res, next) => {
  try {
    await HotelType.findByIdAndDelete(req.params.id);

    res.status(204).json({
      success: true,
      data: null,
    });
  } catch (err) {
    next(err);
  }
};
