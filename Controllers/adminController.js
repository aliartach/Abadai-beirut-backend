import adminModel from "../Models/adminModel.js";
import dotenv from "dotenv"
import bcrypt from "bcrypt";
import validator from "validator";
dotenv.config()


class adminController {
    static async createAdmin(req, res) {
      try {
        const { username, password } = req.body
        if(!validator.isStrongPassword(password)){
            return res.status(400).json('enter a strong password')
        }
        if(!username) {
         return res.status(403).json('please enter a username')
        }
        const newAdmin = await adminModel.create({ username, password });
        res.status(200).json(newAdmin);
      
      } catch (err) {
        res.status(500).json({ message: err.message });
        console.log(err);
      }
    }


    static async SignIn(req, res) {
        const { username, password } = req.body;
    
    
            try {
                if (!username || !password)
                    return res.status(400).json( //400 means bad request
                        {
                            message: 'username and password are required fields! ',
                        });
                const foundUser = await adminModel.findOne({ where: { username: username } });
    
                if (!foundUser) {
                    return res.status(401).json({ alert: "unauthorized login 1" });; //401 means unauthorized 
                }
    
                //evaluate password
                const match = await bcrypt.compare(password, foundUser.password);
                
    
                if (match) {
                    //create JWTs
                    const token = jwt.sign(
                      {
                        id: foundUser.id,
                        isAdmin: true
                      },
                   process.env.ACCESS_TOKEN_SECRET, 
                  {expiresIn: '1d'});
    
              res.status(200).send({
                  id: foundUser.id,
                  username: foundUser.username,
                  accessToken: token,})
                  res.json({ success: `Admin ${username} is logged in successfully, ${token}` });
    
                }
    
                else {
                    res.status(401).json({ alert: "unauthorized login" }); //401 means unauthorized
                }
            }
            catch (err) {
                res.status(500)
            }
    
        }

        static async findallAdmins(req, res) {
            try {
              const findAdmins = await adminModel.findAll();
              res.status(200).json(findAdmins);
            } catch (err) {
              res.status(500).json({ message: err.message });
              console.log(err);
            }
          }

          static async deleteAdmin(req, res) {
            const { id } = req.params;
            try {
              const admin = await adminModel.findOne({ where: { id: id } });
              if (!admin) {
                res.status(404).json({ error: "No Such Id" });
              } else {
                await admin.destroy();
                res.status(200).json(admin);
              }
            } catch (err) {
              res.status(500).json({ message: err.message });
            }
          }

          static async findAdminByPk(req, res) {
            try {
              const findAdmin = await adminModel.findByPk(req.params.id);
              res.status(200).json(findAdmin);
            } catch (err) {
              res.status(500).json({ message: err.message });
              console.log(err);
            }
          }
          static async updateAdmin(req, res) {
            try {
              const { id } = req.params;
              const admin = await adminModel.findOne({ where: { id: id } });
        
              if (!admin) {
                res.status(404).json({ error: "No Such Id" });
              } else {
                await adminModel.update(req.body, {
                  where: { id: id },
                });
                res.status(200).json(admin);
              }
            } catch (err) {
              res.status(500).json({ message: err.message });
              console.log(err);
            }
          }
        }
        
    export default adminController;

// const authenticate = async(req,res) =>{
    // check if the request has a username and password in the headers
//    const { username, password } = req.body

//     try{
//         // Query the data base to find an admin with the same username and password
//         const admin = await Admin.findOne({username, password});

//         if(admin){
//             // admin with the provided username and password found
//             res.status(200).json({message:'Admin access granted'});
//             return true
//         }else{
//             // No admin with matching credetials found
//             res.status(400).json({error:'access denied'})
//             return false
//         }


//     } 
//     catch(error) {
//         // Handle any database query errors here
//         res.status(500).json({error:'Internal server error'});
//     }

// };

// const loginAdmin = async (req, res) => {
//   const { userName, password } = req.body;

//   try {
//     const admin = await Admin.findOne({ userName });

//     if (!admin) {
//       return res.status(404).json({ error: "Admin not found" });
//     }

//     if (password === admin.password) {
//       res.status(200).json({ status: "ok", data: admin });
//     } else {
//       res.status(401).json({ error: "Incorrect password" });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to retrieve the admin" });
//   }
// };




// const addAdmin =  async (req, res) => {
//     try {
//       const newRecord = new Admin(req.body);
//       await newRecord.save();
//       res.status(201).json(newRecord);
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
//   }

// module.exports = {loginAdmin, addAdmin};