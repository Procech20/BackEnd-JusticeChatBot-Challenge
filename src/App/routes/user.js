import { Router } from 'express';
import { getUsers, createUser, deleteUser, getUser, updateUser } from '../controllers/user';
import { signupValidate } from '../middlewares/validator';
import { isAdmin }  from '../middlewares/permission';
import token  from '../middlewares/token';
import protect from '../middlewares/protect';

const router = Router();

router.route('/')
    .get(getUsers)
    .post(token, isAdmin, protect, signupValidate, createUser);
router.route('/:id')
    .get(getUser)
    .put(protect, updateUser)
    .delete(protect, deleteUser);

export default router;