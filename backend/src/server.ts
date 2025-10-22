import express from 'express';
import { getEnvVar } from './utils/getEnv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import pino from 'pino-http';
import { errorHandler } from './middlewars/errorHandler';

const PORT = Number(getEnvVar('PORT'));

export default async function setupServer() {
  const app = express();

  app.use(express.json());

  app.use(
    cors(),
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.use(cookieParser());

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
