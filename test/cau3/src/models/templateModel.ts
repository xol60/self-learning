import mongoose from "mongoose";

const TemplateSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true
        },
        image: {
            type: String,
            default: 'https://www.vietnamworks.com/assets-wowcv/images/list_templates/cv_template_33.png'
        },
        category: {
            type: String,
            require: true
        },
        role: {
            type: String,
            require: true
        }
    },
    {
        timestamps: true,
    }
);

const TemplateModel = mongoose.model("Template", TemplateSchema);
export default TemplateModel;