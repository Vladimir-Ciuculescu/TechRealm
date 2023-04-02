const categoriesRepository = require("../repositories/categoriesRepository");

const getCategories = async (req, res) => {
  try {
    const categories = await categoriesRepository.getCategories();
    res.status(200).json(categories);
  } catch (error) {}
};

module.exports = { getCategories };
