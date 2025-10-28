import { Schema, model, Types } from 'mongoose';

const boardSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    tasks: [
      {
        type: Types.ObjectId,
        ref: 'Task',
      },
    ],
  },
  { timestamps: true },
);

export const Board = model('Board', boardSchema);
