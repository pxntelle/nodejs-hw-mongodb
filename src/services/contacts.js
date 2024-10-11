import ContactCollection from '../db/models/contact.js';
import calculatePaginationData from '../utils/calculatePaginationData.js';
import { SORT_ORDER } from '../constants/index.js';

export const getContacts = async ({
  perPage = 10,
  page = 1,
  sortBy = '_id',
  sortOrder = SORT_ORDER[0],
  filter = {},
}) => {
  const skip = (page - 1) * perPage;
  const contactQuery = ContactCollection.find();

  if (filter.contactType) {
    contactQuery.where('contactType').equals(filter.contactType);
  }
  if (filter.isFavourite) {
    contactQuery.where('isFavourite').equals(filter.isFavourite);
  }
  if (filter.userId) {
    contactQuery.where('userId').equals(filter.userId);
  }

  const count = await ContactCollection.countDocuments(filter);

  const contacts = await contactQuery
    .skip(skip)
    .limit(perPage)
    .sort({ [sortBy]: sortOrder })
    .exec();

  const paginationData = calculatePaginationData({ count, perPage, page });

  return {
    contacts,
    page,
    perPage,
    totalItems: count,
    ...paginationData,
  };
};

export const getContact = (filter) => ContactCollection.findOne(filter);

export const createContact = (payload) => ContactCollection.create(payload);

export const updateContact = async (filter, data, options = {}) => {
  const rawResult = await ContactCollection.findOneAndUpdate(filter, data, {
    new: true,
    ...options,
  });

  if (!rawResult) return null;

  return {
    data: rawResult,
    isNew: Boolean(rawResult.upsertedId),
  };
};

export const deleteContact = (filter) =>
  ContactCollection.findOneAndDelete(filter);
