import express from 'express';
import { getallusers , getUserById , createUser , updateUser , deleteUser } from '../Controllers/UserControllers.js';

const router = express.Router();

router.get('/users', getallusers)
router.get('/users:id' , getUserById)
router.post('/users', createUser);
router.patch('/users:id', updateUser);
router.delete('/users:id', deleteUser); 

export default router;