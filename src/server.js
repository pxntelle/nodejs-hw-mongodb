import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import logger from './middlewares/logger.js';
import router from './routers/index.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import swaggerDocs from './middlewares/swaggerDocs.js';

import { env } from './utils/env.js';

const PORT = Number(env('PORT', '3000'));

export const setupServer = () => {
  const app = express();

  app.use(logger);

  app.use(express.static('uploads'));

  app.use(errorHandler);

  app.use(
    express.json({
      type: ['application/json', 'application/vnd.api+json'],
    }),
  );
  app.use(cors());

  app.use(cookieParser());

  app.use(router);

  app.use('/api-docs', swaggerDocs());

  app.use('*', notFoundHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
