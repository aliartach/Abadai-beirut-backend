import express from 'express';
import OrderControllers from '../Controllers/OrderControllers.js';

const orderRouter = express.Router();

orderRouter.get('/', OrderControllers.getallOrders)

orderRouter.get('/:id' , OrderControllers.getorderById)

orderRouter.post('/', OrderControllers.createorder);

orderRouter.patch('/:id', OrderControllers.updateorder);

orderRouter.delete('/:id', OrderControllers.deleteorder); 

export default orderRouter;