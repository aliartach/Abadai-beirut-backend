import express from 'express';
import { getallreviews , getreviewById , createreview , updatereview , deletereview } from '../Controllers/ReviewsControllers.js';

const router = express.Router();

router.get('/reviews', getallreviews)
router.get('/reviews:id' , getreviewById)
router.post('/reviews', createreview);
router.patch('/reviews:id', updatereview);
router.delete('/reviews:id', deletereview); 

export default router;