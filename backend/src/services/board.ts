import createHttpError from 'http-errors';
import { Board } from '../models/board';
import { Task } from '../models/task';
import { CreateBoard } from '../types/board';
import mongoose from 'mongoose';

export const getBoards = async (search?: string) => {
  try {
    if (!search) {
      return await Board.find();
    }

    const boards = await Board.aggregate([
      {
        $addFields: {
          idString: { $toString: '$_id' },
        },
      },
      {
        $match: {
          idString: { $regex: search, $options: 'i' },
        },
      },
    ]);

    return boards;
  } catch {
    throw createHttpError(404, 'Error getting boards');
  }
};

export const createBoard = async (payload: CreateBoard) => {
  try {
    const boards = await Board.create(payload);
    return boards;
  } catch {
    throw createHttpError(404, 'Error creating board');
  }
};

export const getBoardById = async (boardId: string) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(boardId)) {
      throw createHttpError(404, `Invalid board id: ${boardId}`);
    }

    const board = await Board.findById(boardId);

    if (!board) {
      throw createHttpError(404, `Board with id ${boardId} not found`);
    }

    const tasks = await Task.find({ boardId });

    return { board, tasks };
  } catch (err) {
    console.error('getBoardById error:', err);
    throw err;
  }
};

export const deleteBoardById = async (boardId: string) => {
  try {
    const board = await Board.findByIdAndDelete({ _id: boardId });
    return board;
  } catch {
    throw createHttpError(404, `Error deleting board with id: ${boardId}`);
  }
};
