import express from 'express';
import { getallCategories , getcategoryById , createcategory , updatecategory , deletecategory } from '../Controllers/categoriesController.js';
import upload  from '../Middleware/Multer.js';
const router = express.Router();

router.get('/Categories', getallCategories)
router.get('/Categories:id' , getcategoryById)
router.post('/Categories',upload.single('image'), createcategory);
router.patch('/Categories:id',upload.single('image'), updatecategory);
router.delete('/Categories:id', deletecategory); 

export default router;