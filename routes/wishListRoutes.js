const express = require('express');
const authController = require('../controllers/authController');
const wishListController = require('../controllers/wishListController');

const router = express.Router();

router
  .route('/')
  .get(wishListController.getAllWishLists)
  .post(wishListController.createWishList);
router
  .route('/:id')
  .get(wishListController.getWishList)
  .delete(wishListController.deleteWishList)
  .patch(wishListController.updateWishList);

module.exports = router;
