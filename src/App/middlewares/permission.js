import asyncHandler from '../../Database/services/asyncHandler';
import ErrorResponse from '../utils/errorResponse';
import findUser from '../../Database/services/user';


export const isAdmin = asyncHandler(async (req, res, next) => {
  const signedInUser = req.user;
  const user = await findUser({ id: signedInUser.id });
  if (user.role !== 'Admin') {
    return ErrorResponse(res, 401, 'Only admin and  allowed ');
  return next();
};
});