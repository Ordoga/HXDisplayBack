import { userService } from './user.service.js'

export async function getUsers(req, res) {
    const users = await userService.query()
    res.status(200).json(users)
}

export async function getUser(req, res) {
    try {
        const userId = parseInt(req.params.userId, 10)
        if (isNaN(userId)) {
            throw new Error('Invalid userId')
        }
        const user = await userService.getUser(userId)
        res.status(200).json(user)
    } catch (err) {
        throw err
    }
}

export async function createUser(req, res) {
    try {
        // Should have name, password, email
        const { name, password, email } = req.body
        if (!name || !password || !email) {
            throw new Error('Missing credentials')
        }
        const newUser = await userService.createUser({ name, password, email })
        delete newUser.password

        res.status(201).json(newUser)
    } catch (err) {
        throw err
    }
}
