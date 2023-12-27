import Messages from "../Models/inboxModel.js";

export const getallMessages = async (req, res) => {
  try {
    const message = await Messages.findAll();
    res.json(message);
  } catch (error) {
    console.error("Failed to fetch message:", error);
    res.status(500).json({ error: "Failed to fetch message" });
  }
};

export const getmessageById = async (req, res) => {
  const { id } = req.params;
  try {
    const message = await Messages.findByPk(id);
    if (!message) {
      return res.status(404).json({ error: "Articles not found" });
    }
    res.json(message);
  } catch (error) {
    console.error("Failed to fetch message:", error);
    return res.status(500).json({ error: "Failed to fetch message" });
  }
};

export const createmessage = async (req, res) => {
  try {
    const {  first_name,  last_name , email, status , messages } = req.body;
    const message = await Messages.create({ first_name, last_name , email , status ,messages }).json;
    res.status(201).json(message);
  } catch (error) {
    console.error("Error creating message:", error);
    res
      .status(500)
      .json({ error: "Failed to create message", details: error.message });
  }
};

export const updatemessage = async (req, res) => {
  const { id } = req.params;
  const {  first_name,  last_name , email, status , messages     } = req.body;
  try {
    const message = await Messages.findByPk(id);
    if (!message) {
      return res.status(404).json({ error: "message not found" });
    }

    message.first_name = first_name;
    message.last_name = last_name;
    message.email = email;
    message.status = status;
    message.messages = messages;


    await message.save();
    res.json(message);
  } catch (error) {
    console.error("Failed to update message:", error);
    res.status(500).json({ error: "Failed to update message" });
  }
};

export const deletemessage = async (req, res) => {
  const { id } = req.params;
  try {
    const message = await Messages.findByPk(id);
    if (!message) {
      return res.status(404).json({ error: "message not found" });
    }

    await message.destroy();
    res.json({ message: "message deleted successfully" });
  } catch (error) {
    console.error("Failed to delete message:", error);
    res.status(500).json({ error: "Failed to delete message" });
  }
};
