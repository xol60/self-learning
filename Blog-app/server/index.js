const express = require('express')
require('dotenv').config()
const cors = require('cors')
var cookieParser = require('cookie-parser')
const connection = require('./db')
const authRouter = require('./routers/authRouter')
const postRouter = require('./routers/postRouter')
const app = express()
connection()
app.use(cookieParser())
app.use(express.json());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use('/uploads', express.static(__dirname + '/uploads'));
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
app.use('/api/auth', authRouter)
app.use('/api/post', postRouter)