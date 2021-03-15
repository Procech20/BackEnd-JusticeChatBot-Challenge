import ErrorResponse from '../utils/errorResponse';
import userServices from '../../Database/services/user';
import encryption from '../helpers/jwt';

const { verifyToken } = encryption;

const { findUser } = userServices;

class routeProtection {
  static async protect(req, res, next) {
    try {
      const token = req.headers.autho.split(' ')[1];
      if (!token) { return ErrorResponse(res, 500, 'No token provided or incomplete token'); }
      const info = await verifyToken(token);
      if (!info) {
        return ErrorResponse(res, 401, 'Invalid or expired token');
      }
      const { id } = info;
      const user = await findUser({ id });
      if (!user) { return ErrorResponse(res, 401, 'User not found '); }

      req.user = user;

      return next();
    } catch (err) {
      console.log(err.message);
      return ErrorResponse(res, 500, 'Error while checking token! Please check your server');
    }
  }

  static async isAdmin(req, res, next) {
    try {
      const signedInUser = req.user;
      const user = await findUser({ id: signedInUser.id });
      if (user.role !== 'Admin') {
        return ErrorResponse(res, 401, 'Only admin allowed to perform such action.');
      }
      return next();
    } catch (err) {
      console.log(err.message);
      return ErrorResponse(res, 500, 'Error while verifying user!! Please check your server.');
    }
  }
}

export default routeProtection;
