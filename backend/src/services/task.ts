import createHttpError from 'http-errors';
import { Task } from '../models/task';
import { createTaskBody, updateTaskBody } from '../types/task';
import { Board } from '../models/board';

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

export const createTask = async (
  { title, description, status }: createTaskBody,
  boardId: string,
) => {
  const board = await Board.findById(boardId);
  if (!board) {
    createHttpError(404, `Board with id: ${boardId} not found`);
  }

  // const task = new Task({ title, description, status, boardId });
  // await task.save();

  // board?.tasks.push(task._id);
  // await board?.save();
  try {
    const task = await Task.create({ title, description, status, boardId });
    return task;
  } catch {
    throw createHttpError(404, `Error while creating task`);
  }
};

export const updateTask = async (taskBody: updateTaskBody) => {
  try {
    const task = await Task.findByIdAndUpdate(
      { _id: taskBody.taskId },
      taskBody,
      { new: true },
    );
    return task;
  } catch {
    throw createHttpError(404, `Error while creating task`);
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
