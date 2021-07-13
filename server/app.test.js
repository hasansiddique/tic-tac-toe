/* global describe, expect, it */
const request = require('supertest');
const { app } = require('./app');

describe('Root Express App', () => {
  it('should have a game sub-app', async () => {
    const response = await request(app).get('/game/new');
    expect(response.statusCode).toBe(200);
  });
});
