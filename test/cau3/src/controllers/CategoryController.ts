import { Request, Response } from "express";
import CategoryModel from "../models/categoryModel";
export const createCategory = async (req: Request, res: Response) => {
    try {
        const newCategory = new CategoryModel({
            title: req.body.title
        })
        const result = await newCategory.save()
        res.status(200).json(result)
    } catch (e) {
        res.status(500).json(e);
    }
}
export const getCategories = async (req: Request, res: Response) => {
    try {
        const categories = await CategoryModel.find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
        res.status(200).json(categories)
    } catch (e) {
        res.status(500).json(e);
    }
}