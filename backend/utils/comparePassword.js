const bcrypt = require("bcrypt");

const comparePassword = (plainTextPassword, hashedPassword) => {
  return bcrypt.compare(plainTextPassword, hashedPassword);
};

module.exports = { comparePassword };
