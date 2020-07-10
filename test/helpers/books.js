function createBooks(numberOfBooks) {
  const result = [];
  for (let i = 0; i < numberOfBooks; i++) {
    const book = {
      name: `book${i}`,
      author: `some author`,
      categories: ['Science Fiction'],
    };
    result.push(book);
  }
  return result;
}

module.exports = {
  createBooks,
};
