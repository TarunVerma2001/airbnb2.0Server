const express = require('express');
const authController = require('../controllers/authController');
const hotelTypeController = require('../controllers/hotelTypeController');

const router = express.Router();

router
  .route('/')
  .get(hotelTypeController.getAllHotelType)
  .post(hotelTypeController.createHotelType);
router
  .route('/:id')
  .get(hotelTypeController.getHotelType)
  .delete(hotelTypeController.deleteHotelType)
  .patch(hotelTypeController.updateHotelType);

module.exports = router;
