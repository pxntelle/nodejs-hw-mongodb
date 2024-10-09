const parseNumber = (number, defaultValue) => {
  if (typeof number !== 'string') return defaultValue;

  const parsedValue = parseInt(number, 10);

  if (Number.isNaN(parsedValue)) return defaultValue;

  return parsedValue;
};

const parsePaginationParams = ({ perPage, page }) => {
  const parsedPerPage = parseNumber(perPage, 10);
  const parsedPage = parseNumber(page, 1);

  return {
    perPage: parsedPerPage,
    page: parsedPage,
  };
};

export default parsePaginationParams;
