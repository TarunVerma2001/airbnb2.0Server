const express = require('express');
const authController = require('../controllers/authController');
const hotelController = require('../controllers/hotelController');

const router = express.Router();

router
  .route('/')
  .get(hotelController.getAllHotel)
  .post(hotelController.createHotel);
router
  .route('/:id')
  .get(hotelController.getHotel)
  .delete(hotelController.deleteHotel)
  .patch(hotelController.updateHotel);

module.exports = router;
