const express = require("express");
const router = express.Router();
const {
  authUser,
  registerUser,
  getUserProfile,
} = require("../controllers/userController");

const { authMiddleware } = require("../middleware/authMiddleware");

// * @desc   Authenticate user and get token
// * @route  POST /api/users/login
router.route("/users/login").post(authUser);

// * @desc   Insert user into the database (for the moment, simulate only with postman)
// * @route  POST /api/users/register
router.route("/users/register").post(registerUser);

// * @desc   Get user profile
// * @route  GET /api/users/profile
router.route("api/users/profile").get(authMiddleware, getUserProfile);

module.exports = router;
