const supertest = require('supertest');
const mongoose = require('mongoose');
const app = require('../../src/app');
const { createBooks } = require('../helpers/books');

let api;

beforeAll(async () => {
  api = supertest(app);
  // await mongoose.connection.db.dropCollection('books');
});

afterEach(async () => {
  await mongoose.connection.db.dropCollection('books');
});

describe('POST /books', () => {
  it('is capable of posting new books', async done => {
    const books = createBooks(5);
    const postResponse = await api
      .post('/books')
      .set('Content-Type', 'application/json')
      .send(books);
    const booksInDb = await api.get('/books');
    expect(postResponse.status).toBe(201);
    expect(booksInDb.status).toBe(200);
    expect(booksInDb.body.length).toBe(5);
    done();
  });

  it('returns the correct payload', async done => {
    const books = createBooks(5);
    const postResponse = await api
      .post('/books')
      .set('Content-Type', 'application/json')
      .send(books);
    const response = await api.get('/books');
    expect(postResponse.status).toBe(201);
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(5);
    done();
  });
});
