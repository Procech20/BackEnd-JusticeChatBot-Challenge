import successRes from '../utils/successHandler';
import errorRes from '../utils/errorHandler';
import Model from '../../Database/models/database';

const { Blog } = Model;

class Posts {
    //@desc  Create new blog post
    //@route POST /api/v1/techblogs
    //@access Private
  static async create(req, res) {
    try {
      const { title, description, userId } = req.body;

      const Post = await Blog.create({
        title,
        description,
        userId,
      });
      return successRes(res, 201, 'Successfull created Blog!', Post);
    } catch (error) {
      console.log(error.message.red);
      return errorRes(
        res,
        500,
        `Error creating Blog!`
      );
    }
  }
    //@desc  Get single blog
    //@route GET /api/v1/techblogs/:id
    //@access Public
  static async findAll(req,res) {
    try {
      const Post = await Blog.findAll();
      return successRes(res, 200, Post);
    } catch (err) {
      return successRes(res, 500, err )
    }
  }
    //@desc  Get single blog
    //@route GET /api/v1/techblogs/:id
    //@access Public
  static async findByPK(req, res) {
    try {
      const Post = await Blog.findOne({ where: { id: req.params.id } });
      return successRes(res, 200, Post);
    } catch (error) {
      return errorRes(res, 404, 'Blog not found');
      console.log(error.message);
    }
  }
    //@desc  Update blog post
    //@route PUT /api/v1/techblogs/:id
    //@access private
  static async update(req, res) {
    try {
      const Post = await Blog.update(req.body, {
        where: { id: req.params.id },
      });

      const updatedBlog = await Blog.findOne({ where: { id: req.params.id } });

      return successRes(res, 201, 'successfully updated Blog', updatedBlog);
    } catch (error) {
      return errorRes(res, 404, `Ooops! No blog with Id of ${req.params.id} found`);
    }
  }
    //@desc  Delete blog post
    //@route DELETE /api/v1/techblogs/:id
    //@access Private
  static async delete(req, res) {
    try {
      const Post = await Blog.destroy({ where: { id: req.params.id } });
      return successRes(res, 200, 'Blog Deleted successfully', Post);
    } catch (error) {
      return errorRes(
        res,
        404,
        `No blog with Id ${req.params.id} found!`
      );
    }
  }
}

export default Posts;

// import db from '../../Database/models/database';
// // import Blog from '../../Database/models/Post';

// const Post  = db.blog;
// console.log(Post);

// class Blogs {


//   static async find(req, res) {
//     try {
//         const Blog = await Post.findAll()
//         res.status(200).json({ success: true, data: {Blog} });
//     } catch (err) {
//       return res
//       .status(500)
//       .json({ success: false, message: "Some error occurred while retrieving Blogs." });
//     };
//   };


//   //@desc  Get single blog post
//   //@route GET /api/v1/techblogs/:id
//   //@access Public
//   static  async find(req, res) {
//         // Validate request
//     if (!req.params.id) {
//       res.status(401).json({ success: false,  message: `Couldn't find blog with the id of: ${req.params.id}` });
//     };

//     try {
//       const Blog = await Post.findOne({ where: { id: req.params.id } });
//       return res.status(200).json({ success: true, data:{ Blog } });
//     } catch (err) {
//         res.status(500).json({ success:false, message: "Some error occurred while retrieving Blog." });
//       };
//   };



//   static async create(req, res) {
//       // Validate request
//     if (!req.body.userId && !req.body.title && !req.body.description) {
//       return res
//       .status(400)
//       .json({ message: "Content can not be empty!" });
//     };

//     try {
//         const {tittle, description, userId , photo} = req.body;

//         const Blog = await Post.create({
//             tittle,
//             description,
//             userId,
//             photo
//         });
//         res.status(201).json({success: true, data: { Blog }});
//     } catch (err) {
//         console.log(err.message.red);
//         return res
//         .status(500)
//         .json({ success:false, message: "Some error occurred while creating Blog." });
//       };
//   };



//   static async update(req, res) {
//     if (!req.params.id) {
//       return res
//       .status(401)
//       .json({ success: false, message: `Could not find blog with the id: ${req.params.id}`});
//     };
//     try {
//         const Blog = await Post.update(req.body, { where: { id: req.params.id } });

//         const updatedBlog = await Post.findOne({ where: { id: req.params.id } });
//         return res
//           .status(200)
//           .json({ success: true, message: "Blog deleted successfully!", data: updatedBlog });
//     } catch (err) {
//       return res
//       .status(500)
//       .json({ message: `Error updating Blog with id of ${req.params.id}`, err });
//     };
//     console.log(err.message.red);
//   };



//   static async delete(req, res) {
//     try {
//       if (!req.params.id) {
//         return res
//         .status(401)
//         .json({success: false, message: `The blog with the id:${req.params.id} was not found!`})
//       };
//       const Blog = await Post.destroy({ where: { id: req.params.id} });
//       return res
//         .status(200)
//         .json({success: true, message: "Blog deleted successfully!", data: {} });
//     } catch (err) {
//       console.log(err.message.red);
//       return res
//       .status(500)
//       .json({ success: false, message: `Could not delete Blog with id of: ${req.params.id}` });
//     };
//   };

// };


// export default Blogs;