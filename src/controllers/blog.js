//@desc  Get all blog posts
//@route GET /api/v1/techblogs
//@access Public
exports.getBlogs = (req, res, next) => {
    res.status(200).json({ success: true, message: 'Get all blog posts'});
};


//@desc  Get single blog post
//@route GET /api/v1/techblogs/:id
//@access Public
exports.getBlog = (req, res, next) => {
    res.status(200).json({ success: true, message: `Get single blog post ${req.params.id}`});
};


//@desc  Create new blog post
//@route POST /api/v1/techblogs
//@access Private
exports.createBlog = (req, res, next) => {
    res.status(201).json({ success: true, message: 'Create a blog post'});
};


//@desc  Update blog post
//@route PUT /api/v1/techblogs/:id
//@access private
exports.updateBlog = (req, res, next) => {
    res.status(200).json({ success: true, message: `Update blog post ${req.params.id}`});
};


//@desc  Delete blog post
//@route DELETE /api/v1/techblogs/:id
//@access Private
exports.deleteBlog = (req, res, next) => {
    res.status(200).json({ success: true, message: `Delete blog posts ${req.params.id}`});
};