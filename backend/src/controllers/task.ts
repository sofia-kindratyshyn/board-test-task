import { Request, Response, NextFunction } from 'express';
import { deleteTaskById, getTaskById, getTasks } from '../services/task';

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
    console.log('Creating task with data:', body);
    return res.json({
      status: 200,
      message: 'Successfully created task',
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
    console.log('Updating task with data:', body);
    return res.json({
      status: 200,
      message: 'Successfully updated task',
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
