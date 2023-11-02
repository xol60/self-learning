const express = require('express')
const viewEngine = require('./config/viewEngine')
const bodyParser = require('body-parser')
const sequelize = require('./config/connectDB')
const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
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
app.use(bodyParser.json({ limit: '200mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true, parameterLimit: 50000 }));
app.use(bodyParser.text({ limit: '200mb' }));

viewEngine(app)
connectDB()
initWebRoutes(app)
app.listen(process.env.PORT, () => {
    console.log(
        'app is running on port ' + process.env.PORT
    )
})