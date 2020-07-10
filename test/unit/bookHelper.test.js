const { createBooks } = require('../helpers/books');

describe('#createBooks', () => {
  it('can create book stubs', () => {
    const result = createBooks(5);
    expect(result.length).toBe(5);
  });
});
