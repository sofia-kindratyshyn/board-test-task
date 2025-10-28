import { Schema, model } from 'mongoose';

const taskSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, default: '' },
    boardId: {
      type: Schema.Types.ObjectId,
      ref: 'Board',
      required: true,
    },
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
