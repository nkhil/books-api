const mongoose = require('mongoose');
const {
  mongo: { dbName, password },
} = require('../../config');

async function connect() {
  try {
    const connectionString = `mongodb+srv://books-api:${password}@books.jsvhp.mongodb.net/${dbName}?retryWrites=true&w=majority`;
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('connected to database');
    mongoose.connection.on('connected', () =>
      console.log('Connected to database')
    );
    mongoose.connection.on('disconnected', () =>
      console.log('Disconnected from database')
    );
  } catch (err) {
    console.log('Error connecting to database');
    console.log('Error:', err);
  }
}

module.exports = {
  connect,
};
