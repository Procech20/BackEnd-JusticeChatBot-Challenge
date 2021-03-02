import bcrypt from 'bcryptjs';
import successRes from '../utils/succHandler';
import errorRes from '../utils/errHandler';
import User from '../../Database/models/user'

//@desc     Register User
//@route    GET /api/v1/techblogs/auth/register
//access    Public

class auth {
    static async register(req, res) {
        try {
            const { username, firstName, lastName, email, password, role } = req.body;
            const user = User.create({
                username,
                firstName,
                lastName,
                email,
                password: bcrypt.hashSync(password, 10),
                role
            });
            const token = jwt.sign(
                { id: user.id},
                process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE }
            );
            return successRes(res, 201, 'User Created successfully',{ token, user});
        } catch (err) {
            return errorRes(res, 400, 'Ooops! unable to create User :(', err.message)
        };
    };
};

export default auth;