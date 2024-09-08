import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  getContactsController,
  getContactByIdController,
  createContactController,
  deleteContactController,
  upsertContactController,
  patchContactController,
} from '../controllers/contacts.js';

import { validateBody } from '../middlewares/validateBody.js';

import {
  createContactSchema,
  updateContactSchema,
} from '../validation/contacts.js';
import { isValidId } from '../middlewares/isValidId.js';

const router = Router();

router.get(
  '/',

  ctrlWrapper(getContactsController),
);
router.get(
  '/:contactId',
  isValidId('contactId'),
  ctrlWrapper(getContactByIdController),
);
router.post(
  '/',
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);
router.delete(
  '/:contactId',
  isValidId('contactId'),
  ctrlWrapper(deleteContactController),
);
router.put(
  '/:contactId',
  isValidId('contactId'),
  ctrlWrapper(upsertContactController),
);
router.patch(
  '/:contactId',
  isValidId('contactId'),
  validateBody(updateContactSchema),
  ctrlWrapper(patchContactController),
);

export default router;
