import { Request, Response } from "express";
import RoleModel from "../models/roleModel";
export const createRole = async (req: Request, res: Response) => {
    try {
        const newRole = new RoleModel({
            title: req.body.title
        })
        const result = await newRole.save()
        res.status(200).json(result)
    } catch (e) {
        res.status(500).json(e);
    }
}
export const getRoles = async (req: Request, res: Response) => {
    try {
        const roles = await RoleModel.find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
        res.status(200).json(roles)
    } catch (e) {
        res.status(500).json(e);
    }
}