import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
import errorRes from './errHandler';

config();

const authenticateToken = async (req, res, next) => {
  try {
    const token = req.headers.auth.split(' ')[1];

    if (!token) {
      return errorRes(res, 401, 'Not authorized to access this route');
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    return next();
  } catch (err) {
    return errorRes(res, 403, 'forbiden to access this route');
  }
};

export default authenticateToken;