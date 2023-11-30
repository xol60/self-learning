import express from 'express';
import { createTemplate, getTemplates } from '../controllers/TemplateController';
const router = express.Router()
router.post('/create', createTemplate)
router.get('/get', getTemplates)
export default router