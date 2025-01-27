import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import path from 'path'
// import dotenv from 'dotenv'
// dotenv.config()

import { userRoutes } from './api/user/user.routes.js'
import { projectRoutes } from './api/project/project.routes.js'
import { authRoutes } from './api/auth/auth.routes.js'
import { clientRoutes } from './api/client/client.routes.js'
import { messsageRoutes } from './api/message/message.routes.js'

const port = process.env.PORT || 3030

const app = express()
app.use(express.json())
app.use(cookieParser())

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve('public')))
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:5173', 'http://localhost:5173'],
        credentials: true,
    }
    app.use(cors(corsOptions))
}

app.use('/api/user', userRoutes)
app.use('/api/project', projectRoutes)
app.use('/api/client', clientRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/message', messsageRoutes)

app.get('/**', (req, res) => {
    res.sendFile(path.resolve('public/index.html'))
})

app.listen(port, () => console.log(`Server is running on port ${port}`))
