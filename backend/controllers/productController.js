const productRepository = require("../repositories/productRepository");
const imageRepository = require("../repositories/imageRepository.js");

const getProducts = async (req, res) => {
  const { query } = req;

  try {
    const products = await productRepository.getProducts(query);
    res.status(200).send(products);
  } catch (error) {
    console.error(error);
  }
};

const getProductsLength = async (req, res) => {
  try {
    const length = await productRepository.getProductsLength();

    res.status(200).send({ length: length });
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

const addProduct = async (req, res) => {
  const { product } = req.body;

  const response = await productRepository.addProduct(product);

  if (response) {
    const { images, name } = product;

    let urls;
    if (images) {
      urls = await imageRepository.uploadImagesToS3(images, name);

      await imageRepository.addImages(urls, response.id);
    }

    res.status(200).json({
      product: {
        id: response.id,
        name: response.name,
        brand: response.brand,
        description: response.description,
        rating: response.rating,
        numberOfReviews: response.number_of_reviews,
        price: response.price,
        countInStock: response.count_in_stock,
        category: response.category,
        defaultImage: urls[0],
      },
      message: "Product succesfully added !",
    });
  } else {
    res.status(400).json({ message: "Product already exists !" });
  }
};

const deleteProduct = async (req, res) => {
  const { products } = req.body;

  try {
    await productRepository.deleteProducts(products);

    res.status(200).json({ message: "Product(s) deleted succesfully" });
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
  getProductsLength,
  getProductById,
  addProduct,
  deleteProduct,
  getUserProducts,
  addUserProducts,
  addUserProduct,
  deleteUserProduct,
  updateUserProductQuantity,
};
