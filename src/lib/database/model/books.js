const mongoose = require('mongoose');
const { BOOKS_MODEL, BOOKS_COLLECTION } = require('../../../constants');

const booksSchema = new mongoose.Schema({
  name: String,
  author: String,
  dateAdded: Date,
  categories: Array,
});

module.exports = mongoose.model(
  BOOKS_MODEL,
  booksSchema,
  BOOKS_COLLECTION,
)
