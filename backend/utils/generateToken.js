const jwt = require("jsonwebtoken");
const env = require("dotenv");

env.config();

//Generate a new JWT token that expired in 30 days
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

module.exports = { generateToken };
