const express = require("express");
const router = express.Router();
const { getCategories } = require("../controllers/categoriesController");

// ? @desc Get all categories from database
// ? @route GET /api/categories
router.route("/categories").get(getCategories);

module.exports = router;
