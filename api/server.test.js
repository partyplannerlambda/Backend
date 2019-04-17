const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {

  describe('GET /', () => {
    it('Should return status code 200', async () => {
      // with asnyc requests, use 'return' to wait for promise to resolve
      return request(server)
        .get('/')
        .then(res => {
          expect(res.status).toBe(200);
        })
    });
  })

})