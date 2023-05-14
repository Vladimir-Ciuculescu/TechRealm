const userRepository = require('../repositories/userRepository');
const { comparePassword } = require('../utils/comparePassword');
const { generateToken } = require('../utils/generateToken');

const getUsers = async (req, res) => {
  const { query } = req;

  const users = await userRepository.getUsers(query);
  res.status(200).json(users);
};

const getUsersLength = async (req, res) => {
  try {
    const length = await userRepository.getUsersLength();

    res.status(200).send({ length: length });
  } catch (error) {
    console.error(error);
  }
};

const deleteUser = async (req, res) => {
  const {
    body: { user },
  } = req;

  try {
    await userRepository.deleteUser(user);
    res.status(200).json({ message: 'User deleted succesfully !' });
  } catch (error) {
    console.error(error);
  }
};

const authUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await userRepository.getUserByEmail(email);

  if (user && (await comparePassword(password, user.password))) {
    res.status(200).json({
      id: user.id,
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
      photo: user.photo,
      role: user.role,
      color: user.avatar_color,
      token: generateToken(user.id),
    });
  } else {
    res.status(401).json({ error: 'Invalid email or password' });
  }
};

const registerUser = async (req, res) => {
  const { registerData } = req.body;

  const user = await userRepository.getUserByEmail(registerData.email);

  if (user) {
    res.status(400).json({ error: 'User already exists !' });
  } else {
    registerData.firstName =
      registerData.firstName.charAt(0).toUpperCase() +
      registerData.firstName.slice(1);

    registerData.lastName =
      registerData.lastName.charAt(0).toUpperCase() +
      registerData.lastName.slice(1);
    const registeredUser = await userRepository.registerUser(registerData);

    if (registeredUser) {
      res.status(200).json({
        name: registeredUser.name,
        email: registeredUser.email,
      });
    } else {
      res.status(400);
      throw new Error('Invalid user data !');
    }
  }
};

// TODO : Temporary
const getCurrentUser = async (req, res) => {
  try {
    const { user } = req;
    res.status(200).json({
      id: user.id,
      email: user.email,
      role: user.role,
      firstName: user.first_name,
      lastName: user.last_name,
      gender: user.gender,
      photo: user.photo,
      color: user.avatar_color,
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getUsers,
  getUsersLength,
  deleteUser,
  authUser,
  registerUser,
  getCurrentUser,
};
