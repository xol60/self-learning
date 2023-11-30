import { Request, Response } from "express";
import TemplateModel from "../models/templateModel";
import { PipelineStage } from "mongoose";
export const createTemplate = async (req: Request, res: Response) => {
    try {
        const { title, image, category, role } = req.body
        const newTemplate = new TemplateModel({
            title, image, category, role
        })
        const result = await newTemplate.save()
        res.status(200).json(result)
    } catch (e) {
        res.status(500).json(e);
    }
}
export const getTemplates = async (req: Request, res: Response) => {
    try {
        const size: number = +req.query.pageSize || 20
        const number: number = +req.query.pageNumber || 1
        const categoryId: string = req.query.categoryId + ''
        const aggregate: PipelineStage[] = req.query.categoryId ? [{
            $match: {
                category: categoryId,
            },
        },] : []
        aggregate.push({
            $addFields: {
                roleId: {
                    $toObjectId: "$role"
                },
                categoryId: {
                    $toObjectId: "$category"
                }
            }
        },
            {
                $lookup: {
                    from: "roles",
                    localField: "roleId",
                    foreignField: "_id",
                    as: "roleData"
                }
            },
            {
                $lookup: {
                    from: "categories",
                    localField: "categoryId",
                    foreignField: "_id",
                    as: "categoryData"
                }
            },
            {
                '$facet': {
                    count: [{ $count: "total" }],
                    data: [{ $skip: size * (number - 1) }, { $limit: size }]
                }
            },)
        const templates = await TemplateModel.aggregate(aggregate)
        let { data } = templates[0]
        data = data.map((d: any) => ({
            _id: d._id,
            image: d.image,
            title: d.title,
            category: d.categoryData[0]?.title,
            role: d.roleData[0]?.title
        }))

        res.status(200).json({
            count: Math.ceil(templates[0].count[0]?.total / size),
            data
        })
    } catch (e) {
        res.status(500).json(e);
    }
}