import db from '../../services/db.service.js'

export const userService = {
    query,
    getById,
    getByEmail,
    createUser,
    isEmailTaken,
}

async function query() {
    try {
        const users = await db.user.findMany()
        return users
    } catch (err) {
        throw err
    }
}

async function getById(userId) {
    try {
        const user = await db.user.findUnique({
            where: {
                id: userId,
            },
        })
        return user
    } catch (err) {
        throw err
    }
}

async function getByEmail(email) {
    try {
        const user = await db.user.findUnique({
            where: { email },
        })
        return user
    } catch (err) {
        throw err
    }
}

async function createUser({ name, password, email }) {
    try {
        const createdUser = await db.user.create({
            data: {
                name,
                email,
                password,
            },
        })
        return createdUser
    } catch (err) {
        throw err
    }
}

async function isEmailTaken(email) {
    const user = await db.user.findUnique({
        where: { email },
        select: { id: true },
    })
    return !!user
}
