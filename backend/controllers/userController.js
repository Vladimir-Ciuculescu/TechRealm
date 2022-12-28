const userRepository = require("../repositories/userRepository");
const { comparePassword } = require("../utils/comparePassword");
const { generateToken } = require("../utils/generateToken");

const authUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await userRepository.getUserByEmail(email);

  if (user && (await comparePassword(password, user.password))) {
    res.json({
      name: user.name,
      email: user.email,
      token: generateToken(user.email),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password !");
  }
};

const registerUser = async (req, res) => {
  const { email, password } = req.body;

  const response = await userRepository.registerUser(email, password);

  res.status(200).json(response);
};

// TODO : Temporary
const getUserProfile = async (req, res) => {
  const { user } = req;

  if (user) {
    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(404);
    throw new Error("User not found !");
  }
};

module.exports = { authUser, registerUser, getUserProfile };
