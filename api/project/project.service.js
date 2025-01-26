import db from '../../services/db.service.js'

export const projectService = {
    getAll,
    getById,
    createNew,
    updateById,
    deleteById,
}

async function getAll() {
    try {
        const projects = await db.project.findMany()
        return projects
    } catch (err) {
        throw err
    }
}

async function getById(id) {
    try {
        const project = await db.project.findUnique({
            where: { id },
        })
        return project
    } catch (err) {
        throw err
    }
}

async function createNew(data) {
    try {
        const newProject = await db.project.create({
            data,
        })
        return newProject
    } catch (err) {
        throw err
    }
}

async function updateById(id, data) {
    try {
        const updatedProject = await db.project.update({
            where: { id },
            data,
        })
        return updatedProject
    } catch (err) {
        throw err
    }
}

async function deleteById(id) {
    try {
        const deletedProject = await db.project.delete({
            where: { id },
        })
        return deletedProject
    } catch (err) {
        throw err
    }
}
