import express from 'express';
import ReviewsControllers from '../Controllers/ReviewsControllers.js';

const reviewRouter = express.Router();

reviewRouter.get('/', ReviewsControllers.getallreviews)

reviewRouter.get('/:id' , ReviewsControllers.getreviewById)

reviewRouter.post('/', ReviewsControllers.createreview);

reviewRouter.patch('/:id', ReviewsControllers.updatereview);

reviewRouter.delete('/:id', ReviewsControllers.deletereview); 

export default reviewRouter;