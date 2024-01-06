import {Users, Orders} from '../Models/Relations.js';

class UserControllers{

static async getallusers (req, res){

    
    try {
        const user = await Users.findAll(
            {
                include: [
                  {
                    model: Orders,
                    as: "Orders", // Assuming you defined this alias in the association
                  },
                ],
              });
        res.json(user);
    } catch (error) {
        console.error("Failed to fetch user:", error);
        res.status(500).json({ error: "Failed to fetch user" });
    }
};

static async getUserById(req, res){
    const { id } = req.params;
    try {
        const user = await Users.findByPk(id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json(user);
    } catch (error) {
        console.error("Failed to fetch user:", error);
        return res.status(500).json({ error: "Failed to fetch user" });
    }
};

static async createUser(req, res){
    try {
        const { firstName, lastName, phoneNumber, address, email, password } = req.body;
        const user = await Users.create({ firstName, lastName, phoneNumber, address, email, password });
        res.status(201).json(user);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Failed to create user', details: error.message });
    }
    
};

static async updateUser(req, res){
    const { id } = req.params;
    const {
        firstName,
        lastName,
        email,
        phoneNumber,
        address,
        password
        
    } = req.body;
    try {
        const user = await Users.findByPk(id);
        if (!user) {
            return res.status(404).json({ error: "user not found" });
        }

        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.phoneNumber = phoneNumber;
        user.address = address;
        user.password = password;
        
        

        await user.save();
        res.json(user);
    } catch (error) {
        console.error("Failed to update user:", error);
        res.status(500).json({ error: "Failed to update user" });
    }
};

static async deleteUser(req, res){
    const { id } = req.params;
    try {
        const user = await Users.findByPk(id);
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
}
export default UserControllers;