const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
// const bcrypt = require("bcrypt");

dotenv.config();

app.use(express.json());
app.use(cors());

app.use("/api", productRoutes);
app.use("/api", userRoutes);

// app.use(function (req, res, next) {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Content-Type, Access-Control-Allow-Headers"
//   );
//   next();
// });

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, PATCH, POST, DELETE, PUT, OPTIONS"
  );
  next();
});

app.listen(
  process.env.PORT,
  console.log(`Appliction running at port ${process.env.PORT}`)
);
