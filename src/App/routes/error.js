/* eslint-disable max-len */
import { Router } from 'express';
import noRoute from '../controllers/error';

const router = Router();

router.route('/*')
/**
 * @swagger
 * /api/v1/*:
 *   get:
 *     tags:
 *       - Error
 *     name: Uknown route
 *     summary: A route for unknown endpoints
 *     produces:
 *       - application/json
 *     requestBody:
 *     responses:
 *       '404':
 *             description:  route not found! Please try a valid route like /api/v1/blogs or /api/v1/users
 * */
  .get(noRoute.error);

export default router;
