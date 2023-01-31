const productRepository = require("../repositories/productRepository");
const bcrypt = require("bcrypt");

const getProducts = async (req, res) => {
  try {
    const products = await productRepository.getProducts();
    res.status(200).send(products);
  } catch (error) {
    console.error(error);
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await productRepository.getProductById(id);
    const images = await productRepository.getProductImages(id);

    res.status(200).json({
      product: product,
      images: images,
    });
  } catch (error) {
    console.error(error);
  }
};

const getUserProducts = async (req, res) => {
  try {
    const { id } = req.params;

    const products = await productRepository.getUserProducts(id);

    res.status(200).json(products);
  } catch (error) {
    console.error(error);
  }
};

const addUserProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const { productsIds } = req.body;

    await productRepository.addUserProducts(id, productsIds);

    res.status(200).json({ message: "Products added succesfully !" });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getProducts,
  getProductById,
  getUserProducts,
  addUserProducts,
};
