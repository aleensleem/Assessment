const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/iframemiddleware');
const connectDB = require('./config/db')
const port = process.env.PORT || 3000;

connectDB()
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/iframe/link', require('./routes/iframeroutes'))
app.use(errorHandler)

app.listen(port, () => console.log(`server listening on port ${port}`));