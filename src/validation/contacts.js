import Joi from 'joi';
import { contactTypes } from '../constants/contacts.js';
import { phoneNumberRegexp } from '../constants/contacts.js';

export const contactAddSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    'any.required': 'name is required',
    'string.empty': 'name cannot be empty',
    'string.min': 'name should have at least 3 characters',
    'string.max': 'name should have maximum 30 characters',
  }),
  phoneNumber: Joi.string().pattern(phoneNumberRegexp).required().messages({
    'any.required': 'phone number is required',
    'string.empty': 'phone number cannot be empty',
  }),
  email: Joi.string().email().allow(null, ''),
  isFavourite: Joi.boolean(),
  contactType: Joi.string()
    .valid(...contactTypes)
    .required()
    .messages({
      'any.required': 'contact type is required',
      'string.empty': 'contact type cannot be empty',
      'any.only': 'contact type must be one of the specified values',
    }),
});

export const contactPatchSchema = Joi.object({
  name: Joi.string().min(3).max(30).messages({
    'string.empty': 'name cannot be empty',
    'string.min': 'name should have at least 3 characters',
    'string.max': 'name should have maximum 30 characters',
  }),
  phoneNumber: Joi.string().pattern(phoneNumberRegexp).messages({
    'string.empty': 'number cannot be empty',
  }),
  email: Joi.string().email().allow(null, ''),
  isFavourite: Joi.boolean(),
  contactType: Joi.string()
    .valid(...contactTypes)
    .messages({
      'any.only': 'contact type must be one of the specified values',
    }),
});
