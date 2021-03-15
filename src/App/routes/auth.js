import { Router } from 'express';
import routeValidators from '../middlewares/validator';

const { protect } = '../middlewares/token';
const { login, logged, register } = '../controllers/auth';

const router = Router();

router.route('/register')
  .post(routeValidators.signupValidate, register);

router.route('/login')
  .get(routeValidators.loginValidate, login);

router.route('/me')
  .get(protect, logged);

module.exports = router;
