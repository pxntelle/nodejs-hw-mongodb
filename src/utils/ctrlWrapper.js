const ctrlWrapper = (controller) => {
  const func = async (req, res, next) => {
    try {
      console.log('Controller passed to ctrlWrapper:', controller);
      if (typeof controller !== 'function') {
        throw new Error('Controller is not a function');
      }
      await controller(req, res, next);
    } catch (error) {
      console.error('Error in ctrlWrapper:', error);
      next(error);
    }
  };
  return func;
};

export default ctrlWrapper;
