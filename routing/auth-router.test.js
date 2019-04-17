const authRouter = require('../api/server');
const request = require('supertest');

describe('auth-router', () => {
	describe('POST /register endpoint', () => {
		it('returns the right response status', () => {
			const newUser = { username: 'test3', password: 'test' };
			return request(authRouter)
				.post('/auth/register')
				.send(newUser)
				.then((res) => {
					expect(res.status).toBe(201);
				})
				.catch((err) => {
					console.log(err);
				});
		});
	});
});
