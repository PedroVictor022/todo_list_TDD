const CategoriesRepositories = require('../repositories/CategoryRepository');

class CategoryController {
  async index(req, res) {
    const categories = await CategoriesRepositories.findAll();
    return res.json(categories);
  }

  async store(req, res) {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    const categorie = await CategoriesRepositories.create({ name });

    return res.json(categorie);
  }

  async delete(req, res) {
    const { id } = req.params;
    await CategoriesRepositories.delete(id);
    return res.sendStatus(204);
  }
}

module.exports = new CategoryController();
