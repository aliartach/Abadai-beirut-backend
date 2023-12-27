import admins from "../Models/adminModel.js";

export const getalladmins = async (req, res) => {
  try {
    const admin = await admins.findAll();
    res.json(admin);
  } catch (error) {
    console.error("Failed to fetch admin:", error);
    res.status(500).json({ error: "Failed to fetch admin" });
  }
};

export const getadminById = async (req, res) => {
  const { id } = req.params;
  try {
    const admin = await admins.findByPk(id);
    if (!admin) {
      return res.status(404).json({ error: "Articles not found" });
    }
    res.json(admin);
  } catch (error) {
    console.error("Failed to fetch admin:", error);
    return res.status(500).json({ error: "Failed to fetch admin" });
  }
};

export const createadmin = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingAdmin = await admins.findOne({
      $or: [{ email }, { username }],
    });

    if (existingAdmin) {
      return res
        .status(400)
        .json({ error: "Email or username already exists" });
    }

    // Email and username are unique, proceed with creating the admin
    const admin = await admins.create({ username, email, password });
    res.status(201).json({ message: "Admin created successfully", admin });
    console.log("Admin created:", admin.username, admin.email, admin.password);
  } catch (error) {
    console.error("Error creating admin:", error);
    res
      .status(500)
      .json({ error: "Failed to create admin", details: error.message });
  }
};

export const updateadmin = async (req, res) => {
  const { id } = req.params;
  const { username, email, password } = req.body;
  try {
    const admin = await admins.findByPk(id);
    if (!admin) {
      return res.status(404).json({ error: "admin not found" });
    }

    admin.username = username;
    admin.email = email;
    admin.password = password;

    await admin.save();
    res.json(admin);
  } catch (error) {
    console.error("Failed to update admin:", error);
    res.status(500).json({ error: "Failed to update admin" });
  }
};

export const deleteadmin = async (req, res) => {
  const { id } = req.params;
  try {
    const admin = await admins.findByPk(id);
    if (!admin) {
      return res.status(404).json({ error: "admin not found" });
    }

    await admin.destroy();
    res.json({ message: "admin deleted successfully" });
  } catch (error) {
    console.error("Failed to delete admin:", error);
    res.status(500).json({ error: "Failed to delete admin" });
  }
};