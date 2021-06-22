/* eslint-disable prettier/prettier */
const express = require('express');
const supertest = require('supertest');
const router = require('./router');
const db = require('./models/pg');

describe('Integration tests', () => {
  const app = express();
  app.use(express.json());
  app.use(router);
  const request = supertest(app);
  test('should save a user to the DataBase', async () => {
    await request.post('/user').send({
      email: 'test@test.com',
      name: 'Barack',
    });
    const user = await db.user.findOne({ where: { email: 'test@test.com' } });
    expect(user.name).toBe('Barack');
    expect(user.email).toBe('test@test.com');
  });
});
