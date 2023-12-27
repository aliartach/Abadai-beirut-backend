import express from 'express';
import { getallMessages , getmessageById , createmessage , updatemessage , deletemessage } from '../Controllers/inboxController.js';

const router = express.Router();

router.get('/Messages', getallMessages)
router.get('/Messages:id' , getmessageById)
router.post('/Messages', createmessage);
router.patch('/Messages:id', updatemessage);
router.delete('/Messages:id', deletemessage); 

export default router;