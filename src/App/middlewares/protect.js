import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
import errorRes from '../utils/errHandler';

config();

const protect = async (req, res, next) => {
  try {
    const token = req.headers.auth.split(' ')[1];

    if (!token) {
      return errorRes(res, 401, 'Not authorized to access this route');
    }

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded;

    return next();
  } catch (err) {
    return errorRes(res, 403, 'Forbiden to access this route');
  }
};

export default protect;