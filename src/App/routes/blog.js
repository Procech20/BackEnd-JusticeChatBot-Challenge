import { Router} from 'express';
import { getBlogs, getBlog, createBlog, updateBlog, deleteBlog } from '../controllers/blog.js';
import { createValidate, updateValidate } from '../middlewares/validator'
import { isAdmin } from '../middlewares/permission'
import token  from '../middlewares/token'
import protect from '../middlewares/protect'


const router = Router();

router.route('/')
    .get(getBlogs)
    .post(token, isAdmin, protect, createValidate, createBlog);

router.route('/:id')
    .get(getBlog)
    .put(token, isAdmin, protect, updateValidate, updateBlog)
    .delete(token, isAdmin, protect, deleteBlog);

export default  router;