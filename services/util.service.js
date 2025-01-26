export const utilService = {
    validateId,
}

function validateId(id) {
    try {
        const idAsInt = parseInt(id, 10)
        if (isNaN(idAsInt)) {
            throw new Error('Invalid Id')
        }
        return idAsInt
    } catch (err) {
        throw new Error('Invalid Id')
    }
}
