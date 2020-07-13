const supertest = require('supertest');
const BookModel = require('../../src/lib/database/model/books');
const app = require('../../src/app');
const { createBooks } = require('../helpers/books');

describe('Books API', () => {
  let api;

  beforeAll(async () => {
    jest.setTimeout(30000);
    api = supertest(app);
    await BookModel.deleteMany({}, err => {
      if (err) {
        throw err;
      }
    });
  });

  afterEach(async () => {
    await BookModel.deleteMany({}, err => {
      if (err) {
        throw err;
      }
    });
  });

  it('can create new books in the DB', async () => {
    const books = createBooks(5);
    const postResponse = await api
      .post('/books')
      .set('Content-Type', 'application/json')
      .send(books);
    const booksInDb = await api.get('/books');
    expect(postResponse.status).toBe(201);
    expect(booksInDb.status).toBe(200);
    expect(booksInDb.body.length).toBe(5);
  });

  it('can read all books in the DB', async () => {
    const books = createBooks(5);
    const postResponse = await api
      .post('/books')
      .set('Content-Type', 'application/json')
      .send(books);
    const response = await api.get('/books');
    expect(postResponse.status).toBe(201);
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(5);
  });
});
