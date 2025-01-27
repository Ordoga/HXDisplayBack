import { messageService } from './message.service.js'

export async function getMessages(req, res) {
    try {
        const users = await messageService.query()
        res.status(200).json(users)
    } catch (err) {
        throw err
    }
}

export async function getMessage(req, res) {
    try {
        const messageId = parseInt(req.params.messageId, 10)
        if (isNaN(messageId)) {
            throw new Error('Invalid userId')
        }
        const user = await messageService.getById(messageId)
        res.status(200).json(user)
    } catch (err) {
        throw err
    }
}

export async function createMessage(req, res) {
    try {
        // Should have name, email, text
        const { name, email, message } = req.body
        if (!name || !email || !message) {
            throw new Error('Missing credentials')
        }
        const newMessage = await messageService.createMessage({ name, email, message })
        res.status(201).json(newMessage)
    } catch (err) {
        throw err
    }
}
