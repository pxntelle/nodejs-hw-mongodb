import { SORT_ORDER } from '../constants/index.js';

const parseSortParams = ({ sortBy, sortKeys, sortOrder }) => {
  const parsedSortBy = sortKeys.includes(sortBy) ? sortBy : '_id';
  const parsedSortOrder = SORT_ORDER.includes(sortOrder)
    ? sortOrder
    : SORT_ORDER[0];

  return {
    sortBy: parsedSortBy,
    sortOrder: parsedSortOrder,
  };
};

export default parseSortParams;
