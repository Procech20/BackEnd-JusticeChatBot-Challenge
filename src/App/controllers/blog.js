/* eslint-disable linebreak-style */
import successRes from '../utils/succHandler';
import ErrorResponse from '../utils/errorResponse';
import blogServices from '../../Database/services/blog';

const {
  createBlog, deleteBlog, findBlog, findBlogs, updateBlog,
} = blogServices;

class blogControllers {
  // @desc  Get all blog posts
  // @route GET /api/v1/techblogs
  // @access Public
  static async getBlogs(req, res, next) {
    const blog = await findBlogs();
    if (!blog) { return next(ErrorResponse(res, 404, 'Ooops! Looks like there are no blogs :(')); }
    return successRes(res, 200, 'All Blogs retreived successfully', blog);
  }
  // @desc  Get single blog post
  // @route GET /api/v1/techblogs/:id
  // @access Public,

  static async getBlog(req, res, next) {
    const blog = await findBlog({ id: req.params.id });
    if (!blog) { return next(ErrorResponse(res, 404, `No blog found wth the d of: ${req.params.id} :(`)); }
    return successRes(res, 200, 'successfully retrieved Blog', blog);
  }

  // @desc  Create new blog post
  // @route POST /api/v1/techblogs
  // @access Private,

  static async createBlog(req, res) {
    const {
      title, description, userId, photo,
    } = req.body;

    const blog = await createBlog({
      title,
      description,
      userId,
      photo,
    });
    return successRes(res, 201, 'Successfull created Blog', blog);
  }
  // @desc  Update blog post
  // @route PUT /api/v1/techblogs/:id
  // @access private,

  static async updateBlog(req, res, next) {
    const foundBlog = await findBlog({ id: req.params.id });

    if (!foundBlog) { return next(ErrorResponse(res, 404, `No blog found wth the id of: ${req.params.id} :(`)); }
    const updatedBlog = await updateBlog(req.body, { id: req.params.id });
    if (!updatedBlog) { return next(ErrorResponse(res, 404, `No blog found wth the id of: ${req.params.id} :(`)); }

    return successRes(res, 201, 'successfully updated Blog', updatedBlog);
  }

  // @desc  Delete blog post
  // @route DELETE /api/v1/techblogs/:id
  // @access Private
  static async deleteBlog(req, res, next) {
    const blog = await deleteBlog({ id: req.params.id });
    if (!blog) { return next(ErrorResponse(res, 404, `No blog found wth the id of: ${req.params.id} :(`)); }
    return successRes(res, 200, 'Deleted successfully a Blog', blog);
  }
}

export default blogControllers;
