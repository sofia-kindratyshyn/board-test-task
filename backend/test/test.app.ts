import express from 'express';
import { boardRouter } from '../src/routers/board';

const testApp = express();
testApp.use(express.json());
testApp.use('/boards', boardRouter);

export const app = testApp;
