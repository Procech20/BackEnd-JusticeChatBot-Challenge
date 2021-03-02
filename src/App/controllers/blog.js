import successRes from '../utils/succHandler';
import errorRes from '../utils/errHandler';
import Models from '../../Database/models/server';

const { Blog } = Models;
class Blogs {

//@desc  Get all blog posts
//@route GET /api/v1/techblogs
//@access Public
static async findAll(req, res) {
    try {
        const blog = await Blog.findAll();
        return successRes(res, 200, 'All Blogs retreived successfully', blog);
    } catch (err) {
      return errorRes(res, 404, 'Blog not found');
    }
};


//@desc  Get single blog post
//@route GET /api/v1/techblogs/:id
//@access Public
static async find(req, res) {
    try {
      const blog = await Blog.findOne({ where: { id: req.params.id } });
      return successRes(res, 200, 'successfully retrieved Blog', blog);
    } catch (error) {
      return errorRes(res, 404, 'Blog not found');
    }
 }


//@desc  Create new blog post
//@route POST /api/v1/techblogs
//@access Private
static async create(req, res) {
    try {
        const { title, description, userId } = req.body;

        const blog = await Blog.create({
            title,
            description,
            userId,
        });
        return successRes(res, 201, 'Successfull created Blog', blog);
        } catch (err) {
        return errorRes( res, 400, `There was error Blog not created ${err.message}`);
    }
}



//@desc  Update blog post
//@route PUT /api/v1/techblogs/:id
//@access private
static async update(req, res) {
    try {
      const blog = await Blog.update(req.body, {
        where: { id: req.params.id },
      });

      const updatedBlog = await Blog.findOne({ where: { id: req.params.id } });

      return successRes(res, 201, 'successfully updated Blog', updatedBlog);
    } catch (err) {
      return errorRes(res, 404, `no Blog with Id ${req.params.id} found`);
    }
}


//@desc  Delete blog post
//@route DELETE /api/v1/techblogs/:id
//@access Private
static async delete(req, res) {
    try {
      const blog = await Blog.destroy({ where: { id: req.params.id } });
      return successRes(res, 200, 'Deleted successfully a Blog', blog);
    } catch (err) {
      return errorRes(res, 404, `no Blog with Id ${req.params.id} found to be deleted`);
    }
  }
}

export default Blogs;