const pool = require("../database/config");
const getCategories = async () => {
  try {
    const categories = await pool.query("SELECT * FROM product_categories");
    console.log(categories);
    return categories.rows;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getCategories };
