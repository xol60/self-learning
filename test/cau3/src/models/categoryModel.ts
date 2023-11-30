import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true
        },
    },
    {
        timestamps: true,
    }
);

const CategoryModel = mongoose.model("Category", CategorySchema);
export default CategoryModel;