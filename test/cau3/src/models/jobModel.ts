import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true
        },
        logo: {
            type: String,
            default: 'https://static.recruitery.co/uploads/images/08ab20c97c8b4d2783065d01072f0839_20210514101545.jpeg'
        },
        domain: {
            type: String,
            require: true
        }
    },
    {
        timestamps: true,
    }
);

const JobModel = mongoose.model("Job", JobSchema);
export default JobModel;