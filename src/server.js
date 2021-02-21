const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors')

//Route files
const blogs = require('./routes/blog')

//Load env vars
dotenv.config();

//Initialising the app with express
const app = express();

//Mounting routers
app.use('/api/v1/techblogs', blogs);


const PORT = process.env.PORT || 5000;

const port = app.listen(PORT, () => console.log(`Server running in "${process.env.NODE_ENV}" mode on port ${PORT}...`.bold.blue));