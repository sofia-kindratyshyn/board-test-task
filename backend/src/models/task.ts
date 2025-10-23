import { Schema, model } from 'mongoose';

const taskSchema = new Schema(
  {
    boardId: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, default: '' },
    status: {
      type: String,
      enum: ['ToDo', 'In Progress', 'Done'],
      default: 'ToDo',
    },
    order: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export const Task = model('Task', taskSchema);
