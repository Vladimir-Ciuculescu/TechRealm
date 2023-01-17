const pool = require("../../db");
const { cryptPassword } = require("../utils/cryptPassword");

const registerUser = async (registerData) => {
  console.log(registerData);
  try {
    const { firstName, lastName, email, password, gender } = registerData;

    const cryptedPassword = await cryptPassword(password);

    const registeredUser = await pool.query(
      `INSERT into USERS (first_name, last_name, email, password, gender, role)
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [firstName, lastName, email, cryptedPassword, gender, "client"]
    );

    return registeredUser.rows[0];
  } catch (error) {
    console.error(error);
  }
};

const getUserByEmail = async (email) => {
  try {
    const user = await pool.query(
      `SELECT * from USERS u where email = '${email}'`
    );

    return user.rows[0];
  } catch (error) {
    console.log(error);
  }
};

module.exports = { registerUser, getUserByEmail };
