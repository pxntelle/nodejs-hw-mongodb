import { HttpError } from 'http-errors';

function errorHandler(err, req, res, next) {
  if (err instanceof HttpError) {
    res.status(err.status).json({
      status: err.status,
      message: err.name,
      data: err,
    });
    return;
  }
  res.status(500).json({
    status: 500,
    message: 'Something went wrong',
    data: err.message,
  });
  console.log(err.message);
}
export { errorHandler };
