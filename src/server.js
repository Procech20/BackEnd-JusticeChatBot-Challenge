import express from'express';
import dotenv from 'dotenv';
import cors from 'cors';
import colors from 'colors';

//Route files
import blogs from './App/routes/blog';

//Load env vars
dotenv.config();

//Initialising the app with express
const app = express();

//Mounting app-level middleware
app.use(cors());

//Mounting routers
app.use('/api/v1/techblogs', blogs);

const PORT = process.env.PORT || 5000;

const port = app.listen(PORT, () => console.log(`Server running in "${process.env.NODE_ENV}" mode on port ${PORT}...`.bold.blue));