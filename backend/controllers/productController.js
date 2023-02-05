const productRepository = require("../repositories/productRepository");

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
    const totalProducts = await productRepository.getTotalProducts(id);

    res.status(200).json({ products: products, total: totalProducts });
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

const addUserProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { productId, quantity } = req.body;

    await productRepository.addUserProduct(id, productId, quantity);

    res.status(200).json({ message: "Product added succesfully 1" });
  } catch (error) {
    console.error(error);
  }
};

const deleteUserProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { product } = req.body;
    await productRepository.deleteUserProduct(id, product.id);

    res.status(200).json({ message: "Product deleted succesfully !" });
  } catch (error) {
    console.error(error);
  }
};

const updateUserProductQuantity = async (req, res) => {
  try {
    const { id } = req.params;
    const { productId, quantity } = req.body;

    res.status(200).json({ message: "Quantity updated succesfully !" });

    await productRepository.updateUserProductQuantity(id, productId, quantity);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getProducts,
  getProductById,
  getUserProducts,
  addUserProducts,
  addUserProduct,
  deleteUserProduct,
  updateUserProductQuantity,
};
