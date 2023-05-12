const express = require('express');
const router = express.Router();
const {
  authUser,
  registerUser,
  getCurrentUser,
  getUsers,
  getUsersLength,
} = require('../controllers/userController');

const { authMiddleware } = require('../middleware/authMiddleware');

// ? @desc Get users with or without pagination
// ? @desc GET /api/users/
router.route('/users').get(getUsers);

// ? @desc Get total number of users
// ? @desc GET /api/users/total
router.route('/users/total').get(getUsersLength);

// ? @desc   Authenticate user and get token
// ? @route  POST /api/users/login
router.route('/users/login').post(authUser);

// ? @desc   Insert user into the database (for the moment, simulate only with postman)
// ? @route  POST /api/users/register
router.route('/users/register').post(registerUser);

// ? @desc   Get user profile
// ? @route  GET /api/users/profile
router.route('/user/profile').get(authMiddleware, getCurrentUser);

module.exports = router;
