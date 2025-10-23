// import request from 'supertest';
// import mongoose from 'mongoose';
// import app from '../src/server';
// import { Board } from '../src/models/board';

// describe('GET /boards/:boardId', () => {
//   let server: any;
//   let boardId: string;

//   beforeAll(async () => {
//     await mongoose.connect('mongodb://127.0.0.1:27017/test_db_boards');

//     const board = await Board.create({
//       title: 'Test Board',
//       description: 'Board for testing',
//     });
//     boardId = board._id.toString();

//     server = app.listen(0);
//   });

//   afterAll(async () => {
//     await Board.deleteMany({});
//     await mongoose.connection.close();
//     server.close();
//   });

//   it('повертає 200 і об’єкт дошки при валідному ID', async () => {
//     const response = await request(server).get(`/boards/${boardId}`);

//     expect(response.status).toBe(200);
//     expect(response.body).toHaveProperty('data');
//     expect(response.body.data).toHaveProperty('_id', boardId);
//     expect(response.body.data.title).toBe('Test Board');
//   });

//   it('повертає 404 якщо дошка не існує', async () => {
//     const fakeId = new mongoose.Types.ObjectId();
//     const response = await request(server).get(`/boards/${fakeId}`);

//     expect(response.status).toBe(404);
//     expect(response.body.message).toMatch(/not found/i);
//   });

//   it('повертає 400 якщо ID некоректний', async () => {
//     const response = await request(server).get(`/boards/invalid-id`);

//     expect(response.status).toBe(400);
//   });
// });
