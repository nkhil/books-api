const Model = require('./model/books');

async function addBook(book) {
  try {
    const newBook = new Model(book);
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

async function addBooks(books) {
  console.log('addBooks -> books', books);
  try {
    return await Model.insertMany(books);
  } catch (err) {
    console.log(`Error: ${err}`);
    throw err;
  }
}

async function getBooks() {
  try {
    return await Model.find();
  } catch (err) {
    console.log(`Error: ${err}`);
    throw err;
  }
}

module.exports = {
  addBook,
  addBooks,
  getBooks,
};
