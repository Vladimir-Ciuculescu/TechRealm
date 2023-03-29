const pool = require("../database/config");

const getBrands = async () => {
  try {
    const brands = await pool.query("SELECT * FROM brands");
    return brands.rows;
  } catch (error) {
    consoler.error(error);
  }
};

module.exports = { getBrands };
