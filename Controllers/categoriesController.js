// import Categories from "../Models/categoriesModel.js";
import {Categories} from "../Models/Relations.js";
class categoriesController {
  
  static async getallCategories(req, res) {
    try {
      const Category = await Categories.findAll();
      res.json(Category);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
      res.status(500).json({ error: "Failed to fetch categories" });
    }
  }

  static async getcategoryById(req, res) {
    const { id } = req.params;
    try {
      const category = await Categories.findByPk(id);
      if (!category) {
        return res.status(404).json({ error: "Category not found" });
      }
      res.json(category);
    } catch (error) {
      console.error("Failed to fetch category:", error);
      return res.status(500).json({ error: "Failed to fetch category" });
    }
  }

  static async createcategory(req, res) {
    try {
      const image = req.file;
      const category = await Categories.create({
        ...req.body,
        image: image.path,
      });
      res.status(201).json(category);
    } catch (error) {
      console.error("Error creating category:", error);
      res
        .status(500)
        .json({ error: "Failed to create category", details: error.message });
    }
  }

  static async updatecategory(req, res) {
    const { id } = req.params;
    const image = req.file;
    try {
      const category = await Categories.findByPk(id);
      if (!category) {
        return res.status(404).json({ error: "category not found" });
      }

      await category.update({ ...req.body, image: image.path });
      res.json(category);
    } catch (error) {
      console.error("Failed to update category:", error);
      res.status(500).json({ error: "Failed to update category" });
    }
  }

  static async deletecategory(req, res) {
    const { id } = req.params;
    try {
      const category = await Categories.findByPk(id);
      if (!category) {
        return res.status(404).json({ error: "category not found" });
      }

      await category.destroy();
      res.json({ message: "category deleted successfully" });
    } catch (error) {
      console.error("Failed to delete category:", error);
      res.status(500).json({ error: "Failed to delete category" });
    }
  }
}

export default categoriesController;
