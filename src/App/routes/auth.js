import { Router } from 'express';
import User from '../controllers/auth';

const router = Router();

router.route('/register').post(User.register);

export default router;