const userRepository = require("../repositories/userRepository");
const { comparePassword } = require("../utils/comparePassword");
const { generateToken } = require("../utils/generateToken");

const authUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await userRepository.getUserByEmail(email);

  if (user && (await comparePassword(password, user.password))) {
    res.json({
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
      photo: user.photo,
      role: user.role,
      color: user.avatar_color,
      token: generateToken(user.email),
    });
  } else {
    res.status(401).json({ error: "Invalid email or password" });
  }
};

const registerUser = async (req, res) => {
  const { registerData } = req.body;
  console.log(registerData);

  const user = await userRepository.getUserByEmail(registerData.email);

  if (user) {
    res.status(400).json({ error: "User already exists !" });
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
        token: generateToken(registeredUser.email),
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data !");
    }
  }
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
