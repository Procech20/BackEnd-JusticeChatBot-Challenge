import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import successRes from '../utils/succHandler';
import ErrorResponse from '../utils/errorResponse';
import asyncHandler from '../../Database/services/asyncHandler';
import Models from '../../Database/models/server';

const { User } = Models;

//@desc  Get all Users
//@route GET /api/v1/techblogs
//@access Public
export const getUsers = asyncHandler(async(req, res, next) => {
  const user = await User.findAll();
  if(!user) { return next( new ErrorResponse(res, 404, 'Ooops! Looks like there are no users :('))};
  return successRes(res, 200, 'All users retreived successfully', user);
});
//@desc  Get single User post
//@route GET /api/v1/techblogs/:id
//@access Public
export const getUser = asyncHandler(async(req, res, next) => {
  const user = await User.findOne({ where: { id: req.params.id } });
  if(!user) { return next( new ErrorResponse(res, 404, `No user found wth the d of: ${req.params.id} :(`))};
  return successRes(res, 200, 'successfully retrieved user', user);
});
//@desc  Create new User
//@route POST /api/v1/techusers
//@access Private
export const createUser = asyncHandler(async(req, res) => {
  const { username, email, password, firstName, lastName, role } = req.body;

  const user = await User.create({
    username,
    email,
    password: bcrypt.hashSync(password, 10),
    firstName,
    lastName,
    role
  });
  return successRes(res, 201, 'Successfull created user', user );
});
//@desc  Update User
//@route PUT /api/v1/techblogs/:id
//@access private
export const updateUser = asyncHandler(async(req, res, next) => {
  const user = await User.update(req.body, {
    where: { id: req.params.id },
  });

  if(!user) { return next( new ErrorResponse(res, 404, `No user found wth the id of: ${req.params.id} :(`))};
  const updatedUser = await User.findOne({ where: { id: req.params.id } });

  return successRes(res, 201, 'successfully updated user', updatedUser);
});
//@desc  Delete User
//@route DELETE /api/v1/techblogs/:id
//@access Private
export const deleteUser = asyncHandler(async(req, res, next) => {
    const user = await User.destroy({ where: { id: req.params.id } });
    if(!user) { return next( new ErrorResponse(res, 404, `No user found wth the id of: ${req.params.id} :(`))};
    return successRes(res, 200, 'Deleted successfully a user', user);
});
