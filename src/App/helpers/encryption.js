import bcrypt from 'bcryptjs';

export default class PwdService {
  static hashPassword(password) { return bcrypt.hashSync(password, bcrypt.genSaltSync(10)); }

  static checkPassword(password, hashed) { return bcrypt.compareSync(password, hashed); }
}
