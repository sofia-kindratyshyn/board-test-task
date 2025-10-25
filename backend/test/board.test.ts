import request from 'supertest';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { app } from '../src/app';
import { Board } from '../src/models/board';
import { Task } from '../src/models/task';
import { Server } from 'http';

let mongoServer: MongoMemoryServer;
let server: Server;
let boardId: string; // ✅ глобальна змінна

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
  console.log('✅ Connected to in-memory MongoDB');

  const board = await Board.create({
    name: 'Test Board',
  });

  boardId = board._id.toString(); // ✅ зберігаємо для тестів

  await Task.create([
    {
      title: 'Task 1',
      description: 'First task',
      boardId: boardId,
    },
    {
      title: 'Task 2',
      description: 'Second task',
      boardId: boardId,
    },
  ]);

  server = await new Promise<Server>((resolve) => {
    const s = app.listen(0, () => resolve(s));
  });
});

afterAll(async () => {
  if (server && server.close)
    await new Promise<void>((resolve) => server.close(() => resolve()));
  await mongoose.connection.dropDatabase();
  await mongoose.disconnect();
  if (mongoServer) await mongoServer.stop();
});

describe('GET /boards/:boardId', () => {
  it('should return board with its tasks', async () => {
    const response = await request(app).get(`/boards/${boardId}`);
    console.log('Board ID:', boardId);
    console.log('Response status:', response.status);
    expect(response.status).toBe(200);
    expect(response.body.data.board.name).toBe('Test Board');
    expect(response.body.data.tasks.length).toBe(2);
  });

  it('should return 404 if board not found', async () => {
    const response = await request(app).get('/boards/nonexistent');
    expect(response.status).toBe(404);
  });
});
