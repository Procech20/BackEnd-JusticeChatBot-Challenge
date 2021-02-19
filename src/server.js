const express = require('express');
const dotenv = require('dotenv');

const app = express();

//Body parser
app.use(express.json());



const PORT = process.env.PORT || 5000;

const port = app.listen(PORT, console.log(`Server running in "${process.env.NODE_ENV}" mode on port ${PORT}...`));