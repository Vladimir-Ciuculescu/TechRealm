const express = require("express");
const {
  getProducts,
  getProductById,
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

module.exports = router;
