import { Router } from 'express';
import auth from '../controllers/auth';
import routeValidators from '../middlewares/validator';
import routeProtection from '../middlewares/token';

const { protect } = routeProtection;
const { login, logged, register } = auth;

const router = Router();

router.route('/register')
  .post(routeValidators.signupValidate, register);

router.route('/login')
  .get(routeValidators.loginValidate, login);

router.route('/me')
  .get(protect, logged);

module.exports = router;
