export type createTaskBody = {
  taskId?: string;
  title: string;
  order: number;
  status: string;
  description: string;
  boardId: string;
  columnId: string;
};

export type updateTaskBody = {
  taskId: string;
  title?: string;
  order?: number;
  description?: string;
  boardId: string;
  columnId?: string;
};
