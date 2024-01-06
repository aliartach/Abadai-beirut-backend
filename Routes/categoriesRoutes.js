import express from 'express';
import categoriesController from '../Controllers/categoriesController.js';
import upload  from '../Middleware/multer.js';

const categoryRouter = express.Router();

categoryRouter.get('/', categoriesController.getallCategories)

categoryRouter.get('/:id' ,categoriesController.getcategoryById)

categoryRouter.post('/',upload.single('image'), categoriesController.createcategory);

categoryRouter.patch('/:id',upload.single('image'), categoriesController.updatecategory);

categoryRouter.delete('/:id', categoriesController.deletecategory); 

export default categoryRouter;