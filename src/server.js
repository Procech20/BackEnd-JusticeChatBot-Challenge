import '@babel/polyfill';
import morgan from 'morgan';
import express from'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import colors from 'colors';
import logger from './App/middlewares/logger';

//Route files
import blogs from './App/routes/blog';
import users from './App/routes/user';
import auth from './App/routes/auth';

//Load env vars
dotenv.config();

//Initialising the app with express
const app = express();

//Initialise logger middleware
app.use(logger);

//Mounting Morgan
// app.use(morgan('dev'));

//Mounting CORS middleware
app.use(cors());

//Parse requests from "application/json" content-type
app.use(bodyParser.json());

//Mounting routes
app.use('/api/v1/techblogs/blogs', blogs);
app.use('/api/v1/techblogs/users', users);
app.use('/api/v1/techblogs/auth', auth);

//DB Initialisation
const db = require('./Database/models/server');

//Test DB Connection
db.sequelize.authenticate()
    .then( () => console.log('Connection has been established successfully...'.bgGreen.bold))
    .catch( err => console.error('Unable to connect to the database:'.bgRed.bold, err.message));

db.sequelize.sync();
console.log("All models were synchronized successfully.".bold.yellow);

const PORT = process.env.PORT || 5000;

const port = app.listen(PORT, () => console.log(`Server running in "${process.env.NODE_ENV}" mode on port ${PORT}...`.bold.blue));