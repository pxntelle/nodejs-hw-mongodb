import Joi from 'joi';
import { emailRegexp } from '../constants/users.js';

export const userRegisterSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'any.required': 'name is required',
    'string.empty': 'name cannot be empty',
    'string.min': 'name should have at least 3 characters',
    'string.max': 'name should have maximum 20 characters',
  }),
  email: Joi.string().pattern(emailRegexp).required().messages({
    'any.required': 'email is required',
    'string.empty': 'email cannot be empty',
  }),
  password: Joi.string().min(6).required().messages({
    'any.required': 'password is required',
    'string.empty': 'password cannot be empty',
    'string.min': 'password should have at least 6 characters',
  }),
});

export const userLoginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required().messages({
    'any.required': 'email is required',
    'string.empty': 'email cannot be empty',
  }),
  password: Joi.string().min(6).required().messages({
    'any.required': 'password is required',
    'string.empty': 'password cannot be empty',
    'string.min': 'password should have at least 6 characters',
  }),
});

export const sendResetEmailSchema = Joi.object({
  email: Joi.string().email().required(),
});

export const resetPasswordSchema = Joi.object({
  password: Joi.string().required(),
  token: Joi.string().required(),
});
