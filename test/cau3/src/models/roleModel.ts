import mongoose from "mongoose";

const RoleSchema = new mongoose.Schema(
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

const RoleModel = mongoose.model("Role", RoleSchema);
export default RoleModel;