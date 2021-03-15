import { Router } from 'express';
import blogs from './blog';
import users from './user';
import auth from './auth';

const router = Router();

router.use('/blogs', blogs);
router.use('/users', users);
router.use('/auth', auth);

export default router;
