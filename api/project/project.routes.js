import express from 'express'
import { createProject, deleteProject, getProject, getProjects, updateProject } from './project.contoller.js'

const router = express.Router()

router.get('/', getProjects)
router.get('/:projectId', getProject)
router.post('/', createProject)
router.put('/:projectId', updateProject)
router.delete('/:projectId', deleteProject)

export const projectRoutes = router
