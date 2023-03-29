const express = require("express");
const { uploadImages } = require("../controllers/imagesController");
const router = express.Router();

// * @desc Upload photo(s) to S3 bucket
// * @route POST /api/images/upload
router.route("/images/upload").post(uploadImages);

module.exports = router;
