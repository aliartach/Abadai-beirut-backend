import express from 'express';
import productsControllers from '../Controllers/productsController.js';
import upload from '../Middleware/multer.js';

const productRouter = express.Router();

productRouter.get('/', productsControllers.getallProducts)

productRouter.get('/:id' , productsControllers.getproductById)

productRouter.post('/',upload.single('image'), productsControllers.createproduct);

productRouter.patch('/:id',upload.single('image'), productsControllers.updateproduct);

productRouter.delete('/:id', productsControllers.deleteproduct); 

export default productRouter;