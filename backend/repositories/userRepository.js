const pool = require("../../db");
const bcrypt = require("bcrypt");

const registerUser = async (email, password) => {
  try {
    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    const registeredUser =
      await pool.query(`INSERT into USERS (name, email, password, role)
    VALUES ('vladi', '${email}', '${hashedPassword}', 'admin')`);

    return registeredUser;
  } catch (error) {
    console.error(error);
  }
};

const getUserByEmail = async (email) => {
  const query = `SELECT * from USERS u where email = '${email}'`;
  console.log(query);

  try {
    const user = await pool.query(
      `SELECT * from USERS u where email = '${email}'`
    );

    return user.rows[0];
  } catch (error) {}
};

module.exports = { registerUser, getUserByEmail };
