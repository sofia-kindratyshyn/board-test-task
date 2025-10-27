import { create } from 'zustand';

type CreateTaskData = {
  title: string;
  description: string;
  status: 'ToDo' | 'In Progress' | 'Done';
};

type CreateTaskState = {
  task: CreateTaskData;
  setCreateTaskData: (data: Partial<CreateTaskData>) => void;
  cleanCreateTaskData: () => void;
};

const initialData: CreateTaskData = {
  title: '',
  description: '',
  status: 'ToDo',
};

export const useCreateTaskState = create<CreateTaskState>((set) => ({
  task: initialData,
  setCreateTaskData: (data) =>
    set((state) => ({
      task: { ...state.task, ...data },
    })),
  cleanCreateTaskData: () => set({ task: initialData }),
}));
