const model = require('../lib/database/utils');

async function getBooks(req, res) {
  const books = await model.getBooks();
  console.log('getBooks -> books', books);
  res.status(200).json(books);
}

async function addBook(req, res) {
  try {
    await model.addBook(req.body);
    res.status(201).send();
  } catch (err) {
    console.log(`Error: ${err}`);
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

module.exports = {
  getBooks,
  addBook,
  addBooks,
};
