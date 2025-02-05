import { utilService } from '../../services/util.service.js'
import { productService } from './product.service.js'

export async function fillDB(req, res) {
    try {
        const products = await productService.fillDB(req.body)
        res.status(200).json('success')
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message })
    }
}

export async function getProducts(req, res) {
    try {
        const products = await productService.getAll()
        res.status(200).json(products)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message })
    }
}

export async function getProduct(req, res) {
    try {
        const productId = utilService.validateId(req.params.productId)
        const product = await productService.getById(productId)
        res.status(200).json(product)
    } catch (err) {
        console.log(err)
        res.status(400).send('Could not find product')
    }
}

export async function createProduct(req, res) {
    const { name, description, price } = req.body
    const data = {
        name,
        description,
        price,
    }

    try {
        const newProduct = await productService.createNew(data)
        res.status(201).json(newProduct)
    } catch (err) {
        console.log(err)
        res.status(400).send('Could not create product')
    }
}

export async function updateProduct(req, res) {
    const { name, description, price } = req.body
    const data = {
        name,
        description,
        price,
    }

    try {
        const productId = utilService.validateId(req.params.productId)
        const updatedProduct = await productService.updateById(productId, data)
        res.status(200).json(updatedProduct)
    } catch (err) {
        console.log(err)
        res.status(400).send('Could not update product')
    }
}

export async function deleteProduct(req, res) {
    try {
        const productId = utilService.validateId(req.params.productId)
        const deletedProduct = await productService.deleteById(productId)
        res.status(200).send(deletedProduct)
    } catch (err) {
        console.log(err)
        res.status(400).send('Could not delete product')
    }
}
