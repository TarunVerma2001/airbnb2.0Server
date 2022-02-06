const express = require('express');
const authController = require('./../controllers/authController');
const router = express.Router();

//Routes

router.use('/api/user', require('./userRoutes'));
router.use('/api/location', require('./locationRoutes'));
router.use('/api/hotelType', require('./hotelTypeRoutes'));
router.use('/api/hotel', require('./hotelRoutes'));
router.use('/api/wishList', require('./wishListRoutes'));


module.exports = router;
