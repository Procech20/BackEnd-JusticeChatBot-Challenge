import { Router } from 'express';
import Post from '../controllers/blog';
// import protect from '../middlewares/protect';
const router = Router();

router
    .route('/')
    .get(Post.findAll)
    .post( Post.create);
router
    .route('/:id')
    .get( Post.findByPK)
    .put( Post.update)
    .delete( Post.delete);

export default router;

// import { Router } from 'express';
// import Blog from '../controllers/Post';

// const router = Router();

// router.route('/')
//     .get(Blog.find)
//     .post(Blog.create);

// router.route('/:id')
//     .get(Blog.find)
//     .put(Blog.update)
//     .delete(Blog.delete);

// export default  router;