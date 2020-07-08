const model = require('../lib/database/utils');

async function getBooks(req, res) {
  const books = await model.getBooks();
  res.status(200).json(books);
}

async function getSingleBook(req, res) {
  try {
    const { bookId } = req.params;
    const book = await model.getSingleBook(bookId);
    console.log('getSingleBook -> book', book);
    res.status(200).json(book);
  } catch (err) {
    console.log(`Error: ${err}`);
    throw err;
  }
}

async function addBooks(req, res) {
  try {
    await model.addBooks(req.body);
    res.status(201).send();
  } catch (err) {
    console.log(`Error: ${err}`);
    throw err;
  }
}

async function deleteSingleBook(req, res) {
  try {
    const { bookId } = req.params;
    await model.deleteSingleBook(bookId);
    res.status(204).send();
  } catch (err) {
    console.log(`Error: ${err}`);
    throw err;
  }
}

module.exports = {
  getBooks,
  addBooks,
  deleteSingleBook,
  getSingleBook,
};
