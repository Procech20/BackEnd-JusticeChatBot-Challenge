import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
import Models from '../../Database/models/server';
import successRes from '../utils/succHandler';
import errorRes from '../utils/errHandler';

config();

const { User } = Models;

class Users {
  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const foundUser = await User.findOne({ where: { email } });
      if (!foundUser) return errorRes(res, 404, 'User  Not found ');
      const isMatch = await bcrypt.compare(password, foundUser.password);
      if (!isMatch) return errorRes(res, 404, 'Invalid password');

      const token = jwt.sign(
        { id: foundUser.id, email: foundUser.email },
        process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE }
      );
      return successRes(res, 200, 'User logged in successfully :)', {
        token,
        foundUser,
      });
    } catch (err) {
      return errorRes(res, 400, `Oh No! Error while logging user :( ${err.message}`);
    }
  }
}

export default Users;