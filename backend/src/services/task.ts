import createHttpError from 'http-errors';
import { Task } from '../models/task';

export const getTasks = async (boardId: string) => {
  try {
    const tasks = await Task.find({ boardId });
    return tasks;
  } catch {
    throw createHttpError(404, 'Error getting tasks');
  }
};

export const getTaskById = async (taskId: string) => {
  try {
    const task = await Task.findById(taskId);
    return task;
  } catch {
    throw createHttpError(404, `Error getting task with id: ${taskId}`);
  }
};

export const deleteTaskById = async (taskId: string) => {
  try {
    const task = await Task.findByIdAndDelete(taskId);
    return task;
  } catch {
    throw createHttpError(404, `Error deleting task with id: ${taskId}`);
  }
};
