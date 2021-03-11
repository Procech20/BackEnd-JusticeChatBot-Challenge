import successRes from '../utils/succHandler';
import ErrorResponse from '../utils/errorResponse';
import PwdService from '../helpers/encryption';
import userServices from '../../Database/services/user';

const {
  createUser, deleteOne, findUser, findUsers, updateUser,
} = userServices;

class userControllers {
  // @desc  Get all Users
  // @route GET /api/v1/techblogs
  // @access Public,

  static async getUsers(req, res, next) {
    const user = await findUsers();
    if (!user) { return next(new ErrorResponse(res, 404, 'Ooops! Looks like there are no users :(')); }
    return successRes(res, 200, 'All users retreived successfully', user);
  }
  // @desc  Get single User post
  // @route GET /api/v1/techblogs/:id
  // @access Public,

  static async getUser(req, res, next) {
    const user = await findUser({ id: req.params.id });
    if (!user) { return next(new ErrorResponse(res, 404, `No user found wth the d of: ${req.params.id} :(`)); }
    return successRes(res, 200, 'successfully retrieved user', user);
  }
  // @desc  Create new User
  // @route POST /api/v1/techusers
  // @access Private,

  static async createUser(req, res) {
    const {
      username, email, password, firstName, lastName, role,
    } = req.body;
    const hash = await PwdService.hashPassword(password);
    const user = await createUser({
      username,
      email,
      password: hash,
      firstName,
      lastName,
      role,
    });
    return successRes(res, 201, 'Successfull created user', user);
  }
  // @desc  Update User
  // @route PUT /api/v1/techblogs/:id
  // @access private,

  static async updatedUser(req, res, next) {
    const foundUser = await findUser({ id: req.params.id });
    if (!foundUser) { return next(new ErrorResponse(res, 404, `Ooops! No user found with the provided id of: ${req.params.id}`)); }
    const user = await updateUser(req.body, { id: req.params.id });

    if (!user) { return next(new ErrorResponse(res, 404, `No user found wth the id of: ${req.params.id} :(`)); }
    const updatedUser = await findUser({ id: req.params.id });

    return successRes(res, 201, 'successfully updated user', updatedUser);
  }
  // @desc  Delete User
  // @route DELETE /api/v1/techblogs/:id
  // @access Private,

  static async deleteUser(req, res, next) {
    const user = await deleteOne({ id: req.params.id });
    if (!user) { return next(new ErrorResponse(res, 404, `No user found wth the id of: ${req.params.id} :(`)); }
    return successRes(res, 200, 'Deleted successfully a user', user);
  }
}

export default userControllers;
