import express from 'express';
import { getalladmins , getadminById , createadmin , updateadmin , deleteadmin } from '../Controllers/adminController.js';

const router = express.Router();

router.get('/Admins', getalladmins)
router.get('/Admins:id' , getadminById)
router.post('/Admins', createadmin);
router.patch('/Admins:id', updateadmin);
router.delete('/Admins:id', deleteadmin); 

export default router;

