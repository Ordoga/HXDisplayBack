import db from '../../services/db.service.js'

export const messageService = {
    query,
    getById,
    createMessage,
}

async function query() {
    try {
        const messages = await db.message.findMany()
        return messages
    } catch (err) {
        throw err
    }
}

async function getById(messageId) {
    try {
        const message = await db.message.findUnique({
            where: {
                id: messageId,
            },
        })
        return message
    } catch (err) {
        throw err
    }
}

async function createMessage({ name, email, message }) {
    try {
        const createdMessage = await db.message.create({
            data: {
                name,
                email,
                message,
            },
        })
        return createdMessage
    } catch (err) {
        throw err
    }
}
