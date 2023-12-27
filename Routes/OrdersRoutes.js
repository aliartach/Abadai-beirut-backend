import express from 'express';
import { getallOrders , getorderById , createorder , updateorder , deleteorder } from '../Controllers/OrderControllers.js';

const router = express.Router();

router.get('/Orders', getallOrders)
router.get('/Orders:id' , getorderById)
router.post('/Orders', createorder);
router.patch('/Orders:id', updateorder);
router.delete('/Orders:id', deleteorder); 

export default router;