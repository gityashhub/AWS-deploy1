const request = require('supertest');
const app = require('../server');

describe('GET /', () => {
  it('should return 200 OK and contain expected heading', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('This website is deployed via CI/CD to an EC2 instance using GitHub Actions and PM2');
  });
});
