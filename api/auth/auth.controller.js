import { authService } from './auth.service.js'

export async function signup(req, res) {
    try {
        // Creating new user in db
        const credentials = req.body
        const createdUser = await authService.signup(credentials)

        // Logging in user
        const loginCreds = { email: createdUser.email, password: credentials.password }
        const loginUser = await authService.login(loginCreds)
        const token = await authService.generateToken(loginUser)
        const cleanedUser = { user: user.name, email: user.email }

        res.cookie('login_token', token, { sameSite: 'None', secure: true })
        res.status(201).json({ message: 'User created successfully', user: cleanedUser })
    } catch (err) {
        res.status(400).json(err)
    }
}

export async function login(req, res) {
    try {
        const credentials = req.body
        const user = await authService.login(credentials)
        const token = await authService.generateToken(user)
        const cleanedUser = { user: user.name, email: user.email }
        res.cookie('login_token', token, { sameSite: 'None', secure: true })
        res.status(200).json(cleanedUser)
    } catch (err) {
        res.status(400).json(err)
    }
}

export async function logout(req, res) {
    try {
        res.clearCookie('login_token')
        res.send({ msg: 'Logged out successfully' })
    } catch (err) {
        res.status(400).send({ err: 'Failed to logout' })
    }
}
