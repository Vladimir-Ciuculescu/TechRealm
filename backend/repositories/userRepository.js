const pool = require("../../db");
const { cryptPassword } = require("../utils/cryptPassword");

const registerUser = async (email, password) => {
  try {
    const cryptedPassword = await cryptPassword(password);

    const registeredUser =
      await pool.query(`INSERT into USERS (name, email, password, role)
    VALUES ('vladi', '${email}', '${cryptedPassword}', 'admin') RETURNING *`);

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
  } catch (error) {}
};

module.exports = { registerUser, getUserByEmail };
