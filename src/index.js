const express = require('express');
require('dotenv').config();
const path = require('path');
const cors = require('cors');
const { OpenApiValidator } = require('express-openapi-validator');
const config = require('./config');
const database = require('./lib/database');

const app = express();

const apiSpec = path.join(__dirname, `../definitions/${config.name}.yml`);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

(async function databaseInit() {
  console.log('1. Before connection');
  await database.connect();
  console.log('2. After connection');
})();

new OpenApiValidator({
  apiSpec,
  validateResponses: true,
  operationHandlers: path.join(__dirname, './controllers'),
})
  .install(app)
  .then(() => {
    app.use((err, _, res) => {
      res.status(err.status || 500).json({
        message: err.message,
        errors: err.errors,
      });
    });
  });

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
