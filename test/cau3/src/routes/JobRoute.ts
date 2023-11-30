import express from 'express';
import { createJob, getJobs } from '../controllers/JobController';
const router = express.Router()
router.post('/create', createJob)
router.get('/get', getJobs)
export default router