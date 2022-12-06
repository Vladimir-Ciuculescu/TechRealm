const express = require("express");
const pg_model = require("./pg_model");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers"
  );
  next();
});

app.get("/products", async (req, res) => {
  try {
    const products = await pg_model.getProducts();
    res.status(200).send(products);
  } catch (error) {
    console.error(error);
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const product = await pg_model.getProductById(id);
    const images = await pg_model.getProductImages(id);

    res.status(200).json({
      product: product,
      images: images,
    });
  } catch (error) {
    console.error(error);
  }
});

app.listen(5001, console.log("Appliction running at port 5001"));
