const brandRepository = require("../repositories/brandRepository");

const getBrands = async (req, res) => {
  try {
    const brands = await brandRepository.getBrands();
    res.status(200).json(brands);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getBrands,
};
