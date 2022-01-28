const express = require('express');
const authController = require('../controllers/authController');
const wishListController = require('../controllers/wishListController');

const router = express.Router();

router
  .route('/')
  .get(wishListController.getAllLocations)
  .post(wishListController.createLocation);
router
  .route('/:id')
  .get(wishListController.getLocation)
  .delete(wishListController.deleteLocation)
  .patch(wishListController.updateLocation);

module.exports = router;
