import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
import ErrorResponse from '../utils/errorResponse';

config();

const protect = async (req, res, next) => {
  try {
    const token = req.headers.autho.split(' ')[1];
    if (!token) {
      return ErrorResponse(res, 401,'Not authorized to access this route');
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    return next();
  } catch (err) {
    console.log(err.message);
    return ErrorResponse(res, 403, 'Forbiden to access this route');
  }
};

export default protect;