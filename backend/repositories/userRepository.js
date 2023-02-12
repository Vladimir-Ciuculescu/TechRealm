const pool = require("../database/config");
const { cryptPassword } = require("../utils/cryptPassword");
const { generateAvatarColor } = require("../utils/generateAvatarColor");

const registerUser = async (registerData) => {
  try {
    const { firstName, lastName, email, password, gender } = registerData;

    const cryptedPassword = await cryptPassword(password);
    const avatarColor = generateAvatarColor();

    const registeredUser = await pool.query(
      `INSERT into USERS (first_name, last_name, email, password, gender, role, avatar_color)
    VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [
        firstName,
        lastName,
        email,
        cryptedPassword,
        gender,
        "client",
        avatarColor,
      ]
    );

    return registeredUser.rows[0];
  } catch (error) {
    console.error(error);
  }
};

const getUserByEmail = async (email) => {
  try {
    const data = await pool.query(
      `SELECT * from USERS u where email = '${email}'`
    );

    return data.rows[0];
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (id) => {
  try {
    const data = await pool.query(`SELECT * FROM USERS where id  = ${id}`);
    return data.rows[0];
  } catch (error) {
    console.log(error);
  }
};

module.exports = { registerUser, getUserByEmail, getUserById };
