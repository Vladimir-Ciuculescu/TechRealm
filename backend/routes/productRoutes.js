const express = require("express");
const {
  getProducts,
  getProductById,
  getUserProducts,
  addUserProducts,
  deleteUserProduct,
  updateUserProductQuantity,
  addUserProduct,
  addProduct,
  deleteProduct,
  getProductsLength,
  editProduct,
} = require("../controllers/productController");

const router = express.Router();

// ? @desc   Get all products
// ? @route  GET /api/products
router.route("/products").get(getProducts);

// ? @desc Get total product
// ? @route GET/api/products/total
router.route("/products/total").get(getProductsLength);

// ? @desc   Get product by Id
// ? @route  GET /api/products/:id
router.route("/products/:id").get(getProductById);

// ? @desc Add a new product to store
// ? @route POST /api/products/add
router.route("/products/add").post(addProduct);

// ? @desc Edit an existent product
// ? @route PUT /api/products/edit
router.route("/products/edit").put(editProduct);

// ? @desc Delete product from store
// ? @route DELETE /api/products/delete
router.route("/product/delete").delete(deleteProduct);

// ? @desc Get cart products for an user
// ? @route GET /api/products/user/:id
router.route("/products/user/:id").get(getUserProducts);

// ? @desc Add products to cart for an user
// ? @route POST /api/products/user/:id
router.route("/products/user/:id/get").post(addUserProducts);

// ? @desc Add a product to cart for an user
// ? @route POSST /api/product/user/:id
router.route("/product/user/:id/add").post(addUserProduct);

// ? @desc Remove a product from cart for an user
// ? @route DELETE /api/product/user/:id
router.route("/product/user/:id/delete").delete(deleteUserProduct);

// ? @desc Update a product quantity from a user's cart
// ? @route POST /api/product/user/:id
router
  .route("/product/user/:id/update-quantity")
  .post(updateUserProductQuantity);

module.exports = router;
