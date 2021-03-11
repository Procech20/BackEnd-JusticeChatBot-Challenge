
import ErrorResponse from '../utils/errorResponse';
import findUser from '../../Database/services/user';
import { verifyToken } from '../../Database/services/jwt';

export default async (req, res, next) => {
  try {
    const token = req.headers.autho.split(' ')[1];
    !token && ErrorResponse(res, 500, 'No token provided or incomplete token');
    const info = verifyToken(token);
    !info && ErrorResponse(res, 401, 'Invalid or expired token');
    const { id } = info;

    const user = await findUser({ id });

    !user && ErrorResponse(res, 401, 'User not found ');

    req.user = user;

    return next();
  } catch (err) {
    console.log(err.message);
    return ErrorResponse(res, 401, 'Not authorized, check your token');
  }
}