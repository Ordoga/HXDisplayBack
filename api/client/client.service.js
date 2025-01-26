import db from '../../services/db.service.js'

export const clientService = {
    getAll,
    getClientById,
    createNew,
    updateById,
    deleteById,
}

async function getAll() {
    try {
        const clients = await db.client.findMany()
        return clients
    } catch (err) {
        throw err
    }
}

async function getClientById(id) {
    try {
        const client = await db.client.findUnique({
            where: { id },
        })
        return client
    } catch (err) {
        throw err
    }
}

async function createNew(data) {
    try {
        const client = await db.client.create({
            data,
        })
        return client
    } catch (err) {
        throw err
    }
}

async function updateById(id, data) {
    try {
        const client = await db.client.update({
            where: { id },
            data,
        })
        return client
    } catch (err) {
        throw err
    }
}

async function deleteById(id) {
    try {
        const client = await db.client.delete({
            where: { id },
        })
        return client
    } catch (err) {
        throw err
    }
}
