import swaggerJsDoc from 'swagger-jsdoc';
import swaggerui from 'swagger-ui-express';
import { Router } from 'express';

const docrouter = Router();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Justice ChatBot Backend Challenge',
      version: '1.0.0',
      description: 'A simple Express API for blog and users CRUD functionality',

      contact: {
        name: 'Prophete ISINGIZWE',
        url: ' ',
        email: 'isingizwepro01@icloud.com',
      },
    },
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
  },
  apis: ['./src/App/routes/*.js'],
};

const specs = swaggerJsDoc(options);

docrouter.use(
  '/',
  swaggerui.serve,
  swaggerui.setup(specs, { explorer: true }),
);

export default docrouter;
