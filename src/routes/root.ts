import express from 'express'
import { API_ROOT_CONTROLLER } from 'controllers/api/v1/root'

const ROOT_ROUTE = express.Router()

ROOT_ROUTE.get('/api/v1/root', API_ROOT_CONTROLLER.GET.getRoot)
// root.post('/', postRoot)

export { ROOT_ROUTE }
