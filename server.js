import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import path from 'path'

import { userRoutes } from './api/user/user.routes.js'
import { authRoutes } from './api/auth/auth.routes.js'
import { messsageRoutes } from './api/message/message.routes.js'
import { productRoutes } from './api/product/product.routes.js'

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

app.use('/api/auth', authRoutes)

app.use('/api/user', userRoutes)
app.use('/api/message', messsageRoutes)
app.use('/api/product', productRoutes)

app.get('/**', (req, res) => {
    res.sendFile(path.resolve('public/index.html'))
})

app.listen(port, () => console.log(`Server is running on port ${port}`))
