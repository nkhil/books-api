# Books API

Simple express API built using Node/Express, MongoDB cluster for persistence, OpenApi 3.0 for request and response validation.

## Setup

**Note**: You will need to have Docker installed on your machine to run this repo.

```bash
git clone git@github.com:nkhil/books-api.git
cd books-api
docker-compose up
```

## Tests

This service is tested using **jest**. The end-to-end (e2e) tests are tested using **supertest**.

### To run the test suite, run:

```bash
npm test:docker 
# This will spin up a mongoDB and an app container to run the tests against
```

### To run the test locally (without Docker):

1. Modify the the value of `mongo.connectionString` (in `./src/config/index.js`) to `mongodb://localhost/booksDb`
2. Start a mongo server on your localhost. By default this will run on `localhost:27017/mongo` 
3. Run the tests using `npm test`
