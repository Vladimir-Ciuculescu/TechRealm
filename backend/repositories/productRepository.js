const pool = require("../database/config");

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
    console.error(error);
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

const getUserProducts = async (id) => {
  try {
    const products =
      await pool.query(`SELECT p.*, up.product_quantity as quantity, 
   (select url from product_images pi2 where pi2.product_id  = p.id limit 1 ) as "defaultImage"
      FROM products p
      INNER JOIN user_products up ON p.id  = up.product_id 
      INNER JOIN users u ON up.user_id = u.id 
      WHERE u.id  = ${id}

`);
    return products.rows;
  } catch (error) {
    console.error(error);
  }
};

const addUserProducts = async (userId, productsIds) => {
  try {
    for (let product of productsIds) {
      const { id, quantity } = product;

      const existentProduct = await pool.query(`SELECT * FROM user_products 
        WHERE user_id = ${userId} AND product_id = ${id}  
      `);

      //If the product is already in cart for current user, just increase its quantity
      if (existentProduct.rows.length !== 0) {
        await pool.query(
          `UPDATE user_products 
          SET product_quantity = product_quantity + $1 WHERE user_id = ${userId} AND product_id = ${id} 
        `,
          [quantity]
        );
        //Else, add the new product with it's corresponding quantity
      } else {
        await pool.query(`
        INSERT INTO user_products (user_id, product_id, product_quantity)
        VALUES (${userId}, ${id}, ${quantity});
        `);
      }
    }
  } catch (error) {
    console.error(error);
  }
};

const getTotalProducts = async (userId) => {
  try {
    const totalProducts =
      await pool.query(`select SUM(product_quantity) from user_products up where user_id = ${userId} 
    `);

    return parseInt(totalProducts.rows[0].sum);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getProducts,
  getProductById,
  getProductImages,
  getUserProducts,
  addUserProducts,
  getTotalProducts,
};
