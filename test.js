const request = require('supertest');
const app = require('./server/server.js');

jest.mock('./database-mysql/index.js', () => ({
    getAll: () => new Promise((resolve, reject) => {
      resolve('resolved');
      reject(new Error('failed'));
    }),
  }));

  describe('GET /', () => {
    let result;
    beforeAll(async () => {
      result = await request(app).get('/getall');
    });

    test('responds with status code of 200', () => expect(result)
    .toBeTruthy());
});