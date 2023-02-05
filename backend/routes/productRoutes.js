const express = require("express");
const {
  getProducts,
  getProductById,
  getUserProducts,
  addUserProducts,
  getTotalProducts,
  deleteUserProduct,
  updateUserProductQuantity,
  addUserProduct,
} = require("../controllers/productController");

const router = express.Router();

// ? @desc   Get all products
// ? @route  GET /api/products
router.route("/products").get(getProducts);

// ? @desc   Get product by Id
// ? @route  GET /api/products/:id
router.route("/products/:id").get(getProductById);

// ? @desc Get cart products for an user
// ? @route GET /api/products/user/:id
router.route("/products/user/:id").get(getUserProducts);

// ? @desc Add products to cart for an user
// ? @route POST /api/products/user/:id
router.route("/products/user/:id").post(addUserProducts);

// ? @desc Add a product to cart for an user
// ? @route POSST /api/product/user/:id
router.route("/product/user/:id").post(addUserProduct);

// ? @desc Remove a product from cart for an user
// ? @route DELETE /api/product/user/:id
router.route("/product/user/:id").delete(deleteUserProduct);

// ? @desc Update a product quantity from a user's cart
// ? @route POST /api/product/user/:id
router.route("/product/user/:id").post(updateUserProductQuantity);

module.exports = router;
