import schema  from '../../Database/services/validator';
import ErrorResponse from '../utils/errorResponse';
const { blogCreate, blogUpdate, signup, login } = schema;


export const createValidate = ( req, res, next ) => {
    const { error } = blogCreate.validate(req.body);
    if(error) { return ErrorResponse(res, 400, `Validaton error: ${error.message.replace(/"/g, '')}`)};
    next();
};
export const updateValidate = ( req, res, next ) => {
    const { error } = blogUpdate.validate(req.body);
    if(error) { return ErrorResponse(res, 400 ,`Validaton error: ${error.message.replace(/"/g, '')}`)};
    next();
};
export const loginValidate = ( req, res, next ) => {
    const { error } = login.validate(req.body);
    if(error) { return ErrorResponse(res, 400 ,`Validaton error: ${error.message.replace(/"/g, '')}`)};
    next();
};
export const signupValidate = ( req, res, next ) => {
    const { error } = signup.validate(req.body);
    if(error) { return ErrorResponse(res, 400 ,`Validaton error: ${error.message.replace(/"/g, '')}`)};
    next();
};