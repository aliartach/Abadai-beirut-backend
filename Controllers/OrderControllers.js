import { Orders, Users } from "../Models/Relations.js";

class OrderControllers {
  static async getallOrders(req, res) {
    try {
      const order = await Orders.findAll({
        include: [
          {
            model: Users,
            as: "User", // Assuming you defined this alias in the association
          },
        ],
      });
      res.json(order);
    } catch (error) {
      console.error("Failed to fetch order:", error);
      res.status(500).json({ error: "Failed to fetch order" });
    }
  }

  static async getorderById(req, res) {
    const { id } = req.params;
    try {
      const order = await Orders.findByPk(id);
      if (!order) {
        return res.status(404).json({ error: "Articles not found" });
      }
      res.json(order);
    } catch (error) {
      console.error("Failed to fetch order:", error);
      return res.status(500).json({ error: "Failed to fetch order" });
    }
  }

  static async createorder(req, res) {
    try {
      const { modification, quantity, UserId } = req.body;
      const order = await Orders.create({ modification, quantity, UserId });
      res.status(201).json(order);
    } catch (error) {
      console.error("Error creating order:", error);
      res
        .status(500)
        .json({ error: "Failed to create order", details: error.message });
    }
  }

  static async updateorder(req, res) {
    const { id } = req.params;
    const { modification, quantity, UserId } = req.body;
    try {
      const order = await Orders.findByPk(id);
      if (!order) {
        return res.status(404).json({ error: "order not found" });
      }

      if (modification) {
        order.modification = modification;
      }
      if (quantity) {
        order.quantity = quantity;
      }
      if (UserId) {
        order.UserId = UserId;
      }

      await order.save();
      res.json(order);
    } catch (error) {
      console.error("Failed to update order:", error);
      res.status(500).json({ error: "Failed to update order" });
    }
  }

  static async deleteorder(req, res) {
    const { id } = req.params;
    try {
      const order = await Orders.findByPk(id);
      if (!order) {
        return res.status(404).json({ error: "order not found" });
      }

      await order.destroy();
      res.json({ message: "order deleted successfully" });
    } catch (error) {
      console.error("Failed to delete order:", error);
      res.status(500).json({ error: "Failed to delete order" });
    }
  }
}
export default OrderControllers;
