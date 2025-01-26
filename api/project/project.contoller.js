import { utilService } from '../../services/util.service.js'
import { projectService } from './project.service.js'

export async function getProjects(req, res) {
    try {
        const projects = await projectService.getAll()
        res.status(200).json(projects)
    } catch (err) {
        res.status(400).send('Could not get projects')
    }
}

export async function getProject(req, res) {
    try {
        const projectId = utilService.validateId(req.params.projectId)
        const project = await projectService.findById(projectId)
        res.status(200).json(project)
    } catch (err) {
        res.status(400).send('Could not find project')
    }
}

export async function createProject(req, res) {
    const userId = utilService.validateId(req.body.userId)
    const clientId = utilService.validateId(req.body.clientId)
    try {
        const data = {
            name: req.body.name,
            status: req.body.status,
            clientId,
            userId,
        }
        const newProject = await projectService.createNew(data)
        res.status(201).json(newProject)
    } catch (err) {
        res.status(400).send('Could not create project')
    }
}

export async function updateProject(req, res) {
    try {
        const projectId = utilService.validateId(req.params.projectId)
        const data = {
            name: req.body.name,
            status: req.body.status,
        }
        const updatedProject = await projectService.updateById(projectId, data)
        res.status(200).json(updatedProject)
    } catch (err) {
        res.status(400).send('Could not update project')
    }
}

export async function deleteProject(req, res) {
    try {
        const projectId = validateId(req.params.projectId)
        const deletedProject = await projectService.deleteById(projectId)
        res.status(200).send(deletedProject)
    } catch (err) {
        res.status(400).send('Could not delete project')
    }
}
