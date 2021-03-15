import Joi from 'joi';

const stringRequired = Joi.string().trim().required().max(800);
const nameSchema = Joi.string().trim().regex(/^[\sA-Za-z]{1,}$/);

const schema = {
  blogCreate: Joi.object().keys({
    userId: Joi.number().required(),
    title: Joi.string().required().trim().min(10)
      .max(50)
      .error(new Error('Please Add a title to your blog of atleast 10 words!')),
    description: Joi.string().required().min(25).max(500)
      .error(new Error('Please describe your blog in atleast 25 words but no longer tan 500 words!')),
    photo: Joi.string(),
  }),
  blogUpdate: Joi.object().keys({
    userId: Joi.number(),
    title: Joi.string().trim().min(10).max(50)
      .error(new Error('Title must be atleast 10 words!')),
    description: Joi.string().min(25).max(500)
      .error(new Error('Description must be atleast 25 words but no longer tan 500 words!')),
    photo: Joi.string(),
  }),
  signup: Joi.object().keys({
    email: Joi.string().required()
      .regex(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'email')
      .error(new Error('Please Add an email address')),
    firstName: nameSchema
      .error(new Error('firstName can only contain letters')),
    lastName: nameSchema
      .error(new Error('lastName can only contain letters')),
    username: stringRequired
      .regex(/^[a-zA-Z]([a-zA-Z0]){3,20}$/)
      .error(new Error('username must be 4-20 characters and start with a letter')),
    password: stringRequired
      .regex(/^(?=.*[a-z])(?=.*[A-Z]).{5,128}$/)
      .error(new Error('password must be atleast 6 characters with atleast 1 capital letter')),
  }),
  login: Joi.object().keys({
    email: Joi.string().required()
      .error(new Error('Email is required')),
    password: stringRequired
      .error(new Error('password is required')),
  }),
};

export default schema;
