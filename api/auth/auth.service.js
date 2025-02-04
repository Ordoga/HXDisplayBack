import bcrypt from 'bcrypt'
import { userService } from '../user/user.service.js'
import jwt from 'jsonwebtoken'

// TODO Change to env
const JWT_SECRET = 'secret'

export const authService = {
    signup,
    login,
    generateToken,
}

async function signup({ name, email, password }) {
    if (!name || !email || !password) {
        throw new Error('Missing credentials')
    }
    const isEmailTaken = await userService.isEmailTaken(email)
    if (isEmailTaken) {
        throw new Error('Email is already in use')
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const createdUser = await userService.createUser({
        name,
        email,
        password: hashedPassword,
    })
    return createdUser
}

async function login({ email, password }) {
    const user = await userService.getByEmail(email)
    if (!user) {
        throw new Error('Invalid email or password')
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password)
    if (!isPasswordCorrect) {
        throw new Error('Invalid email or password')
    }
    return user
}

async function generateToken(user) {
    try {
        const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '24h' })
        return token
    } catch (err) {
        throw err
    }
}
