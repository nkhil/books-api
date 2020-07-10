# Books API

Simple express API built using Node/Express, MongoDB cluster for persistence, OpenApi 3.0 for request and response validation.

## Setup

**Note**: You will need to have Docker installed on your machine to run this repo.

```bash
git clone git@github.com:nkhil/books-api.git
cd books-api
docker-compose up
```

## Testing

This service is tested using **jest**. The end-to-end (e2e) tests are tested using **supertest**. 

To run the test suite, run:

```bash
npm t
```

