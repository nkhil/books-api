const model = require('../lib/database/utils');

function getBooks(req, res) {
  res.status(200).json({ status: 'OK' });
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
