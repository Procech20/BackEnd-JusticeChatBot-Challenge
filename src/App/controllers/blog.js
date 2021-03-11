import successRes from '../utils/succHandler';
import ErrorResponse from '../utils/errorResponse';
import asyncHandler from '../../Database/services/asyncHandler';
import Models from '../../Database/models/server';

const { Blog } = Models;

//@desc  Get all blog posts
//@route GET /api/v1/techblogs
//@access Public
export const getBlogs = asyncHandler(async(req, res, next) => {
  const blog = await Blog.findAll();
  if(!blog) { return next( ErrorResponse(res, 404, 'Ooops! Looks like there are no blogs :('))};
  return successRes(res, 200, 'All Blogs retreived successfully', blog);
});
//@desc  Get single blog post
//@route GET /api/v1/techblogs/:id
//@access Public
export const getBlog = asyncHandler(async(req, res, next) => {
  const blog = await Blog.findOne({ where: { id: req.params.id } });
  if(!blog) { return next( ErrorResponse(res, 404, `No blog found wth the d of: ${req.params.id} :(`))};
  return successRes(res, 200, 'successfully retrieved Blog', blog);
});
//@desc  Create new blog post
//@route POST /api/v1/techblogs
//@access Private
export const createBlog = asyncHandler(async(req, res) => {
  const { title, description, userId, photo } = req.body;

  const blog = await Blog.create({
    title,
    description,
    userId,
    photo
  });
  return successRes(res, 201, 'Successfull created Blog', blog);
});
//@desc  Update blog post
//@route PUT /api/v1/techblogs/:id
//@access private
export const updateBlog = asyncHandler(async(req, res, next) => {
  const blog = await Blog.update(req.body, {
    where: { id: req.params.id },
  });

  if(!blog) { return next( ErrorResponse(res, 404, `No blog found wth the id of: ${req.params.id} :(`))};
  const updatedBlog = await Blog.findOne({ where: { id: req.params.id } });
  if(!updatedBlog) { return next( ErrorResponse(res, 404, `No blog found wth the id of: ${req.params.id} :(`))};

  return successRes(res, 201, 'successfully updated Blog', updatedBlog);
});
//@desc  Delete blog post
//@route DELETE /api/v1/techblogs/:id
//@access Private
export const deleteBlog = asyncHandler(async(req, res, next) => {
    const blog = await Blog.destroy({ where: { id: req.params.id } });
    if(!blog) { return next( ErrorResponse(res, 404, `No blog found wth the id of: ${req.params.id} :(`))};
    return successRes(res, 200, 'Deleted successfully a Blog', blog);
});
