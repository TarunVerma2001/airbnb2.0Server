const express = require('express');
const authController = require('./../controllers/authController');
const router = express.Router();

//Routes

router.use('/api/users', require('./userRoutes'));

module.exports = router;
