import { Router} from 'express';
import blog from '../controllers/blog.js';
import protect from '../middlewares/protect.js'


const router = Router();

router.route('/')
    .get(blog.findAll)
    .post(blog.create);

router.route('/:id')
    .get(blog.find)
    .put(blog.update)
    .delete(blog.delete);

export default  router;