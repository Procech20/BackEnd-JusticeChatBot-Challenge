import { Router } from 'express';
import userControllers from '../controllers/user';
import routeValidators from '../middlewares/validator';
import routeProtection from '../middlewares/token';

const { protect, isAdmin } = routeProtection;
const {
  getUsers, createUser, deleteUser, getUser, updatedUser,
} = userControllers;

const router = Router();

router.route('/')
  .get(getUsers)
  .post(protect, isAdmin, routeValidators.signupValidate, createUser);
router.route('/:id')
  .get(getUser)
  .patch(protect, isAdmin, updatedUser)
  .delete(protect, isAdmin, deleteUser);

export default router;
