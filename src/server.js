import '@babel/polyfill';
import morgan from 'morgan';
import express, { json } from 'express';
import dotenv from 'dotenv';
// eslint-disable-next-line no-unused-vars
import colors from 'colors';
import logger from './App/middlewares/logger';
import routes from './App/routes/index';

// Load env vars
dotenv.config();

// Initialising the app with express
const app = express();

// Initialise logger middleware
app.use(logger);

//
app.use(json());

// Mounting Morgan
app.use(morgan('dev'));

// Mounting routes
app.use('/api/v1/techblogs', routes);

// DB Initialisation
const db = require('./Database/models/server');

// Test DB Connection
db.sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully...'.bgGreen.bold))
  .catch((err) => console.error('Unable to connect to the database:'.bgRed.bold, err.message));

const PORT = process.env.PORT || 5000;

const Server = app.listen(PORT, () => console.log(`Server running in "${process.env.NODE_ENV}" mode on port ${PORT}...`.bold.blue));

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  Server.close(() => process.exit(1));
});
