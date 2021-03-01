import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import colors from 'colors';

//Route files
import blogs from './App/routes/blog';

//Load env vars
dotenv.config();

import db from './Database/models/database';
//DB synchronization
db.sequelize.sync();
console.log("All models were synchronized successfully.".yellow.inverse);

//Test DB
db.sequelize.authenticate()
  .then(() => console.log('Database connected successfully.'.bgMagenta))
  .catch(err => console.error('Unable to connect to the database:'.bgRed, err.message.red));

//Initialising the app with express
const app = express();


//Mounting CORS middleware
app.use(cors());

//Parse requests from "application/json" content-type
app.use(bodyParser.json());

//Mounting routers
app.use('/api/v1/techblogs', blogs);


const PORT = process.env.PORT || 5000;

const port = app.listen(PORT, () => console.log(`Server running in "${process.env.NODE_ENV}" mode on port ${PORT}...`.bold.blue));
