import { Request, Response, NextFunction } from 'express';
import {
  createTask,
  deleteTaskById,
  getTaskById,
  getTasks,
  updateTask,
} from '../services/task';

export const getTasksController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const tasks = await getTasks(req.params.boardId);
    return res.json({
      status: 200,
      message: 'Successfully got all tasks',
      data: tasks,
    });
  } catch (error) {
    next(error);
  }
};

export const getTaskByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const task = await getTaskById(req.params.taskId);
    return res.json({
      status: 200,
      message: 'Successfully got task with id ' + req.params.taskId,
      data: task,
    });
  } catch (error) {
    next(error);
  }
};

export const postTaskController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const body = req.body;
    console.log(body);
    const boardId = req.params.boardId;
    const createdTask = await createTask(body, boardId);
    return res.json({
      status: 201,
      message: 'Successfully created task',
      data: createdTask,
    });
  } catch (error) {
    next(error);
  }
};

export const patchTaskController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const body = req.body;
    const boardId = req.params.boardId;
    const taskId = req.params.taskId;
    const updatedTask = await updateTask({
      boardId: boardId,
      taskId: taskId,
      ...body,
    });
    return res.json({
      status: 200,
      message: 'Successfully updated task',
      data: updatedTask,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteTaskByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    await deleteTaskById(req.params.taskId);
    return res.json({
      status: 204,
      message: 'Successfully deleted task with id ' + req.params.taskId,
    });
  } catch (error) {
    next(error);
  }
};
