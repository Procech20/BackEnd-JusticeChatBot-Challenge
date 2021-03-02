import { verify, sign} from 'jsonwebtoken';
import { config } from 'dotenv';
import errorRes from './errHandler';
import { hash, compare } from 'bcryptjs';

config();

const authenticateToken = async (req, res, next) => {
  try {
    const token = req.headers.auth.split(' ')[1];

    if (!token) {
      return errorRes(res, 401, 'Not authorized to access this route');
    }

    const decoded = verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    return next();
  } catch (err) {
    return errorRes(res, 403, 'forbiden to access this route');
  }
  try {
    const encryptedPassword = async (password) => {
      const hashed = await hash(password, 10);
      return hashed;
    }
  } catch (err) {
    return errorRes(res, 403, 'Unauthorised Token')
  }
  try {
    const dencryptedPassword = async (password, hashed) => {
      const isValid = await hash(password, hashed);
      return isValid
    }
  } catch (err) {
    return errorRes(res, 403, 'Unauthorised Token')
  }
  try {
    const signToken = (datas) => {
      const token = sign(datas, JWT_SECRET, {expiresIn: JWT_EXPIRE});
      return token;
    }
  } catch (err) {
    return errorRes(res, 403, 'Unauthorised Token')
  }
  try {
    const verifyToken = (token) => {
      const data = verify(token, JWT_SECRET);
      return data;
    }
  } catch (err) {
    return errorRes(res, 403, 'Unauthorised Token')
  }
};

export default authenticateToken;