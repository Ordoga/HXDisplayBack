import { utilService } from '../../services/util.service.js'
import { clientService } from './client.service.js'

export async function getClients(req, res) {
    try {
        const clients = await clientService.getAll()
        res.status(200).json(clients)
    } catch (err) {
        res.status(400).send('Coult not get clients')
    }
}

export async function getClient(req, res) {
    try {
        const clientId = utilService.validateId(req.params.clientId)
        const client = await clientService.getClientById(clientId)
        res.status(200).json(client)
    } catch (err) {
        res.status(400).send('Could not get client')
    }
}

export async function createClient(req, res) {
    try {
        const userId = utilService.validateId(req.body.userId)
        const data = {
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            userId: userId,
        }
        const newClient = await clientService.createNew(data)
        res.status(201).json(newClient)
    } catch (err) {
        console.log(err)

        res.status(400).send('Could not create client')
    }
}

export async function updateClient(req, res) {
    try {
        const clientId = utilService.validateId(req.params.clientId)
        const data = {
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
        }
        const updatedClient = await clientService.updateById(clientId, data)
        res.status(200).json(updatedClient)
    } catch (err) {
        res.status(400).send('Could not update client')
    }
}

export async function deleteClient(req, res) {
    try {
        const clientId = utilService.validateId(req.params.clientId)
        const deletedClient = await clientService.deleteById(clientId)
        res.status(200).json(deletedClient)
    } catch (err) {
        res.status(400).send('Could not delete client')
    }
}
