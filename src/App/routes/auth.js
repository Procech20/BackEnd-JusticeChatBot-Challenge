import { Router } from 'express';
import routeValidators from '../middlewares/validator';
import auth from '../controllers/auth';
import routeProtection from '../middlewares/token';

const { loginValidate, signupValidate } = routeValidators;

const router = Router();

router.route('/register')
  /**
 * @swagger
 * /api/v1/auth/register:
 *   post:
 *     tags:
 *       - auth
 *     name: Create a user
 *     summary: Create a user  (Admin protected route)
 *     consumes:
 *       -application/json
 *     produces:
 *       - application/json
 *     requestBody:
 *      content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: integer
 *                username:
 *                  type: string
 *                  required: true
 *                email:
 *                  type: string
 *                password:
 *                  type: string
 *                firstName:
 *                  type: string
 *                lastName:
 *                  type: string
 *     responses:
 *       '201':
 *             description:  Successfully Registered a user
 *       '400':
 *             description:  User already exists
 *       '500':
 *             description: There was an error while creating User! Please check the server.
 * */
  .post(signupValidate, auth.register);

router.route('/login')
  /**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     tags:
 *       - auth
 *     name: User login
 *     summary: Route for user login
 *     consumes:
 *       -application/json
 *     produces:
 *       - application/json
 *     requestBody:
 *      content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                email:
 *                  type: string
 *                password:
 *                  type: string
 *     responses:
 *       '200':
 *             description:  User login successful
 *       '400':
 *             description:  Validation error Email is required
 *       '401':
 *             description:  Invalid password
 *       '404':
 *             description:  User Not found
 *       '500':
 *             description: There was an error while creating User! Please check the server.
 * */
  .post(loginValidate, auth.login);

router.route('/me')
  /**
 * @swagger
 * /api/v1/auth/me:
 *   get:
 *     tags:
 *       - auth
 *     name: Get logged User
 *     summary: Fetch a logged in user from database from the provided token.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: auth
 *         in: header
 *         required: true
 *     requestBody:
 *     responses:
 *       '200':
 *             description:  User is logged in!
 *       '400':
 *             description: No token provided or incomplete token
 *       '500':
 *             description:  Error while checking token! Cannot read property 'split' of undefined
 * */
  .get(routeProtection.protect, auth.logged);

export default router;
