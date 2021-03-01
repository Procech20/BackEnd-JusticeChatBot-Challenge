import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: '../../src/Database/config/.env'});

const protect = async(req, res, next) => {
    try {
        const token = req.headers.auth.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: 'Ooops!! Not authorised to access this route!' });
        }

        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = decoded;

        next();
    } catch(err) {
        console.log(err.message.red);
        return res.status(500).json({message: 'Access forbidden to this route!'});
    };
};

export default protect;