import express from 'express'
import { getMessages, getMessage, createMessage } from './message.contoller.js'

const router = express.Router()

router.get('/', getMessages)
router.get('/:messageId', getMessage)
router.post('/', createMessage)

export const messsageRoutes = router
