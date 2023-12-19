import express from 'express';
import InboxController from '../Controllers/inboxController.js'

const inboxRouter = express.Router()

inboxRouter.get('/',InboxController.getAllMessages)

inboxRouter.get('/:id', InboxController.getMessageById)

inboxRouter.post('/',InboxController.addMessage)

inboxRouter.delete('/:id', InboxController.deleteMessage)

inboxRouter.patch('/:id', InboxController.updateMessage)

export default inboxRouter;

