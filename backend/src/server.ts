import express from 'express';
import { getEnvVar } from './utils/getEnv';
import cors from 'cors';
import pino from 'pino-http';
import { errorHandler } from './middlewars/errorHandler';
import { boardRouter } from './routers/board';
import { app } from './app';
import { taskRouter } from './routers/task';

const PORT = Number(getEnvVar('PORT'));

export default async function setupServer() {
  app.use(express.json());

  app.use(
    cors(),
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.use('/boards', boardRouter);
  app.use('/tasks', taskRouter);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
