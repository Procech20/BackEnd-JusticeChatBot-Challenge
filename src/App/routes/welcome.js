import { Router } from 'express';
import welcome from '../controllers/welcome';

const router = Router();

router.route('/')
  /**
 * @swagger
 * /api/v1:
 *   get:
 *     tags:
 *       - Welcome
 *     name: Welcoming
 *     summary: Welcoming page
 *     produces:
 *       - application/json
 *     requestBody:
 *     responses:
 *       '200':
 *             description:  All Blogs retreived successfully
 * */
  .get(welcome.greeting);

export default router;
