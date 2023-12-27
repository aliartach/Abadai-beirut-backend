import Orders from "../Models/Realtions.js";
import users from "../Models/UsersModules.js";
export const getallOrders = async (req, res) => {
  try {
    const order = await Orders.findAll({
      include: [{
        model: users,
        as: "users", // Assuming you defined this alias in the association
      }],
    });
    res.json(order);
  } catch (error) {
    console.error("Failed to fetch order:", error);
    res.status(500).json({ error: "Failed to fetch order" });
  }
};

export const getorderById = async (req, res) => {
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
};

export const createorder = async (req, res) => {
  try {
    const { modification, quanity } = req.body;
    const order = await Orders.create({ modification, quanity  }).json;
    res.status(201).json(order);
  } catch (error) {
    console.error("Error creating order:", error);
    res
      .status(500)
      .json({ error: "Failed to create order", details: error.message });
  }
};

export const updateorder = async (req, res) => {
  const { id } = req.params;
  const { modification, quanity    } = req.body;
  try {
    const order = await Orders.findByPk(id);
    if (!order) {
      return res.status(404).json({ error: "order not found" });
    }

    order.modification = modification;
    order.quanity = quanity;


    await order.save();
    res.json(order);
  } catch (error) {
    console.error("Failed to update order:", error);
    res.status(500).json({ error: "Failed to update order" });
  }
};

export const deleteorder = async (req, res) => {
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
};
