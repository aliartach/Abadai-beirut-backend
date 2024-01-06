import express from 'express';
import UserControllers from '../Controllers/UserControllers.js';

const userRouter = express.Router();

userRouter.get('/', UserControllers.getallusers)

userRouter.get('/:id' , UserControllers.getUserById)

userRouter.post('/', UserControllers.createUser);

userRouter.patch('/:id', UserControllers.updateUser);

userRouter.delete('/:id', UserControllers.deleteUser); 

export default userRouter;