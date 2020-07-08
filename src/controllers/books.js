const model = require('../lib/database/utils');

function getBooks(req, res) {
  res.status(200).json({ status: 'OK' });
}

async function addBook(req, res) {
  try {
    console.log('====Add book function\n');
    console.log('req.body ===\n', req.body);
    await model.addBook(req.body);
    res.status(201).send();
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}

module.exports = {
  getBooks,
  addBook,
};
