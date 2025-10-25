import axios from 'axios';
import type { NewBoardFormValues } from '../types/board';

export const getBoards = async (search?: string) => {
  try {
    const searchQuery = search ? `/boards?search=${encodeURIComponent(search)}` : '/boards';
    const res = await axios.get(searchQuery);
    return res.data.data;
  } catch (error) {
    console.error('Error fetching boards:', error);
    throw error;
  }
};

export const addBoard = async (board: NewBoardFormValues) => {
  const res = await axios.post('/boards', board);
  return res.data;
};

export const deleteBoard = async (boardId: string) => {
  const res = await axios.delete(`/boards/${boardId}`);
  return res.data;
};

export const getBordById = async (boardId: string) => {
  const res = await axios.get(`/boards/${boardId}`);
  return res.data;
};
