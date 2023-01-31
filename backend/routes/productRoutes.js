const express = require("express");
const {
  getProducts,
  getProductById,
  getUserProducts,
  addUserProducts,
} = require("../controllers/productController");

const router = express.Router();

// * @desc   Get all products
// * @route  GET /api/products
// * @access Public
router.route("/products").get(getProducts);

// * @desc   Get product by Id
// * @route  GET /api/products/:id
// * @access Public
router.route("/products/:id").get(getProductById);

// * @desc Get cart products for an user
// * @route GET /api/products/user/:id
// * @access Public
router.route("/products/user/:id").get(getUserProducts);

// * @desc Add products to cart for an user
// * @route POST /api/products/user/:id
// * @access Public
router.route("/products/user/:id").post(addUserProducts);

module.exports = router;
