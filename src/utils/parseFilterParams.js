const parseType = (contactType) => {
  const isString = typeof contactType === 'string';
  if (!isString) return;
  const type = (contactType) =>
    ['work', 'home', 'personal'].includes(contactType);

  if (type(contactType)) return contactType;
};

const parseIsFavourite = (isFavourite) => {
  const isString = typeof isFavourite === 'string';
  if (!isString) return;
  const favourite = (isFavourite) => ['true', 'false'].includes(isFavourite);

  if (favourite(isFavourite)) return isFavourite;
};

export const parseFilterParams = (query) => {
  const { isFavourite, contactType } = query;
  const parsedIsFavourite = parseIsFavourite(isFavourite);
  const parsedType = parseType(contactType);

  return {
    isFavourite: parsedIsFavourite,
    contactType: parsedType,
  };
};
