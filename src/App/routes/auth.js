import { Router } from 'express';
import auth from '../controllers/auth';
import { loginValidate, signupValidate } from '../middlewares/validator';
import protect from '../middlewares/protect';

const router = Router();

router.route('/register')
    .post(signupValidate, auth.register);

router.route('/login')
    .get(loginValidate, auth.login);

router.route('/me')
    .get(protect, auth.logged)

export default router;