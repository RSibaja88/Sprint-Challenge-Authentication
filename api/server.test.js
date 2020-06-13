const request = require('supertest');
const server = require('./server');
// const Auth = require('../auth/auth-model');
// const db = require('../database/dbConfig');

describe('server tests', () => {
    it('TEST: Properly sets environment', () => {
      expect(process.env.DB_ENV).toBe('testing');
    });
  });

  describe('GET /api/auth', () => {
	it('404 JSON', () => {
		return request(server)
			.get('/api/auth/login')
			.then((response) => {
				expect(response.statusCode).toBe(404);
            });
    });
    it('should return Regina George quote', async () => {
        const res = await request(server).get('/');
        expect(res.body).toEqual('So you agree? You think youre pretty');
      });
  });

  describe('auth', () => {
    describe('POST /api/auth/register', () => {
      it('should return a 500 status', () => {
        return request(server)
          .post('/api/auth/register')
          .send({ username: 'username', password: null })
          .then((res) => {
            expect(res.status).toBe(500);
          });
      });
    })
});

  
  describe('POST /api/auth/login', () => {
    it('should return 500 status', () => {
      return request(server)
        .post('/api/auth/login')
        .send({ username: '', password: '' })
        .then((res) => {
          expect(res.status).toBe(500);
        });
    });
  });
