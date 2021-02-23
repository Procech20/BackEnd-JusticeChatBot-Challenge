import express from'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import colors from 'colors';

//Route files
import blogs from './App/routes/blog';

//Load env vars
dotenv.config();

//Initialising the app with express
const app = express();


//Mounting CORS middleware
app.use(cors());

//Parse requests from "application/json" content-type
app.use(bodyParser.json());

//Mounting routers
app.use('/api/v1/techblogs', blogs);

// const db = require('./Database/models/database');
// db.sequelize.sync();
//console.log("All models were synchronized successfully.".grey);

const PORT = process.env.PORT || 5000;

const port = app.listen(PORT, () => console.log(`Server running in "${process.env.NODE_ENV}" mode on port ${PORT}...`.bold.blue));