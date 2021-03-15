import { Router } from 'express';
import routeValidators from '../middlewares/validator';

const { protect, isAdmin } = '../middlewares/token';
const {
  getUsers, createUser, deleteUser, getUser, updatedUser,
} = '../controllers/user';

const router = Router();

router.route('/')
  .get(getUsers)
  .post(protect, isAdmin, routeValidators.signupValidate, createUser);
router.route('/:id')
  .get(getUser)
  .patch(protect, isAdmin, updatedUser)
  .delete(protect, isAdmin, deleteUser);

export default router;
