const jwt = require("jsonwebtoken");
const env = require("dotenv");

env.config();

//Generate a new JWT token that expired in 30 days
const generateToken = (email) => {
  return jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

module.exports = { generateToken };
