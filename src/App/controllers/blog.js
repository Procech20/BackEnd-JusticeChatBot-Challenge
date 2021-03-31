/* eslint-disable camelcase */
import uploader from '../config/cloudinary';
import successRes from '../utils/succHandler';
import ErrorResponse from '../utils/errorResponse';
import blogServices from '../../Database/services/blog';

const {
  createBlog, deleteBlog, findBlog, findBlogs, updateBlog,
} = blogServices;
class BlogControllers {
  // @desc  Get all blog posts
  // @route GET /api/v1/techblogs
  // @access Public
  static async getBlogs(req, res, next) {
    try {
      const blog = await findBlogs();
      return successRes(res, 200, 'All Blogs retreived successfully', blog);
    } catch (err) {
      return next();
    }
  }
  // @desc  Get single blog post
  // @route GET /api/v1/techblogs/:id
  // @access Public,

  static async getBlog(req, res, next) {
    try {
      const blog = await findBlog({ id: req.params.id });
      if (!blog) { return next(ErrorResponse(res, 404, `No blog found with the id of: ${req.params.id} :(`)); }
      return successRes(res, 200, 'successfully retrieved Blog', blog);
    } catch (err) {
      return next();
    }
  }

  // // @desc  Create new blog post
  // @route POST /api/v1/techblogs
  // @access Private,
  static async createBlog(req, res, next) {
    try {
      const userId = req.user.id;
      const post = await createBlog({
        ...req.body,
        userId,
        imageUrl: '',
        imageId: '',
        time: Date.now(),
      });
      if (req.files) {
        const tmp = req.files.photo.tempFilePath;
        const result = await uploader.upload(tmp, (_, results) => results);
        post.imageUrl = result.url;
        post.imageId = result.public_id;
        post.save();
      }
      return successRes(res, 201, 'Successfully created Blog', post);
    } catch (err) {
      return next(new ErrorResponse(res, 500, `There was an error while updating Blog! ${err.message}`));
    }
  }
  // @desc  Update blog post
  // @route PUT /api/v1/techblogs/:id
  // @access private,

  static async updateBlog(req, res, next) {
    try {
      const foundBlog = await findBlog({ id: req.params.id });
      if (!foundBlog) { return next(ErrorResponse(res, 404, `No blog found with the id of: ${req.params.id} :(`)); }
      const updatedBlog = await updateBlog(req.body, { id: req.params.id });
      if (!updatedBlog) { return next(ErrorResponse(res, 404, `No blog found with the id of: ${req.params.id} :(`)); }
      return successRes(res, 201, 'successfully updated Blog', updatedBlog);
    } catch (err) {
      return next(new ErrorResponse(res, 500, `There was an error while updating Blog! ${err.message}`));
    }
  }

  // @desc  Delete blog post
  // @route DELETE /api/v1/techblogs/:id
  // @access Private
  static async deleteBlog(req, res, next) {
    try {
      const blog = await deleteBlog({ id: req.params.id });
      if (!blog) { return next(ErrorResponse(res, 404, `No blog found with the id of: ${req.params.id} :(`)); }
      return successRes(res, 200, 'Deleted successfully a Blog', blog);
    } catch (err) {
      return next(err);
    }
  }
}

export default BlogControllers;
