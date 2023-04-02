const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const brandRoutes = require("./routes/brandRoutes");
const imagesRoutes = require("./routes/imagesRoutes");
const categoriesRoutes = require("./routes/categoriesRoutes");
const types = require("pg").types;

dotenv.config();

app.use(express.json());
app.use(cors());

app.use("/api", productRoutes);
app.use("/api", userRoutes);
app.use("/api", brandRoutes);
app.use("/api", imagesRoutes);
app.use("/api", categoriesRoutes);

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

//Numeric columns from postgreSQL database come as string to fronted. So this fixes it
types.setTypeParser(1700, function (val) {
  return parseFloat(val);
});

app.listen(
  process.env.PORT,
  console.log(`Appliction running at port ${process.env.PORT}`)
);
