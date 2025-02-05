import express from 'express'
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct, fillDB } from './product.controller.js'

const router = express.Router()

router.get('/', getProducts)
router.get('/:productId', getProduct)
router.post('/', createProduct)
router.put('/:productId', updateProduct)
router.delete('/:productId', deleteProduct)

router.post('/fillDB', fillDB)

export const productRoutes = router
