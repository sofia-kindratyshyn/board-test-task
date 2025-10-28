import { Router } from 'express';
import {
  deleteBoardByIdController,
  getBoardByIdController,
  getBoardsController,
  patchBoardController,
  postBoardController,
} from '../controllers/board';
import { taskRouter } from './task';

export const boardRouter = Router();

boardRouter.get('/', getBoardsController);
boardRouter.get(`/:boardId`, getBoardByIdController);
boardRouter.post('/', postBoardController);
boardRouter.patch('/:boardId', patchBoardController);
boardRouter.delete('/:boardId', deleteBoardByIdController);

boardRouter.use('/:boardId/tasks', taskRouter);
