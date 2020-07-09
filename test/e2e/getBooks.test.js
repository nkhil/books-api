const supertest = require('supertest');
const app = require('../../src/app');

let api;

beforeAll(async () => {
  api = supertest(app);
});

describe('GET /books', () => {
  it('returns the correct payload', async done => {
    const response = await api.get('/books');
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(4);
    done();
  });
});
