const express = require('express');
const authController = require('./../controllers/authController');
const router = express.Router();

//Routes

router.use('/api/users', require('./userRoutes'));
router.use('/api/locations', require('./locationRoutes'));
router.use('/api/hotelTypes', require('./hotelTypeRoutes'));
router.use('/api/hotel', require('./hotelRoutes'));


module.exports = router;
