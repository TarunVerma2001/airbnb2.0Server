const WishList = require('./../models/wishListModel');
const AppError = require('./../utils/appError');

exports.getAllWishList = async (req, res, next) => {
  try {
    const wishList = await WishList.find();

    res.status(200).json({
      success: true,
      results: wishList.length,
      data: wishList,
    });
  } catch (err) {
    next(err);
  }
};

exports.getWishList = async (req, res, next) => {
  try {
    const wishList = await WishList.findById(req.params.id);

    if (!wishList) {
      return next(new AppError('No WishList found with this Id!', 404));
    }

    res.status(200).json({
      success: true,
      data: wishList,
    });
  } catch (err) {
    next(err);
  }
};

exports.createWishList = async (req, res, next) => {
  try {
    const wishList = await WishList.create({
      location: req.body.location,
    });

    res.status(201).json({
      success: true,
      data: wishList,
    });
  } catch (err) {
    next(err);
  }
};

exports.updateWishList = async (req, res, next) => {
  try {
    const wishList = await WishList.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!wishList) {
      return next(new AppError('No WishList found with this Id!', 404));
    }

    res.status(200).json({
      success: true,
      data: wishList,
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteWishList = async (req, res, next) => {
  try {
    await WishList.findByIdAndDelete(req.params.id);

    res.status(204).json({
      success: true,
      data: null,
    });
  } catch (err) {
    next(err);
  }
};
