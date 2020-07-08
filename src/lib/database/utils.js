const Model = require('./model/books');

async function addBook(book) {
  console.log('addBook -> book', book);
  try {
    const newBook = new Model(book);
    // eslint-disable-next-line func-names
    newBook.save((err, savedBook) => {
      if (err) return console.error(err);
      console.log(`${savedBook.name} saved to bookstore collection.`);
    });
  } catch (err) {
    console.log('There was an error');
    console.log(`Error: ${err}`);
    throw err;
  }
}

module.exports = {
  addBook,
};
