export interface Task {
  _id?: string;
  title: string;
  description?: string;
  status: 'ToDo' | 'In Progress' | 'Done';
  boardId: string;
}
