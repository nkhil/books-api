const Model = require('./model/books');

async function addBooks(books) {
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

async function getSingleBook(id) {
  try {
    return await Model.findById(id);
  } catch (err) {
    console.log(`Error: ${err}`);
    throw err;
  }
}

async function deleteSingleBook(bookId) {
  try {
    await Model.findOneAndDelete({ _id: bookId });
  } catch (err) {
    console.log(`Error: ${err}`);
    throw err;
  }
}

module.exports = {
  addBooks,
  getBooks,
  deleteSingleBook,
  getSingleBook,
};
