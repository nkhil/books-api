const { name } = require('../../package.json');

module.exports = {
  name,
  port: process.env.PORT || 8080,
  mongo: {
    maxLimit: 100,
    connectionString: process.env.MONGO_CONNECTION_STRING,
  },
};
