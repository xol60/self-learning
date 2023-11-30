import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import RoleRoute from './routes/RoleRoute'
import CategoryRoute from './routes/CategoryRoute'
import TemplateRoute from './routes/TemplateRoute'
import JobRoute from './routes/JobRoute'
dotenv.config()
const app = express()
app.use(cors({
    credentials: true
}))
app.use(bodyParser.json())
const PORT = process.env.PORT
const MONGO_URL = process.env.MONGO_URL
mongoose
    .connect(MONGO_URL)
    .then(() => app.listen(PORT, () => {
        console.log('Connect successfully')
        console.log(`Listening at Port ${PORT}`)
    }))
    .catch((error: Error) => console.log(`${error} did not connect`));
app.use('/api/role', RoleRoute)
app.use('/api/category', CategoryRoute)
app.use('/api/template', TemplateRoute)
app.use('/api/job', JobRoute)
