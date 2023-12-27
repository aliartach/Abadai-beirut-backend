import Products from "../Models/Realtions.js";
import Categories from "../Models/Realtions.js";
import sequelize from "../Config/database.js";

export const getallProducts = async (req, res) => {
  try {
    const product = await Products.findAll({
      include: [{
        model: Categories,
        as: "Categories", 
}],
    });
    res.json(product);
  } catch (error) {
    console.error("Failed to fetch product:", error);
    res.status(500).json({ error: "Failed to fetch product" });
  }
};

export const getproductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Products.findByPk(id);
    if (!product) {
      return res.status(404).json({ error: "Articles not found" });
    }
    res.json(product);
  } catch (error) {
    console.error("Failed to fetch product:", error);
    return res.status(500).json({ error: "Failed to fetch product" });
  }
};

export const createproduct = async (req, res) => {
  try {
    const { name, description, image, price, recommended } = req.body;

    // Check if a product with the same name already exists
    const existingProduct = await Products.findOne({
      where: {
        name: name,
      },
    });

    if (existingProduct) {
      // Product with the same name already exists
      return res.status(400).json({ error: "Product with the same name already exists." });
    }

    // Create the new product if it doesn't already exist
    const newProduct = await Products.create({
      name,
      description,
      image,
      price,
      recommended,
    });

    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Failed to create product", details: error.message });
  }
};

export const updateproduct = async (req, res) => {
  const { id } = req.params;
  const { name, description ,image , price , recommended    } = req.body;
  try {
    const product = await Products.findByPk(id);
    if (!product) {
      return res.status(404).json({ error: "product not found" });
    }

    product.name = name;
    product.description = description;
    product.image = image;
    product.price = price;
    product.recommended = recommended;

    await product.save();
    res.json(product);
  } catch (error) {
    console.error("Failed to update product:", error);
    res.status(500).json({ error: "Failed to update product" });
  }
};

export const deleteproduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Products.findByPk(id);
    if (!product) {
      return res.status(404).json({ error: "product not found" });
    }

    await product.destroy();
    res.json({ message: "product deleted successfully" });
  } catch (error) {
    console.error("Failed to delete product:", error);
    res.status(500).json({ error: "Failed to delete product" });
  }
};