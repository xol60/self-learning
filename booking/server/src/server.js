const express = require('express')
const viewEngine = require('./config/viewEngine')
const connectDB = require('./config/connectDB')
const bodyParser = require('body-parser')
const initWebRoutes = require('./routes')
const cors = require('cors')
require('dotenv').config()
let app = express()
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

viewEngine(app)
connectDB()
initWebRoutes(app)
app.listen(process.env.PORT, () => {
    console.log(
        'app is running on port ' + process.env.PORT
    )
})