import createHttpError from 'http-errors';
import { Board } from '../models/board';

export const getBoards = async () => {
  try {
    const boards = await Board.find();
    return boards;
  } catch {
    throw createHttpError(404, 'Error getting boards');
  }
};

export const getBoardById = async (boardId: string) => {
  try {
    const board = await Board.findById(boardId);
    return board;
  } catch {
    throw createHttpError(404, `Error getting board with id: ${boardId}`);
  }
};

export const deleteBoardById = async (boardId: string) => {
  try {
    const board = await Board.findByIdAndDelete(boardId);
    return board;
  } catch {
    throw createHttpError(404, `Error deleting board with id: ${boardId}`);
  }
};
