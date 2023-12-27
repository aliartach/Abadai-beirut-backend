import express from 'express';
import { getallProducts , getproductById , createproduct , updateproduct , deleteproduct } from '../Controllers/productsController.js';
import upload from '../Middleware/Multer.js';
const router = express.Router();

router.get('/products', getallProducts)
router.get('/products:id' , getproductById)
router.post('/products',upload.single('image'), createproduct);
router.patch('/products:id',upload.single('image'), updateproduct);
router.delete('/products:id', deleteproduct); 

export default router;
