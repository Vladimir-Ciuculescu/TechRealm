const express = require("express");
const { getBrands } = require("../controllers/brandController");
const router = express.Router();

// ? @desc Get all brands from database
// ? @route GET /api/brands
router.route("/brands").get(getBrands);

module.exports = router;
