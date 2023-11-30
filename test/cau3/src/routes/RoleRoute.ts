import express from 'express';
import { createRole, getRoles } from '../controllers/RoleController';
const router = express.Router()
router.post('/create', createRole)
router.get('/get', getRoles)
export default router