import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import { errorHandler } from './middlewars/errorHandler';
import { boardRouter } from './routers/board';
import { taskRouter } from './routers/task';
import { getEnvVar } from './utils/getEnv';
import { app } from './app';

const PORT = Number(getEnvVar('PORT'));

export default async function setupServer() {
  app.use(express.json());

  const allowedOrigins = [
    'https://board-test-task.onrender.com',
    'http://localhost:5173',
  ];

  app.use(
    cors({
      origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      },
      credentials: true,
    }),
  );

  app.use(
    pino({
      transport: { target: 'pino-pretty' },
    }),
  );

  app.use('/boards', boardRouter);
  app.use('/tasks', taskRouter);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
