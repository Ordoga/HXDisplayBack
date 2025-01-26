import express from 'express'
import { getClients, getClient, createClient, updateClient, deleteClient } from './client.controller.js'

const router = express.Router()

router.get('/', getClients)
router.get('/:clientId', getClient)
router.post('/', createClient)
router.put('/:clientId', updateClient)
router.delete('/:clientId', deleteClient)

export const clientRoutes = router
