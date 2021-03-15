import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
import successRes from '../utils/succHandler';
import ErrorResponse from '../utils/errorResponse';
import PwdService from '../helpers/encryption';
import Models from '../../Database/models/server';

config();

const { User } = Models;

class auth {
  // @desc     User register
  // @route    GET /api/v1/techblogs/auth/register
  // access    Public,

  static async register(req, res, next) {
    try {
      const {
        firstName, lastName, email, password, username,
      } = req.body;
      const hash = await PwdService.hashPassword(password);

      const user = await User.create({
        username,
        firstName,
        lastName,
        email,
        password: hash,
      });

      return successRes(res, 201, 'Successfully Registered a user', user);
    } catch (err) {
      console(err.message);
      return next(new ErrorResponse(res, 500, `Ooops! Unable to register User :( ..... ${err.message}`));
    }
  }
  // @desc     Get current logged in user
  // @route    GET /api/v1/techblogs/auth/me
  // access    Private,

  static async logged(req, res, next) {
    try {
      const { user } = req;
      if (!user) return next(new ErrorResponse(res, 404, 'Ooops! looks like there are no logged in user :('));
      return successRes(res, 200, 'User is logged in!', user);
    } catch (err) {
      console.log(err.message.red);
      return next(new ErrorResponse(res, 500, `Ooops! Error getting user :( ${err.message}`));
    }
  }
  // @desc     User login
  // @route    GET /api/v1/techblogs/auth/login
  // access    Public,

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const foundUser = await User.findOne({ where: { email } });
      if (!foundUser) return ErrorResponse(res, 404, 'User  Not found');
      const isMatch = await PwdService.checkPassword(password, foundUser.password);
      if (!isMatch) return ErrorResponse(res, 401, 'Invalid password');

      const token = jwt.sign(
        { id: foundUser.id, email: foundUser.email },
        process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE },
      );
      return successRes(res, 200, 'User login successful :)', {
        token,
        foundUser,
      });
    } catch (err) {
      console.log(err.message);
      return next(new ErrorResponse(res, 400, `Oh No! Error while logging user :( ${err.message}`));
    }
  }
}

export default auth;
