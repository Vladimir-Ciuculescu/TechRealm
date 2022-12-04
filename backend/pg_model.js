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
      `SELECT id, 
      name, 
      brand, 
      category, 
      description, 
      rating, 
      numberofreviews as "numberOfReviews",
      price, 
      countinstock as countInStock, 
      user_id as userId, 
      image 
      FROM products`,
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
      numberofreviews as "numberOfReviews", 
      price, 
      countinstock as countInStock,
      image FROM products WHERE id = ${id}`,
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows[0]);
      }
    );
  });
};

module.exports = {
  getProducts,
  getProductById,
};
