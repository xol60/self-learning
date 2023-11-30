import { Request, Response } from "express";
import JobModel from "../models/jobModel";
export const createJob = async (req: Request, res: Response) => {
    try {
        const { title, domain, logo } = req.body
        const newJob = new JobModel({
            title, domain, logo
        })
        const result = await newJob.save()
        res.status(200).json(result)
    } catch (e) {
        res.status(500).json(e);
    }
}
export const getJobs = async (req: Request, res: Response) => {
    try {
        const size: number = +req.query.pageSize || 8
        const jobs = await JobModel.aggregate([
            { $sort: { updatedAt: -1 } },
            { $limit: size },
            {
                $project: {
                    _id: 1,
                    domain: 1,
                    logo: 1,
                    title: 1
                },
            },
        ])
        res.status(200).json(jobs)
    } catch (e) {
        res.status(500).json(e);
    }
}
