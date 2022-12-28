const pool = require("../../db");

const getProducts = async () => {
  try {
    const products = await pool.query(`SELECT p.id,
      p.name,
      p.brand,
      p.category,
      p.description,
      p.rating,
      p.number_of_reviews as "numberOfReviews",
      p.price,
      p.count_in_stock as countInStock,
      p.user_id as userId,
      (select url from product_images pi2 where pi2.product_id  = p.id limit 1 ) as "defaultImage"
      FROM products p`);

    return products.rows;
  } catch (error) {
    console.error("Error:", error);
  }
};

const getProductById = async (id) => {
  try {
    const product = await pool.query(`SELECT id, 
      name, 
      brand, 
      category, 
      description, 
      rating, 
      number_of_reviews as "numberOfReviews", 
      price, 
      count_in_stock as "countInStock"
      FROM products WHERE id = ${id}`);

    return product.rows[0];
  } catch (error) {
    console.error("Error", error);
  }
};

const getProductImages = async (id) => {
  try {
    const productImages = await pool.query(`SELECT pi2.id,
      pi2.url
      FROM product_images pi2
	    INNER JOIN products p
	    ON pi2.product_id = p.id
      where p.id = ${id}`);

    return productImages.rows;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getProducts,
  getProductById,
  getProductImages,
};
