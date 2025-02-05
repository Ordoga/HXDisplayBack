import db from '../../services/db.service.js'

export const productService = {
    fillDB,
    getAll,
    getById,
    createNew,
    updateById,
    deleteById,
}

async function fillDB(newDB) {
    try {
        const products = await db.product.createMany({ data: newDB.products, skipDuplicates: true })
        const colors = await db.color.createMany({ data: newDB.colors, skipDuplicates: true })
        const productColors = await db.productColor.createMany({ data: newDB.productColors, skipDuplicates: true })
    } catch (err) {
        throw err
    }
}

async function getAll() {
    try {
        const products = await db.product.findMany({
            include: {
                productColors: {
                    select: {
                        color: {
                            select: {
                                id: true,
                                name: true,
                                hex: true,
                            },
                        },
                    },
                },
            },
        })
        return products
    } catch (err) {
        throw err
    }
}

async function getById(id) {
    try {
        const product = await db.product.findUnique({
            where: { id },
        })
        return product
    } catch (err) {
        throw err
    }
}

async function createNew(data) {
    try {
        const newProduct = await db.product.create({
            data,
        })
        return newProduct
    } catch (err) {
        throw err
    }
}

async function updateById(id, data) {
    try {
        const updatedProduct = await db.product.update({
            where: { id },
            data,
        })
        return updatedProduct
    } catch (err) {
        throw err
    }
}

async function deleteById(id) {
    try {
        const deletedProduct = await db.product.delete({
            where: { id },
        })
        return deletedProduct
    } catch (err) {
        throw err
    }
}
