import { Schema, model } from 'mongoose';

const boardSchema = new Schema(
  {
    boardId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    columns: {
      type: [String],
      default: ['ToDo', 'In Progress', 'Done'],
    },
  },
  { timestamps: true },
);

export const Board = model('Board', boardSchema);
