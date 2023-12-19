// const Admin = require('../Models/adminModel');

// const mongoose = require('mongoose');

// // const authenticate = async(req,res) =>{
//     // check if the request has a username and password in the headers
// //    const { username, password } = req.body

// //     try{
// //         // Query the data base to find an admin with the same username and password
// //         const admin = await Admin.findOne({username, password});

// //         if(admin){
// //             // admin with the provided username and password found
// //             res.status(200).json({message:'Admin access granted'});
// //             return true
// //         }else{
// //             // No admin with matching credetials found
// //             res.status(400).json({error:'access denied'})
// //             return false
// //         }


// //     } 
// //     catch(error) {
// //         // Handle any database query errors here
// //         res.status(500).json({error:'Internal server error'});
// //     }

// // };

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