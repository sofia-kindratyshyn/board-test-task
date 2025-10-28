import { Request, Response, NextFunction } from 'express';
import {
  createBoard,
  deleteBoardById,
  getBoardById,
  getBoards,
} from '../services/board';

export const getBoardsController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { search } = req.query;
    const boards = search
      ? await getBoards(search.toString())
      : await getBoards();
    return res.json({
      status: 200,
      message: 'Successfully got all boards',
      data: boards,
    });
  } catch (error) {
    next(error);
  }
};

export const getBoardByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const boardId = req.params.boardId;
    const board = await getBoardById(boardId);
    return res.json({
      status: 200,
      message: 'Successfully got board with id ' + req.params.boardId,
      data: board,
    });
  } catch (error) {
    next(error);
  }
};

export const postBoardController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const body = req.body;
    const createdBoard = await createBoard(body);
    return res.json({
      status: 201,
      message: 'Successfully created board',
      data: createdBoard._id,
    });
  } catch (error) {
    next(error);
  }
};

export const patchBoardController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const body = req.body;
    console.log('Updating board with data:', body);
    return res.json({
      status: 200,
      message: 'Successfully updated board',
    });
  } catch (error) {
    next(error);
  }
};

export const deleteBoardByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const boardId = req.params.boardId;
    const board = await deleteBoardById(boardId);
    return res.json({
      status: 204,
      message: 'Successfully deleted board with id ' + req.params.boardId,
      data: board,
    });
  } catch (error) {
    next(error);
  }
};
