import express from 'express'
import { createUser, getUser, getUsers } from './user.controller.js'

const router = express.Router()

router.get('/', getUsers)
router.get('/:userId', getUser)
router.post('/', createUser)

export const userRoutes = router
