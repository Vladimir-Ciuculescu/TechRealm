const pool = require('../database/config');
const { cryptPassword } = require('../utils/cryptPassword');
const { generateAvatarColor } = require('../utils/generateAvatarColor');

const getUsersLength = async () => {
  try {
    const result = await pool.query('SELECT * FROM users u');

    return result.rowCount;
  } catch (error) {
    console.error(error);
  }
};

const getUsers = async (filterObject) => {
  const { rowsPerPage, page } = filterObject;

  let query = `SELECT u.id, 
                      u.email,
                      u.role,
                      u.first_name as "firstName",
                      u.last_name as "lastName"
                      FROM users u ORDER BY ID DESC`;

  if (rowsPerPage) {
    query += ` LIMIT ${parseInt(rowsPerPage)}`;
  }

  if (page) {
    query += ` OFFSET ${parseInt(page - 1) * parseInt(rowsPerPage)}`;
  }

  try {
    const result = await pool.query(query);

    return result.rows;
  } catch (error) {
    console.error(error);
  }
};

const deleteUser = async (user) => {
  try {
    await pool.query('DELETE from USERS WHERE id = $1', [user.id]);
  } catch (error) {
    console.error(error);
  }
};
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
        'client',
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

module.exports = {
  getUsers,
  getUsersLength,
  deleteUser,
  registerUser,
  getUserByEmail,
  getUserById,
};
