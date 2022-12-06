const { Pool } = require("pg");
//const env = require("dotenv");

//env.config();

const pool = new Pool({
  user: "vladiciuculescu",
  host: "localhost",
  database: "techrealm",
  password: "root",
  port: 5432,
});

const getProducts = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT p.id, 
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
      FROM products p`,
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows);
      }
    );
  });
};

const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT id, 
      name, 
      brand, 
      category, 
      description, 
      rating, 
      number_of_reviews as "numberOfReviews", 
      price, 
      count_in_stock as "countInStock"
      FROM products WHERE id = ${id}`,
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows[0]);
      }
    );
  });
};

const getProductImages = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT pi2.id,
      pi2.url
      FROM product_images pi2
	    INNER JOIN products p
	    ON pi2.product_id = p.id
      where p.id = ${id}`,
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows);
      }
    );
  });
};

module.exports = {
  getProducts,
  getProductById,
  getProductImages,
};
