const { name } = require('../../package.json');

module.exports = {
  name,
  port: process.env.PORT || 8080,
  mongo: {
    password: process.env.MONGO_PASSWORD,
    dbName: process.env.MONGO_DB_NAME,
    maxLimit: 100,
  },
};
