import express from 'express';
import { createCategory, getCategories } from '../controllers/CategoryController';
const router = express.Router()
router.post('/create', createCategory)
router.get('/get', getCategories)
export default router