const jwt = require("jsonwebtoken");
const env = require("dotenv");
const { getUserById } = require("../repositories/userRepository");

env.config();

const authMiddleware = async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      const token = req.headers.authorization.split(" ")[1];

      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      console.log(await getUserById(decodedToken.id));
      req.user = await getUserById(decodedToken.id);

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized, token failed !");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, there is no token");
  }
};

module.exports = { authMiddleware };
