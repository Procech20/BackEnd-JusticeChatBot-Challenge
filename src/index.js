import '@babel/polyfill';
import morgan from 'morgan';
import express, { json } from 'express';
import dotenv from 'dotenv';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import 'colors';
import logger from './App/middlewares/logger';
import routes from './App/routes/index';
import welcome from './App/routes/welcome';

// Load env vars
dotenv.config();

// Initialising the app with express
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use(fileUpload({ useTempFiles: true }));

// Initialise logger middleware
app.use(logger);

// Mounting file upload and express json
app.use(json());

// Mounting Morgan
app.use(morgan('dev'));

// Mounting routes
app.use('/', welcome);
app.use('/api/v1', routes);

// DB Initialisation
const db = require('./Database/models/server');

// Test DB Connection
db.sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully...'.bgGreen.bold));

app.listen(process.env.PORT, () => console.log(`Server running in "${process.env.NODE_ENV}" mode on port ${process.env.PORT}...`.bold.blue));

export default app;
