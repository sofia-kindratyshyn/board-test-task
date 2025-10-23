import { Router } from 'express';
import {
  getTaskByIdController,
  getTasksController,
  patchTaskController,
  postTaskController,
} from '../controllers/task';

export const taskRouter = Router({ mergeParams: true });

taskRouter.get('/', getTasksController);
taskRouter.get(`/:taskId`, getTaskByIdController);
taskRouter.post('/', postTaskController);
taskRouter.patch('/:taskId', patchTaskController);
taskRouter.delete('/:taskId', patchTaskController);
