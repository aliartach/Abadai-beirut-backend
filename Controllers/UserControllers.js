import User from '../Models/UsersModules.js';

export const getallusers = async (req, res) => {
    try {
        const user = await User.findAll();
        res.json(user);
    } catch (error) {
        console.error("Failed to fetch user:", error);
        res.status(500).json({ error: "Failed to fetch user" });
    }
};

export const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json(user);
    } catch (error) {
        console.error("Failed to fetch user:", error);
        return res.status(500).json({ error: "Failed to fetch user" });
    }
};

export const createUser = async (req, res) => {
    try {
        const { firstName, lastName, phoneNumber, address, email, password } = req.body;
        const user = await User.create({ firstName, lastName, phoneNumber, address, email, password });
        res.status(201).json(user);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Failed to create user', details: error.message });
    }
    
};

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const {
        firstName,
        lastName,
        email,
        phoneNumber,
        password
        
    } = req.body;
    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ error: "user not found" });
        }

        user.firstName = firstName;
        user.phoneNumber = phoneNumber;
        user.email = email;

        await user.save();
        res.json(user);
    } catch (error) {
        console.error("Failed to update user:", error);
        res.status(500).json({ error: "Failed to update user" });
    }
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ error: "user not found" });
        }

        await user.destroy();
        res.json({ message: "user deleted successfully" });
    } catch (error) {
        console.error("Failed to delete user:", error);
        res.status(500).json({ error: "Failed to delete user" });
    }
};