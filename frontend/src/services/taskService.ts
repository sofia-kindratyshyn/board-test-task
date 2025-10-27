import axios from 'axios';
import type { Task } from '../types/task';
axios.defaults.baseURL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const getTasks = async (boardId: string) => {
  try {
    const tasks = await axios.get(`/boards/${boardId}/tasks`);
    return tasks.data.data;
  } catch (err) {
    console.log(err);
  }
};

export const createTask = async (boardId: string, taskData: Task) => {
  try {
    const tasks = await axios.post(`/boards/${boardId}/tasks`, taskData);
    return tasks.data.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteTask = async (boardId: string, taskId: string) => {
  try {
    const tasks = await axios.delete(`/boards/${boardId}/tasks/${taskId}`);
    return tasks.data;
  } catch (err) {
    console.log(err);
  }
};

export const updateTask = async (boardId: string, taskId: string, taskData: Partial<Task>) => {
  try {
    const tasks = await axios.patch(`/boards/${boardId}/tasks/${taskId}`, taskData);
    return tasks.data;
  } catch (err) {
    console.log(err);
  }
};
