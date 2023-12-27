import Categories from "../Models/Realtions.js";
// import Categories from "../Models/categoriesModel.js"

export const getallCategories = async (req, res) => {
  try {
    const Category = await Categories.findAll();
    res.json(Category);
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    res.status(500).json({ error: "Failed to fetch categories" });
  }
};

export const getcategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Categories.findByPk(id);
    if (!category) {
      return res.status(404).json({ error: "Articles not found" });
    }
    res.json(category);
  } catch (error) {
    console.error("Failed to fetch category:", error);
    return res.status(500).json({ error: "Failed to fetch category" });
  }
};

export const createcategory = async (req, res) => {
  try {
    const { name, image } = req.body;
    const category = await Categories.create({ name, image  }).json;
    res.status(201).json(category);
  } catch (error) {
    console.error("Error creating category:", error);
    res
      .status(500)
      .json({ error: "Failed to create category", details: error.message });
  }
};

export const updatecategory = async (req, res) => {
  const { id } = req.params;
  const { name , image    } = req.body;
  try {
    const category = await Categories.findByPk(id);
    if (!category) {
      return res.status(404).json({ error: "category not found" });
    }

    category.name = name;
    category.image = image;


    await category.save();
    res.json(category);
  } catch (error) {
    console.error("Failed to update category:", error);
    res.status(500).json({ error: "Failed to update category" });
  }
};

export const deletecategory = async (req, res) => {
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
};
