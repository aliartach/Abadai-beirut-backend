import { Product, Categories } from "../Models/Relations.js";

class ProductController {
  static async getallProducts(req, res) {
    try {
      const product = await Product.findAll({
        include: [
          {
            model: Categories,
          },
        ],
      });
      res.json(product);
    } catch (error) {
      console.error("Failed to fetch product:", error);
      res.status(500).json({ error: "Failed to fetch product" });
    }
  }

  static async getproductById(req, res) {
    const { id } = req.params;
    try {
      const product = await Product.findByPk(id);
      if (!product) {
        return res.status(404).json({ error: "product not found" });
      }
      res.json(product);
    } catch (error) {
      console.error("Failed to fetch product:", error);
      return res.status(500).json({ error: "Failed to fetch product" });
    }
  }

  static async createproduct(req, res) {
    try {
      const { name, description, price, recommended, CategoryId } = req.body;
      const image = req.file.path;

      // Check if a product with the same name already exists
      const existingProduct = await Product.findOne({
        where: {
          name: name,
        },
      });

      if (existingProduct) {
        // Product with the same name already exists
        return res
          .status(400)
          .json({ error: "Product with the same name already exists." });
      }

      // Create the new product if it doesn't already exist
      const newProduct = await Product.create({
        name,
        description,
        image,
        price,
        recommended,
        CategoryId,
      });

      res.status(201).json(newProduct);
    } catch (error) {
      console.error("Error creating product:", error);
      res
        .status(500)
        .json({ error: "Failed to create product", details: error.message });
    }
  }

  static async updateproduct(req, res) {
    const { id } = req.params;
    const image = req.file?.path;
    const { name, description, price, recommended, quantity } = req.body;

    try {
      const product = await Product.findByPk(id);

      if (!product) {
        return res.status(404).json({ error: "product not found" });
      }
      if (name) {
        product.name = name;
      }
      if (description) {
        product.description = description;
      }

      if (image) {
        product.image = image;
      }

      if (price) {
        product.price = price;
      }
      if (recommended) {
        product.recommended = recommended;
      }

      if (quantity) {
        product.quantity = quantity;
      }

      await product.save();
      res.json(product);
    } catch (error) {
      console.error("Failed to update product:", error);
      res.status(500).json({ error: "Failed to update product" });
    }
  }

  static async deleteproduct(req, res) {
    const { id } = req.params;
    try {
      const product = await Product.findByPk(id);
      if (!product) {
        return res.status(404).json({ error: "product not found" });
      }

      await product.destroy();
      res.json({ message: "product deleted successfully" });
    } catch (error) {
      console.error("Failed to delete product:", error);
      res.status(500).json({ error: "Failed to delete product" });
    }
  }
}

export default ProductController;