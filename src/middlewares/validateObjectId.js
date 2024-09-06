import mongoose from 'mongoose';
import createHttpError from 'http-errors';

const validateObjectId = (req, res, next) => {
  const { contactId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(contactId)) {
    return next(createHttpError(404, 'Contact not found'));
  }

  next();
};

export default validateObjectId;
