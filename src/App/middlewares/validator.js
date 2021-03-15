/* eslint-disable lines-between-class-members */
import schema from '../helpers/schema';
import ErrorResponse from '../utils/errorResponse';

const {
  blogCreate, blogUpdate, signup, login,
} = schema;

class routeValidators {
  static async blogValidate(req, res, next) {
    const { error } = blogCreate.validate(req.body);
    if (error) { return ErrorResponse(res, 400, `Validaton error: ${error.message.replace(/"/g, '')}`); }
    return next();
  }

  static async updateValidate(req, res, next) {
    const { error } = blogUpdate.validate(req.body);
    if (error) { return ErrorResponse(res, 400, `Validaton error: ${error.message.replace(/"/g, '')}`); }
    return next();
  }
  static async loginValidate(req, res, next) {
    const { error } = login.validate(req.body);
    if (error) { return ErrorResponse(res, 400, `Validaton error: ${error.message.replace(/"/g, '')}`); }
    return next();
  }
  static async signupValidate(req, res, next) {
    const { error } = signup.validate(req.body);
    if (error) { return ErrorResponse(res, 400, `Validaton error: ${error.message.replace(/"/g, '')}`); }
    return next();
  }
}

export default routeValidators;
