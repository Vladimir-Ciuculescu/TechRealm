const express = require("express");
const router = express.Router();
const { authUser, registerUser } = require("../controllers/userController");

// * @desc   Authenticate user and get token
// * @route  POST /api/users/login
// * @access Public
router.route("/users/login").post(authUser);

// * @desc   Insert user into the database (for the moment, simulate only with postman)
// * @route  POST /api/users/register
// * @access Public
router.route("/users/register").post(registerUser);

module.exports = router;
